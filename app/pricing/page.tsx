import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { FREE_PLAN, PRO_PLAN } from "@/components/marketing/pricing-cards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Copywise. Start free with 5 generations daily, or upgrade to Pro for unlimited AI copywriting.",
};

interface ComparisonRow {
  feature: string;
  free: string | boolean;
  pro: string | boolean;
}

const COMPARISON: ComparisonRow[] = [
  { feature: "Daily AI generations", free: "5 per day", pro: "Unlimited" },
  { feature: "Cold email generator", free: true, pro: true },
  { feature: "Social media posts", free: true, pro: true },
  { feature: "Ad copy", free: false, pro: true },
  { feature: "Product descriptions", free: false, pro: true },
  { feature: "Blog introductions", free: false, pro: true },
  { feature: "Copy to clipboard", free: true, pro: true },
  { feature: "Export to PDF / DOCX", free: false, pro: true },
  { feature: "Generation history", free: "7 days", pro: "Unlimited" },
  { feature: "Support", free: "Community", pro: "Priority" },
  { feature: "GDPR-compliant data handling", free: true, pro: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-4 w-4 text-primary" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-4 w-4 text-muted-foreground" />
      </span>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Pricing that scales with you
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Start free and keep all your generated copy. Upgrade only when
                you need unlimited generations.
              </p>
            </div>

            {/* Plan cards */}
            <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Free */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{FREE_PLAN.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {FREE_PLAN.description}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight">
                      {FREE_PLAN.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {FREE_PLAN.priceNote}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {FREE_PLAN.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-8 w-full">
                    <Link href={FREE_PLAN.ctaHref}>{FREE_PLAN.cta}</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pro */}
              <Card className="relative border-2 border-primary shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{PRO_PLAN.name}</CardTitle>
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {PRO_PLAN.description}
                  </CardDescription>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight">
                        $15
                      </span>
                      <span className="text-sm text-muted-foreground">
                        per month, billed annually
                      </span>
                    </div>
                    <p className="text-sm text-primary">
                      {PRO_PLAN.yearlyPriceNote}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Or $19/month billed monthly.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {PRO_PLAN.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-8 w-full">
                    <Link href={PRO_PLAN.ctaHref}>{PRO_PLAN.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Comparison table */}
            <div className="mx-auto mt-20 max-w-4xl">
              <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
                Compare Free vs Pro
              </h2>
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-sm font-semibold">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Free
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                        Pro
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON.map((row) => (
                      <tr key={row.feature}>
                        <td className="px-6 py-4 text-sm font-medium">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Cell value={row.free} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Cell value={row.pro} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ-ish bottom note */}
            <div className="mx-auto mt-16 max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight">
                Still not sure?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Start on the Free plan — 5 generations a day, no credit card
                required. Upgrade inside the dashboard whenever you're ready.
              </p>
              <Button size="lg" asChild className="mt-6">
                <Link href="/signup">
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
