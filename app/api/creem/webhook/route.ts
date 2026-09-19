import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyWebhook, type CreemWebhookEvent } from "@/lib/creem";
import type { SubscriptionPlan, SubscriptionStatus } from "@/lib/types";

/**
 * POST /api/creem/webhook
 * Receives Creem webhook events and syncs subscription state to the database.
 *
 * IMPORTANT: We must read the raw request body (request.text()) before parsing
 * JSON, because the HMAC signature verification requires the exact raw payload.
 */

// Price ID -> local plan mapping
function mapPriceToPlan(priceId?: string | null): SubscriptionPlan | null {
  if (!priceId) return null;
  if (priceId === process.env.CREEM_PRICE_PRO_MONTHLY) return "pro_monthly";
  if (priceId === process.env.CREEM_PRICE_PRO_YEARLY) return "pro_yearly";
  return null;
}

// Safely read a nested field from an unknown object
function getField(obj: unknown, ...keys: string[]): unknown {
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

/**
 * Resolve the local user_id from a webhook event.
 * Priority: metadata.user_id -> customer_email lookup -> creem_customer_id lookup
 */
async function resolveUserId(
  admin: ReturnType<typeof createAdminClient>,
  data: CreemWebhookEvent["data"]
): Promise<string | null> {
  // 1. metadata.user_id (set at checkout creation)
  const metadataUserId = getField(data, "metadata", "user_id");
  if (typeof metadataUserId === "string" && metadataUserId) {
    return metadataUserId;
  }

  // 2. Look up by customer email
  const customerEmail =
    (getField(data, "customer_email") as string | undefined) ||
    (getField(data, "customer", "email") as string | undefined);

  if (customerEmail) {
    const { data: profile } = await admin
      .from("profiles")
      .select("id")
      .eq("email", customerEmail)
      .single();
    if (profile?.id) return profile.id as string;
  }

  // 3. Look up by creem_customer_id
  const creemCustomerId =
    (data.customer_id as string | undefined) ||
    (getField(data, "customer", "id") as string | undefined);

  if (creemCustomerId) {
    const { data: sub } = await admin
      .from("subscriptions")
      .select("user_id")
      .eq("creem_customer_id", creemCustomerId)
      .single();
    if (sub?.user_id) return sub.user_id as string;
  }

  return null;
}

export async function POST(request: Request) {
  // 1. Read raw body FIRST — needed for HMAC signature verification
  const rawBody = await request.text();

  // 2. Extract signature header (Creem uses X-Creem-Signature; try variants for compatibility)
  const signature =
    request.headers.get("x-creem-signature") ||
    request.headers.get("X-Creem-Signature") ||
    request.headers.get("x-creem-signature-sha256") ||
    request.headers.get("X-Creem-Signature-SHA256") ||
    "";

  if (!signature) {
    console.warn("[Creem Webhook] Missing signature header");
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  // 3. Verify signature
  const isValid = await verifyWebhook(rawBody, signature);
  if (!isValid) {
    console.warn("[Creem Webhook] Invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // 4. Parse JSON from the already-read raw body
  let event: CreemWebhookEvent;
  try {
    event = JSON.parse(rawBody) as CreemWebhookEvent;
  } catch {
    console.warn("[Creem Webhook] Failed to parse JSON");
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventType = event.type || "";
  const data = event.data || {};

  console.log(`[Creem Webhook] Received event: ${eventType}`);

  const admin = createAdminClient();

  // Resolve local user
  const userId = await resolveUserId(admin, data);
  if (!userId) {
    // Cannot associate event with a local user — acknowledge but log
    console.warn(`[Creem Webhook] Could not resolve user for event: ${eventType}`);
    return NextResponse.json({ received: true, note: "user not resolved" });
  }

  // Extract common fields with fallbacks for Creem API variations
  const subscriptionId =
    (data.id as string | undefined) ||
    (getField(data, "subscription_id") as string | undefined);
  const customerId =
    (data.customer_id as string | undefined) ||
    (getField(data, "customer", "id") as string | undefined);
  const priceId =
    (getField(data, "price_id") as string | undefined) ||
    (getField(data, "price", "id") as string | undefined);
  const periodEnd =
    (data.current_period_end as string | undefined) ||
    (getField(data, "current_period_end_at") as string | undefined);
  const creemStatus = data.status as string | undefined;

  // Map Creem price ID to local plan
  const plan = mapPriceToPlan(priceId);

  // 5. Handle events
  try {
    if (
      eventType.includes("subscription.created") ||
      eventType.includes("subscription.activated")
    ) {
      // New or activated subscription
      const update: Record<string, unknown> = {
        status: "active" as SubscriptionStatus,
      };
      if (subscriptionId) update.creem_subscription_id = subscriptionId;
      if (customerId) update.creem_customer_id = customerId;
      if (plan) update.plan = plan;
      if (periodEnd) update.current_period_end = periodEnd;

      await admin
        .from("subscriptions")
        .update(update)
        .eq("user_id", userId);
    } else if (eventType.includes("subscription.updated")) {
      // Subscription state changed (e.g. plan upgrade/downgrade, renewal)
      const update: Record<string, unknown> = {};
      if (subscriptionId) update.creem_subscription_id = subscriptionId;
      if (customerId) update.creem_customer_id = customerId;
      if (plan) update.plan = plan;
      if (periodEnd) update.current_period_end = periodEnd;

      // Map Creem status strings
      if (creemStatus) {
        if (creemStatus === "active" || creemStatus === "trialing") {
          update.status = creemStatus;
        } else if (creemStatus === "canceled" || creemStatus === "cancelled") {
          update.status = "canceled";
        } else if (creemStatus === "past_due" || creemStatus === "unpaid") {
          update.status = "past_due";
        }
      }

      if (Object.keys(update).length > 0) {
        await admin
          .from("subscriptions")
          .update(update)
          .eq("user_id", userId);
      }
    } else if (
      eventType.includes("subscription.canceled") ||
      eventType.includes("subscription.deactivated")
    ) {
      await admin
        .from("subscriptions")
        .update({ status: "canceled" as SubscriptionStatus })
        .eq("user_id", userId);
    } else if (
      eventType.includes("payment.failed") ||
      eventType.includes("invoice.payment_failed") ||
      eventType.includes("payment_failed")
    ) {
      await admin
        .from("subscriptions")
        .update({ status: "past_due" as SubscriptionStatus })
        .eq("user_id", userId);
    } else if (eventType.includes("customer.created")) {
      // Save creem_customer_id for future event resolution
      if (customerId) {
        await admin
          .from("subscriptions")
          .update({ creem_customer_id: customerId })
          .eq("user_id", userId);
      }
    } else {
      // Unknown event type — acknowledge without error
      console.log(`[Creem Webhook] Unhandled event type: ${eventType} (ignored)`);
    }
  } catch (dbError) {
    console.error("[Creem Webhook] Database update error:", dbError);
    return NextResponse.json(
      { error: "Failed to update subscription" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
