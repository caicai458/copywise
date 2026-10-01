import Link from "next/link";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const POSTS = [
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
  {
    slug: "cold-email-deliverability-checklist",
    title: "Cold Email Deliverability Checklist: SPF, DKIM, DMARC That Actually Works",
    description:
      "Your cold emails landing in spam? Fix the three authentication records first. The complete 2026 deliverability checklist for B2B cold email.",
    date: "Sep 30, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cold-email-volume-limits-2026",
    title: "Cold Email Volume Limits in 2026: Why 50 Per Day Beats 500",
    description:
      "Sending 500 cold emails a day from one inbox kills your deliverability. Here's the 2026 data on volume limits, inbox rotation, and why quality beats quantity.",
    date: "Sep 30, 2026",
    readTime: "6 min read",
  },
  {
    slug: "multichannel-outreach-playbook",
    title: "Multichannel Outreach: Why Email Alone Caps Your Reply Rate",
    description:
      "Cold email works — until it stops. Multichannel sequencing (email + LinkedIn + phone) lifts engagement 40% and reply rates 287%. Here's the 2026 playbook.",
    date: "Sep 30, 2026",
    readTime: "6 min read",
  },
  {
    slug: "cold-email-follow-up",
    title: "The 3-Touch Follow-Up Framework That Actually Gets Replies",
    description:
      "80% of cold email replies come after the first email. Here's the 3-touch follow-up framework that actually gets replies.",
    date: "Oct 1, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cold-email-deliverability",
    title: "Cold Email Deliverability: SPF, DKIM & DMARC for Founders",
    description:
      "Your cold emails landing in spam? The 2026 deliverability setup for founders: SPF, DKIM and DMARC explained simply.",
    date: "Oct 1, 2026",
    readTime: "7 min read",
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
