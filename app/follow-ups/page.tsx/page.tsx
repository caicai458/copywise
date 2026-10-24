import Link from "next/link";

export const metadata = {
  title: "Follow-Up Sequences | ColdCrow",
  description:
    "Most cold email replies come from the follow-up, not the first message. See the 3-touch sequence that works, when to send each touch, and how ColdCrow drafts the follow-ups for you.",
};

const steps = [
  {
    n: "Touch 1 — The value-first opener",
    day: "Day 0",
    p: "Short, specific, and useful on its own. One concrete observation about their company, one clear reason to reply. No pitch longer than two sentences. If it reads like it could have been sent to anyone, rewrite it.",
  },
  {
    n: "Touch 2 — The nudge with new value",
    day: "Days 3–4",
    p: "Don't just say 'bumping this'. Add something new: a fresh angle on their business, a resource, a question that got smarter since the last email. A bump with zero new value reads as noise; a bump with new value reads as genuine.",
  },
  {
    n: "Touch 3 — The polite close",
    day: "Days 7–9",
    p: "One final, short message that assumes no response and makes it easy to say no: 'I'll take this as a no for now — if it ever becomes relevant, my inbox is open.' This closes the loop, keeps your sender reputation clean, and often pulls the one reply the first two touches couldn't.",
  },
];

const rules = [
  "Never repeat the same copy — every touch earns another look only if it adds new information.",
  "Space touches 3–4 days apart; daily bumps collapse reply rates and inflate complaints.",
  "Send follow-ups from the same address and thread so providers see one conversation, not new cold mail.",
  "Stop at three touches. A fourth is not persistence, it's spam.",
];

export default function FollowUps() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ColdCrow
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
          </div>
        </div>
      </nav>
      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm font-medium text-blue-600">Feature</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 leading-tight">
          Follow-Up Sequences That Get Replies
        </h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Most cold email replies don't come from the first message — they come
          from the follow-up that almost didn't get sent. ColdCrow builds the
          sequence for you: three touches, spaced right, each one adding new
          value instead of repeating itself.
        </p>

        <div className="mt-10 space-y-8">
          {steps.map((s) => (
            <div key={s.n} className="border-l-4 border-blue-100 pl-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">{s.n}</h2>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                  {s.day}
                </span>
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            The four rules that keep follow-ups human
          </h2>
          <ul className="mt-4 space-y-3">
            {rules.map((r) => (
              <li key={r} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-gray-800">
            ColdCrow drafts the whole sequence — opener, value bump, and close —
            with a deliverability score on each message.{" "}
            <Link href="/try" className="text-blue-600 hover:underline font-medium">
              Try it free
            </Link>{" "}
            — no signup, three generations included.
          </p>
        </div>
      </article>
    </div>
  );
}
