export const metadata = {
  title: "How to Find Emails for Cold Outreach (Without Buying Lists)",
  description:
    "Skip the rented lists. Six free, repeatable ways to find the right person's email for cold outreach: company sites, databases, pattern engines, social proof, and verification — with deliverability built in.",
  keywords: [
    "find email for cold outreach",
    "b2b email finder free",
    "how to find prospect emails",
    "email verification cold email",
    "cold outreach contact finder",
  ],
  openGraph: {
    title: "How to Find Emails for Cold Outreach (Without Buying Lists)",
    description:
      "Six free, repeatable ways to find the right person's email — and the verification step that keeps you out of spam.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-600">
          Cold Outreach
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to Find Emails for Cold Outreach (Without Buying Lists)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          The list isn&apos;t the product. The right person, the right
          message, and a deliverable inbox are. Here&apos;s how to find all
          three for free.
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          Every founder asks the same question after their first failed
          campaign: where do I get emails? The wrong answer is buying a
          list — rented contacts are stale, unverified, and a one-way
          ticket to the spam folder. The right answer is finding the
          person yourself, in the places they actually publish their
          address.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          1. Start from the company website
        </h2>
        <p>
          Almost every B2B company exposes at least one email publicly.
          Check, in order: the contact page, the about/team page, and the
          press page. Many sites list hello@, team@, or founders@
          directly. If you only see a form, view the page source and
          search for &quot;@domain.com&quot; — a surprising number of
          forms leak a mailto: in the markup.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          2. Company databases, free tier
        </h2>
        <p>
          Crunchbase and LinkedIn both let you search companies by
          industry, headcount, and location without paying. You&apos;re
          not looking for the email — you&apos;re looking for the person
          and their exact title. The databases give you the
          &quot;who&quot;; the pattern step below gives you the
          &quot;where&quot;.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          3. The email pattern engine
        </h2>
        <p>
          Most companies use one of a handful of patterns:
          first@, first.last@, or firstlast@. Find one confirmed address
          for the domain (a press release, a GitHub commit, a podcast
          mention) and the pattern usually generalizes to the whole
          team. Never send on a guess alone — always verify first.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          4. Social proof sources
        </h2>
        <p>
          Engineers leak emails in public places: GitHub commit messages
          and profiles, npm package metadata, conference talk slides,
          and domain WHOIS. For a technical audience, a GitHub profile
          email is often warmer than a guessed company address — it was
          published by the person themselves.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          5. The verification step
        </h2>
        <p>
          Guessed addresses that bounce destroy your sender reputation.
          Before sending, verify: check the domain&apos;s MX records
          exist, test the address with a free verifier (they check
          syntax, domain, and catch-all status), and confirm the
          recipient&apos;s role. One bounced campaign can silence a fresh
          mailbox for weeks.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">
          6. What to do when you can&apos;t find one
        </h2>
        <p>
          If a person has no findable address, they&apos;re either
          unreachable by email or not worth reaching. Skip them. Your
          time is better spent finding 30 people with verifiable
          addresses than collecting 300 guesses that bounce.
        </p>

        <div className="mt-10 rounded-xl bg-indigo-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Write emails that deserve the address
          </h3>
          <p className="mt-2 text-gray-700">
            Finding the email is half the work. ColdCrow turns a
            one-line description of your prospect into a personalized
            email built on the six triggers that get replies — with a
            deliverability score before you send.
          </p>
          <p className="mt-3 font-medium text-indigo-600">
            Try it free at ColdCrow.
          </p>
        </div>
      </div>
    </article>
  );
}
