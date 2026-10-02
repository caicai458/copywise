import Link from "next/link";

export const metadata = {
  title: "Cold Email Deliverability: 7 Mistakes That Land You in Spam (2026)",
  description:
    "Most cold emails never reach the inbox. These 7 deliverability mistakes explain why — and exactly how to fix each one.",
};

const content = [
  {
    h: "Why your cold emails land in spam (and what inbox placement really depends on)",
    p: "You can write the perfect email and still never get a reply — because it never reached the inbox. Inbox placement in 2026 is decided by a combination of sender reputation, engagement signals, and infrastructure health. Most cold outreach fails before the subject line is even read. The good news: every cause is fixable.",
  },
  {
    h: "Mistake #1: Sending from a brand-new domain",
    p: "A domain with zero sending history has no reputation. Providers treat it with suspicion no matter how good your copy is. Fix: warm up the domain for 2–3 weeks, start with 20–30 emails a day, and let engagement build before scaling. Never send your first cold campaign from a domain that has never sent mail.",
  },
  {
    h: "Mistake #2: No SPF, DKIM, or DMARC records",
    p: "Authentication records tell Gmail and Outlook that the email is really from you. Without SPF and DKIM, your emails are more likely to be marked as spam or rejected outright. Fix: publish SPF, sign with DKIM, and set a DMARC policy — most email tools have one-click setup guides for this.",
  },
  {
    h: "Mistake #3: Copy-pasting the same email to everyone",
    p: "When hundreds of recipients receive the exact same message, engagement collapses — and providers notice. Low open rates and instant deletions are negative signals. Fix: personalize each email with a specific detail about the recipient's company or role. Even one personalized sentence changes the open rate dramatically.",
  },
  {
    h: "Mistake #4: Too many links in your first email",
    p: "Links are a spam signal, especially in the first touch. A cold email with three links and a tracking pixel screams automation. Fix: keep the first email to zero or one link. Let the reply — or the follow-up — carry the CTA.",
  },
  {
    h: "Mistake #5: Ignoring engagement decay",
    p: "A dormant list with 10,000 addresses looks great and performs terribly. Most of those addresses haven't opened anything in a year, which drags your reputation down. Fix: prune aggressively. Segment out anyone who hasn't engaged in 90 days, and only mail people who actually want to hear from you.",
  },
  {
    h: "Mistake #6: No plain-text version",
    p: "HTML-only emails with heavy formatting get flagged more often. Fix: always send a plain-text alternative. Cold outreach emails that look like simple text messages from a colleague get the highest reply rates.",
  },
  {
    h: "Mistake #7: Not monitoring your sender score",
    p: "You can't fix what you don't measure. If your domain reputation drops, it takes weeks to recover. Fix: check your sender score weekly, watch bounce rates (keep them under 2%), and respond to every complaint. Tools like Google Postmaster provide free inbox-placement data.",
  },
  {
    h: "The 30-minute deliverability checklist",
    p: "Before your next campaign, run this: (1) Domain warmed up for at least 2 weeks, (2) SPF + DKIM + DMARC verified, (3) First email has one link max, (4) Each email personalized to the recipient, (5) List pruned of inactive contacts, (6) Plain-text version included, (7) Sender score checked. Do all seven and you give your emails a real shot at the inbox.",
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ColdCrow
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <Link href="/pricing" className="hover:text-gray-900">
              Pricing
            </Link>
          </div>
        </div>
      </nav>
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          Cold Email Deliverability: 7 Mistakes That Land You in Spam (2026)
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Published Oct 2026 · 5 min read
        </p>
        {content.map((s, i) => (
          <section key={i} className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">{s.h}</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">{s.p}</p>
          </section>
        ))}
        <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-gray-800">
            Want a personalized cold email with a deliverability score in
            seconds? Try{" "}
            <Link href="/dashboard" className="text-blue-600 hover:underline font-medium">
              ColdCrow
            </Link>{" "}
            — describe a prospect, get an email that sounds human.
          </p>
        </div>
      </article>
    </div>
  );
}
