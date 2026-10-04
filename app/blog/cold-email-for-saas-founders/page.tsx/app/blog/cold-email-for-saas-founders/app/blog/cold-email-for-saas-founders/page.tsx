import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email for SaaS Founders: The 4-Touch Playbook That Books Calls",
  description:
    "Cold email for SaaS is a different game: your buyers are already drowning in tools. Here is the 4-touch playbook - ICP targeting, 3-line emails, value-first follow-ups - that books discovery calls without burning your domain.",
  openGraph: {
    title: "Cold Email for SaaS Founders: The 4-Touch Playbook That Books Calls",
    description:
      "The 4-touch cold email playbook for SaaS founders: ICP targeting, 3-line emails, value-first follow-ups, and the metrics that matter.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Cold Email for SaaS Founders: The 4-Touch Playbook That Books Calls
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 8 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          If you are a SaaS founder doing cold email in 2026, you have two problems: your buyers
          are drowning in tools, and their inbox is where every other tool&apos;s founder is also
          shouting.
        </p>
        <p>
          The good news: <strong>cold email still works for SaaS - if you stop emailing like a
          product and start emailing like a peer</strong>. This is the playbook we have seen book
          calls for seed and series-A companies, without burning domains or budgets.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 0: Narrow the ICP until it hurts</h2>
        <p>
          The biggest mistake is a broad list. &quot;Anyone who could use our tool&quot; is not an
          ICP - it is a spam list. Pick the intersection where reply rates actually live:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>One role</strong> (e.g. Head of Growth at B2B SaaS, 20-200 employees).</li>
          <li><strong>One trigger</strong> (hiring salespeople, raised a Series A, changed pricing,
          posted about outbound).</li>
          <li><strong>One wedge</strong> (your feature that maps to their current stack&apos;s gap).</li>
        </ul>
        <p>
          A list of 200 perfect prospects beats a list of 5,000 maybes. Every good email starts
          with a good list.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Touch 1: The 3-line email (Day 1)</h2>
        <p>
          The first email is not a pitch. It is a permission slip for a conversation. Three lines
          is a hard rule:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
{`Line 1 - What you noticed about them:
"Saw [company] is hiring 3 AEs - looks like outbound is becoming
a real channel for you."

Line 2 - The one relevant thing about you:
"We built ColdCrow - AI cold email writer that drafts personalized
outreach in seconds."

Line 3 - The low-effort ask:
"Curious if you're using a tool or going manual?"`}
        </pre>
        <p>
          No links, no case studies, no pricing. Under 60 words. The goal is a reply, and a reply
          is 10x more valuable than a click.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Touch 2: The value touch (Day 3)</h2>
        <p>
          No ask. One useful thing tied to their trigger. For the AEs example: a benchmark on
          AE reply rates by first-touch channel, or a two-line framework from a similar company&apos;s
          launch. The point is to be worth opening, so the next ask lands.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Touch 3: The second ask (Day 7)</h2>
        <p>
          Reference your first email lightly, then ask something new and specific:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>&quot;Totally fine if this is a busy week - quick question…&quot;</li>
          <li>&quot;Is outbound a Q4 priority for [company], or are you still testing?&quot;</li>
          <li>&quot;Would it help if I sent over how [similar company] structured their first
          campaign?&quot;</li>
        </ul>
        <p>
          Notice the pattern: every ask gives them an easy out. Pressure kills replies in B2B.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Touch 4: The break-up (Day 14)</h2>
        <p>
          &quot;Going to close the loop here. If timing is wrong, happy to revisit in a quarter.&quot;
          This email gets disproportionate replies because it removes pressure. Then stop - one
          more touch after a break-up is how domains get burned.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The metrics that matter</h2>
        <p>
          Ignore vanity metrics. Track four numbers:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Reply rate</strong> (benchmark: 5-15% on a clean list, higher if your ICP
          is tight).</li>
          <li><strong>Positive reply rate</strong> (&quot;interested&quot; / &quot;book a call&quot;
          - this is the one that pays).</li>
          <li><strong>Bounce rate</strong> (keep under 3%; verify your list before every send).</li>
          <li><strong>Domain health</strong> (spam rate under 0.1%; keep volume under 30/mailbox/day).</li>
        </ul>
        <p>
          If replies are low, the fix is almost always the list or the personalization, not more
          volume. If bounces are high, stop sending and verify.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The founder&apos;s edge</h2>
        <p>
          As a founder, you have one unfair advantage: you can be specific. Your product, your
          customers, your mistakes - all of it is material no sales rep can fake. Use it. Write
          emails that could only be sent by someone who built the thing.
        </p>
        <p>
          The companies that win at cold email in 2026 are not the ones with the biggest lists.
          They are the ones whose emails feel like a person reaching out - and who follow up
          until the sequence is done.
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-semibold text-gray-900">
            Writing this for every prospect by hand is a day&apos;s work.
          </p>
          <p className="mt-1 text-sm">
            ColdCrow generates a personalized cold email from a prospect&apos;s name and company -
            with a deliverability score - in seconds. Free to try, no card needed.{" "}
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

