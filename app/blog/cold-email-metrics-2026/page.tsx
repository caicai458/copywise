export const metadata = {
  title: "Cold Email Metrics That Actually Matter (And the Ones to Ignore)",
  description:
    "Every cold email dashboard looks the same. Here is how to read your data like someone who actually wants replies.",
  keywords: [
    "cold email metrics",
    "cold email reply rate",
    "email open rate",
    "cold email bounce rate",
    "spam complaint rate",
  ],
  openGraph: {
    title: "Cold Email Metrics That Actually Matter",
    description:
      "Reply rate is the only number that matters. Here is the full breakdown.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Analytics
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cold Email Metrics That Actually Matter (And the Ones to Ignore)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Every cold email dashboard looks the same: a big open rate, a small reply rate, and a button to "improve deliverability." But most of those numbers are vanity metrics that lead you in the wrong direction.
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The Metric That Matters: Reply Rate
        </h2>
        <p>
          Reply rate is the only number that reflects whether your message resonated. Everything else is a proxy.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Below 3%</strong> — your targeting or message is off. Before rewriting copy, re-examine who you're emailing.</li>
          <li><strong>3-8%</strong> — healthy for cold outreach. Now A/B test subject lines and first sentences.</li>
          <li><strong>Above 8%</strong> — strong. Scale the list carefully and protect the sender reputation that got you here.</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Open Rate: Useful Only as a Ceiling
        </h2>
        <p>
          Open rate tells you about your subject line, nothing else. A 60% open rate with a 2% reply rate means your subject line is great and your content isn't.
        </p>
        <p>Two caveats:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Apple Mail Privacy Protection</strong> inflates open rates (pixels load without real opens). Don't tune your email based on a 5% movement in opens.</li>
          <li>Open rate is a ceiling check: if it's under 20%, your subject line or sender reputation needs work before anything else.</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Bounce Rate: The Safety Metric
        </h2>
        <p>
          A bounce rate above 3% damages your sender reputation and pushes future emails to spam. Keep it low by verifying addresses before sending — never send to a list you scraped without validation.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Spam Complaint Rate: The Kill Switch
        </h2>
        <p>
          Over 0.1% complaints (1 in 1,000) and providers start filtering you. Over 0.3% and you're in danger of blacklisting. Complaints come from three places: no relevance, no opt-out, or emailing people who never agreed to hear from you.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Reply-to-Reply Quality: The Metric Nobody Tracks
        </h2>
        <p>
          The best signal isn't how many replies — it's what the replies say.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>"Not interested" — your targeting was wrong or your value prop was unclear.</li>
          <li>"Can you send more info?" — you were relevant, but you buried the lead.</li>
          <li>"Let's talk" — you nailed it. Study what this email did differently and do it again.</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The Only Dashboard You Need
        </h2>
        <p>Ignore the fancy charts. Track five numbers per batch:</p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">Metric</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Healthy Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-3">Bounce rate</td><td className="px-4 py-3">Under 3%</td></tr>
              <tr><td className="px-4 py-3">Open rate</td><td className="px-4 py-3">30-60%</td></tr>
              <tr><td className="px-4 py-3">Reply rate</td><td className="px-4 py-3">3%+</td></tr>
              <tr><td className="px-4 py-3">Complaint rate</td><td className="px-4 py-3">Under 0.1%</td></tr>
              <tr><td className="px-4 py-3">Positive replies</td><td className="px-4 py-3">As many as possible</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          A Note on Volume
        </h2>
        <p>
          A common trap: sending more to compensate for a low reply rate. That's like turning up the radio because you're lost. Fix the message and the list first — then scale.
        </p>
        <p>
          One hundred relevant emails that get 8% replies will outperform a thousand generic ones at 1% — with a fraction of the sender-reputation risk.
        </p>

        <p className="rounded-lg bg-orange-50 p-4 text-sm font-medium text-orange-800">
          ColdCrow scores your cold email for deliverability before you send — so you fix problems in the draft, not after 500 sends. Try it free: copywise.vercel.app/try
        </p>
      </div>
    </article>
  );
}
