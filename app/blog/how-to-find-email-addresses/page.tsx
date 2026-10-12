import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How to Find Anyone's Email Address for Cold Outreach (2026) | ColdCrow Blog",
  description:
    "Stuck on the first step of cold email? Here are the 2026 methods to find a prospect's email address: free tools, pattern guessing with verification, and the social-proof trick most people skip.",
  keywords: [
    "find email address",
    "find business email",
    "cold email prospecting",
    "email finder",
    "B2B lead generation",
  ],
  alternates: {
    canonical: "/blog/how-to-find-email-addresses",
  },
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
          How to Find Anyone&apos;s Email Address for Cold Outreach (2026)
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 12, 2026 · 6 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            The hardest part of cold email isn&apos;t writing — it&apos;s
            finding the address. Most companies hide their emails behind forms
            and gatekeeping, and paid tools are expensive. Here&apos;s the
            free-and-cheap stack that works in 2026.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Method 1: The pattern trick (fastest, free)
          </h2>
          <p>
            Most companies use a consistent email pattern. Find one public
            address on the domain (from a blog post, GitHub commit, press
            release, or conference page) and you can often guess the rest:
          </p>
          <ul>
            <li>
              <code>firstname@company.com</code>
            </li>
            <li>
              <code>firstname.lastname@company.com</code>
            </li>
            <li>
              <code>f.lastname@company.com</code>
            </li>
            <li>
              <code>firstname@team.company.com</code>
            </li>
          </ul>
          <p>
            <strong>Always verify before sending.</strong> A wrong guess
            bounces and hurts your sender reputation. Free verification: check
            the MX record exists, then send a test to a mailbox you control or
            use a verification tool&apos;s free tier.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Method 2: Public sources most people skip
          </h2>
          <ul>
            <li>
              <strong>GitHub:</strong> committers&apos; emails are often public
              in commit history or profile settings
            </li>
            <li>
              <strong>Press releases:</strong> PR contacts are real people
              expecting outreach
            </li>
            <li>
              <strong>Conference speaker pages:</strong> speakers are
              approachable and relevant
            </li>
            <li>
              <strong>Podcast guest pages:</strong> guests explicitly want to
              be found
            </li>
            <li>
              <strong>Company blog authors:</strong> the byline email is
              frequently clickable
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Method 3: The social proof shortcut
          </h2>
          <p>
            Search LinkedIn for the person&apos;s name plus the company domain
            in a phrase like &quot;@company.com&quot;. People paste their
            addresses in comments, threads, and posts all the time. Same for
            X/Twitter bios — many B2B operators keep a work address there for
            business inquiries.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Method 4: Free tiers of paid tools
          </h2>
          <p>
            Email finder tools (Hunter, Apollo, Snov, Findymail) all have free
            tiers: 25-50 verified credits a month, no card required. Use them
            for your highest-value prospects — the ones where a wrong guess
            costs a relationship — and use the pattern method for the rest.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            When to use role addresses instead
          </h2>
          <p>
            <code>support@</code>, <code>hello@</code>, and
            <code>sales@</code> addresses have lower reply rates — but they
            also never bounce, and they often route to a human whose job is to
            respond. For tool companies evaluating AI products (like most of
            the prospects in your ICP), a well-written email to
            <code>support@</code> gets forwarded to product or partnerships
            surprisingly often.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The verification rule
          </h2>
          <p>
            Every address you find — guessed or sourced — needs one check:
            does the domain have a valid MX record? No MX, no send. After that,
            keep your bounce rate under 3% by never emailing addresses
            you&apos;re not confident about.
          </p>
          <p>
            Once you have the address, the writing should be the fastest part.
            ColdCrow turns a prospect description into a personalized,
            deliverability-scored draft in seconds — so your time goes into
            research, not the blank page.
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
