export const metadata = {
  title: "How Many Cold Email Follow-Ups Should You Send? (Data-Backed 2026)",
  description:
    "One follow-up lifts replies by 65.8%. Three to five touches is the sweet spot. More than six and complaints spike. Here's the data-backed sequence and the exact stop rules.",
  keywords: [
    "cold email follow up",
    "how many follow ups cold email",
    "follow up sequence",
    "cold email cadence",
    "cold email best practices",
  ],
  openGraph: {
    title: "How Many Cold Email Follow-Ups Should You Send? (Data-Backed 2026)",
    description:
      "3-5 touches, spaced 2-4 days. The data on reply lift, the sequence that works, and when to stop.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Data
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How Many Cold Email Follow-Ups Should You Send? (Data-Backed 2026)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Everyone knows you should follow up. Almost nobody knows when to stop. The 2026 reply-rate data gives a surprisingly clear answer — and it's probably more touches than you think.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          What the data says
        </h2>
        <p>
          Across the major outreach platforms (Instantly, SmartReach, Woodpecker), the pattern is consistent (industry report consensus, not a single-vendor claim):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>58% of all replies</strong> come from the first email — the remaining <strong>42% come from follow-ups</strong>.</li>
          <li>A single follow-up increases total replies by <strong>65.8%</strong>.</li>
          <li>The first follow-up often peaks at a <strong>higher reply rate than the first email itself</strong> (8.4% vs 5.8% on average).</li>
          <li>Sequences with <strong>3–5 total touches</strong> hit ~8.3% reply rate vs 4.1% for single-send campaigns.</li>
          <li><strong>48% of sales reps never follow up at all</strong> — sending one already puts you ahead of half the market.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The sweet spot: 3–5 touches
        </h2>
        <p>
          Three to five total touches, spaced 2–4 days apart, is where reply lift plateaus. Beyond <strong>six touches</strong>, you get almost no additional replies — but spam complaints and domain reputation damage climb. The marginal reply rate of a 7th email is near zero, and the marginal risk is real.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          A sequence that works
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Day 0 — First email:</strong> short, specific, one line that proves you read their situation. No attachment, no brochure link.</li>
          <li><strong>Day 3 — First follow-up:</strong> add one new relevant detail (their funding, a hire, a product launch). Never just "bumping" — give them a reason to re-read.</li>
          <li><strong>Day 7 — Value follow-up:</strong> share one useful insight or resource related to their business. No ask attached.</li>
          <li><strong>Day 12 — Breakup email:</strong> "I'll assume it's not a fit — happy to leave it here. If the timing changes, my door's open." This gets more replies than any aggressive nudge.</li>
          <li><strong>Day 19 — Final note:</strong> one last, short message. Then stop.</li>
        </ol>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          When to stop early
        </h2>
        <p>
          The sequence is a ceiling, not an obligation. Stop the moment any of these happen:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>An explicit no</strong> — a reply declining, however politely, means the list entry is dead.</li>
          <li><strong>An auto-reply</strong> (out of office, "not the right person") — respond once to redirect, then stop if no answer.</li>
          <li><strong>Hard bounces</strong> — remove the address immediately. It hurts your domain to keep sending.</li>
          <li><strong>Three weeks of silence</strong> after the breakup email — the 19-day sequence is the full run; anything more is harassment, not persistence.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The metric that matters
        </h2>
        <p>
          Track reply rate, not open rate (Apple Mail Privacy Protection inflates opens). If your sequence gets under 1% total replies across 3+ touches, the problem is almost never the follow-up count — it's the first email's relevance. Fix the opening line before you add touches.
        </p>
        <p>
          Follow-ups are where 42% of your replies are hiding. Three to five disciplined touches, with a real reason to re-read each time, is the difference between a dead campaign and a working pipeline.
        </p>
        <p className="mt-8 rounded-lg bg-gray-50 p-5 text-gray-800">
          <strong>Build your follow-up sequence in minutes:</strong> describe a prospect and get a researched, personalized first email plus a deliverability score —{" "}
          <a href="/try" className="font-semibold text-orange-600 underline">
            try it free
          </a>
          . No credit card required.
        </p>
      </div>
    </article>
  );
}
