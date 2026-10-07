export const metadata = {
  title: "Cold email replies aren't sales: how to move prospects to a trial",
  description:
    "Getting replies is step one. Here's the follow-up sequence that turns a cold email reply into a product trial — and the mistakes that kill it.",
  keywords: [
    "cold email to trial",
    "cold email follow up",
    "saas trial conversion",
    "cold email funnel",
    "b2b cold email handoff",
  ],
  openGraph: {
    title: "Cold email replies aren't sales: how to move prospects to a trial",
    description:
      "The follow-up sequence that turns replies into trials, and the three mistakes that kill the handoff.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Conversion
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cold email replies aren't sales: how to move prospects to a trial
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Most cold email guides stop at the reply. But a reply is not a sale — it's the start of a second, harder conversation.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          If your funnel dies between "they replied" and "they tried your product," the problem isn't your first email. It's everything after it.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Step 1: Reply fast, but not immediately
        </h2>
        <p>
          Speed matters — but 15 minutes looks desperate, and 3 days looks dead. The sweet spot is 1-4 hours: fast enough to feel responsive, slow enough to look like you have other things happening.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Thank them by name, and reference their exact question or comment</li>
          <li>Answer their question first, completely</li>
          <li>Add one line of context about your product — never a feature dump</li>
        </ul>
        <p>
          That's it. No PDF, no pricing page link, no "would you be open to a quick call?" yet.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Step 2: Get a specific "yes" with a low-friction micro-commitment
        </h2>
        <p>
          The biggest funnel killer is asking for a "quick call" right after a reply. A call is high-commitment. Instead, ask for a micro-commitment:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>"Want me to generate a sample cold email for one of your prospects? Takes 30 seconds."</li>
          <li>"I'll send you the deliverability score for your current sending domain — no account needed."</li>
        </ul>
        <p>
          Micro-commitments filter genuinely interested prospects, and give them a taste of the product before they ever sign up.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Step 3: Make the trial itself frictionless
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No signup wall before value. Let them try the core feature before creating an account.</li>
          <li>One CTA per message. "Try it here" beats "here's the pricing page, our docs, and a case study."</li>
          <li>Give them a specific next action. "Type your prospect's company into the generator and see what it writes" is better than "check out our dashboard."</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The three mistakes that kill the handoff
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Selling in the reply. The reply email is not the pitch. If you pitch in your reply to their reply, you burn the trust you just built.</li>
          <li>Too many options. Pricing page + case studies + docs = decision paralysis. One path, one click.</li>
          <li>No timeline. "Whenever you have time" never happens. "This offer is live this week" gets action — politely.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The full loop in one view
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cold email — personalized, one real reference, one question</li>
          <li>Reply — answer their question, one context line</li>
          <li>Micro-commitment — sample output, score, or preview</li>
          <li>Frictionless trial — try before signup, one CTA</li>
          <li>Follow-up #2 — one new fact, easy to say no</li>
        </ul>
        <p>
          The product that wins isn't the one with the best cold email. It's the one where every step after the reply makes saying yes easier — and saying no just as easy. Remove the friction, and the replies you already get will start turning into trials.
        </p>
        <p className="pt-4 text-sm text-gray-500">
          Built for teams who send cold email daily — ColdCrow scores deliverability and personalization before you hit send.
        </p>
      </div>
    </article>
  );
}
