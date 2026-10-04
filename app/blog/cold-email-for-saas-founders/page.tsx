import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email for SaaS Founders: The 2026 Playbook",
  description:
    "SaaS founders have the unfair advantage of a product people can try. Here is the 2026 cold email playbook for SaaS: the accounts worth emailing, what to say, and how to route every reply to a signup.",
  openGraph: {
    title: "Cold Email for SaaS Founders: The 2026 Playbook",
    description:
      "The cold email playbook for SaaS founders: targeting the right accounts, writing 100-word emails, and moving every reply toward a free trial.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Cold Email for SaaS Founders: The 2026 Playbook
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 10 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          SaaS has one advantage over every other business in cold email: <strong>you can let the
          product sell itself</strong>. You do not need a demo call, a pitch deck, or a 12-touch
          campaign - you need a conversation that ends with a click on your trial.
        </p>
        <p>
          Here is the 2026 playbook: who to email, what to say, and how to turn replies into
          signups without a single sales call.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 1: Email accounts, not individuals</h2>
        <p>
          For SaaS, the best targets are companies, and the best inbox is a team one:
          <code> founders@</code>, <code>hello@</code>, <code>sales@</code> - not cold-guessing
          someone&apos;s personal address. Why? Team inboxes get forwarded to the person who owns
          the problem, and they cost zero deliverability risk (no bounce, no guesswork).
        </p>
        <p>
          Prioritize: <strong>(1)</strong> companies whose product you genuinely used and can
          reference, <strong>(2)</strong> companies at your stage doing the thing you automate,
          <strong> (3)</strong> companies that just shipped something (launch = attention window).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 2: Write 100 words, not 300</h2>
        <p>
          A founder inbox on mobile skims for three things: is this for me, is it interesting, do
          I need to do anything. Structure every email the same way:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>One line about them</strong> - something specific: their launch, their pricing page, a feature only insiders would know.</li>
          <li><strong>One line about you</strong> - what your product does, in ten words: "we turn a product description into ready-to-send cold emails."</li>
          <li><strong>One question</strong> - low friction, specific: "curious if you still do outbound by hand?"</li>
          <li><strong>No links in touch one</strong> - the link comes in the reply, or touch two.</li>
        </ol>
        <p>
          Under 100 words is not a constraint - it is a feature. Every word you cut raises the
          odds the founder reads to the end.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 3: The offer is the trial, not the call</h2>
        <p>
          The fastest way to kill a SaaS cold email is to ask for a meeting. Founders hate
          meetings about tools; they love trying tools. End the sequence with a single, free,
          self-serve offer: <strong>your trial, one click, no credit card</strong>.
        </p>
        <p>
          The mental model: the cold email is not the pitch - <strong>it is the routing</strong>.
          Your job is to move a founder from "curious" to "trial started" in the fewest possible
          steps.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 4: The follow-up sequence (4 touches max)</h2>
        <p>
          Most SaaS replies come on touch 2 or 3. A clean sequence:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Day 1</strong> - the email above, no link.</li>
          <li><strong>Day 3</strong> - add value: a concrete example of how you would use your product for their specific workflow.</li>
          <li><strong>Day 7</strong> - one line + the trial link. This is the first and only link in the sequence.</li>
          <li><strong>Day 14</strong> - polite break-up: "closing the loop, reply if ever relevant."</li>
        </ul>
        <p>
          Four touches, one link, zero meetings. That is the whole campaign.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 5: Every reply is a sales moment</h2>
        <p>
          A "no thanks" is a win - it is a reply, and it means your email was read. Reply within
          the hour, keep it human, and route every yes toward the trial. For every ten campaigns,
          expect: <strong>3-4 replies, 1-2 trial signups, maybe 1 paying customer</strong>. That is
          healthy at 10-30 emails per day from a fresh mailbox.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The playbook in one paragraph</h2>
        <p>
          Email team inboxes, not people. Reference something real. Write under 100 words. Ask one
          low-friction question. No links until touch three. Four touches total, then break up.
          And when they reply, hand them the trial - let the product sell itself. That is how SaaS
          cold email works in 2026.
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-semibold text-gray-900">Write the whole sequence in seconds</p>
          <p className="mt-1 text-sm">
            ColdCrow generates personalized, deliverability-scored cold emails - including a
            4-touch follow-up sequence - from a one-line description of your product. Free to try,
            no card needed.{" "}
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
