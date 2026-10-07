export const metadata = {
  title: "Bought Lists Are Dead: How to Build a Cold Email List That Replies in 2026",
  description:
    "A 'verified' list of 2,000 emails got our client 0.6% replies and 12% bounces. Here is how to build a prospect list that actually replies in 2026.",
  keywords: [
    "cold email list",
    "prospect list",
    "lead generation",
    "bought lists",
    "cold email 2026",
  ],
  openGraph: {
    title: "Bought Lists Are Dead: How to Build a Cold Email List That Replies in 2026",
    description:
      "Bought lists are stale before you buy them. The 2026 playbook for building a prospect list that clears spam filters and gets replies.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Prospecting
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bought Lists Are Dead: How to Build a Cold Email List That Replies in 2026
        </h1>
        <p className="mt-4 text-base text-gray-600">
          We tested a "verified" list of 2,000 emails in 2026: 0.6% reply rate, 12% bounce rate, and a domain reputation that took months to repair.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Why Bought Lists Fail
        </h2>
        <p>
          Even "verified" lists from ZoomInfo or Apollo are stale by the time you send. People change jobs, change emails, and the ones who stay are hit by every other sender who bought the same list. Google and Yahoo's bulk-sender rules (0.3% complaint ceiling) mean one bad list can tank a domain for months.
        </p>
        <p>
          The math is brutal: send 2,000 emails to a bought list and you get ~12 replies. Send 500 to a hand-built list and you get 15–25. Relevance is not a nice-to-have; it is the only deliverability strategy that survives.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The 2026 List-Building Playbook
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><span className="font-medium text-gray-900">Pick a niche you can research.</span> Instead of "every SaaS founder," pick "AI support tools that raised under $30M." You can actually read about 50 companies and find something true to say about each.</li>
          <li><span className="font-medium text-gray-900">Verify every domain.</span> Check MX records before you send. A domain without mail servers is a bounce you could have avoided in 10 seconds.</li>
          <li><span className="font-medium text-gray-900">Find the person, not the role.</span> Sales managers, founders, and BD leads reply. "info@" and "support@" go to a black hole. One referral inside a target account is worth ten cold emails.</li>
          <li><span className="font-medium text-gray-900">Write one line of real research per email.</span> Reference their product, their pricing page, or a thing they shipped. This single habit is what separates a 0.5% sender from a 3–5% sender.</li>
          <li><span className="font-medium text-gray-900">Send in small batches from warm domains.</span> Ten personalized emails a day from one address builds reputation. Five hundred from a fresh domain destroys it.</li>
        </ol>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The 5-Minute Test Before You Send
        </h2>
        <p>
          Would you reply to this email if you were the recipient? If the answer is "probably not" - rewrite the first line until it is about them, not you. A list of 100 people you genuinely want to talk to will outperform 10,000 scraped names every single time.
        </p>
        <p className="pt-4 border-t border-gray-200">
          The writing is the hard part - and that is where ColdCrow helps. Paste a prospect profile, get a personalized email with a deliverability score in seconds.{" "}
          <a className="font-medium text-orange-600" href="https://copywise.vercel.app/try">
            Try it free at copywise.vercel.app/try
          </a>
        </p>
      </div>
    </article>
  );
}
