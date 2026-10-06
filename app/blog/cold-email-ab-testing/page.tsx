export const metadata = {
  title: "Cold Email A/B Testing: What to Test First",
  description:
    "Most teams test the wrong variable first. Here is the order that actually moves reply rates.",
  keywords: [
    "cold email ab testing",
    "cold email reply rate",
    "email testing order",
    "cold email personalization test",
    "cold email offer testing",
  ],
  openGraph: {
    title: "Cold Email A/B Testing: What to Test First",
    description:
      "The testing order that actually moves reply rates, not just open rates.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Testing
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cold Email A/B Testing: What to Test First
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Most teams test the wrong variable first. Here is the order that actually moves reply rates.
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Why Most A/B Tests Waste Your Time
        </h2>
        <p>
          Teams test subject lines first because they are easy. But subject lines move open rates, not reply rates — and in cold email, replies are the only metric that pays rent.
        </p>
        <p>
          The right order targets the variables with the biggest leverage first: deliverability, then offer clarity, then personalization depth, then length, then subject lines.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          1. Test Your Sending Infrastructure First
        </h2>
        <p>
          Before any copy test, check the foundation: SPF, DKIM, DMARC, dedicated sending domain, and warmup state.
        </p>
        <p>
          If your emails land in promotions or spam, no copy test matters. Fix deliverability before touching a single word.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          2. Test Offer Clarity (The One-Liner)
        </h2>
        <p>
          The single highest-leverage copy variable: can a prospect understand what you do and why it matters in under 5 seconds?
        </p>
        <p>Test two versions of your first paragraph:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Version A: feature-led ("We provide AI-powered cold email software with deliverability scoring")
          </li>
          <li>
            Version B: outcome-led ("Write a cold email that gets replies — in 20 seconds, without sounding like a bot")
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          3. Test Personalization Depth
        </h2>
        <p>
          Real personalization (a company-specific detail in line one) beats merge-tag personalization (first name only). Test one researched detail versus none.
        </p>
        <p>
          The detail does not need to be impressive. A pricing page observation, a recent hire, a new integration — anything that proves you looked.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          4. Test Length
        </h2>
        <p>
          Shorter emails win on mobile and get read faster. Test a 60-word version against a 150-word version.
        </p>
        <p>
          Rule of thumb: cut every sentence that does not move the reader toward a reply. If a line does not create curiosity or clarity, delete it.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          5. Test Subject Lines Last
        </h2>
        <p>
          Subject lines matter for opens, but with a good sender reputation and a clean domain, opens are not the bottleneck. Test subject lines only after the above four are stable.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The Minimum Viable Test Setup
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>One variable at a time (changing two things means you cannot attribute the result)</li>
          <li>50-100 sends per variation for statistical signal</li>
          <li>Same time window, same segment</li>
          <li>Track replies, not opens</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          What Good Looks Like
        </h2>
        <p>
          After fixing deliverability and testing offer clarity, most teams see reply rates move from 1-2 percent to 3-5 percent. Personalization depth adds another 1-2 points. Length and subject lines are the finishing touches.
        </p>
      </div>
    </article>
  );
}
