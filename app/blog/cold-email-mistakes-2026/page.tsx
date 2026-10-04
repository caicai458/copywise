import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 Cold Email Mistakes Killing Your Reply Rate (2026)",
  description:
    "Cold emails fail for the same seven reasons over and over. Here is each mistake, the data behind it, and the exact fix - so your next campaign actually gets replies.",
  openGraph: {
    title: "7 Cold Email Mistakes Killing Your Reply Rate (2026)",
    description:
      "The seven cold email mistakes that kill reply rates - no follow-ups, weak CTAs, spam triggers, template fatigue - and how to fix each one.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        7 Cold Email Mistakes Killing Your Reply Rate (2026)
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 9 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <p>
          Most cold email fails the same way. Not because the product is bad - because the email
          commits one of seven classic mistakes. Fix these and your reply rate moves from "dead
          silent" to "actually hear back".
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          1. You send once and give up
        </h2>
        <p>
          <strong>The data:</strong> 44% of salespeople quit after a single follow-up, yet 80% of
          sales need at least five touches to close. Most replies land on touch 2 or 3 - people
          are busy, and missing one email is not a "no".
        </p>
        <p>
          <strong>The fix:</strong> Plan a sequence from day one: first email, value-add follow-up
          on day 3, a second question on day 7, a polite break-up on day 14. The sequence turns
          "no reply" into "replied eventually".
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">2. Your CTA asks for too much</h2>
        <p>
          A first cold email that asks for a 45-minute demo is a big commitment from a stranger -
          and most buyers say no reflexively. Multiple CTAs ("book a call, visit our site, reply
          to this email") make it worse: when in doubt, people do nothing.
        </p>
        <p>
          <strong>The fix:</strong> One ask, one sentence, low friction. "Worth a 5-minute look?"
          or "Mind if I send over an example?" beats "Let's schedule a call to discuss your needs"
          every time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">3. It reads like a template</h2>
        <p>
          Buyers can smell a mail-merged template in one sentence. "I noticed your company does
          X" followed by generic praise is the giveaway. <strong>Personalization means referencing
          something specific</strong> - their last launch, a recent hire, a product detail only an
          insider would know.
        </p>
        <p>
          <strong>The fix:</strong> Before writing, find one concrete detail about the company and
          weave it into the first two lines. If you cannot find anything, you are targeting the
          wrong company.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">4. The email is too long</h2>
        <p>
          Long, heavy emails get skipped. Emails under 80-120 words get more replies - every extra
          paragraph is a reason to hit delete. You are not writing a brochure; you are starting a
          conversation.
        </p>
        <p>
          <strong>The fix:</strong> Draft it, then cut it in half. Aim for 3-5 short sentences:
          why them, what you do, one question. If a sentence does not earn its place, remove it.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">5. You are landing in spam</h2>
        <p>
          A beautiful email means nothing in the promotions tab. Missing SPF/DKIM/DMARC records,
          a cold (unwarmed) domain, links in the first touch, or spam trigger words all push you
          toward spam. The problem is invisible to you - but the inbox provider knows.
        </p>
        <p>
          <strong>The fix:</strong> Verify your DNS records, warm up for 2-3 weeks, stay at 10-30
          sends per day, and skip links in the first email. Check the full checklist in our{" "}
          <a href="/blog/cold-email-deliverability-checklist" className="font-medium text-blue-600 hover:underline">
            deliverability guide
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">6. You talk about yourself</h2>
        <p>
          "We are a leading platform that helps companies like yours..." is about you. The buyer
          opens an email for one reason: <strong>what is in it for them</strong>. If the first two
          lines are about your company, you have already lost them.
        </p>
        <p>
          <strong>The fix:</strong> Open with their problem or their win. You can introduce your
          product in one clause - "we do X" - and let the question do the heavy lifting.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">7. You follow up weakly</h2>
        <p>
          "Just checking in!" is the weakest follow-up in B2B. It signals you have been waiting
          around - low status, and it gives the prospect nothing new to react to.
        </p>
        <p>
          <strong>The fix:</strong> Every follow-up must add value: a new proof point, a relevant
          insight, a different angle. "Saw you shipped v2 - congrats. Curious how you are handling
          X now" beats "just wanted to circle back" every time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">The one-line version</h2>
        <p>
          Follow up (at least 4 touches), one low-friction ask, real personalization, under 120
          words, deliverability clean, prospect-first, value-add follow-ups. Miss one and your
          reply rate bleeds. Fix all seven and cold email becomes a channel you can actually
          count on.
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-semibold text-gray-900">Skip the mistakes - let AI draft it right</p>
          <p className="mt-1 text-sm">
            ColdCrow generates personalized, deliverability-scored cold emails in seconds - short,
            single-CTA, prospect-first by default. Free to try, no card needed.{" "}
            <a href="/try" className="font-medium text-blue-600 hover:underline">
              Try it here
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
