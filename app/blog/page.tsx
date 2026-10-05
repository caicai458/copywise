import Link from "next/link";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const POSTS = [
  {
    slug: "cold-email-ab-testing",
    title: "Cold Email A/B Testing: The Framework That Doubles Reply Rates",
    description:
      "You can't improve what you don't measure. Here is the 2026 A/B testing framework for cold email: what to test first, how many variations you need, and the metrics that actually predict replies.",
    date: "Oct 5, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-find-email-addresses",
    title: "How to Find Anyone's Email Address for Cold Outreach (Free Methods)",
    description:
      "The #1 excuse for not doing cold outreach is 'I can't find their email.' Here are 7 free methods to find any B2B decision-maker's email in under two minutes - no paid databases required.",
    date: "Oct 5, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cold-email-mistakes-2026",
    title: "7 Cold Email Mistakes Killing Your Reply Rate (2026)",
    description:
      "Cold emails fail for the same seven reasons over and over. Here is each mistake, the data behind it, and the exact fix - so your next campaign actually gets replies.",
    date: "Oct 4, 2026",
    readTime: "9 min read",
  },
  {
    slug: "cold-email-deliverability-checklist",
    title: "The 2026 Cold Email Deliverability Checklist (SPF, DKIM, DMARC)",
    description:
      "A beautiful cold email means nothing if it lands in spam. Here is the 2026 deliverability checklist: DNS records, warmup, sending volume, link strategy, and the reply habit that keeps your domain healthy.",
    date: "Oct 4, 2026",
    readTime: "8 min read",
  },
  {
    slug: "cold-email-follow-up-sequence",
    title: "The Cold Email Follow-Up Sequence That Actually Gets Replies",
    description:
      "Most cold email replies come from the follow-up, not the first touch - but 90% of senders never send one. Here is the day-by-day follow-up sequence, with templates, that turns ignored emails into conversations.",
    date: "Oct 4, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cold-email-for-saas-founders",
    title: "Cold Email for SaaS Founders: The 2026 Playbook",
    description:
      "SaaS founders have the unfair advantage of a product people can try. Here is the 2026 cold email playbook for SaaS: the accounts worth emailing, what to say, and how to route every reply to a signup.",
    date: "Oct 4, 2026",
    readTime: "10 min read",
  },
  {
    slug: "linkedin-cold-outreach",
    title: "LinkedIn Cold Outreach: The Playbook That Turns Connections Into Calls",
    description:
      "LinkedIn cold outreach still works in 2026 - if you stop sending the same 20-word connection note everyone sends. Here is the playbook: research, a specific opener, and a low-pressure ask that books calls.",
    date: "Oct 4, 2026",
    readTime: "6 min read",
  },
  {
    slug: "cold-email-deliverability-checklist-2026",
    title: "Cold Email Deliverability in 2026: The Practical Checklist",
    description:
      "Cold email only works when it lands in the inbox. This checklist covers SPF/DKIM/DMARC, warmup, sending limits, content signals, and the metrics that matter.",
    date: "Oct 3, 2026",
    readTime: "6 min read",
  },
  {
    slug: "cold-email-follow-up-sequence-2026",
    title: "Cold Email Follow-Up: The Sequence That Doubles Your Replies",
    description:
      "Most cold outreach dies in the first email. Here is the 4-email follow-up sequence that gets 3-4x more replies.",
    date: "Oct 3, 2026",
    readTime: "5 min read",
  },
  {
    slug: "why-cold-emails-go-to-spam-2026",
    title: "Why Your Cold Emails Go to Spam (And How to Fix It)",
    description:
      "Your cold emails land in spam for three reasons: untrusted sending setup, content that trips filters, and a list full of dead addresses. Here is the fix.",
    date: "Oct 3, 2026",
    readTime: "5 min read",
  },
  {
    slug: "5-cold-email-openers-2026",
    title: "5 Cold Email Openers That Actually Get Replies",
    description:
      "Your first line decides whether your cold email gets read or deleted in two seconds. Five opener patterns that work in 2026, with real examples.",
    date: "Oct 3, 2026",
    readTime: "5 min read",
  },
  {
    slug: "saas-cold-email-playbook-2026",
    title: "Cold Email for SaaS: The Playbook That Gets 5-10% Reply Rates",
    description:
      "Most SaaS founders treat cold email like a lottery. The ones who get real reply rates treat every email like a product launch for one person.",
    date: "Oct 3, 2026",
    readTime: "6 min read",
  },
  {
    slug: "cold-email-guide",
    title: "The Ultimate Guide to Cold Emails That Actually Get Replies (2026)",
    description:
      "Cold email isn't dead. Bad cold email is dead. Learn how to write personalized, high-reply-rate cold emails in 2026.",
    date: "Sep 20, 2026",
    readTime: "8 min read",
  },
  {
    slug: "cold-email-subject-lines",
    title: "10 Cold Email Subject Lines That Actually Get Opened",
    description:
      "Your subject line is the most important part of your cold email. Here are 10 proven subject lines that get opened.",
    date: "Sep 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "cold-vs-warm-email",
    title: "Cold Email vs Warm Email: Which One Actually Works?",
    description:
      "Cold email vs warm email — which one should you be using? Let's break down the pros, cons, and best use cases.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
  },
];
export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tips, guides, and best practices for writing better cold emails
              and copy that converts.
            </p>
          </div>
          <div className="mt-16 grid gap-6">
            {POSTS.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
