import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description:
    "Answers about how ColdCrow works, the free trial, pricing, deliverability scoring, data privacy, and support — before you sign up.",
};

const faqs = [
  {
    q: "What is ColdCrow?",
    a: "ColdCrow is an AI cold email writer. You describe a prospect — their company, role, and what you want — and it drafts a short, personalized email with a deliverability score, ready to send from your own inbox. It also generates follow-up sequences, social copy, and ad copy.",
  },
  {
    q: "Do I need to sign up to try it?",
    a: "No. The /try page lets you generate three emails with no account. When you're ready to save and send more, sign up for a free account.",
  },
  {
    q: "How does the free trial work?",
    a: "Every new account gets a 30-day free trial of the Pro plan — unlimited generations, follow-up sequences, and deliverability scoring. No credit card required. At the end of the trial you keep the free plan, or upgrade to Pro for $29/month.",
  },
  {
    q: "Do you send emails on my behalf?",
    a: "No. ColdCrow writes the emails; you send them from your own inbox (Gmail, Outlook, your business mailbox). That keeps your sender reputation under your control and avoids the spam traps that shared sending infrastructure runs into.",
  },
  {
    q: "What is the deliverability score?",
    a: "Each generated email is scored against the signals providers actually check — length, link density, spammy phrasing, missing personalization, and missing opt-out. A low score means the email is likely to land in spam; you can regenerate until the score is clean.",
  },
  {
    q: "Will my emails be flagged as spam if I send cold email?",
    a: "Cold email is legal and common in B2B, but it only works if you respect deliverability: send in small daily batches, personalize each message, verify addresses before sending, and include a one-line opt-out. Our blog has a free guide to the exact setup.",
  },
  {
    q: "What happens to my data?",
    a: "Your prospect descriptions and generated emails are used only to provide the service and are not sold. You can delete your account and data at any time from your dashboard.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Pro is month-to-month — cancel from your dashboard and you keep access until the end of the billing period. Refunds are handled through our payment provider within 30 days of purchase.",
  },
  {
    q: "How do I get support?",
    a: "Email support@getcopywise.com and we reply within one business day. Found a bug or want a feature? The same address — every piece of feedback goes into the product.",
  },
];

export default function Faq() {
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
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm font-medium text-blue-600">Help</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-600">
          Everything you'd want to know before trying ColdCrow. Something else
          on your mind?{" "}
          <a href="mailto:support@getcopywise.com" className="text-blue-600 hover:underline">
            support@getcopywise.com
          </a>
        </p>

        <div className="mt-10 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border border-gray-200 rounded-lg p-5">
              <h2 className="text-base font-semibold text-gray-900">{f.q}</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-gray-800">
            Ready to see it in action?{" "}
            <Link href="/try" className="text-blue-600 hover:underline font-medium">
              Generate a free email now
            </Link>{" "}
            — no signup needed.
          </p>
        </div>
      </div>
    </div>
  );
}
