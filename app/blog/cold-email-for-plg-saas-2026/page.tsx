import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email for PLG SaaS: When Product-Led Companies Should Send Outbound (2026)",
  description:
    "Product-led growth and cold email feel like opposites. Here is when PLG companies should send cold email anyway, what to write, and how to measure outbound when the product does the selling.",
  openGraph: {
    title: "Cold Email for PLG SaaS: When Product-Led Companies Should Send Outbound (2026)",
    description:
      "The PLG cold email playbook: the three situations where product-led teams should still send outbound, the templates that work, and the metrics that actually matter.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Cold Email for PLG SaaS: When Product-Led Companies Should Send Outbound
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 10, 2026 · 8 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          The product-led playbook says the product should sell itself: sign up, feel the value,
          pay. So why would a PLG company ever send a cold email?
        </p>
        <p>
          Because the product sells itself <strong>only to people who show up</strong>. Every PLG
          team quietly loses money on three groups that no onboarding flow can reach: high-intent
          accounts that never found you, trial users who went quiet, and partners who should have
          heard about you first. Cold email is the cheapest way to reach those three groups - if
          it is done the way PLG teams work: small, specific, and measurable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          When a PLG company should send cold email (and when it should not)
        </h2>
        <p>
          The rule is simple: <strong>do not send cold email to do the selling. Send it to start a
          conversation the product can finish.</strong> Three situations qualify:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Re-engaging expired or quiet trials.</strong> Someone tried your product, got
            value, and left. One short email asking what got in the way routinely brings a chunk
            of them back - and it is not really cold email, it is a follow-up you were already
            owed.
          </li>
          <li>
            <strong>High-intent accounts that never signed up.</strong> If a competitor just
            launched, or an account matches your ICP and is hiring for the role your product
            serves, one 80-word email is worth more than a month of SEO wait time.
          </li>
          <li>
            <strong>Ecosystem and partnership outreach.</strong> Integrations, agencies, and
            complementary tools bring users who would never have found you. This is the highest
            ROI cold email a PLG team can send, because every reply compounds.
          </li>
        </ol>
        <p>
          What you should <strong>not</strong> do is blanket the market with a demo pitch. If your
          product is genuinely self-serve, a cold email asking for a demo call tells the reader
          your product does not work. Keep the email lighter than your landing page.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">What a PLG cold email looks like</h2>
        <p>
          Three rules: <strong>under 90 words, one question, zero features.</strong> The reader
          has already tried products like yours; listing features teaches them nothing. Reference
          something specific about them, state what you noticed, and end with a question that has
          an obvious answer.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Three templates that work</h2>
        <p>
          <strong>1. The quiet-trial re-engagement</strong>
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
          &quot;Hi [Name] - you tried [Product] last week and things went quiet. Genuinely curious:
          was it a feature miss, or just bad timing? If it was a feature miss, happy to point you
          at the closest workaround.&quot;
        </blockquote>
        <p>
          <strong>2. The high-intent account</strong>
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
          &quot;Hi [Name] - saw [Company] is hiring a [role] and scaling [workflow]. We built
          [Product] to remove exactly that workflow - about 4 hours a week per person. Worth a
          5-minute look? No call needed: [link].&quot;
        </blockquote>
        <p>
          <strong>3. The integration / partner</strong>
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
          &quot;Hi [Name] - your users are the same people who use [Product] (roughly [N]% overlap
          by job title). We built an integration spec and a launch co-marketing plan. Want me to
          send it over?&quot;
        </blockquote>
        <p>
          Notice what is missing: no demo link, no feature list, no &quot;just 15 minutes.&quot;
          The ask is always one click or one reply. The product does the rest.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          Measure the metric your funnel can actually use
        </h2>
        <p>
          For PLG outbound, open rates are vanity and reply rates are table stakes. The number
          that matters is <strong>activated signups per hundred emails</strong>: how many replies
          turned into a trial that hit your activation event. Track it per template, not per
          campaign. If template one drives 0 activations and template two drives 4, you do not
          need more emails - you need more of template two.
        </p>
        <p>
          A useful baseline for B2B cold email is a low single-digit reply rate on a healthy list;
          the PLG benchmark you should care about is the conversion from reply to activation, and
          most teams find it is the email, not the list, that decides it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The one-sentence summary</h2>
        <p>
          PLG companies should use cold email like a growth experiment, not a sales channel: pick
          a small list, write under 90 words, ask one question, and measure activated signups. Do
          that for two weeks and you will know exactly whether outbound belongs in your mix.
        </p>

        <div className="mt-10 rounded-lg bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Write PLG cold emails in 30 seconds
          </h2>
          <p className="mt-2 text-gray-700">
            ColdCrow turns a prospect description into a personalized cold email with a
            deliverability score - no templates to fill, no guessing. Try it free, no signup
            needed: <a className="font-medium text-blue-600 underline" href="/try">copywise.vercel.app/try</a>
          </p>
        </div>
      </div>
    </article>
  );
}
