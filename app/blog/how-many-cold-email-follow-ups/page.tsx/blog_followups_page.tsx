export const metadata = {
  title: "How Many Cold Email Follow-Ups Should You Send? (Data-Backed)",
  description:
    "Most replies arrive after the first email. Here's how many follow-ups to send, when to send them, and when to stop — based on what outbound teams actually see.",
  keywords: [
    "cold email follow up",
    "how many follow ups",
    "follow up sequence",
    "cold email sequence length",
    "when to stop cold email",
  ],
  openGraph: {
    title: "How Many Cold Email Follow-Ups Should You Send?",
    description:
      "The follow-up sequence length that actually gets replies — and when to stop.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Outreach
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How Many Cold Email Follow-Ups Should You Send? (Data-Backed)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          One email is a lottery ticket. The follow-up is where the replies actually live.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          Here is the uncomfortable truth about cold email: most replies do not come to your first email. They come to the second or third. Industry consensus across outbound teams is that a large share of salespeople give up after one or two touches — often before the prospect ever saw the message. The follow-up is not annoying. It is the product.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          How Many Follow-Ups Is the Sweet Spot?
        </h2>
        <p>
          The commonly cited industry rule: about 80% of sales happen after the fifth touch, yet most reps stop before that. For cold email specifically, the practical sweet spot is <strong>2-3 follow-ups after the first email</strong> (so 3-4 emails total). Beyond that, reply rates drop sharply and unsubscribes climb. The goal is to stay in the inbox without becoming the person they report as spam.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Email 1</strong> — the opener. One clear reason to reply, one ask.</li>
          <li><strong>Follow-up 1 (2-3 days later)</strong> — a value bump, not a repeat. Add one new data point or insight.</li>
          <li><strong>Follow-up 2 (3-4 days later)</strong> — a different angle. Shorten it. Offer to drop the topic.</li>
          <li><strong>Final (a week later)</strong> — the breakup email. Close the loop politely and leave the door open.</li>
        </ul>
        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          Timing Matters More Than Count
        </h2>
        <p>
          Space follow-ups 2-4 business days apart. Too fast reads as desperation; too slow and the context is cold. A cadence of day 0, day 3, day 7, day 14 is a common, defensible rhythm — enough to stay visible, spaced enough to stay respectful.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          When to Stop
        </h2>
        <p>
          Stop when you get: a hard no, a &quot;not now&quot; (move to a nurture list), an unsubscribe, or silence after a full sequence of 3-4 touches. One more email after a no is a burned bridge. One more email after silence is just noise. Keep the list clean — your deliverability depends on it.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          The Writing Problem Follow-Ups Reveal
        </h2>
        <p>
          Most follow-ups fail because they just re-send the first email. The fix is a new angle each time — and that is exactly where AI helps. Describe the prospect once, and get a personalized opener plus follow-up angles in seconds. See how it works — free, no signup:{" "}
          <a href="https://copywise.vercel.app/try" className="font-medium text-orange-600 underline">
            https://copywise.vercel.app/try
          </a>
        </p>
        <p>
          Sequence length is a numbers game. But the reply rate is a writing game. Fix the writing, and three touches beat ten.
        </p>
      </div>
    </article>
  );
}
