import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cold Email Subject Lines: The Complete 2026 Cheat Sheet | ColdCrow Blog",
  description:
    "The honest, unglamorous playbook for early-stage B2B SaaS growth: cold email, LinkedIn, targeting and subject lines that actually get replies.",
  keywords: [
    "cold email subject lines",
    "email subject line examples",
    "cold email open rates",
    "email deliverability",
    "B2B email copywriting"
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
          Cold Email Subject Lines: The Complete 2026 Cheat Sheet
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 15, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            <em>Your subject line doesn&apos;t sell your product. It sells the decision to open. Here&apos;s what actually works — and what gets you spam-foldered.</em>
          </p>
          <p>
            Most founders write subject lines like they&apos;re writing an ad headline: clever, punchy, mysterious. Then they wonder why open rates sit at 20%. The truth is boring: <strong>the subject line&apos;s job is just to make the recipient think &quot;this is for me, and it&apos;s short.&quot;</strong> Everything else happens in the body.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            What the data keeps showing
          </h2>
          <p>
            Across the cold email benchmarks we&apos;ve tracked (and the patterns behind tools like ours):
          </p>
          <ul>
            <li>
              <strong>Personalized &gt; clever.</strong> Subject lines with the prospect&apos;s company name or a specific reference consistently outperform generic &quot;creativity.&quot;
            </li>
            <li>
              <strong>Short wins.</strong> 4-8 words outperforms longer lines. The recipient scans it in under a second while half-working.
            </li>
            <li>
              <strong>Relevant beats intriguing.</strong> &quot;Question about your [feature/product]&quot; beats &quot;A quick thought&quot; every time.
            </li>
            <li>
              <strong>No gimmicks.</strong> ALL CAPS, excessive punctuation, &quot;RE:&quot;, and &quot;URGENT&quot; get you spam-foldered before anyone reads a word.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Subject line templates that work
          </h2>
          <p>
            <strong>The reference line</strong> (works when you know something specific):
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            Question about your [X]
          </blockquote>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            Quick thought on [their recent launch/post]
          </blockquote>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            [Their company]&apos;s [specific feature]
          </blockquote>
          <p>
            <strong>The outcome line</strong> (works when your value is concrete):
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            Cutting reply times for [their use case]
          </blockquote>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            [Metric] improvement for [their workflow]
          </blockquote>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            A faster way to [their job-to-be-done]
          </blockquote>
          <p>
            <strong>The curiosity line</strong> (use sparingly — only when the body genuinely delivers):
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            Not a pitch, just a question
          </blockquote>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600">
            Wanted your take on this
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            What your body needs to justify the line
          </h2>
          <p>
            A subject line that gets an open gets a <em>bounce</em> if the body doesn&apos;t deliver. Three rules:
          </p>
          <ol>
            <li>
              <strong>Personalize in the first sentence.</strong> &quot;I saw [your team] is hiring a Growth Lead and launched [feature] last month — congrats on both.&quot; If you can&apos;t write this sentence, you don&apos;t know the prospect well enough to email them.
            </li>
            <li>
              <strong>One reason to reply.</strong> End with a single, easy question. Not three. Not a demo request. One question they can answer in 30 seconds.
            </li>
            <li>
              <strong>Short.</strong> 90-120 words. Nobody reads a 600-word cold email.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-gray-900">
            The deliverability side you can&apos;t skip
          </h2>
          <p>
            A great subject line means nothing if the email never lands:
          </p>
          <ul>
            <li>
              SPF, DKIM, DMARC configured before your first send
            </li>
            <li>
              Domain warmed up (10-20/day ramping over 2-3 weeks)
            </li>
            <li>
              Verified addresses — every bounce poisons your reputation
            </li>
            <li>
              Plain-text format, no image-heavy HTML
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            The 60-second subject line checklist
          </h2>
          <ul>
            <li>
              [ ] Under 8 words
            </li>
            <li>
              [ ] Contains something specific to them (name, company, feature)
            </li>
            <li>
              [ ] No ALL CAPS, no &quot;RE:&quot;, no exclamation marks
            </li>
            <li>
              [ ] Honest — the body delivers exactly what it promises
            </li>
            <li>
              [ ] Passes the spam filter test (not just looks, but <em>reads</em> like a person wrote it)
            </li>
          </ul>
          <p>
            <em>ColdCrow writes the whole email — subject line included — with personalization and a deliverability score. <Link href="/try" className="text-indigo-600 font-medium hover:underline">Try it free</Link>: describe a prospect, get a sendable cold email in seconds.</em>
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
