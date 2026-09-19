import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createCheckout } from "@/lib/creem";

const CheckoutRequestSchema = z.object({
  price_id: z.string().min(1, "price_id is required"),
});

/**
 * POST /api/creem/checkout
 * Creates a Creem checkout session for the authenticated user.
 * Returns { url } that the frontend should redirect to.
 */
export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
    }

    // Parse and validate request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const parsed = CheckoutRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request: price_id must be a non-empty string" },
        { status: 400 }
      );
    }

    const { price_id } = parsed.data;

    // Get user email from profiles table
    const { data: profile } = await supabase
      .from("profiles")
      .select("email")
      .eq("id", user.id)
      .single();

    const customerEmail = profile?.email || user.email;

    // Guard: if user already has an active paid subscription, don't create a new checkout
    const { data: existingSub } = await supabase
      .from("subscriptions")
      .select("status, creem_subscription_id, plan")
      .eq("user_id", user.id)
      .single();

    if (
      existingSub &&
      existingSub.status === "active" &&
      existingSub.creem_subscription_id
    ) {
      return NextResponse.json(
        { error: "You already have an active subscription. Manage it in billing settings." },
        { status: 409 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const checkout = await createCheckout({
      price_id,
      customer_email: customerEmail,
      success_url: `${appUrl}/dashboard/billing?success=true`,
      cancel_url: `${appUrl}/dashboard/billing?canceled=true`,
      metadata: { user_id: user.id },
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error("[Creem Checkout] Error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to create checkout session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
