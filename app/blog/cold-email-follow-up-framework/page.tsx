export const metadata = {
  title: "The Follow-Up Email That Gets Replies (Day 3/7/14 Framework)",
  description:
    "Most cold email replies come from the follow-up, not the first touch — but 90% of senders never send one. Here's the 3-touch rhythm that works.",
  keywords: [
    "cold email follow up",
    "follow up email",
    "cold email sequence",
    "cold email reply rate",
    "b2b cold email",
  ],
  openGraph: {
    title: "The Follow-Up Email That Gets Replies (Day 3/7/14 Framework)",
    description:
      "Three touches, spread over two weeks, each with a different job — the rhythm that actually gets replies.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Follow-up
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The Follow-Up Email That Gets Replies (Day 3/7/14 Framework)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Most cold email replies come from the follow-up, not the first touch — and yet the majority of senders never send one.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          The data is consistent across tools: 60–70% of replies happen after the first email, in the follow-up sequence. And yet the majority of senders fire one email, wait a week, and call it done.
        </p>
        <p>
          If you're sending cold outreach, the follow-up isn't optional — it's where the ROI lives.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The 3-touch rhythm that works
        </h2>
        <p>
          The goal isn't to annoy. It's to stay present while the prospect's priorities shift. Three touches, spread over two weeks, each with a different job:
        </p>
        <p className="font-medium text-gray-900">
          Day 3 — Gentle nudge.
        </p>
        <p>
          Your first email got buried under 200 others. The nudge is short and honest: "Just floating this back up in case it got lost." No new pitch, no value re-statement. One or two lines.
        </p>
        <p className="font-medium text-gray-900">
          Day 7 — Value add, no ask.
        </p>
        <p>
          This is the highest-leverage email in the sequence. Share something genuinely useful — a relevant stat, a mini-analysis of their situation, a resource. Attach zero ask. The point is to be the person who gave before asking.
        </p>
        <p className="font-medium text-gray-900">
          Day 14 — Clean close.
        </p>
        <p>
          "I'm closing my file on this, but the door stays open." This gets replies more than any pushy "just checking in" — because it removes pressure, and people respond to a graceful exit.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Why Day 7 works harder than Day 3
        </h2>
        <p>
          The nudge (Day 3) keeps you top-of-mind. The close (Day 14) creates a clean psychological endpoint. But the value add (Day 7) is where the relationship shifts from "sender" to "useful person."
        </p>
        <p>
          No ask attached. Just useful. When you finally do ask (in a later sequence, or when they reply), the ask lands in a different context.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          What kills follow-ups
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium text-gray-900">Same message re-sent.</span> Copy-paste with a new date reads as spam instantly.</li>
          <li><span className="font-medium text-gray-900">Guilt-tripping.</span> "Just following up on my previous email" repeated 4 times is pressure, not presence.</li>
          <li><span className="font-medium text-gray-900">No value.</span> Three emails that all ask "did you see this?" give the prospect nothing to say yes to.</li>
        </ul>
        <p className="pt-4 border-t border-gray-200">
          Want this built for your actual email? We made a free tool for exactly this — paste your cold email, get a Day 3 / Day 7 / Day 14 follow-up plan with low-pressure, ready-to-send copy.{" "}
          <a className="font-medium text-orange-600" href="https://copywise.vercel.app/followup">
            Try it free at copywise.vercel.app/followup
          </a>
        </p>
      </div>
    </article>
  );
}
