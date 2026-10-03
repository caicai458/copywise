import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Why Your Cold Emails Go to Spam (And How to Fix It) | ColdCrow Blog",
  description:
    "Your cold emails land in spam for three reasons: untrusted sending setup, content that trips filters, and a list full of dead addresses. Here is the pre-send checklist that fixes all three.",
  keywords: [
    "cold email spam",
    "email deliverability fix",
    "why emails go to spam",
    "sender reputation",
    "cold email setup",
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
          Why Your Cold Emails Go to Spam (And How to Fix It)
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 3, 2026 · 5 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            You write a great cold email. It&apos;s personalized, short, and has
            a clear ask. And then it lands in spam — where nobody reads it.
            Here&apos;s what&apos;s actually happening, and how to fix it before
            you hit send.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The three reasons emails get flagged
          </h2>
          <h3 className="text-xl font-bold text-gray-900">
            1. Your sending setup is untrusted
          </h3>
          <p>
            New domains and email accounts start with zero reputation. If your
            domain is a week old and you send 200 emails on day one, the mailbox
            providers see a pattern that looks like spam. Warm up slowly: start
            with 10-20 emails a day and ramp over 2-3 weeks.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            2. Your content trips spam filters
          </h3>
          <p>
            Words like &quot;free,&quot; &quot;guaranteed,&quot;
            &quot;act now,&quot; &quot;100%,&quot; and excessive exclamation
            marks are classic triggers. So are embedded links — especially if
            the link domain doesn&apos;t match your sending domain. One clean
            link to your own site is fine; five links to different domains is a
            red flag.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            3. Your list is full of dead or fake addresses
          </h3>
          <p>
            Bounce rates above 3-5% destroy your sender reputation fast. Every
            hard bounce tells the provider &quot;this sender doesn&apos;t know
            who they&apos;re emailing.&quot; Verify your list before you send —
            remove invalid addresses, old roles like &quot;info@&quot; and
            &quot;support@&quot;, and anyone who hasn&apos;t engaged in 6+
            months.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The pre-send checklist
          </h2>
          <ul>
            <li>Domain has SPF, DKIM, and DMARC records set up correctly</li>
            <li>
              Sending account is at least 2-4 weeks old with gradual ramp
            </li>
            <li>
              Email under 120 words, no spam-trigger words, no excessive
              punctuation
            </li>
            <li>One link max, to your own domain, in a natural place</li>
            <li>
              List verified: no invalid addresses, no role-based addresses
            </li>
            <li>Plain text or minimal HTML — no big images, no attachments</li>
            <li>
              Personalization in the first line (name + specific observation,
              not just name)
            </li>
            <li>No more than 30-50 emails per account per day</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            What to do if you&apos;re already in spam
          </h2>
          <ol>
            <li>
              <strong>Stop sending to the same list immediately.</strong> More
              sends only deepen the problem.
            </li>
            <li>
              <strong>Check your SPF/DKIM/DMARC</strong> — most deliverability
              failures trace back to missing authentication records.
            </li>
            <li>
              <strong>Send a small test</strong> (10-15 emails to addresses you
              control) and check placement across Gmail, Outlook, and a work
              inbox.
            </li>
            <li>
              <strong>Improve content</strong> — shorter, less salesy, one clear
              ask.
            </li>
            <li>
              <strong>Ramp back up slowly</strong> — 20-30 per day for a week,
              then increase.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-gray-900">
            The metric that matters
          </h2>
          <p>
            Watch your <strong>reply rate</strong>, not your open rate. If
            replies go up, you&apos;re building a good sender reputation. If you
            get replies but still land in spam sometimes, it&apos;s a content
            issue. If you get zero replies and zero opens, it&apos;s a setup
            issue. Fix the root cause, not the symptom.
          </p>
          <p>
            ColdCrow scores your cold emails for deliverability before you send
            — write your email, see the risk, fix it, send with confidence.
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
