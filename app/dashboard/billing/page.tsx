import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingCards } from "@/components/dashboard/pricing-cards";
import { createClient } from "@/lib/supabase/server";
import type { Subscription, SubscriptionPlan } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const PLAN_LABELS: Record<SubscriptionPlan, string> = {
  free: "Free",
  pro_monthly: "Pro Monthly",
  pro_yearly: "Pro Yearly",
};

const STATUS_LABELS: Record<string, string> = {
  active: "Active",
  past_due: "Past due",
  canceled: "Canceled",
  trialing: "Trialing",
};

export default async function BillingPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: subData } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user!.id)
    .single();

  const subscription = (subData as Subscription | null) ?? null;
  const plan: SubscriptionPlan = subscription?.plan ?? "free";
  const isPro = plan !== "free";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing details.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
          <CardDescription>Your current subscription status.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Plan:</span>
            <Badge variant={isPro ? "default" : "secondary"}>
              {PLAN_LABELS[plan]}
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Status:</span>
            <span className="text-sm text-muted-foreground">
              {subscription ? STATUS_LABELS[subscription.status] ?? subscription.status : "—"}
            </span>
          </div>
          {subscription?.current_period_end && (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Renews:</span>
              <span className="text-sm text-muted-foreground">
                {formatDate(subscription.current_period_end)}
              </span>
            </div>
          )}
          {isPro && (
            <div className="pt-2">
              <Button variant="outline">
                Manage Subscription
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                Need to change or cancel? Contact support and we&apos;ll help you
                out.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {!isPro ? (
        <>
          <div>
            <h2 className="text-lg font-semibold">Upgrade to Pro</h2>
            <p className="text-sm text-muted-foreground">
              Get unlimited generations and unlock all content types.
            </p>
          </div>
          <PricingCards plan={plan} />
        </>
      ) : (
        <PricingCards plan={plan} />
      )}
    </div>
  );
}
