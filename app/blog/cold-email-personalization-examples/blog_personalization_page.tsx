import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email Personalization: 7 Examples That Actually Get Replies",
  description:
    "Generic cold emails get deleted. Here are 7 real personalization examples - company-level, trigger-based, product-specific, mutual-connection, content-based, pain-point, and micro - that get replies.",
  openGraph: {
    title: "Cold Email Personalization: 7 Examples That Actually Get Replies",
    description:
      "7 levels of cold email personalization, from easiest to hardest, each with an example that works.",
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Cold Email Personalization: 7 Examples That Actually Get Replies
      </h1>
      <p className="mt-4 text-sm text-gray-500">Oct 4, 2026 · 7 min read</p>

      <div className="mt-8 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-2xl font-semibold text-gray-900">Why Hi + Name Does Not Work Anymore</h2>
        <p>
          Everyone uses merge tags. When a prospect reads a greeting followed by a pitch that could
          apply to any company, they know it is automated and they delete it.
        </p>
        <p>
          Real personalization is research plus specificity. It shows the prospect you spent 5 minutes
          understanding their business, not 5 seconds running a mail merge.
        </p>
        <p>
          Here are 7 levels of personalization, from easiest to hardest, each with an example that works.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">1. Company-Level Personalization</h2>
        <p>
          Mention something specific about their company: a product launch, funding round, hiring spree,
          or a change on their website.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi Maya, saw you launched the new mobile app last week; the onboarding flow is clean. We help
          SaaS teams like yours run outbound that does not feel like spam. We built a tool that writes a
          personalized first line for every prospect in about 30 seconds. Worth a 15-minute look? Here is
          how it works: https://copywise.vercel.app/try
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">2. Trigger-Based Personalization</h2>
        <p>
          Base your email on something that just happened: a new job, a funding announcement, a new
          competitor, or a fresh integration.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi David, congrats on the Series A; 12M is a big statement in this market. When founders scale
          from 3 to 30 salespeople, outbound quality usually drops. Most teams solve it with templates
          that all sound the same. We built an AI writer that keeps every rep email specific to the
          prospect. Free to try: https://copywise.vercel.app/try
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">3. Product-Specific Personalization</h2>
        <p>
          Reference a specific feature or page of their product. This requires visiting their site, which
          is exactly why it works.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi Priya, your pricing page mentions outbound with personalized sequences; curious how you are
          handling the personalization part today. We built ColdCrow to generate personalized cold emails
          from a prospect profile in seconds. If you are testing tools in this space, it is free:
          https://copywise.vercel.app/try
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">4. Mutual-Connection Personalization</h2>
        <p>
          If you share a connection, mention them with permission. Warm intros convert 3-5x better than
          cold ones.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi Tom, ran into Sarah Chen last week at a founder meetup; she mentioned you are building
          something interesting in the data space. Quick question: how are you approaching outbound right
          now?
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">5. Content-Based Personalization</h2>
        <p>
          Reference something they wrote, posted, or spoke about. This works brilliantly on LinkedIn and X.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi Rachel, your post about SDR burnout got 400+ likes; the point about reply rates hit hard. We
          built a tool that makes SDR lives easier: personalized emails in seconds, so they stop
          copy-pasting templates. Curious if you have tried anything like it:
          https://copywise.vercel.app/try
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">6. Pain-Point Personalization</h2>
        <p>
          Name their likely problem, but only after you confirmed it from real signals: job postings,
          support pages, or review sites.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi Marcus, saw you are hiring a second SDR; most teams at that stage struggle to keep reply
          rates above 3 percent. We built a tool that drafts prospect-specific emails in seconds, so your
          new SDR can send 20 researched emails a day instead of 100 templates. Free to try:
          https://copywise.vercel.app/try
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">7. Micro Personalization</h2>
        <p>
          The smallest detail that proves you looked. A GitHub repo name, a podcast episode, a team page
          bio - anything that could not come from a mail merge.
        </p>
        <p>Example:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          Hi Leo, the Loom video on your docs page is genuinely helpful; most teams hide onboarding behind
          paywalls. Quick question: who owns outbound at your company these days?
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900">The Rule Underneath</h2>
        <p>
          Personalization works because it signals effort. The prospect knows a human spent time on them,
          and that alone separates you from 95 percent of cold email.
        </p>
        <p>
          You do not need a database. You need one researched detail per prospect and a template that
          respects it. That is the entire game.
        </p>
        <p>
          Want to write emails like these in seconds? Try ColdCrow free - no signup needed:
          https://copywise.vercel.app/try
        </p>
      </div>
    </article>
  );
}