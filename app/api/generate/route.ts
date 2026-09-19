import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";
import { generateCopy } from "@/lib/ai";
import {
  PLAN_LIMITS,
  type ContentType,
  type Subscription,
} from "@/lib/types";
import { getStartOfDay, getEndOfDay } from "@/lib/utils";

const GenerateSchema = z.object({
  prompt: z.string().min(1, "Prompt is required").max(5000),
  content_type: z.enum([
    "cold_email",
    "social_post",
    "product_description",
    "ad_copy",
    "blog_intro",
  ]),
});

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = GenerateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { prompt, content_type: contentType } = parsed.data;

  // Get user's subscription plan
  const { data: subData } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const subscription = (subData as Subscription | null) ?? null;
  const plan = subscription?.plan ?? "free";
  const dailyLimit = PLAN_LIMITS[plan];

  // Enforce daily limit for non-unlimited plans
  if (dailyLimit > 0) {
    const start = getStartOfDay().toISOString();
    const end = getEndOfDay().toISOString();

    const { count } = await supabase
      .from("generations")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", start)
      .lte("created_at", end);

    const usedToday = count ?? 0;

    if (usedToday >= dailyLimit) {
      return NextResponse.json(
        { error: "Daily limit reached. Upgrade to Pro for unlimited generations." },
        { status: 429 }
      );
    }
  }

  // Call AI
  let result;
  try {
    result = await generateCopy(prompt, contentType as ContentType);
  } catch (err) {
    console.error("AI generation failed:", err);
    return NextResponse.json(
      { error: "Failed to generate copy. Please try again." },
      { status: 500 }
    );
  }

  // Persist generation
  const { error: insertError } = await supabase.from("generations").insert({
    user_id: user.id,
    prompt,
    content_type: contentType,
    generated_content: result.content,
    model: result.model,
    tokens_used: result.tokens_used,
  });

  if (insertError) {
    console.error("Failed to persist generation:", insertError);
  }

  return NextResponse.json({
    content: result.content,
    tokens_used: result.tokens_used,
    model: result.model,
  });
}
