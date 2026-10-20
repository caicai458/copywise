import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How to Reply to a Cold Email: The 5-Minute Framework for Busy Founders | ColdCrow Blog",
  description:
    "You get 20 cold emails a day. Most go to trash. Here is a 5-minute framework for replying to the few that deserve one — and why selective replies compound in your favor.",
  keywords: [
    "reply to cold email",
    "cold email reply",
    "founder inbox",
    "email workflow",
    "cold outreach",
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
          How to Reply to a Cold Email: The 5-Minute Framework for Busy Founders
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 20, 2026 · 6 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            If you are a founder, your inbox is a battlefield. Twenty cold
            emails a day, most of them templates, most of them for things you
            do not need. The standard move is mass delete — and it is mostly
            right. But a small fraction of cold emails deserve a reply, and the
            founders who reply selectively build a quiet compounding advantage:
            they become known as people who answer.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The 5-minute triage
          </h2>
          <p>
            Do not read cold emails top to bottom. Run each one through three
            questions, in order:
          </p>
          <ul>
            <li>
              <strong>1. Did they reference something specific about you?</strong>{" "}
              Your last launch, a hire, a page, a post. If the email could have
              been sent to anyone, delete it.
            </li>
            <li>
              <strong>2. Is the ask small and concrete?</strong> "A 30-second
              look," "a one-line answer," "introduce me to X." Vague asks ("let's
              hop on a call") get the standard reply: silence.
            </li>
            <li>
              <strong>3. Could this be useful in the next 90 days?</strong> Not
              today — the next quarter. Tools, intros, and ideas you might need
              later are worth a two-line reply that keeps the door open.
            </li>
          </ul>
          <p>
            One "yes" and the email earns a reply. Three "no"s and it goes to
            trash without guilt.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The reply templates that cost you nothing
          </h2>
          <p>
            <strong>Not now, not ever:</strong> "Thanks — not a fit right now,
            but appreciate the personal note. Good luck."
          </p>
          <p>
            <strong>Mildly interested, busy:</strong> "This is interesting but
            I'm heads-down this month. Ping me in 6-8 weeks?"
          </p>
          <p>
            <strong>Actually interested:</strong> "Yes — send me the 2-minute
            version, and loop [relevant person]."
          </p>
          <p>
            Two lines each. No apologies, no essays. The sender gets a signal,
            you keep your inbox moving, and — this matters — reply rate is
            reciprocal. People who reply get better cold emails over time,
            because good senders learn who answers.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The asymmetry trick
          </h2>
          <p>
            Most founders only reply when the email benefits them. The smarter
            move: reply when the email is well-crafted, even if the offer is
            not for you. A two-line "good email, not a fit" makes you memorable
            to someone who emails hundreds of founders a week. That person
            becomes a referral node. The cost is thirty seconds; the expected
            value compounds.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            If you are on the sending side
          </h2>
          <p>
            The lesson cuts both ways. If you want replies, write the kind of
            email this framework would answer: specific, small ask, useful.
            That is exactly what{" "}
            <Link href="/" className="text-indigo-600 hover:underline">
              ColdCrow
            </Link>{" "}
            drafts — personalized cold emails built on real signals, with a
            deliverability score and a subject line that earns the open. You
            bring the judgment; it kills the blank page.
          </p>
          <p>
            See it in action:{" "}
            <Link href="/try" className="text-indigo-600 hover:underline">
              try ColdCrow free
            </Link>
            , no signup needed.
          </p>
        </div>
      </div>
    </main>
  );
}
