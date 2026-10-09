export const metadata = {
  title: "How to Warm Up a Cold Email Domain in 2026 (Step-by-Step)",
  description:
    "A cold domain that sends 200 emails on day one lands in spam. Here's the 3-week warmup schedule, the email auth you must set first, and the red flags that mean your domain is being burned.",
  keywords: [
    "cold email domain warmup",
    "email warmup 2026",
    "cold email deliverability",
    "spf dkim dmarc setup",
    "cold email domain reputation",
  ],
  openGraph: {
    title: "How to Warm Up a Cold Email Domain in 2026 (Step-by-Step)",
    description:
      "3-week warmup schedule, SPF/DKIM/DMARC, reply-rate targets, and the red flags that burn your domain.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Deliverability
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to Warm Up a Cold Email Domain in 2026 (Step-by-Step)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          The fastest way to kill a cold email program is to skip warmup. A brand-new domain that suddenly sends hundreds of emails gets flagged — and once a domain is marked as spam, fixing it takes months. Here is the schedule that works, the authentication you set first, and the signals that tell you the warmup is actually working.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Why warmup still matters in 2026
        </h2>
        <p>
          Mailbox providers (Gmail, Outlook, Yahoo) do not judge a single email in isolation. They score the <em>sender reputation</em> of the domain and IP you are sending from — engagement history, complaint rate, bounce rate, and authentication posture. A domain with zero sending history has no reputation, so the providers treat its first burst of volume with suspicion. Industry consensus across deliverability tooling is that a cold domain ramped too fast lands 30–70% of its volume in spam or promotions, regardless of how good the copy is.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Step 0: Set up email authentication first
        </h2>
        <p>
          Warmup builds a reputation on top of technical foundations. Without these records, even a perfect warmup fails (industry standard, not optional):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>SPF</strong> — authorize your sending service's servers in your DNS TXT record.</li>
          <li><strong>DKIM</strong> — sign every email with your own domain's key, not the sending tool's default.</li>
          <li><strong>DMARC</strong> — set it to <code>p=none</code> first, then tighten to <code>quarantine</code> after you confirm alignment.</li>
          <li><strong>BIMI (optional)</strong> — the logo in Gmail adds recognition, but only after SPF/DKIM/DMARC pass.</li>
          <li><strong>Custom tracking domain</strong> — never route link clicks through the shared domain of your outreach tool.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The 3-week warmup schedule
        </h2>
        <p>
          The volume curve below is the widely used baseline across cold email practitioners (industry consensus — adjust to your service's limits):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Week 1 — 10–15 emails/day</strong>. Send only to engaged addresses you control (your own accounts, colleagues who will reply). Every reply is a positive signal.</li>
          <li><strong>Week 2 — 20–30 emails/day</strong>. Mix in a small number of real prospects; keep the open-and-reply rate high by sending only to verified, relevant addresses.</li>
          <li><strong>Week 3 — 40–50 emails/day</strong>. Approach your target daily volume. If any red flag appears (below), pause and hold volume instead of pushing through.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The reply test
        </h2>
        <p>
          The single strongest reputation signal is a human reply. Before you scale, your warmup inbox should show roughly <strong>20–30% of warmup emails getting real replies</strong> from your test addresses. If replies are near zero, providers read "no engagement" and your warmup is not taking — fix response rates before adding volume.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Red flags that burn a domain
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Bounce rate above 3%</strong> — every hard bounce is a negative signal. Verify addresses (MX + mailbox check) before every send.</li>
          <li><strong>Spam complaints above ~0.1%</strong> — one complaint per thousand is the commonly cited warning line.</li>
          <li><strong>Guessing addresses</strong> — sending to hello@ on a domain that has no such mailbox produces instant hard bounces that eat your reputation.</li>
          <li><strong>Blacklist hits</strong> — check mxtoolbox and Google Postmaster weekly; a listing stops your mail cold.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Already burned your domain?
        </h2>
        <p>
          If your main domain is already flagged, do not fight the reputation. Spin up a <strong>separate sending subdomain</strong> (e.g. <code>mail.yourdomain.com</code>), run the same SPF/DKIM/DMARC setup and the same 3-week warmup on it, and keep your personal mail on the original domain. Separating transactional, personal, and outreach traffic is also the clean long-term architecture.
        </p>
        <p>
          Warmup is boring, and it is the difference between a program that compounds and one that dies in week two. Auth first, ramp slowly, track bounces and replies, and never guess an address.
        </p>
        <p className="mt-8 rounded-lg bg-gray-50 p-5 text-gray-800">
          <strong>Check deliverability before you send:</strong> describe a prospect and get a personalized cold email with a deliverability score in seconds —{" "}
          <a href="/try" className="font-semibold text-orange-600 underline">
            try it free
          </a>
          . No credit card required.
        </p>
      </div>
    </article>
  );
}
