export const metadata = {
  title: "The Anatomy of a Perfect Cold Email in 2026",
  description:
    "Four sentences, one researched detail, one low-pressure ask. The exact structure of a cold email that gets 5-10% reply rates - with line-by-line examples.",
  keywords: [
    "cold email structure",
    "perfect cold email",
    "cold email example",
    "cold email 2026",
    "outbound email writing",
  ],
  openGraph: {
    title: "The Anatomy of a Perfect Cold Email in 2026",
    description:
      "A perfect cold email is four sentences long: one researched detail, one value line, one low-pressure ask, one graceful exit. Here is the structure with examples.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Writing
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The Anatomy of a Perfect Cold Email in 2026
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Strip every "perfect" cold email down to its skeleton and you get four sentences: one researched detail, one value line, one low-pressure ask, one graceful exit. Everything else is noise that lowers your reply rate.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sentence 1: The Researched Detail
        </h2>
        <p>
          The first line must prove you are not a bot. Reference something specific and true about them: "Saw you shipped the Zapier-native version of MailFlow." One detail, no flattery, no "I'm a huge fan of your work." This single sentence is the difference between a 3% sender and a 10% sender.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sentence 2: The Value Line
        </h2>
        <p>
          One sentence on why you are emailing - and it must be about them, not your feature list. "Our customers who switched from reply-rate tracking to positive-reply tracking doubled their follow-up volume." If this sentence needs more than twenty words, you do not know your value proposition yet.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sentence 3: The Low-Pressure Ask
        </h2>
        <p>
          Ask for the smallest possible next step. "Worth a 5-minute look?" with a direct link beats "Would you be open to a quick call this week?" every time. A no-signup link to a working product is the lowest-friction ask that exists in cold email in 2026.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sentence 4: The Graceful Exit
        </h2>
        <p>
          "Either way, keep building." or "If not, no worries - I'll leave you to it." This line does more than politeness: it signals low pressure, which makes the ask before it feel safe. Skip the signature block below three lines - no phone, no address, no "Sent from my iPhone."
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The Test
        </h2>
        <p>
          Read your email out loud. If any sentence makes you cringe, cut it. Then check the ratio: one third about them, one third about the value, one third about the ask. If your email is more than 120 words, it is not a cold email - it is an essay with a link.
        </p>
        <p className="pt-4 border-t border-gray-200">
          Writing these four sentences is exactly what ColdCrow speeds up: describe the prospect, get the researched opener and a deliverability score in seconds, then make it yours.{" "}
          <a className="font-medium text-orange-600" href="https://copywise.vercel.app/try">
            Try it free at copywise.vercel.app/try
          </a>
        </p>
      </div>
    </article>
  );
}
