"use client";

import Link from "next/link";

const categories = [
  {
    id: "cold-email",
    label: "Cold Email",
    emoji: "✉️",
    templates: [
      {
        name: "First Touch — Reference Something Real",
        body: "Hi {name},\n\nI saw {company} is doing {detail} — specifically the part about {specific point} caught my attention.\n\nI help teams write cold emails that actually get replies. Quick question: do you handle outreach in-house, or is it mostly inbound right now?\n\nNo pitch — just curious how you're approaching it.\n\nBest,\n{your name}",
      },
      {
        name: "Follow-Up — Add Value, Don't Repeat",
        body: "Hi {name},\n\nQuick follow-up on my last email. Instead of repeating myself, here's something useful:\n\n{one useful insight related to their business}\n\nIf that's relevant, happy to share how we approach it at ColdCrow.\n\nBest,\n{your name}",
      },
      {
        name: "The Polite Breakup (Last Touch)",
        body: "Hi {name},\n\nI'll keep this short — this is my last email.\n\nIf cold outreach isn't a priority right now, totally fine. If it is, I'd love 10 minutes to show you how we write personalized emails in seconds.\n\nEither way, keep building.\n\nBest,\n{your name}",
      },
    ],
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    emoji: "💼",
    templates: [
      {
        name: "Connection Note — Peer to Peer",
        body: "Hi {name}, I came across {company} while researching {detail} and the way you're approaching it caught my attention. I build ColdCrow — an AI cold email writer with deliverability scoring. No pitch, but happy to swap notes on outreach if you ever want.",
      },
      {
        name: "Post Reply — Content Resonance",
        body: "Your post about {detail} really resonated — especially the part about {specific point}. I'm building a tool in the same space and I'd genuinely value your perspective on {question}.",
      },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    emoji: "💬",
    templates: [
      {
        name: "First Touch (Short)",
        body: "Hi {name} 👋 I'm {your name} from ColdCrow. Saw {company} does {detail}. Quick question — do you use cold email for outreach, or is it all inbound right now?",
      },
      {
        name: "Warm Follow-Up",
        body: "Hi {name}, I sent you an email a few days ago about {detail} — it's probably buried. One line: we help teams write AI cold emails that get replies. Happy to show you on your own example. Interested?",
      },
    ],
  },
  {
    id: "cross-border",
    label: "Cross-Border (CN→EN)",
    emoji: "🌏",
    templates: [
      {
        name: "Trade Show Follow-Up",
        body: "Subject: Great meeting you at {fair} — {company} follow-up\n\nHi {name},\n\nIt was great talking at {fair} about {detail}. You mentioned {pain point}, which is exactly what our team helps with.\n\nQuick summary of what we discussed:\n- {point 1}\n- {point 2}\n\nWould it help if I sent over {asset}? Happy to share a sample this week.\n\nBest,\n{your name} | {company}",
      },
      {
        name: "Inquiry Reply",
        body: "Subject: Re: {product} inquiry — quick answers\n\nHi {name},\n\nThanks for your inquiry about {product}. Quick answers:\n1. MOQ: {moq}\n2. Lead time: {lead_time}\n3. Price: {price_range} FOB {port}\n\nCan I send you a catalog + samples quote? Which format do you prefer — WhatsApp or email?\n\nBest,\n{your name}",
      },
    ],
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ColdCrow
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/pricing" className="hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <Link href="/dashboard" className="hover:text-gray-900">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Free Cold Outreach Templates
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Copy, personalize the {"{variables}"}, and send. Every template is
          written to sound human — because that&apos;s what gets replies. Need a
          custom draft in seconds? Use{" "}
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            ColdCrow&apos;s AI writer
          </Link>
          .
        </p>

        {categories.map((cat) => (
          <section key={cat.id} className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span>{cat.emoji}</span> {cat.label}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {cat.templates.map((tpl) => (
                <div
                  key={tpl.name}
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
                >
                  <h3 className="font-medium text-gray-900">{tpl.name}</h3>
                  <pre className="mt-3 whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-100 font-sans">
                    {tpl.body}
                  </pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(tpl.body)}
                    className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Copy template →
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        <footer className="mt-16 py-8 border-t border-gray-200 text-center text-sm text-gray-500">
          ColdCrow — AI cold email writer with deliverability scoring.
        </footer>
      </main>
    </div>
  );
}
