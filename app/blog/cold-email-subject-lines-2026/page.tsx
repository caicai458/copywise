import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cold Email Subject Lines That Get Opened in 2026 | ColdCrow Blog",
  description:
    "Your subject line decides whether your cold email gets opened or deleted. Here are the subject line patterns that still work in 2026, with real examples and the data behind them.",
  keywords: [
    "cold email subject lines",
    "cold email open rates",
    "outreach subject lines",
    "sales email subject lines",
    "cold outreach tips",
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
          Cold Email Subject Lines That Get Opened in 2026
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 3, 2026 · 7 min read · by ColdCrow
        </p>

        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Here is the uncomfortable truth about cold email: your carefully
            written body never gets read if the subject line loses. Industry
            benchmarks put cold email open rates somewhere between 30% and 60%
            — and the gap between the top and bottom is mostly subject line
            quality, not sender reputation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Why subject lines are harder than they used to be
          </h2>
          <p>
            Inbox algorithms got smarter, and so did prospects. The old tricks
            — ALL CAPS, exclamation marks, "quick question", fake urgency — are
            burned out. Spam filters catch obvious sales language, and buyers
            have developed pattern recognition for anything that smells like a
            template.
          </p>
          <p>
            In 2026, the subject lines that win share one quality: they sound
            like a real human wrote them to a specific person, in a hurry, with
            no time to polish.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            The patterns that still work
          </h2>

          <h3 className="text-xl font-bold text-gray-900">
            1. The specific reference
          </h3>
          <p>
            Nothing beats naming something real about the prospect's company.
            It proves you did your homework, which is the single strongest
            trust signal in cold email.
          </p>
          <ul>
            <li>Your new Series B announcement</li>
            <li>Re: your job post for a sales lead</li>
            <li>Your pricing page vs. [competitor]</li>
            <li>Loved your talk at [conference]</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900">
            2. The honest non-sales line
          </h3>
          <p>
            Paradoxically, admitting you don't have a pitch opens more emails
            than pitching does.
          </p>
          <ul>
            <li>No pitch, just a question</li>
            <li>Not selling anything</li>
            <li>Just curious about [topic]</li>
            <li>Short and no strings</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900">
            3. The curiosity gap
          </h3>
          <p>
            Leave out one key piece of information so the reader has to open to
            satisfy their own curiosity. Use this sparingly — it backfires if
            it feels clickbaity.
          </p>
          <ul>
            <li>Your competitors are doing this</li>
            <li>The 3-word fix for your [problem]</li>
            <li>One thing about your [landing page]</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900">
            4. The ultra-short subject
          </h3>
          <p>
            Two to four words read like a notification from a colleague, not a
            marketing blast. Perfect for follow-ups.
          </p>
          <ul>
            <li>Quick one</li>
            <li>Following up</li>
            <li>Circling back</li>
            <li>One more thing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            What to avoid in 2026
          </h2>
          <ul>
            <li>
              <strong>ALL CAPS and emojis in the subject</strong> — spam filter
              fuel.
            </li>
            <li>
              <strong>Exclamation marks</strong> — screams automation.
            </li>
            <li>
              <strong>"Quick question" as your only line</strong> — it's the
              most overused opener in outbound.
            </li>
            <li>
              <strong>Your product name in the subject</strong> — saves the
              reader the effort of deleting. They will.
            </li>
            <li>
              <strong>Numbers and stats you can't back up</strong> — one lie
              kills the whole email.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            The 20-second rule
          </h2>
          <p>
            A practical test: read your subject line out loud. If it sounds like
            something you would forward to a colleague with a note, it's good.
            If it sounds like an advertisement, rewrite it.
          </p>
          <p>
            And remember the body has a job too: the subject earns the open, the
            first line earns the read, and the question earns the reply. Most
            people obsess over the first and forget the other two.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Test, then scale
          </h2>
          <p>
            Write five subject lines for every email, pick the best one, and
            track which patterns get replies — not just opens. Over 50 sends you
            will see a clear winner. Over 500 you will have a playbook that
            beats any template library.
          </p>
          <p>
            ColdCrow helps you generate subject lines and full cold emails that
            follow these patterns — with a deliverability score before you hit
            send.
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
