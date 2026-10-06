export const metadata = {
  title: "How to Warm Up a New Email Domain for Cold Outreach (Free Guide)",
  description:
    "New domains that send cold email too fast get burned before they start. Here is the free warm-up schedule, what to avoid, and how to know when you're ready.",
  keywords: [
    "email warm up",
    "cold email domain warm up",
    "new domain cold email",
    "email deliverability warm up",
    "outlook gmail warm up",
  ],
  openGraph: {
    title: "How to Warm Up a New Email Domain (Free Guide)",
    description:
      "The free warm-up schedule that keeps a new domain out of the spam folder.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Deliverability
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to Warm Up a New Email Domain for Cold Outreach (Free Guide)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          The free schedule that keeps a fresh domain out of the spam folder.
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          A brand-new domain has zero sending reputation. The mailbox providers (Google, Microsoft, Yahoo) treat unknown senders with suspicion — and one burst of 200 emails on day one can burn the domain permanently. The fix is boring: warm up slowly, on a schedule, and let reputation build itself. Here's the free way to do it in 2026.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">Why warm-up exists</h2>
        <p>
          Providers score every sender on engagement: how many emails are opened, replied to, marked spam, or bounced. A new domain with no history is judged harshly. Warming up gives the provider a track record of positive signals before you send real outreach.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">The 21-day free warm-up schedule</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Days 1-3:</strong> 5-8 personal emails per day. Write to friends, colleagues, or your own second inbox. Reply to everything.</li>
          <li><strong>Days 4-7:</strong> 10-15 per day. Mix in genuine business correspondence — newsletters you actually read, support replies to vendors you use.</li>
          <li><strong>Days 8-14:</strong> 20-25 per day. Keep every conversation going; replies are the strongest signal.</li>
          <li><strong>Days 15-21:</strong> 30-40 per day. Now you can start small, highly personalized cold outreach — but keep replies in the loop.</li>
        </ul>
        <p>
          The exact numbers matter less than the pattern: <strong>low volume, steady growth, and real engagement</strong>. Never spike.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">The non-negotiables (free, mandatory)</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Set up SPF, DKIM, and DMARC.</strong> Free on every provider. Missing these means auto-failures to spam.</li>
          <li><strong>Add a one-click unsubscribe.</strong> Required by Gmail and Microsoft bulk-sender rules since 2024-2025.</li>
          <li><strong>Keep spam complaints under 0.3%.</strong> One complaint per 300 emails. This is the hard ceiling.</li>
          <li><strong>Bounce rate under 5%.</strong> Verify addresses before sending — bounces destroy reputation fast.</li>
          <li><strong>Personalize everything.</strong> Replies are the only signal that outweighs volume.</li>
        </ul>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">How to know you're ready</h2>
        <p>
          Three signs: your personal test emails land in the inbox (not spam) 9 out of 10 times; you're at 30-40 emails per day without bounces; and replies are coming back from the warm-up conversations. At that point, cold outreach at 30-50 per day per inbox is sustainable.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">The shortcut: don't send yet, write better first</h2>
        <p>
          While the domain warms, use the time to build your email templates. The email itself matters more than the domain: a short, specific, low-pressure first touch with one personalization angle outperforms any warm-up trick.
        </p>
        <p>
          <a href="https://copywise.vercel.app/try" className="font-medium text-orange-600 hover:text-orange-700">
            Write your first personalized cold email — free, no signup →
          </a>
        </p>
      </div>
    </article>
  );
}
