import Link from "next/link";

export const metadata = {
  title: "The 4-Email Follow-Up Sequence That Actually Gets Replies",
  description:
    "Most replies come from the follow-up, not the first email. Here's the 4-touch sequence that works in 2026.",
};

const content = [
  {
    h: "The follow-up is where the replies live",
    p: "If you send one email and wait, you're leaving most of your replies on the table. In B2B cold outreach, 70–80% of replies come from follow-ups — not the first touch. People don't ignore you because they're not interested; they ignore you because they're busy. A well-timed follow-up is just a second chance to be seen.",
  },
  {
    h: "Email 1 (Day 0): The hook",
    p: "Keep it short: one specific reason you're reaching out, one line about why them specifically, one low-pressure CTA. No links in the first email. If you personalize nothing else, personalize this one — it's the only email that determines whether the sequence continues at all.",
  },
  {
    h: "Email 2 (Day 3): The value add",
    p: "Don't repeat yourself. Send something useful: a relevant example, a quick observation about their industry, or a resource that takes them two minutes to read. The goal is not to ask again — it's to give them a reason to remember you.",
  },
  {
    h: "Email 3 (Day 7): The different angle",
    p: "By now the original pitch has been seen and set aside. Switch the frame: share a result your customers get, or ask a question about their workflow. A question outperforms a statement here — it's lower pressure and easier to answer.",
  },
  {
    h: "Email 4 (Day 12): The graceful exit",
    p: "One last short email that makes it easy to say 'not now.' Something like: 'I'll take this as a no for now — if it changes, here's where to find me.' This email gets more replies than you'd think, because removing the pressure makes people respond. And it leaves the door open for a future touch.",
  },
  {
    h: "Three rules that make or break the sequence",
    p: "Rule one: every email must be different — same ask twice is spam. Rule two: never add a link until email 3 or 4, and only one. Rule three: stop after four touches unless they reply. A sequence that never ends is how you get blocked.",
  },
  {
    h: "How to know when to stop (and when to double down)",
    p: "Watch your open rates. If email 1 gets under 30% opens, the problem is deliverability or subject line — fix that before adding touches. If opens are fine but replies are low, the problem is the offer or the personalization. Follow-up sequences amplify what's already working; they don't fix a broken first email.",
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
          The 4-Email Follow-Up Sequence That Actually Gets Replies
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
            Build the whole sequence in seconds with{" "}
            <Link href="/dashboard" className="text-blue-600 hover:underline font-medium">
              ColdCrow
            </Link>{" "}
            — personalized cold emails with deliverability scores, ready to send.
          </p>
        </div>
      </article>
    </div>
  );
}
