import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cold Email vs. LinkedIn Outreach: Where Should a B2B Founder Spend 30 Minutes a Day? | ColdCrow Blog",
  description:
    "The honest, unglamorous playbook for early-stage B2B SaaS growth: cold email, LinkedIn, targeting and subject lines that actually get replies.",
  keywords: [
    "cold email vs linkedin",
    "B2B outreach strategy",
    "cold email outreach",
    "linkedin prospecting",
    "SaaS lead generation"
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
          Cold Email vs. LinkedIn Outreach: Where Should a B2B Founder Spend 30 Minutes a Day?
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 15, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            <em>The debate every early-stage B2B SaaS founder runs into. Here&apos;s the honest math, and what we&apos;d do with 30 minutes daily.</em>
          </p>
          <p>
            You&apos;re at zero paying customers. You have maybe 30 minutes a day for outreach. Cold email or LinkedIn?
          </p>
          <p>
            It&apos;s the wrong question — but the answer still matters, because most founders pick one channel, go all-in, and quit both when neither delivers in two weeks. Here&apos;s how we think about it.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            What each channel actually is
          </h2>
          <p>
            <strong>Cold email</strong> is a <em>sales</em> channel. It&apos;s direct, measurable, and fast to test. You write a targeted email, it lands in a decision-maker&apos;s inbox, and you get a reply rate you can optimize week to week.
          </p>
          <p>
            <strong>LinkedIn</strong> is a <em>relationship</em> channel. It&apos;s slower, compounding, and only works once you have something to compound — a network, a profile that looks credible, a history of useful comments.
          </p>
          <p>
            That distinction changes what you should do with your first 30 minutes.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The 30-minute daily split we&apos;d run
          </h2>
          <p>
            <strong>20 minutes: cold email, properly done</strong>
          </p>
          <ul>
            <li>
              5 targeted, researched emails a day (not 50 blasts)
            </li>
            <li>
              Every email references something specific about the prospect&apos;s company or recent activity
            </li>
            <li>
              Short — 90-120 words, one question, one reason to reply
            </li>
            <li>
              Verified addresses, warmed-up domain, SPF/DKIM/DMARC in place before you send a single one
            </li>
          </ul>
          <p>
            This is the channel where a first customer is most likely to come from. The math: 5 emails × 20 business days = 100 tailored touches a month. At even a 2% reply rate, that&apos;s 2 real conversations — and conversations are what convert at zero budget.
          </p>
          <p>
            <strong>10 minutes: LinkedIn, done as a trust layer</strong>
          </p>
          <ul>
            <li>
              5 genuine comments on posts from founders at companies you&apos;d love as customers
            </li>
            <li>
              No pitching in the comments. Add a specific observation or a useful resource
            </li>
            <li>
              Keep your profile current: clear headline, what you&apos;re building, one good pinned post
            </li>
          </ul>
          <p>
            You&apos;re not expecting a sale from these comments. You&apos;re building the profile that makes your eventual outreach <em>not feel cold</em>. When you do send a connection request, it&apos;s warm.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            What we learned the hard way
          </h2>
          <ol>
            <li>
              <strong>14 cold emails is not a test.</strong> Most founders quit after sending single digits. You can&apos;t judge a channel on 14 sends. Judge it on 100 tailored, delivered, tracked emails.
            </li>
            <li>
              <strong>X/Twitter is not a distribution channel at small scale.</strong> ~400 followers feels like momentum but drives few first customers. Treat it as credibility, not acquisition.
            </li>
            <li>
              <strong>LinkedIn with 0 connections is a cold start.</strong> Posting alone goes nowhere until you build a network — which takes weeks of consistent commenting. It&apos;s a second-order channel.
            </li>
            <li>
              <strong>Directories are a drip, not a spike.</strong> Submit once, move on.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-gray-900">
            The verdict
          </h2>
          <p>
            If you have 30 minutes a day and zero customers: <strong>spend 20 on cold email, 10 on LinkedIn comments.</strong> Reassess after 3 weeks of doing both consistently — not after 3 days of one.
          </p>
          <p>
            Cold email gets you the first conversations. LinkedIn makes everything after those conversations warmer. Neither replaces the other.
          </p>
          <p>
            <em>This is a live playbook from the ColdCrow team. We build an <Link href="/try" className="text-indigo-600 font-medium hover:underline">AI cold email writer</Link> that turns a prospect&apos;s profile into a personalized, deliverability-scored cold email in seconds — free to try.</em>
          </p>
          <p>
            ColdCrow helps you write the personalized, deliverability-scored
            cold email part. 
            <Link href="/try" className="text-indigo-600 font-medium hover:underline">
              Try it free →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
