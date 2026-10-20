import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Cold Email Templates That Don't Sound Like Templates (2026) | ColdCrow Blog",
  description:
    "Most cold email templates read as templates the moment they land. Here is how to keep the structure that works and lose the voice that gets deleted — with real examples.",
  keywords: [
    "cold email templates",
    "cold email template examples",
    "B2B cold email templates",
    "personalized cold email",
    "cold outreach examples",
  ],
};
export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium text-indigo-600">
          <Link href="/blog" className="hover:underline">
            ← All posts
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Cold Email Templates That Don&apos;t Sound Like Templates
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          October 20, 2026 · 7 min read · by ColdCrow
        </p>
        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            There is a moment every founder knows: you open a cold email, read
            two sentences, and think "this is a template." The delete happens
            before the third sentence. The irony is that almost every effective
            cold email uses the same skeleton — it is the voice, the reference,
            and the ask that separate the ones that get replies from the ones
            that get trashed.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The skeleton that works
          </h2>
          <p>
            Strip away the fluff and strong cold emails follow four moves, in
            order:
          </p>
          <ul>
            <li>
              <strong>1. The anchor.</strong> A specific, true observation about
              their company, launch, page, or role. One sentence, no flattery.
            </li>
            <li>
              <strong>2. The bridge.</strong> One line connecting that observation
              to what you do — no more than a sentence.
            </li>
            <li>
              <strong>3. The proof.</strong> A concrete result or example that
              makes the bridge credible. A number beats a claim.
            </li>
            <li>
              <strong>4. The ask.</strong> One small, specific next step. Never
              "let's hop on a call" as the opening ask.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">
            Template voice vs. human voice
          </h2>
          <p>
            Compare the same email written two ways. The template version:
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 italic">
            Hi [Name], I hope this finds you well. I came across [Company] and
            was impressed by your [product]. We help companies like yours
            [benefit]. Would you be open to a quick call this week?
          </blockquote>
          <p>
            And the version a person would actually send:
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 italic">
            Hey [Name] — saw you shipped [feature] last month. We build [X] for
            teams that [context], and [customer] used it to [specific result].
            Worth a 30-second look?
          </blockquote>
          <p>
            Same skeleton. The difference is every slot being filled with
            something real — and the ask being small enough to say yes to.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Three templates that hold up
          </h2>
          <p>
            <strong>The observation opener</strong> (works best for product
            companies):
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 italic">
            Hi [Name] — your new [page/feature] caught my eye, specifically
            [detail]. We help [segment] do [outcome] without [pain], and
            [reference customer] went from [A] to [B]. If that is relevant,
            happy to share the 2-minute version.
          </blockquote>
          <p>
            <strong>The competitor signal</strong> (works best for sales teams):
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 italic">
            Hi [Name] — noticed [competitor] is expanding into [segment]. Teams
            in that space are starting to [need]. We built [X] to make that
            [easier/faster]. Open to a quick look?
          </blockquote>
          <p>
            <strong>The plain truth</strong> (works best for founders reaching
            founders):
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 italic">
            Hi [Name] — cold emailing you because [specific reason tied to their
            work]. We do [one thing], and I thought it might help with [their
            specific problem]. If not, no worries — ignore this.
          </blockquote>
          <h2 className="text-2xl font-bold text-gray-900">
            How AI fits without killing the voice
          </h2>
          <p>
            The best use of AI here is not "write me a template" — it is
            drafting a first pass that you personalize hard. Describe the
            prospect and the product, and a tool like{" "}
            <Link href="/" className="text-indigo-600 hover:underline">
              ColdCrow
            </Link>{" "}
            generates an email on this exact skeleton, with subject line
            options and a deliverability score. You keep the anchor honest and
            the ask specific; the machine handles the phrasing. You can browse
            more ready-made structures on the{" "}
            <Link href="/templates" className="text-indigo-600 hover:underline">
              templates page
            </Link>
            .
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            The rule that beats every template
          </h2>
          <p>
            If you cannot point to the one specific thing you noticed about the
            person you are emailing, the template is not ready to send. Fix the
            anchor first. Everything else — subject line, body length, CTA —
            can be iterated. A template with a real anchor and a small ask will
            out-perform a perfectly worded blast every time.
          </p>
          <p>
            Draft your next cold email in about 30 seconds —{" "}
            <Link href="/try" className="text-indigo-600 hover:underline">
              try ColdCrow free
            </Link>
            , no signup needed.
          </p>
        </div>
      </div>
    </main>
  );
}// marker line
