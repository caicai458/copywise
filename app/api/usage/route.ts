import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import {
  PLAN_LIMITS,
  type Subscription,
  type UsageInfo,
} from "@/lib/types";
import { getStartOfDay, getEndOfDay } from "@/lib/utils";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: subData } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const subscription = (subData as Subscription | null) ?? null;
  const plan = subscription?.plan ?? "free";
  const baseLimit = PLAN_LIMITS[plan];

  // 查询用户的推荐奖励（每个推荐 +5 次/天）
  const { count: referralCount } = await supabase
    .from("referrals")
    .select("*", { count: "exact", head: true })
    .eq("referrer_id", user.id);

  const bonusLimit = (referralCount ?? 0) * 5;
  const dailyLimit = baseLimit + bonusLimit;

  const start = getStartOfDay().toISOString();
  const end = getEndOfDay().toISOString();

  const { count } = await supabase
    .from("generations")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .gte("created_at", start)
    .lte("created_at", end);

  const usedToday = count ?? 0;
  const remaining = Math.max(0, dailyLimit - usedToday);

  const usage: UsageInfo = {
    used_today: usedToday,
    daily_limit: dailyLimit,
    remaining,
    is_unlimited: false,
    plan,
  };

  return NextResponse.json(usage);
}
