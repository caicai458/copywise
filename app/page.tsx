import Link from "next/link";
import {
  Mail,
  Layers,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Type,
  Wand2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { FaqAccordion, type FaqItem } from "@/components/marketing/faq-accordion";
import { ShareButtons } from "@/components/marketing/share-buttons";

const FEATURES = [
  {
    icon: Mail,
    title: "AI Cold Email Generator",
    description:
      "Write personalized, high-deliverability cold emails in seconds. Just describe your prospect and product.",
  },
  {
    icon: Layers,
    title: "Multi-Format Copy",
    description:
      "Generate cold emails, social posts, ad copy, product descriptions, and blog intros from one prompt.",
  },
  {
    icon: Zap,
    title: "5 Free Generations Daily",
    description:
      "Start free and generate up to 5 pieces of copy every single day. No credit card required.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR-Compliant",
    description:
      "Your prompts and generated copy are stored securely in the US. You own your data and can delete it anytime.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Type,
    title: "Describe your product",
    description:
      "Tell ColdCrow what you sell, who it's for, and what makes it unique.",
  },
  {
    step: "02",
    icon: Wand2,
    title: "Choose a format",
    description:
      "Pick from cold emails, social posts, ads, product descriptions, or blog intros.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Get AI copy",
    description:
      "Review, tweak, and copy the result to your CRM, editor, or ad platform.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "How does the free generation limit work?",
    answer:
      "Free accounts receive 5 AI generations per day. The limit resets every 24 hours based on your account's activity. Unused generations do not roll over to the next day. Upgrading to Pro removes the daily cap entirely.",
  },
  {
    question: "What types of copy can ColdCrow generate?",
    answer:
      "ColdCrow supports cold emails, social media posts, ad copy, product descriptions, and blog introductions. More formats are added regularly. Pro users unlock all available formats.",
  },
  {
    question: "Is my data safe and GDPR-compliant?",
    answer:
      "Yes. We process and store your prompts and generated content securely using Supabase (hosted in the US West region). We never sell your data. Under GDPR you can access, export, or delete your data at any time from your account settings.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime from your dashboard billing settings. Cancellation takes effect at the end of your current billing period, and you will retain Pro access until then. You can downgrade back to the Free plan with no penalties.",
  },
  {
    question: "Should I review AI-generated content before publishing?",
    answer:
      "Yes. AI copy is a starting point, not a final draft. Always review factual claims, tone, and brand voice before sending emails, running ads, or publishing publicly. ColdCrow is not liable for content you choose to publish.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Pro subscriptions are billed through our payment partner, Creem. We accept all major credit and debit cards, as well as popular digital wallets. Payments are processed securely — we never store your full card details on our servers.",
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT is a general-purpose model — you write the prompt, judge the output, and still need to know what makes an email deliverable. ColdCrow is purpose-built for cold email: scenario templates, a deliverability score on every draft, spam-trigger detection, and follow-up sequences. Describe a prospect and get a send-ready email in about 30 seconds — no prompt engineering required.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-6">
                <Sparkles className="mr-1 h-3 w-3" />
                AI Copywriting for Modern Businesses
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Cold Emails That <span className="text-primary">Get Replies</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Turn a one-line product description into polished cold emails,
                social posts, and ad copy in seconds. Built for sales teams and
                content creators who need high-performing copy without the
                writer's block.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/try">
                    Try Free No Signup
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#pricing">View Pricing</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                3 free trial generations · No credit card required
              </p>
              <div className="mt-8 flex justify-center">
                <ShareButtons size="sm" />
              </div>
            </div>

            {/* 30s live demo (CSS-animated, no JS) */}
        <div className="mx-auto mt-16 max-w-2xl">
          <style>{`
            .cc-demo-step1 { animation: ccD1 4s ease-in-out infinite; }
            @keyframes ccD1 { 0%, 20% { opacity: 1; } 26%, 100% { opacity: 0; } }
            .cc-demo-step2 { animation: ccD2 4s ease-in-out infinite; }
            @keyframes ccD2 { 0%, 26% { opacity: 0; } 32%, 100% { opacity: 1; } }
            .cc-demo-bar { height: 4px; border-radius: 9999px; background: #e2e8f0; overflow: hidden; }
            .cc-demo-bar-inner { height: 100%; width: 0; border-radius: 9999px; background: #6366f1; animation: ccBar 4s ease-in-out infinite; }
            @keyframes ccBar { 0% { width: 0; } 55% { width: 100%; } 100% { width: 100%; } }
            .cc-demo-score { animation: ccScore 4s ease-in-out infinite; }
            @keyframes ccScore { 0%, 64% { opacity: 0; transform: translateY(4px); } 72%, 100% { opacity: 1; transform: translateY(0); } }
            .cc-demo-cursor { display: inline-block; width: 8px; height: 1.1em; margin-left: 2px; background: #6366f1; vertical-align: text-bottom; animation: ccBlink 1s step-end infinite; }
            @keyframes ccBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          `}</style>
          <Card className="shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="secondary">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Live demo · 30 seconds
                </Badge>
                <span className="text-xs text-muted-foreground">Auto-looping</span>
              </div>

              {/* Step 1: describe */}
              <div className="cc-demo-step1">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  1 · Describe your product
                </p>
                <div className="cc-demo-input mt-2 rounded-md border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                  Cold email tool for B2B founders who hate writing outreach
                  <span className="cc-demo-cursor" />
                </div>
              </div>

              {/* Step 2 + 3: generate & result */}
              <div className="cc-demo-step2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  2 · Generating with AI
                </p>
                <div className="cc-demo-bar mt-2">
                  <div className="cc-demo-bar-inner" />
                </div>
                <div className="mt-4 rounded-md border border-border bg-muted/40 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Subject: Quick idea for{" "}
                    <span className="font-medium text-foreground">Acme</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    Hi Sarah,
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Noticed your team just shipped v2 of your analytics product.
                    Most sales teams I work with lose 40% of their pipeline to
                    follow-ups that never get written. ColdCrow drafts those
                    emails in seconds — no writer&apos;s block, no generic
                    templates.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Worth a 5-minute look?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    — The ColdCrow team
                  </p>
                  <div className="cc-demo-score mt-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Deliverability 92/100
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Copy to clipboard
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                      Follow-up sequence ready
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What you get with ColdCrow
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-muted-foreground/70">
              <span>30-second emails</span>
              <span>Deliverability score</span>
              <span>Free to try</span>
              <span>No generic templates</span>
              <span>Built for B2B</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to write cold emails that get replies
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A focused toolkit that removes the blank page — so you can spend
                your time selling, not writing.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature) => (
                <Card key={feature.title} className="bg-card">
                  <CardContent className="p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three steps from blank page to ready-to-send copy.
              </p>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="relative text-center">
                  <span className="text-5xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <span className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start free. Upgrade when you're ready. Cancel anytime.
              </p>
            </div>
            <div className="mt-16">
              <PricingCards />
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Want to compare every feature in detail?{" "}
              <Link href="/pricing" className="text-primary hover:underline">
                See the full comparison
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-border bg-muted/30 py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about ColdCrow.
              </p>
            </div>
            <div className="mt-12">
              <FaqAccordion items={FAQS} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="px-6 py-16 text-center sm:px-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Start Writing Cold Emails That Get Replies
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                  Join thousands of sales reps and creators who use ColdCrow to
                  turn product ideas into copy that converts.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/try">
                      Try Free No Signup
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    asChild
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
                <div className="mt-8 flex justify-center">
                  <ShareButtons
                    size="sm"
                    text="Just found ColdCrow - AI copywriting tool that writes cold emails, social posts, and ad copy in seconds. Free to try!"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
