import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Cold Email Deliverability in 2026: The Practical Checklist | ColdCrow Blog",
    description:
          "Cold email only works when it lands in the inbox. This checklist covers SPF/DKIM/DMARC, warmup, sending limits, content signals, and the metrics that matter for deliverability in 2026.",
    keywords: [
          "cold email deliverability",
          "email spam checklist",
          "cold email warmup",
          "sender reputation",
          "email bounce rate",
        ],
};
export default function BlogPost() {
    return (
          <main className="min-h-screen bg-white">
                <div className="mx-auto max-w-3xl px-6 py-16">
                        <p className="text-sm font-medium text-indigo-600">
                                  <Link href="/blog" className="hover:underline">
                                              ← All posts
                                  </Link>Link>
                        </p>p>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                                  Cold Email Deliverability in 2026: The Practical Checklist
                        </h1>h1>
                        <p className="mt-3 text-sm text-gray-500">
                                  October 3, 2026 · 6 min read · by ColdCrow
                        </p>p>
                        <div className="prose prose-lg mt-8 text-gray-700">
                                  <p>
                                              Cold email only works when it lands in the inbox. You can write the
                                              perfect message, but if it bounces or drops into spam, nobody reads
                                              it. This checklist covers everything that moves deliverability —
                                              the parts most teams skip and the ones that actually matter.
                                  </p>p>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              1. Authentication is table stakes
                                  </h2>h2>
                                  <p>
                                              Before you send a single email, verify your sending domain has all
                                              three records:
                                  </p>p>
                                  <ul>
                                              <li>
                                                            <strong>SPF</strong>strong> — which servers are allowed to send for your
                                                            domain
                                              </li>li>
                                              <li>
                                                            <strong>DKIM</strong>strong> — cryptographic signature proving the email
                                                            wasn&apos;t tampered with
                                              </li>li>
                                              <li>
                                                            <strong>DMARC</strong>strong> — policy for how receivers treat
                                                            unauthenticated mail
                                              </li>li>
                                  </ul>ul>
                                  <p>
                                              Without all three, Gmail and Outlook will quietly route your emails
                                              to spam or reject them outright. Check with a tool like MXToolbox or
                                              the built-in checks in your sending platform.
                                  </p>p>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              2. Warm up your domain before volume
                                  </h2>h2>
                                  <p>
                                              A brand-new domain that suddenly sends 500 emails a day is a red
                                              flag. Warm up gradually:
                                  </p>p>
                                  <ul>
                                              <li>Week 1: 20-30 emails per day</li>li>
                                              <li>Week 2: 50-75 per day</li>li>
                                              <li>Week 3: 100-150 per day</li>li>
                                              <li>Week 4+: scale toward your target</li>li>
                                  </ul>ul>
                                  <p>
                                              Warmup only works if recipients actually open and reply. Send to
                                              engaged contacts first, and never warm up with fake accounts —
                                              providers detect that pattern.
                                  </p>p>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              3. Respect sending limits per inbox
                                  </h2>h2>
                                  <p>Every provider has thresholds. Stay well below them:</p>p>
                                  <ul>
                                              <li>
                                                            Gmail: 500 emails/day per account is the hard ceiling; 30-50 is
                                                            safer for cold outreach
                                              </li>li>
                                              <li>Outlook: 50-100/day depending on account age</li>li>
                                              <li>Keep 3-5 inboxes in rotation to spread volume safely</li>li>
                                  </ul>ul>
                                  <p>
                                              The number that matters is not what the provider allows, but what
                                              keeps bounce rates under 2% and spam complaints under 0.1%.
                                  </p>p>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              4. Content signals that keep you out of spam
                                  </h2>h2>
                                  <ul>
                                              <li>
                                                            <strong>Personalize the first line</strong>strong> — reference something
                                                            real about the company. Generic templates get flagged by both
                                                            filters and humans.
                                              </li>li>
                                              <li>
                                                            <strong>Keep it under 120 words</strong>strong> — short emails get more
                                                            replies and trip fewer filters.
                                              </li>li>
                                              <li>
                                                            <strong>No spammy phrases</strong>strong> — avoid &quot;guaranteed&quot;,
                                                            &quot;act now&quot;, &quot;limited time&quot;, all-caps, and
                                                            excessive exclamation marks.
                                              </li>li>
                                              <li>
                                                            <strong>One plain link max</strong>strong> — multiple links increase spam
                                                            scoring.
                                              </li>li>
                                              <li>
                                                            <strong>Use a real sender name</strong>strong> — a person&apos;s name
                                                            with a company domain beats &quot;no-reply&quot; or &quot;info&quot;
                                                            addresses.
                                              </li>li>
                                  </ul>ul>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              5. Monitor the metrics that matter
                                  </h2>h2>
                                  <ul>
                                              <li>
                                                            <strong>Bounce rate</strong>strong> — above 3%, your list has bad
                                                            addresses. Clean it before sending more.
                                              </li>li>
                                              <li>
                                                            <strong>Spam complaint rate</strong>strong> — above 0.1% (1 in 1000),
                                                            providers start throttling you.
                                              </li>li>
                                              <li>
                                                            <strong>Open rate</strong>strong> — below 20% after warmup usually
                                                            signals a domain reputation problem, not bad copy.
                                              </li>li>
                                              <li>
                                                            <strong>Reply rate</strong>strong> — this is the metric that pays. If
                                                            replies are low, fix the message, not the volume.
                                              </li>li>
                                  </ul>ul>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              6. Handle bounces immediately
                                  </h2>h2>
                                  <p>
                                              Hard bounces (permanent failure) should be removed from your list
                                              automatically. Repeatedly sending to dead addresses is the fastest
                                              way to destroy your sender reputation.
                                  </p>p>
                                  <h2 className="text-2xl font-bold text-gray-900">
                                              The 30-second audit
                                  </h2>h2>
                                  <p>
                                              If your cold outreach isn&apos;t converting, run this audit in
                                              order:
                                  </p>p>
                                  <ol>
                                              <li>Is my domain authenticated with SPF, DKIM, and DMARC?</li>li>
                                              <li>Is my sending volume within safe limits for the account age?</li>li>
                                              <li>Is my bounce rate under 2%?</li>li>
                                              <li>Is my first line personalized to each recipient?</li>li>
                                              <li>Is my email under 120 words with one CTA?</li>li>
                                  </ol>ol>
                                  <p>
                                              Fix these five and you will see more replies — no new tool needed.
                                              Deliverability is mostly discipline, not technology.
                                  </p>p>
                                  <p>
                                              ColdCrow scores your cold emails for deliverability before you send
                                              — write your email, see the risk, fix it, send with confidence.
                                  </p>p>
                                  <p>
                                              <Link
                                                              href="/try"
                                                              className="text-indigo-600 font-medium hover:underline"
                                                            >
                                                            Try it free →
                                              </Link>Link>
                                  </p>p>
                        </div>div>
                </div>div>
          </main>main>
        );
}
</main>
