import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How to Write a Cold Email in 10 Minutes (2026 Walkthrough) | ColdCrow Blog",
  description:
    "A step-by-step, timed walkthrough for writing a personalized cold email in 10 minutes flat: research, signal, draft, deliverability check, send. No templates, no blank-page paralysis.",
  keywords: [
    "write cold email",
    "cold email template",
    "cold email example",
    "how to write cold email",
    "sales email writing",
  ],
  alternates: {
    canonical: "/blog/write-cold-email-10-minutes",
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
          How to Write a Cold Email in 10 Minutes (2026 Walkthrough)
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 12, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            The blank page is where cold email dies. Most people spend 30
            minutes agonizing over a draft, then send something worse than a
            template. Here&apos;s a timed 10-minute process that produces a
            better email — because the constraint forces you to make decisions
            instead of polishing.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Minutes 1-2: Find one signal
          </h2>
          <p>
            Open the prospect&apos;s site. Find one concrete, recent thing:
            a product change, a hire, a launch, a page that caught your eye.
            If nothing surfaces in two minutes, the prospect is weak — move on.
            Write the signal down in one sentence.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Minutes 3-5: Draft the skeleton
          </h2>
          <p>
            Four sentences, in this order:
          </p>
          <ol>
            <li>
              <strong>The signal:</strong> &quot;Noticed you just shipped
              v2.&quot;
            </li>
            <li>
              <strong>The relevance:</strong> &quot;Most teams in your space
              lose replies to follow-ups that never get written.&quot;
            </li>
            <li>
              <strong>The offer:</strong> &quot;ColdCrow drafts those emails in
              seconds with a deliverability score.&quot;
            </li>
            <li>
              <strong>The ask:</strong> &quot;Worth 30 seconds?&quot; + link
            </li>
          </ol>
          <p>
            No greetings beyond a first name, no &quot;I hope this finds you
            well,&quot; no paragraph of company background. If a sentence
            doesn&apos;t earn its place, cut it.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Minute 6: Write the subject line
          </h2>
          <p>
            Three to six words, specific, honest. Based on the signal:
            &quot;Your new analytics dashboard&quot; beats &quot;Quick
            question&quot; — but an honest &quot;Quick intro — cold email
            tool&quot; beats a vague &quot;Partnership opportunity.&quot;
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Minute 7: Deliverability check
          </h2>
          <p>
            Run the email through the checklist: under 120 words? One link to
            your own domain? No spam-trigger words (free, guaranteed, act now)?
            No excessive punctuation? If you&apos;re using a tool with a
            deliverability score, this takes ten seconds.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Minutes 8-9: Read it as the recipient
          </h2>
          <p>
            Would you reply to this? If the ask feels demanding, soften it. If
            the signal feels generic, sharpen it. If it reads like a template,
            rewrite sentence one — that&apos;s where personalization lives.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Minute 10: Send and schedule follow-ups
          </h2>
          <p>
            Send it. Then spend two minutes drafting touches 2 and 3 while the
            signal is fresh: a new detail, a sharper question, a graceful exit.
            Most replies come from follow-ups — write them now, not in a panic
            three days later.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Why AI makes this a 5-minute process
          </h2>
          <p>
            The only genuinely hard parts are finding the signal and making
            judgment calls — the drafting, structure, and deliverability check
            are mechanical. ColdCrow handles the mechanics: describe the
            prospect and the signal, get a personalized draft scored for
            deliverability in seconds. Your 10 minutes becomes 5, and the email
            is better.
          </p>
          <p>
            <Link
              href="/try"
              className="text-indigo-600 font-medium hover:underline"
            >
              Try it free →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
