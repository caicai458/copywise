import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Cold Outreach in 2026: The 3-Step Playbook That Gets Replies",
  description:
    "LinkedIn is the highest-reply cold channel most founders ignore. Here is the 2026 playbook: connection note as subject line, first message that earns the second, and the 5-reply cadence that books calls.",
  openGraph: {
    title: "LinkedIn Cold Outreach in 2026: The 3-Step Playbook That Gets Replies",
    description:
      "The 2026 LinkedIn cold outreach playbook: connection notes that get accepted, first messages that earn replies, and a cadence that books calls without sounding like a bot.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        LinkedIn Cold Outreach in 2026: The 3-Step Playbook That Gets Replies
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 7 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          Cold email is the workhorse, but <strong>LinkedIn is where the replies live</strong>.
          The platform has no spam filter between you and their inbox - just their patience. And
          the people who answer LinkedIn messages tend to be the same people who ignore email.
        </p>
        <p>
          The problem: 95% of LinkedIn outreach reads like a bot wrote it. Here is the playbook
          that gets 20-40% response rates on connection + first message - not by being clever,
          but by being human.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 1: The connection note is your subject line</h2>
        <p>
          On LinkedIn, the connection note is the only thing a prospect sees before accepting.
          Treat it like an email subject line - it decides whether you get in at all.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Reference something specific.</strong> Their recent post, a hire they made, a
            milestone their company hit. &quot;Saw your take on outbound reply rates - agreed with
            the point on follow-ups.&quot;
          </li>
          <li>
            <strong>Keep it under 20 words.</strong> The note field truncates; the first line is
            all that matters.
          </li>
          <li>
            <strong>Never pitch in the note.</strong> If it reads like an ad, they will decline.
          </li>
        </ul>
        <p>
          Generic notes (&quot;I&apos;d love to connect with you&quot;) get accepted about 5-10% of
          the time. Specific notes get 30-50%. That one sentence is your entire conversion funnel
          entry.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 2: The first message earns the second</h2>
        <p>
          The first message should never pitch. Its only job is to <strong>earn the right to send
          a second message</strong>. Two patterns that work:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
{`Pattern A - the question:
"Hey [Name] - appreciate you accepting. Saw you mentioned
[their topic] recently. Curious how you're thinking about
[their specific problem] these days?"

Pattern B - the offer:
"Hey [Name] - thanks for connecting. On the off chance you
ever need [one useful thing tied to their work], happy to
share what we've learned. No pitch, just wanted to be useful."`}
        </pre>
        <p>
          No links. No &quot;quick call?&quot; yet. One question or one offer of value. That&apos;s it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 3: The cadence that books calls</h2>
        <p>
          The mistake people make is waiting for a reply that never comes, or spamming every
          day. The playbook is five touches over two weeks:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Day 0</strong> - Connection + note (specific reference).</li>
          <li><strong>Day 1</strong> - First message (question or offer of value, no pitch).</li>
          <li><strong>Day 4</strong> - Value drop: one relevant insight or resource, no ask.</li>
          <li><strong>Day 8</strong> - Second ask: reference the first message, new specific
          question.</li>
          <li><strong>Day 12</strong> - Break-up: &quot;Going to close the loop here. If timing
          is wrong, happy to revisit in a quarter.&quot;</li>
        </ul>
        <p>
          Notice: two of five touches have no ask at all. That is what makes the asks work.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The rules that keep your account alive</h2>
        <p>
          LinkedIn is aggressive with automation - which is good news for humans:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>5-15 connections per day max.</strong> More than that and you get flagged,
          even if you are typing by hand.</li>
          <li><strong>No links in early messages.</strong> Keep the link until the call or the
          third touch.</li>
          <li><strong>No templates that smell.</strong> If the message could apply to anyone,
          a thoughtful buyer can smell it. One specific line beats five polished ones.</li>
          <li><strong>Reply fast.</strong> If someone answers, respond within the hour - the
          window is small and cold.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">Why this beats email for warm accounts</h2>
        <p>
          Email delivers to the inbox; LinkedIn delivers to the person. For prospects who post,
          comment, or change jobs, LinkedIn gives you a natural reason to reach out that email
          never has. The companies winning in 2026 run <strong>both channels together</strong>:
          email for volume, LinkedIn for the accounts that matter.
        </p>
        <p>
          The edge is not a secret tool. It is the discipline to write one specific sentence, and
          the patience to let a cadence run its course.
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-semibold text-gray-900">
            Want the same personalization engine for email?
          </p>
          <p className="mt-1 text-sm">
            ColdCrow drafts personalized cold emails from a prospect&apos;s name and company - with
            a deliverability score - in seconds. Free to try, no card needed.{" "}
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

