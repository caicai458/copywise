import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "5 Cold Email Openers That Actually Get Replies | ColdCrow Blog",
  description:
    "Your first line decides whether your cold email gets read or deleted in two seconds. Here are five opener patterns that work in 2026, with real examples you can adapt.",
  keywords: [
    "cold email openers",
    "cold email first line",
    "sales email openers",
    "outreach examples",
    "cold email tips",
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
          5 Cold Email Openers That Actually Get Replies
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 3, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Your first line decides whether your cold email gets read or deleted
            in two seconds. Here are five opener patterns that work in 2026,
            with real examples you can adapt.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Why openers matter
          </h2>
          <p>
            Most cold emails die at the subject line and first sentence. Your
            reader has 30 seconds of attention. If you open with a compliment, a
            pitch, or a generic greeting, you&apos;ve lost them. These five
            patterns all share one trait: they open with the recipient, not with
            you.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            1. The specific observation
          </h2>
          <p>
            Reference something real about their product, launch, or company.
            This proves you did the work — which is rarer than you think.
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic">
            Saw you shipped [feature] last week — the [specific detail] caught
            my eye.
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            2. The industry question
          </h2>
          <p>
            Ask about something they likely think about but rarely get asked.
            Make it easy to answer in one sentence.
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic">
            Most [type of company] I talk to are still [pain point]. Are you
            seeing the same?
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            3. The acknowledged tradeoff
          </h2>
          <p>
            Name a decision they made and show you understand the tradeoff. This
            builds instant credibility.
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic">
            Building [X] in-house instead of buying [Y] only makes sense if you
            have the team for it — seems like you do.
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            4. The shared-community angle
          </h2>
          <p>
            If they wrote a post, spoke somewhere, or have a public take,
            reference it. People reply to people who engage with their ideas.
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic">
            Your post on [topic] made a point about [detail] that I keep coming
            back to.
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            5. The honest premise
          </h2>
          <p>
            Sometimes honesty beats cleverness. State plainly why you&apos;re
            writing and what you&apos;re asking — in one breath.
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic">
            I&apos;ll keep this short: I&apos;m [name], I build [product], and I
            have a question about how you handle [topic].
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            The rule behind all five
          </h2>
          <p>
            Never open with yourself. No &quot;I&apos;m the founder of&quot;, no
            &quot;I wanted to reach out&quot;, no &quot;I hope this finds you
            well&quot;. Every word in the first two lines should be about them.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            What comes after the opener
          </h2>
          <p>A good opener earns you ten seconds. Use them for:</p>
          <ul>
            <li>
              One sentence of context about what you do (not a feature list)
            </li>
            <li>One genuine question that&apos;s easy to answer</li>
            <li>
              A soft, single CTA — reply, book 10 minutes, or &quot;no pitch,
              either way&quot;
            </li>
          </ul>
          <p>
            Keep the whole email under 120 words. Short emails get more replies,
            period.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Test before you scale
          </h2>
          <p>
            Write two variants of every opener. Send 10 of each. Keep the one
            with more replies, iterate on the loser. That&apos;s the whole
            system — and it beats any template library.
          </p>
          <p>
            Want a personalized cold email with a deliverability score in
            seconds? Describe your prospect and get a reply-worthy email
            immediately.
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
