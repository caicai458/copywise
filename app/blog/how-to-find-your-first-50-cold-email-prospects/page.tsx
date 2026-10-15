import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How to Find Your First 50 Cold Email Prospects (Without Buying a List) | ColdCrow Blog",
  description:
    "The honest, unglamorous playbook for early-stage B2B SaaS growth: cold email, LinkedIn, targeting and subject lines that actually get replies.",
  keywords: [
    "find cold email prospects",
    "B2B prospect list",
    "cold email targeting",
    "lead list building",
    "cold outreach"
  ],
};
export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium text-indigo-600">
          <Link href="/blog" className="hover:underline">
            ← All posts
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          How to Find Your First 50 Cold Email Prospects (Without Buying a List)
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 15, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            <em>You don&apos;t need a $300 email list to start cold outreach. You need 50 companies that look like your best customers — and they&apos;re findable for free in an afternoon.</em>
          </p>
          <p>
            The #1 excuse we hear from founders who &quot;tried cold email&quot;: <em>&quot;I don&apos;t know who to email.&quot;</em> The #2 excuse: <em>&quot;I don&apos;t have a list.&quot;</em> Both are solvable in a single focused afternoon. Here&apos;s the exact process we use.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 1: Define the &quot;lookalike&quot; in one sentence
          </h2>
          <p>
            Before you search, you need a filter. Not a vague ICP (&quot;SaaS companies&quot;) — a sentence that lets you say yes/no in five seconds:
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            &quot;B2B SaaS companies with 10-200 employees, founder-led sales, that sell a tool to other businesses (not consumers), headquartered in the US or Europe.&quot;
          </blockquote>
          <p>
            Write down 5 companies you <em>already know</em> fit this. They&apos;re your seed list and your compass for finding the other 45.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 2: Mine your own backyard (free)
          </h2>
          <ul>
            <li>
              <strong>Your competitors&apos; customers</strong>: Go to your 5 competitors&apos; sites. Find their &quot;customers&quot; or &quot;case studies&quot; pages. Every logo there is a warm lead — they already pay for a tool like yours.
            </li>
            <li>
              <strong>Job boards</strong>: Search &quot;hiring [role] at [company]&quot; — a company posting for a Sales or Growth role is actively spending on growth tools.
            </li>
            <li>
              <strong>Recent funding/founding announcements</strong>: Companies that just raised or launched a new product have budget and a reason to buy.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 3: Use directories that are actually free
          </h2>
          <ul>
            <li>
              <strong>BuiltWith / SimilarWeb (free tiers)</strong>: Pick a competitor&apos;s domain, see what tools they use and who else uses them.
            </li>
            <li>
              <strong>Crunchbase (free tier)</strong>: Filter by industry, location, funding round, employee count. Export a shortlist.
            </li>
            <li>
              <strong>G2 / Capterra (free)</strong>: Browse the &quot;alternatives&quot; pages of your category. Every alternative listing is a company actively evaluating tools like yours — <em>right now</em>.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 4: Find the right person at each company
          </h2>
          <p>
            You don&apos;t email &quot;info@&quot;. You email a human. For each of your 50 companies:
          </p>
          <ol>
            <li>
              <strong>Who decides?</strong> For a $29-99/mo tool: the founder (most likely), or the head of sales/marketing if the company is bigger.
            </li>
            <li>
              <strong>Find their email</strong> with a free verifier or a quick search (`firstname@company.com` patterns, or tools like Hunter&apos;s free tier).
            </li>
            <li>
              <strong>Verify it bounces?</strong> Never send blind. A 2%+ bounce rate poisons your domain.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-gray-900">
            Step 5: Score your list, send the top 20 first
          </h2>
          <p>
            Rank the 50 by &quot;how obviously they&apos;d say yes&quot;:
          </p>
          <ul>
            <li>
              They already use a tool like yours (10 pts)
            </li>
            <li>
              They&apos;re actively hiring for growth (5 pts)
            </li>
            <li>
              They just launched/raised (5 pts)
            </li>
            <li>
              You can reference something specific (10 pts)
            </li>
          </ul>
          <p>
            Send the top 20 first. Not the whole list. Quality of targeting — not volume — is what determines reply rate.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The free-stack checklist
          </h2>
          <ul>
            <li>
              [ ] 5 seed companies you already know
            </li>
            <li>
              [ ] Competitors&apos; customer logos mined (free)
            </li>
            <li>
              [ ] 20-30 names from free directory tiers
            </li>
            <li>
              [ ] Decision-maker identified per company
            </li>
            <li>
              [ ] Emails verified, bounce risk <2%
            </li>
            <li>
              [ ] Score sorted, top 20 queued first
            </li>
          </ul>
          <p>
            <em>We build <Link href="/try" className="text-indigo-600 font-medium hover:underline">ColdCrow</Link>, an AI cold email writer that turns any prospect&apos;s profile into a personalized email with a deliverability score — free for the first three tries. Paste a URL or describe a company, get a sendable email in seconds.</em>
          </p>
          <p>
            ColdCrow helps you write the personalized, deliverability-scored
            cold email part. 
            <Link href="/try" className="text-indigo-600 font-medium hover:underline">
              Try it free →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
