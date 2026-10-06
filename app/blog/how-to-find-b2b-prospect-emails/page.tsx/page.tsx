import Link from "next/link";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "How to Find B2B Prospect Email Addresses in 2026 (Free Methods)",
  description:
    "You can't send a cold email without an address. Here are the free, reliable ways to find anyone's business email in 2026.",
  openGraph: {
    title: "How to Find B2B Prospect Email Addresses in 2026",
    description:
      "Free, reliable ways to find any B2B prospect's email address.",
  },
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          <p className="mb-3 text-sm font-medium text-orange-600">Oct 6, 2026 · 6 min read</p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Find B2B Prospect Email Addresses in 2026 (Free Methods)
          </h1>

          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <p>
              Cold email starts with an address. If you can't find the right person's inbox, the best copy in the world does nothing. The good news: 80% of business emails follow predictable patterns, and the rest are findable with the right moves. Here's the exact process, free, in 2026.
            </p>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Step 1: Identify the Person, Not Just the Company</h2>
            <p>
              "Contact us" inboxes are graveyards. You want the person who owns the problem you solve: a founder, sales leader, or operations lead. Use LinkedIn to find the role, then verify they're the right stakeholder before spending 10 minutes hunting their email.
            </p>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Step 2: Guess the Pattern (Works 60-70% of the Time)</h2>
            <p>
              Most companies use one of five patterns. You can often find one verified example (from a blog post, a press release, or a team page) and extrapolate:
            </p>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li><strong>first@company.com</strong> — common at startups</li>
                <li><strong>first.last@company.com</strong> — most common overall</li>
                <li><strong>firstl@company.com</strong> — compact startups</li>
                <li><strong>first.last@companydomain</strong> — agencies and services</li>
                <li><strong>f.last@company.com</strong> — larger orgs</li>
              </ul>
            </div>
            <p>
              To verify a guess: paste the address into a free verification tool (Hunter, NeverBounce, or Mailmeteor's checker all have free tiers). A verified address means the mailbox exists — the difference between a bounce and a reply.
            </p>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Step 3: Find the Pattern From Public Sources</h2>
            <p>
              If guessing fails, find one real address first:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Google the company + "@" + domain</strong> — press releases, PDFs, and event speaker pages leak real addresses constantly.</li>
              <li><strong>Check their team/about page</strong> — many smaller companies publish direct addresses.</li>
              <li><strong>GitHub commits</strong> — if the company has a public repo, commit history often contains an employee's real email.</li>
              <li><strong>Twitter/X bio or site footer</strong> — founders frequently publish their address for sales inquiries.</li>
            </ul>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Step 4: Use the Right Free Tools</h2>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li><strong>Hunter</strong> — free 25 searches/month, finds and verifies patterns</li>
                <li><strong>Snov.io</strong> — free 50 credits, good for domain search</li>
                <li><strong>Mailmeteor</strong> — free verification from Gmail</li>
                <li><strong>Apollo (free tier)</strong> — 100 free credits/month, includes direct dials</li>
                <li><strong>Google</strong> — honestly, the best tool. Search "{name} {company} email"</li>
              </ul>
            </div>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Step 5: Verify Before You Send</h2>
            <p>
              Bounces destroy domain reputation. One bounced email is 10x worse than a spam complaint for your sender score. Always verify an address before it enters your sequence — a single free verification credit costs nothing compared to a burned domain.
            </p>

            <h2 className="pt-4 text-xl font-bold text-gray-900">The 80/20 Shortcut</h2>
            <p>
              Pattern-guess + one free verification pass will get you a valid address for 7 out of 10 prospects in under two minutes. The remaining three are either not worth chasing or need a 5-minute hunt. Don't over-invest: your time is better spent on the email itself.
            </p>
            <p>
              Once you have the address, the next question is what to send. That's where the personalization loop starts — and where most senders lose the game.
            </p>
            <p>
              <Link href="/try" className="font-medium text-orange-600 hover:text-orange-700">
                Write a personalized cold email in seconds — free →
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
