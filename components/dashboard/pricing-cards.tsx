"use client";

import { useEffect, useState } from "react";
import { Loader2, Sparkles, Crown } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SubscriptionPlan } from "@/lib/types";

interface PricesResponse {
  monthly: string;
  yearly: string;
}

export function PricingCards({ plan }: { plan: SubscriptionPlan }) {
  const [prices, setPrices] = useState<PricesResponse>({
    monthly: "",
    yearly: "",
  });
  const [loadingPlan, setLoadingPlan] = useState<"monthly" | "yearly" | null>(
    null
  );

  useEffect(() => {
    fetch("/api/creem/prices")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setPrices(data as PricesResponse);
      })
      .catch(() => {});
  }, []);

  async function handleUpgrade(period: "monthly" | "yearly") {
    const priceId = period === "monthly" ? prices.monthly : prices.yearly;

    if (!priceId) {
      toast.error(
        "Checkout is not configured yet. Please contact support."
      );
      return;
    }

    setLoadingPlan(period);
    try {
      const res = await fetch("/api/creem/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price_id: priceId }),
      });
      const data = await res.json();

      if (!res.ok || !data?.url) {
        toast.error(data?.error || "Failed to start checkout.");
        return;
      }

      window.location.href = data.url;
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  }

  const isPro = plan !== "free";

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="relative">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles />
            Pro Monthly
          </CardTitle>
          <CardDescription>Billed monthly, cancel anytime.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• 100 AI copy generations per day</li>
            <li>• All 5 content types</li>
            <li>• Priority access</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            disabled={isPro || loadingPlan !== null}
            onClick={() => handleUpgrade("monthly")}
          >
            {loadingPlan === "monthly" ? (
              <>
                <Loader2 className="animate-spin" />
                Redirecting...
              </>
            ) : isPro ? (
              "Current plan"
            ) : (
              "Upgrade"
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative border-primary">
        <div className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
          Save 20%
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown />
            Pro Yearly
          </CardTitle>
          <CardDescription>Billed annually, best value.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-4xl font-bold">$15</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Everything in Monthly</li>
            <li>• Save $48 / year vs monthly</li>
            <li>• Priority support</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            disabled={isPro || loadingPlan !== null}
            onClick={() => handleUpgrade("yearly")}
          >
            {loadingPlan === "yearly" ? (
              <>
                <Loader2 className="animate-spin" />
                Redirecting...
              </>
            ) : isPro ? (
              "Current plan"
            ) : (
              "Upgrade"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
