import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cold Email for SaaS: The Playbook That Gets 5-10% Reply Rates | ColdCrow Blog",
  description:
    "Most SaaS founders treat cold email like a lottery. The ones who get real reply rates treat every email like a product launch for one person. Here is the playbook.",
  keywords: [
    "SaaS cold email",
    "cold email playbook",
    "B2B outreach strategy",
    "SaaS growth",
    "cold email reply rate",
  ],
};
export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium text-indigo-600">
          <Link href="/blog" className="hover:underline">
            ← All posts
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Cold Email for SaaS: The Playbook That Gets 5-10% Reply Rates
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 3, 2026 · 6 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Most SaaS founders treat cold email like a lottery: blast 500
            generic emails and pray. The ones who get real reply rates do the
            opposite — they treat every email like a product launch for one
            person.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The SaaS cold email playbook
          </h2>
          <h3 className="text-xl font-bold text-gray-900">
            Step 1: Pick prospects where your product is the obvious next step
          </h3>
          <p>
            Don&apos;t sell a project management tool to a company using
            spreadsheets with 5 people. Sell it to a 20-person agency drowning
            in client chaos. Fit beats volume — 50 well-chosen prospects
            outperform 500 random ones.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Step 2: Research one thing that matters
          </h3>
          <p>
            You don&apos;t need their whole life story. You need one specific
            observation: a new feature they shipped, a job posting that reveals
            a pain, a funding announcement that means they&apos;re scaling. One
            specific, verifiable detail beats three vague compliments.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Step 3: The 90-second email formula
          </h3>
          <ul>
            <li>
              Line 1: The observation (specific, shows you looked)
            </li>
            <li>
              Line 2: Why it matters to them (their pain, not your product)
            </li>
            <li>
              Line 3: What you built (one sentence, outcome-focused)
            </li>
            <li>
              Line 4: One soft CTA (&quot;Worth a 5-minute look? No pitch,
              happy to show a real example.&quot;)
            </li>
          </ul>
          <p>
            Under 120 words. No attachments. No links until the second email.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Step 4: Follow up like a human
          </h3>
          <p>
            Send 3-4 follow-ups, each adding value. Most replies come from
            follow-up 2 or 3.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Step 5: Measure the right numbers
          </h3>
          <ul>
            <li>Reply rate (target 5-10% with tight targeting)</li>
            <li>Positive reply rate (they might not buy, but they engaged)</li>
            <li>
              Meetings booked (the only number that matters for pipeline)
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Common mistakes that kill reply rates
          </h2>
          <p>
            <strong>Mistake 1: Selling the features.</strong> &quot;We have AI,
            integrations, and a dashboard&quot; means nothing. Sell the outcome:
            &quot;Your team could cut reporting time by 10 hours a week.&quot;
          </p>
          <p>
            <strong>Mistake 2: Writing to &quot;the company&quot; instead of a
            person.</strong> Address the person by name, reference their actual
            work. If you can&apos;t find a person, you haven&apos;t researched
            enough.
          </p>
          <p>
            <strong>Mistake 3: CTA that&apos;s a commitment.</strong>
            &quot;Book a demo&quot; is a big ask for a cold email.
            &quot;Curious if this matches a problem you have?&quot; is zero
            commitment and gets replies.
          </p>
          <p>
            <strong>Mistake 4: Sending from a cold domain.</strong> New domain +
            high volume = spam folder. Warm up, verify your list, keep daily
            volume per account under 30-50.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The mindset shift
          </h2>
          <p>
            Cold email isn&apos;t a volume game — it&apos;s a targeting game.
            The founders who win send fewer, better emails to the right people,
            with a follow-up sequence that respects the recipient.
            That&apos;s the whole playbook.
          </p>
          <p>
            ColdCrow writes personalized cold emails with a deliverability score
            in 30 seconds — describe your prospect and product, get
            reply-worthy copy. Free to try, no signup.
          </p>
          <p>
            <Link
              href="/try"
              className="text-indigo-600 font-medium hover:underline"
            >
              Try it free →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
