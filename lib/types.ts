export type SubscriptionPlan = "free" | "pro_monthly" | "pro_yearly";
export type SubscriptionStatus = "active" | "past_due" | "canceled" | "trialing";
export type ContentType = "cold_email" | "social_post" | "product_description" | "ad_copy" | "blog_intro";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  creem_customer_id: string | null;
  creem_subscription_id: string | null;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  current_period_end: string | null;
  created_at: string;
  updated_at: string;
}

export interface Generation {
  id: string;
  user_id: string;
  prompt: string;
  content_type: ContentType;
  generated_content: string;
  model: string;
  tokens_used: number;
  created_at: string;
}

export interface UsageInfo {
  used_today: number;
  daily_limit: number;
  remaining: number;
  is_unlimited: boolean;
  plan: SubscriptionPlan;
}

export const PLAN_LIMITS: Record<SubscriptionPlan, number> = {
  free: 5,
  pro_monthly: -1, // unlimited
  pro_yearly: -1,
};

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  cold_email: "Cold Email",
  social_post: "Social Media Post",
  product_description: "Product Description",
  ad_copy: "Ad Copy",
  blog_intro: "Blog Intro",
};
