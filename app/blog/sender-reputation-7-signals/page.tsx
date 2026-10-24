import Link from "next/link";

export const metadata = {
  title: "Sender Reputation: 7 Signals Email Providers Check Before You Hit Send",
  description:
    "Why your cold emails land in spam even with a perfect subject line. The 7 sender-reputation signals providers actually check — and how to fix each one for free.",
};

const content = [
  {
    h: "The problem is rarely the copy — it's the sender",
    p: "You wrote a personalized cold email. Short subject line. 90-word body. Then it lands in the spam folder — or worse, gets silently dropped. Most sellers blame the content. In most cases, the problem isn't the copy. It's the sender reputation attached to the address you sent from. Email providers score every sender on signals that have nothing to do with your subject line. Here are the 7 they check, in rough order of importance — and what to do about each one for free.",
  },
  {
    h: "Signal #1: Domain age and history",
    p: "A domain registered last week starts at zero trust. A domain with years of history — even if it never sent email — carries residual trust from DNS and web presence. Fix: don't send cold email from your main domain at first. Register (or reuse) a separate domain for outreach, and let it age 2–4 weeks while you publish a simple site on it.",
  },
  {
    h: "Signal #2: SPF alignment",
    p: "SPF says which servers are allowed to send mail for your domain. If your sending server isn't in the SPF record, providers see a forged-looking message. Fix: publish an SPF TXT record listing your sending host, then check it with a free lookup tool. Keep the include chain short — too many include: entries can break the 10-lookup limit.",
  },
  {
    h: "Signal #3: DKIM signing",
    p: "DKIM signs your mail with a private key; providers verify the public key in DNS. Unsigned mail looks like it came from an untrusted client. Fix: enable DKIM in your email provider's admin panel and publish the CNAME they give you. Verify with a free DKIM checker until it reports valid.",
  },
  {
    h: "Signal #4: DMARC policy",
    p: "DMARC tells providers what to do when SPF and DKIM both fail. A domain with no DMARC record is usually treated as suspicious. Fix: publish v=DMARC1; p=none first (monitoring only), then tighten to p=quarantine after a week of clean reports.",
  },
  {
    h: "Signal #5: Warmup and sending velocity",
    p: "New addresses that send 200 identical emails on day one trigger spam filters immediately. Providers learn your cadence. Fix: send in small batches — 10–20 per day — with at least 60–90 seconds between messages. Ramp up over 2–3 weeks. Never blast the same template to a fresh address.",
  },
  {
    h: "Signal #6: Bounce and complaint rates",
    p: "A 5% bounce rate on a small list is enough to flag you. Complaints (the 'Report spam' button) hurt more than any other signal. Fix: verify recipient addresses with a free MX/DNS check before every batch. Remove hard bounces from your list immediately. Keep your first-line subject honest so people don't mark you out of surprise.",
  },
  {
    h: "Signal #7: Message-level signals",
    p: "Even with a clean domain, each individual email is scored: missing From name, mismatched reply-to, no unsubscribe path, and trigger words all add weight against you. Fix: use a real sender name, set the reply-to to a monitored inbox, and include a one-line 'reply STOP to opt out' — providers reward an escape hatch.",
  },
  {
    h: "The free deliverability stack that works",
    p: "You don't need a paid deliverability suite. The free loop: (1) a dedicated outreach domain aged 2–4 weeks, (2) SPF + DKIM + DMARC configured and verified, (3) a cold-email tool that personalizes every message and checks MX before sending, (4) a daily batch of 10–20 spaced 60+ seconds apart, (5) a log of every send, bounce, and reply. That last point is where most people cheat themselves: they don't track, so they can't tell whether the problem is copy or reputation. Log every send, check bounces the same day, and cut anything that hard-bounces. Fix the 7 signals above, and the same 500 emails that used to get 0 replies start getting real ones.",
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ColdCrow
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <Link href="/pricing" className="hover:text-gray-900">
              Pricing
            </Link>
          </div>
        </div>
      </nav>
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          Sender Reputation: 7 Signals Email Providers Check Before You Hit Send
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Published Oct 2026 · 6 min read
        </p>
        {content.map((s, i) => (
          <section key={i} className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">{s.h}</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">{s.p}</p>
          </section>
        ))}
        <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-gray-800">
            Want a personalized cold email with a deliverability score in
            seconds? Try{" "}
            <Link href="/try" className="text-blue-600 hover:underline font-medium">
              ColdCrow
            </Link>{" "}
            — describe a prospect, get an email that sounds human.
          </p>
        </div>
      </article>
    </div>
  );
}
