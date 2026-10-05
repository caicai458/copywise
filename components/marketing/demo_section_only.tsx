export function DemoSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
        From prospect description to send-ready email in 10 seconds
      </h2>
      <p className="mt-3 text-center text-gray-500">
        Describe a prospect. Get a personalized email with a deliverability score. Copy and send.
      </p>

      {/* 三步演示（CSS 动画，无需录屏/GIF） */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            step: "1",
            title: "Describe",
            body: `"SaaS founder at a 12-person dev-tools startup, hates generic outreach, cares about reply rates"`,
            icon: "✍️",
          },
          {
            step: "2",
            title: "Generate",
            body: "A 120-word personalized email + deliverability score of 92/100, no spam triggers.",
            icon: "⚡",
          },
          {
            step: "3",
            title: "Copy & send",
            body: "One click to copy. Works in Gmail, Outlook, Instantly — any inbox.",
            icon: "📋",
          },
        ].map((s) => (
          <div key={s.step} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl">
              {s.icon}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">{s.step}</span>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/try"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Try it free — no signup
        </a>
      </div>
    </section>
  );
}
