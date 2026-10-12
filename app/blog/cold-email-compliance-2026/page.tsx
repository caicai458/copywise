import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "CAN-SPAM & GDPR for Cold Email in 2026: What's Legal, What's Not | ColdCrow Blog",
  description:
    "Cold email is legal in the US and most of Europe — if you follow the rules. Here is the plain-English compliance checklist for 2026.",
  keywords: [
    "cold email legal",
    "CAN-SPAM compliance",
    "GDPR cold email",
    "cold email laws",
    "email marketing compliance",
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
          CAN-SPAM &amp; GDPR for Cold Email in 2026: What&apos;s Legal, What&apos;s
          Not
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 12, 2026 · 6 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            &quot;Is cold email even legal?&quot; It&apos;s the first question
            every founder asks — and the answer is yes, in the US and most of
            Europe, if you follow the rules. This is not legal advice, but here
            is the plain-English checklist that keeps most B2B outreach on the
            right side of the law.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            CAN-SPAM: the US baseline (and it&apos;s generous)
          </h2>
          <p>
            CAN-SPAM applies to almost all commercial email sent to US
            addresses. The important thing: <strong>it does not require prior
            consent</strong>. You can cold-email a business contact — you just
            have to be honest. The requirements:
          </p>
          <ul>
            <li>
              <strong>Accurate From line</strong> — your real name or business,
              nothing misleading.
            </li>
            <li>
              <strong>Honest subject line</strong> — no bait-and-switch.
            </li>
            <li>
              <strong>A clear opt-out</strong> — a working unsubscribe link
              (or reply with &quot;unsubscribe&quot;) that you honor within 10
              business days.
            </li>
            <li>
              <strong>A physical address</strong> — a real street address in
              the footer.
            </li>
            <li>
              <strong>Identify it as an ad</strong> — optional in the US, but
              good practice.
            </li>
          </ul>
          <p>
            Penalties are per-email and can reach tens of thousands of dollars
            each, so the mechanics matter even though the bar is low.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            GDPR and PECR: Europe is stricter
          </h2>
          <p>
            If you email EU or UK contacts, GDPR adds a layer. Cold email to a
            <strong> business address</strong> is generally treated differently
            from email to a consumer:
          </p>
          <ul>
            <li>
              <strong>Legitimate interest</strong> is the usual legal basis for
              B2B cold outreach — but you must do a balancing test (is this
              relevant to their business, is it proportionate, are they a real
              prospect?).
            </li>
            <li>
              <strong>Consumers need opt-in</strong> under PECR-style rules in
              most EU countries and the UK — don&apos;t cold-email personal
              addresses.
            </li>
            <li>
              <strong>Honor objections instantly</strong> — if someone says stop,
              stop. No &quot;one more email&quot;.
            </li>
            <li>
              <strong>Be transparent</strong> — tell them who you are and, on
              request, where you got their address.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            The 2026 compliance checklist
          </h2>
          <ol>
            <li>
              Real sender name and business in the From line.
            </li>
            <li>
              Subject line that matches the content.
            </li>
            <li>
              Working unsubscribe link, honored within 10 business days (US) —
              ideally instantly.
            </li>
            <li>
              Physical business address in the footer.
            </li>
            <li>
              Target only business addresses with a genuine relevance to your
              product.
            </li>
            <li>
              No purchased lists, no scraped personal emails — verify addresses
              and relevance.
            </li>
            <li>
              Immediate stop on any opt-out or objection.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-gray-900">
            The practical takeaway
          </h2>
          <p>
            Legal cold email is short, honest, relevant and easy to opt out of.
            That happens to be exactly what gets replies — spammy volume and
            tricked subject lines are both illegal-risk and conversion-killers.
            Comply, keep it relevant, and the law is on your side.
          </p>
          <p>
            ColdCrow helps you write the honest, relevant part — personalized
            cold emails with a deliverability score before you send.
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
