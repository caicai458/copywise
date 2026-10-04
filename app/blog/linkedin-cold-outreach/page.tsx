import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Cold Outreach: The Playbook That Turns Connections Into Calls",
  description:
    "LinkedIn cold outreach still works in 2026 - if you stop sending the same 20-word connection note everyone sends. Here is the playbook: research, a specific opener, and a low-pressure ask that books calls.",
  openGraph: {
    title: "LinkedIn Cold Outreach: The Playbook That Turns Connections Into Calls",
    description:
      "The exact framework for turning LinkedIn connections into booked calls - research, specific openers, and follow-up that doesn't feel like follow-up.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        LinkedIn Cold Outreach: The Playbook That Turns Connections Into Calls
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 6 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          Everyone agrees LinkedIn outreach is saturated. Then everyone keeps sending the same
          connection note: <em>&quot;Hi, I&apos;d love to connect and learn from your experience.&quot;</em>{" "}
          It gets accepted 10% of the time and booked exactly zero calls.
        </p>
        <p>
          The people who still fill their pipeline from LinkedIn do something different. They treat
          every connection request like a cold email: researched, specific, and built around the
          other person&apos;s world - not their own.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 1: Pick the right 20 people, not 200</h2>
        <p>
          Volume on LinkedIn is a trap. A connection request sent to someone you have zero context
          on will be ignored; a request to someone whose post you commented on twice this week gets
          accepted almost every time.
        </p>
        <p>
          Build a list of 20 ICPs per week. For each one, spend 10 minutes: read their last 3 posts,
          note their company&apos;s recent moves, and find one thing you can genuinely speak to.
          That research is the entire difference between &quot;connection request&quot; and
          &quot;conversation starter.&quot;
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 2: The connection note is your subject line</h2>
        <p>
          The 300-character connection note is the only thing your prospect sees before deciding
          whether to accept. Treat it like the subject line of a cold email: it must reference
          something specific about them.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
{`Good:
Hi Sarah - saw your post on sales team alignment and the point about
handoffs killing pipeline really landed. We work with sales teams on
the same problem - would love to swap notes.

Bad:
Hi Sarah, I'd love to connect and learn from your experience in sales.
I'm building a cold email tool and think we could help each other.`}
        </pre>
        <p>
          The good note references a specific post, names the pain point they raised, and offers a
          peer conversation. The bad note is about you. That&apos;s the whole game.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 3: The first message earns the second</h2>
        <p>
          Once accepted, most people send the pitch immediately. Wrong move. Your first message
          should do one thing: continue the conversation you started in the connection note.
        </p>
        <p>
          Ask one question related to what they posted. If they reply, you have permission to share
          context. If they don&apos;t, send one follow-up 4-5 days later that adds value - a relevant
          resource, a framework, an observation - then go quiet. Never send three messages in a row
          to silence.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Step 4: Book the call without asking for the call</h2>
        <p>
          The lowest-friction ask is not &quot;want to hop on a call?&quot; It&apos;s a choice with a default.
          &quot;If it&apos;s useful, I&apos;m free Tue or Thu afternoon - happy to share how we approach X.&quot;
          Two concrete slots, zero pressure, easy to accept.
        </p>
        <p>
          One more lever: reference the pattern you noticed in their posts. &quot;You&apos;ve written twice
          about SDR ramp time - I have data on what cuts it 30%.&quot; Specificity is what turns a
          maybe into a yes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The 3 mistakes that kill LinkedIn outreach</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Sending the pitch in message one.</strong> The connection note opened the door;
            the pitch closes it.
          </li>
          <li>
            <strong>Automation without research.</strong> Tools that send 500 identical notes a day
            burn your account and your reputation. Personalize or don&apos;t bother.
          </li>
          <li>
            <strong>No follow-up system.</strong> Most replies come 2-5 days later. If you don&apos;t
            track and follow up, you&apos;re losing the replies that actually arrived.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">Use AI to research, not to spam</h2>
        <p>
          The winning pattern is AI-assisted, not AI-automated: let the tool do the research and
          drafting, keep your judgment on who to contact and what to say. That&apos;s exactly how we
          built <a className="text-blue-600 underline" href="/try">ColdCrow</a> - describe a
          prospect, get a personalized, deliverability-scored message in seconds, then you decide
          where it goes: email, LinkedIn, or both.
        </p>
        <p>
          LinkedIn cold outreach isn&apos;t dead. The generic version is. Research one person at a
          time, open with something specific, and let the conversation earn the call.
        </p>
      </div>
    </article>
  );
}
