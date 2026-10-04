import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cold Email Follow-Up Sequence That Actually Gets Replies",
  description:
    "Most cold email replies come from the follow-up, not the first touch - but 90% of senders never send one. Here is the day-by-day follow-up sequence, with templates, that turns ignored emails into conversations.",
  openGraph: {
    title: "The Cold Email Follow-Up Sequence That Actually Gets Replies",
    description:
      "The exact day-by-day follow-up sequence - with templates - that turns ignored cold emails into replies and booked calls.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        The Cold Email Follow-Up Sequence That Actually Gets Replies
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 7 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          Here is the uncomfortable stat no one talks about: <strong>most cold email replies come from
          the follow-up, not the first email</strong>. And most senders never send a follow-up at all.
        </p>
        <p>
          The first email earns attention. The follow-up earns the reply. If you send one email and
          wait, you are leaving 60-70% of your potential replies on the table - because busy
          buyers see your email, mentally file it, and forget it in twelve minutes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Why follow-ups fail for everyone else</h2>
        <p>
          Most follow-ups fail for one of three reasons:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>They repeat the first email.</strong> A copy-paste with &quot;bumping this&quot;
            adds zero new information and reads as spam.
          </li>
          <li>
            <strong>They are needy.</strong> &quot;Just wanted to make sure you saw this!&quot; turns a
            professional pitch into a guilt trip.
          </li>
          <li>
            <strong>They never arrive.</strong> Senders overthink the wording, put it off, and the
            prospect&apos;s interest window closes.
          </li>
        </ul>
        <p>
          The fix is boring and mechanical: a short sequence, three touches, each adding one new
          piece of value, spaced a few days apart.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The rule: every follow-up adds value or dies</h2>
        <p>
          Before you write any follow-up, ask: what new information does this touch give the
          prospect? If the answer is nothing, don&apos;t send it. Follow-ups that work are not
          reminders - they are updates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The sequence: four touches, ten days</h2>
        <p>
          <strong>Day 1 - The first email.</strong> Short, specific, low-pressure ask. No need to
          repeat the opening email here; make it under 120 words.
        </p>
        <p>
          <strong>Day 3 - The value touch.</strong> Don&apos;t ask anything. Share one useful thing
          tied to their business: a benchmark, a relevant case study, a two-line framework. The
          goal is to be worth opening, not to get a reply yet.
        </p>
        <p>
          <strong>Day 7 - The second ask.</strong> Now reference your first email briefly and make
          a new, slightly different ask. A common pattern: &quot;Sent you a note last week - totally
          fine if this is a bad week. Quick question for you…&quot;
        </p>
        <p>
          <strong>Day 14 - The break-up email.</strong> One last touch that closes the loop
          gracefully: &quot;Going to close the loop here - if outbound timing is wrong, happy to
          revisit in a quarter.&quot; This touch gets surprising reply rates because it removes
          pressure. Then stop. Respect their inbox.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Three templates that work</h2>

        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
{`Day 3 - value touch:
Subject: quick benchmark for you

Hi Sarah,

Noticed you're testing outbound for [company]. One data point from
our tracking across 200+ B2B campaigns:

- Emails under 120 words reply 2x more than longer ones
- Follow-ups on day 3-5 pull most of the replies

Thought it might save you a few tests. Either way - keep building.

- [Name]`}
        </pre>

        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
{`Day 7 - second ask:
Subject: quick question on [company]

Hi Sarah,

Sent you a note last week about [specific point]. Totally fine if
this is a busy week - one quick question:

When it comes to [their problem], are you evaluating tools now,
or is this a later-quarter thing?

Happy to share what we've learned either way.

- [Name]`}
        </pre>

        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
{`Day 14 - break-up email:
Subject: closing the loop

Hi Sarah,

Going to close the loop here - I know inboxes are overflowing.

If the timing is wrong, happy to revisit in a quarter. And if you
ever want the 10 cold email openers we track, it's yours - just
reply "openers" and I'll send it.

- [Name]`}
        </pre>

        <h2 className="text-2xl font-semibold text-gray-900">Deliverability: the follow-up you never send</h2>
        <p>
          A follow-up only works if it lands in the inbox. Three rules:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Keep volume low and steady.</strong> 10-20 emails per mailbox per day is the
          safe range for a new domain. Ramping to 200 in week one burns the domain.</li>
          <li><strong>No links in touch one and two.</strong> Links increase spam score. Put the
          link in the break-up email, or on the reply.</li>
          <li><strong>Reply to replies immediately.</strong> Engagement is the strongest signal
          to inbox placement; a dead inbox stops getting follow-ups delivered.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">When to stop</h2>
        <p>
          After the day-14 touch, stop. One more follow-up after a break-up email feels like
          stalking, and it poisons the domain&apos;s reputation. The prospect who replies months
          later is worth more than the one you annoyed into silence.
        </p>
        <p>
          The whole sequence is ten days and four emails. Most teams never send it. That is the
          edge.
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-semibold text-gray-900">
            Want the sequence written for you, personalized to each prospect?
          </p>
          <p className="mt-1 text-sm">
            ColdCrow turns a prospect&apos;s name and company into a personalized cold email with a
            deliverability score in seconds - free to try, no card needed.{" "}
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

