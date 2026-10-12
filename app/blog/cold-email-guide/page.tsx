import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "The Complete Cold Email Guide for B2B in 2026 | ColdCrow Blog",
  description:
    "The full cold email playbook: list building, personalization, deliverability, writing, follow-up sequences, and metrics. Everything a B2B founder needs to start outbound in 2026.",
  keywords: [
    "cold email guide",
    "cold email playbook",
    "B2B cold email",
    "outbound sales guide",
    "cold outreach",
  ],
  alternates: {
    canonical: "/blog/cold-email-guide",
  },
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
          The Complete Cold Email Guide for B2B in 2026
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 12, 2026 · 12 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Cold email is the most reliable outbound channel for B2B — when
            done right. Done wrong, it&apos;s spam that burns your domain and
            your reputation. This guide walks the entire process: list,
            deliverability, writing, follow-up, and metrics.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Part 1: Build a list worth emailing
          </h2>
          <p>
            Quality beats volume. A list of 200 precisely-targeted companies
            outperforms 2,000 scraped contacts. Your ICP should be narrow
            enough that you can name the pain you solve for each company.
          </p>
          <ul>
            <li>Define the trigger: who recently hired, launched, or changed?</li>
            <li>Find the person: the decision-maker for your category</li>
            <li>Find the address: pattern-guess + verify, or free tool tiers</li>
            <li>Verify everything: no MX record, no send</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Part 2: Set up deliverability first
          </h2>
          <p>
            Sending infrastructure decides whether your emails reach the inbox:
          </p>
          <ul>
            <li>SPF, DKIM, and DMARC records on your sending domain</li>
            <li>An account 2-4 weeks old, warmed up gradually</li>
            <li>Start at 10-20 emails a day, ramp over 2-3 weeks</li>
            <li>Keep bounce rate under 3%</li>
            <li>Plain text, one link max, to your own domain</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Part 3: Write emails that earn replies
          </h2>
          <p>
            The 4-sentence structure:
          </p>
          <ol>
            <li>A researched signal specific to them</li>
            <li>A relevance line connecting your product to that signal</li>
            <li>A short, honest value proposition</li>
            <li>A low-friction ask</li>
          </ol>
          <p>
            Under 120 words. One specific detail per email. A subject line of
            3-6 words that honestly previews the content. Read it aloud — if it
            doesn&apos;t sound like a person, rewrite.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Part 4: Personalization that scales
          </h2>
          <p>
            One researched signal per email is enough. Personalization is a
            workflow problem, not a talent problem: signal → structure → human
            judgment. AI drafting removes the blank-page cost, so every email
            can be individually drafted instead of templated.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Part 5: Follow-up sequences
          </h2>
          <p>
            Most replies come from touches 2-4. Draft the whole sequence up
            front while the context is fresh:
          </p>
          <ul>
            <li>Touch 2 (2 days): a new, relevant detail</li>
            <li>Touch 3 (4-5 days): a small piece of value</li>
            <li>Touch 4 (7 days): a graceful exit</li>
          </ul>
          <p>
            Never &quot;just checking in.&quot; Every touch adds something.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Part 6: Measure what matters
          </h2>
          <p>
            Track positive reply rate (primary), reply-to-call conversion
            (secondary), bounce rate (health). Ignore open rate as vanity —
            it&apos;s inflated by privacy features and says nothing about
            reading.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The 2026 edge: AI in the workflow
          </h2>
          <p>
            The teams winning at outbound in 2026 don&apos;t send more — they
            send better, faster. The research and judgment stay human; the
            drafting, structure, and deliverability checks are handled by AI.
            ColdCrow is built for exactly this: describe a prospect, get a
            personalized email with a deliverability score in seconds.
          </p>
          <p>
            Start with 50 well-researched emails a week. Learn from every
            reply. Scale what works.
          </p>
          <p>
            <Link
              href="/try"
              className="text-indigo-600 font-medium hover:underline"
            >
              Try ColdCrow free →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
