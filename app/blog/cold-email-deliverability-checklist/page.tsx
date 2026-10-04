import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 2026 Cold Email Deliverability Checklist (SPF, DKIM, DMARC)",
  description:
    "A beautiful cold email means nothing if it lands in spam. Here is the 2026 deliverability checklist: DNS records, warmup, sending volume, link strategy, and the reply habit that keeps your domain healthy.",
  openGraph: {
    title: "The 2026 Cold Email Deliverability Checklist (SPF, DKIM, DMARC)",
    description:
      "The 10-point deliverability checklist that keeps cold emails out of spam in 2026 - DNS records, warmup, volume, links, and engagement.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        The 2026 Cold Email Deliverability Checklist (SPF, DKIM, DMARC)
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 8 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          Here is the uncomfortable truth about cold email: <strong>the best-written email in the
          world is worth zero if it lands in spam</strong>. Reply rates are usually a deliverability
          problem wearing a copy problem&apos;s clothes.
        </p>
        <p>
          Most teams rewrite their subject lines for weeks when they should fix their DNS records
          in an afternoon. This is the 2026 checklist - run it once, and your emails start reaching
          the inbox instead of the abyss.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 1: The DNS triple - SPF, DKIM, DMARC</h2>
        <p>
          Three DNS records prove to Google and Microsoft that your email is really from your
          domain. Without them, inbox providers treat you like a stranger.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>SPF</strong> - lists which servers are allowed to send mail for your domain.
          Usually one TXT record like <code>v=spf1 include:_spf.yourprovider.com ~all</code>.</li>
          <li><strong>DKIM</strong> - signs your emails with a private key; the public key sits in
          DNS. Your provider gives you the selector and value (e.g. <code>default._domainkey</code>).</li>
          <li><strong>DMARC</strong> - tells providers what to do with unauthenticated mail
          (<code>p=none</code> to start, then <code>p=quarantine</code>).</li>
        </ul>
        <p>
          Check yours with a free tool like dmarcian or Google Admin Toolbox - paste your domain
          and look for three green checks.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 2: Warm up before you send</h2>
        <p>
          A brand-new domain or mailbox that suddenly sends 100 emails triggers every spam filter.
          Warm up over 2-3 weeks: start at 5-10 emails per day, add 5 per day, and only send to
          people likely to open and reply.
        </p>
        <p>
          If you are using a fresh domain for outbound, give it <strong>two weeks of low-volume
          sending before any campaign</strong>. Most deliverability disasters happen in week one.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 3: Respect volume ceilings</h2>
        <p>
          The safe range for a single warmed mailbox is roughly <strong>10-30 emails per day</strong>.
          Push past 50 and spam complaints start compounding. If you need more volume, add
          mailboxes and domains - not more sends from one address.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 4: Links are a lever - use them late</h2>
        <p>
          Every link raises your spam score. Rules of thumb:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>No links in the first email or first follow-up.</li>
          <li>Put the link in the second or third touch, or offer it on reply.</li>
          <li>Never use link shorteners on cold email - they look exactly like spam.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">Step 5: Watch the words that trigger filters</h2>
        <p>
          Avoid all-caps, excessive exclamation marks, and classic spam phrases
          (&quot;guaranteed&quot;, &quot;free trial!!!&quot;, &quot;act now&quot;). Write like a person
          writing to a person: short sentences, one ask, no urgency theater.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 6: Reply to every reply</h2>
        <p>
          Engagement is the strongest inbox signal. A mailbox that replies quickly gets better
          placement; a mailbox that sends and never engages drifts toward spam. Set a rule: any
          reply gets answered within the hour.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 7: Verify the list before sending</h2>
        <p>
          Bounces are the fastest way to wreck a domain. Verify every address before a campaign -
          a 3% bounce rate is already toxic. If you are unsure about an address, leave it out.
          A smaller, verified list beats a big, rotting one.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The checklist in one line</h2>
        <p>
          DNS records green, mailbox warmed, 10-30 sends a day, no early links, no spam language,
          fast replies, verified list. That is the entire game. Do this and your email has a fair
          fight for the inbox - then the copy can do its job.
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-semibold text-gray-900">
            Want a deliverability score before you hit send?
          </p>
          <p className="mt-1 text-sm">
            ColdCrow scores every generated email for deliverability risk - flagging spam
            triggers, link placement, and length - before you send. Free to try, no card needed.{" "}
            <a href="/try" className="font-medium text-blue-600 hover:underline">
              Try it here
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
