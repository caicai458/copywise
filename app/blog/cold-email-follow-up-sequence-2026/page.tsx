import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cold Email Follow-Up: The Sequence That Doubles Your Replies | ColdCrow Blog",
  description:
    "Most cold outreach dies in the first email. Here is the 4-email follow-up sequence that gets 3-4x more replies, with the rules that keep every follow-up worth reading.",
  keywords: [
    "cold email follow up",
    "email sequence",
    "follow up sequence",
    "cold outreach strategy",
    "sales email follow up",
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
          Cold Email Follow-Up: The Sequence That Doubles Your Replies
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 3, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Most cold outreach dies in the first email. The founders who win at
            outbound know that follow-up is where the replies actually come from
            — if you do it right.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Why follow-up works
          </h2>
          <p>
            Research consistently shows that 80% of sales happen after the fifth
            touch. But most people send one email, hear nothing, and give up.
            The problem isn&apos;t your first email — it&apos;s that you never
            send a second one that&apos;s actually worth reading.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The 4-email sequence that works
          </h2>
          <h3 className="text-xl font-bold text-gray-900">
            Email 1 (Day 0): The opener
          </h3>
          <p>
            Your best single email. Personalized first line, one observation,
            one question. Under 120 words. No pitch beyond a soft CTA.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Email 2 (Day 3): The value add
          </h3>
          <p>
            Don&apos;t just say &quot;bumping this.&quot; Add something useful:
            a relevant resource, a customer result, or an observation about
            their business since your last email. Give them a reason to reply to
            the thread instead of ignoring it.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Email 3 (Day 7): The objection handler
          </h3>
          <p>
            Anticipate the reason they didn&apos;t reply: &quot;Not sure if this
            is relevant, or if timing is bad — totally get it either way. If it
            helps, here&apos;s a one-line proof point.&quot; Short, honest, no
            pressure.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Email 4 (Day 12): The break-up
          </h3>
          <p>
            &quot;Closing the loop — if this isn&apos;t a priority right now, no
            problem. I&apos;ll leave you alone. If it ever becomes relevant, my
            door is open.&quot; This email alone gets more replies than most
            first emails, because it removes the pressure.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The rules that keep follow-ups effective
          </h2>
          <ul>
            <li>
              <strong>Never send the same email twice.</strong> Each follow-up
              must add new information or a new angle. Identical bump emails
              train recipients to ignore you.
            </li>
            <li>
              <strong>Keep every email under 120 words.</strong> Short threads
              get replies. Long threads get deleted.
            </li>
            <li>
              <strong>Don&apos;t apologize for following up.</strong>
              &quot;I know you&apos;re busy&quot; reads as insecurity. Just add
              value and move on.
            </li>
            <li>
              <strong>Track the metrics that matter.</strong> Reply rate per
              email in the sequence tells you where to iterate. If email 2 gets
              more replies than email 1, your opener needs work.
            </li>
            <li>
              <strong>Give a clean exit.</strong> Always let them say
              &quot;not now&quot; easily. It costs you one reply that keeps your
              domain reputation and your list clean.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">When to stop</h2>
          <p>
            Stop at 4 emails. The 5th and 6th emails have near-zero marginal
            value and start damaging your sender reputation. Use the time to
            find better prospects instead.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The one habit that changes everything
          </h2>
          <p>
            Write all four emails on the same day, then schedule them. Most
            sequences fail because the founder writes email 1, gets busy, and
            never writes the follow-ups. Build the sequence once, reuse the
            pattern forever.
          </p>
          <p>
            ColdCrow writes personalized cold emails and follow-up sequences
            with a deliverability score — describe your prospect and get
            reply-worthy copy in seconds.
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
