import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  payHref?: string;
  highlighted?: boolean;
  badge?: string;
}

function PricingCard({
  name,
  price,
  priceNote,
  description,
  features,
  cta,
  ctaHref,
  payHref,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col",
        highlighted && "border-2 border-primary shadow-lg"
      )}
    >
      {badge && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          {badge}
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {priceNote && (
            <span className="text-sm text-muted-foreground">{priceNote}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <ul className="flex-1 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="mt-8 w-full"
          variant={highlighted ? "default" : "outline"}
          size="lg"
        >
          <Link href={ctaHref}>{cta}</Link>
        </Button>
        {payHref && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-3 w-full"
          >
            <Link href={payHref} target="_blank" rel="noopener noreferrer">
              Pay Now with Card
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export const FREE_PLAN = {
  name: "Free",
  price: "$0",
  priceNote: "forever",
  description: "Get started with AI copywriting at no cost.",
  features: [
    "5 AI generations per day",
    "Basic copy formats (cold email, social post)",
    "Copy to clipboard",
    "Community support",
  ],
  cta: "Start for Free",
  ctaHref: "/signup?plan=pro",
};

export const PRO_PLAN = {
  name: "Pro",
  price: "$29",
  priceNote: "per month, billed monthly",
  yearlyPriceNote: "$29/month billed annually",
  description: "For teams and creators who need high-volume copy.",
  features: [
    "100 AI generations per day",
    "All copy formats (emails, social, ads, product descriptions, blog intros)",
    "Copy history and favorites",
    "Priority support",
    "GDPR-compliant data handling",
  ],
  cta: "Upgrade to Pro",
  ctaHref: "/signup?plan=pro",
  payHref: "https://www.creem.io/payment/prod_1H3LCIL8pCxwbRvYa1oFkJ",
};

export const PRO_YEARLY_PLAN = {
  name: "Pro Yearly",
  price: "$23.20",
  priceNote: "per month, billed annually",
  yearlyTotal: "$278.40/year",
  savings: "Save $69.60 vs monthly",
  description: "Same Pro features, billed annually. Best value.",
  features: [
    "100 AI generations per day",
    "All copy formats (emails, social, ads, product descriptions, blog intros)",
    "Copy history and favorites",
    "Priority support",
    "GDPR-compliant data handling",
    "Save $69.60 per year vs monthly",
  ],
  cta: "Upgrade to Pro - Yearly",
  ctaHref: "/signup?plan=pro_yearly",
  payHref: "https://www.creem.io/payment/prod_52Xu3CcZgVqCSOPrxPqcAW",
};

export function PricingCards() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
      <PricingCard {...FREE_PLAN} />
      <PricingCard {...PRO_PLAN} highlighted badge="Most Popular" />
      <PricingCard {...PRO_YEARLY_PLAN} highlighted badge="Save 20%" />
    </div>
  );
}
