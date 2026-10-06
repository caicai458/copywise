import Link from "next/link";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "50 Cold Email Personalization Ideas That Actually Get Replies",
  description:
    "Generic cold email gets deleted. Here are 50 specific personalization angles you can use today — from company signals to content references.",
  openGraph: {
    title: "50 Cold Email Personalization Ideas",
    description:
      "50 specific personalization angles that turn cold emails into conversations.",
  },
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          <p className="mb-3 text-sm font-medium text-orange-600">Oct 6, 2026 · 8 min read</p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            50 Cold Email Personalization Ideas That Actually Get Replies
          </h1>

          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <p>
              One specific detail in the first sentence beats four paragraphs of generic praise. The hard part is finding that detail fast. Here are 50 angles, grouped by signal type, that you can research in under two minutes each.
            </p>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Company Signals (1-12)</h2>
            <ol className="list-decimal space-y-1 pl-6 text-sm">
              <li>They just launched a new feature — reference it.</li>
              <li>They announced a new customer or case study — mention the win.</li>
              <li>They posted a job listing for the role you'd help — tie your value to that hire.</li>
              <li>They raised funding — congratulate and connect it to their growth phase.</li>
              <li>They redesigned their website — comment on the new positioning.</li>
              <li>They changed pricing — ask how the new tier is landing.</li>
              <li>They hired a new executive — welcome them and offer help in their first 90 days.</li>
              <li>They published a new ebook or report — react to one number in it.</li>
              <li>They moved to a new office or city — reference the expansion.</li>
              <li>They have a partner program — ask about partner motion.</li>
              <li>Their pricing page is oddly hidden — mention you had to dig for it.</li>
              <li>They won an award — congratulate and connect to your offer.</li>
            </ol>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Content Signals (13-25)</h2>
            <ol start={13} className="list-decimal space-y-1 pl-6 text-sm">
              <li>Their latest blog post — agree, add one insight, or gently challenge a claim.</li>
              <li>Their founder's podcast appearance — quote one line.</li>
              <li>Their LinkedIn post — reply to the actual idea, not the platform.</li>
              <li>Their YouTube video — reference a specific example they gave.</li>
              <li>Their newsletter — mention one tip you applied.</li>
              <li>Their product changelog — ask about the newest release.</li>
              <li>Their docs — point out something confusing or well-done.</li>
              <li>Their API reference — reference your integration angle.</li>
              <li>Their comparison page — they wrote about your competitor.</li>
              <li>Their testimonial page — quote one customer story.</li>
              <li>Their case study — ask a follow-up question about the outcome.</li>
              <li>Their open-source repo — comment on a recent commit or issue.</li>
              <li>Their webinar — ask about something they promised to share.</li>
            </ol>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Personal Signals (26-38)</h2>
            <ol start={26} className="list-decimal space-y-1 pl-6 text-sm">
              <li>They spoke at a conference — reference the talk.</li>
              <li>They were quoted in the press — mention the article.</li>
              <li>They wrote a guest post — react to it.</li>
              <li>They posted about their own cold outreach — compliment the craft.</li>
              <li>They asked for tool recommendations — pitch lightly and honestly.</li>
              <li>They announced a personal milestone — congratulate genuinely.</li>
              <li>They're hiring for their team — ask about team culture.</li>
              <li>They retweeted a specific take — build on it.</li>
              <li>They use a tool you also use — start from shared ground.</li>
              <li>They posted a photo from a conference you attended — "wish I'd caught you."</li>
              <li>Their bio mentions a specific metric — reference it.</li>
              <li>They wrote about a past failure — respect the honesty, connect the lesson.</li>
              <li>They're active in a niche community — reference something from it.</li>
            </ol>

            <h2 className="pt-4 text-xl font-bold text-gray-900">Market Signals (39-50)</h2>
            <ol start={39} className="list-decimal space-y-1 pl-6 text-sm">
              <li>Their industry just changed regulation — ask how they're adapting.</li>
              <li>A competitor of theirs launched — offer a counter-advantage.</li>
              <li>Their market is consolidating — reference the M&A wave.</li>
              <li>There's a new industry benchmark — ask if they hit it.</li>
              <li>A report on their segment just dropped — react to one stat.</li>
              <li>Their target buyer's budget season is coming — time your ask.</li>
              <li>A major platform (Google, Apple, Meta) changed rules for their space.</li>
              <li>Their pricing model looks outdated vs. the market — ask gently.</li>
              <li>There's a hot new tool in their category — ask if they evaluated it.</li>
              <li>Their customer reviews mention a common complaint — reference it.</li>
              <li>Their G2/Capterra page has a pattern — mention it.</li>
              <li>Their social following jumped — ask about the campaign.</li>
            </ol>

            <h2 className="pt-4 text-xl font-bold text-gray-900">The Rule That Makes All 50 Work</h2>
            <p>
              Pick ONE angle per email. Write it into the first sentence. Then keep the rest short and low-pressure. The angle opens the door; the brevity gets you the reply.
            </p>
            <p>
              If finding the angle feels like the bottleneck, that's exactly what ColdCrow automates — describe a prospect, get a personalized email with a deliverability score in seconds.
            </p>
            <p>
              <Link href="/try" className="font-medium text-orange-600 hover:text-orange-700">
                Try it free — 3 generations, no card →
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
