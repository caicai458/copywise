import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS: Record<
  string,
  { title: string; date: string; readTime: string; content: string }
> = {
  "how-to-find-email-addresses": {
    title: "How to Find Anyone's Email Address for Cold Outreach (Free Methods)",
    date: "Oct 5, 2026",
    readTime: "7 min read",
    content: `
# How to Find Anyone's Email Address for Cold Outreach (Free Methods)

The #1 excuse for not doing cold outreach: "I can't find their email address."

Here's the thing — finding a B2B email address is easier than you think. You don't need a $99/month database. With these free methods, you can find most decision-makers' emails in under two minutes.

## Method 1: Email Pattern Guessing + Verification

Most companies use a predictable email format. The three most common:

- first@company.com
- first.last@company.com
- firstl@company.com

Find one email from the company (their press page, a blog author, or a job posting), then test the pattern. Verify with a free email checker like Hunter's free tier or MailTester. If the bounce rate says "risky," try the next pattern.

## Method 2: The Site Search Trick

Google this:

- site:company.com "@company.com"
- site:company.com "email" "CEO"
- site:company.com mailto:

This surfaces publicly listed emails — press contacts, support addresses, founder emails in blog posts. A support@ or hello@ address is a fine starting point: reply to it and ask for the right person.

## Method 3: Company Contact Pages & Job Posts

Go to company.com/contact or /about. Founders of early-stage startups almost always list a personal email or a direct contact form.

Job descriptions are gold: "Email your resume to jane@company.com" reveals the format instantly.

## Method 4: LinkedIn (Without Premium)

- LinkedIn → find the person → check their "Contact info" section (sometimes public)
- Look at their recent posts — many founders put their email in the comments or profile
- Their company's LinkedIn "Employees" page often shows emails in bios

## Method 5: The Twitter/X Bio

Go to x.com/company, click their profile, check the bio. A surprising number of founders and sales leaders put their direct email right there.

## Method 6: GitHub & ProductHunt

- GitHub: go to company's repo, click any contributor, check their profile email
- ProductHunt: check the maker's profile — many list a direct email

## Method 7: The Support Email Move

When all else fails, email support@ or hello@ with a specific, low-friction question. Companies route these to the right person fast. It's not a "cold email" in the classic sense — but it starts the conversation.

## What to Do Once You Have the Email

Now you have the email. The hard part is the message. This is exactly what ColdCrow is for: describe the prospect in one line, get a personalized cold email with a deliverability score in seconds. No signup required — try it free.
`
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
          </div>

          <div className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.slice(2)}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.slice(3)}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold mt-6 mb-3">
                    {paragraph.slice(4)}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                return (
                  <ul key={i} className="my-4 ml-6 list-disc space-y-2">
                    {items.map((item, j) => (
                      <li key={j}>{item.slice(2)}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground"
                  >
                    {paragraph.slice(2)}
                  </blockquote>
                );
              }
              // Bold text handling
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="my-4 leading-relaxed">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={j} className="font-semibold">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>{/* Post CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-8 text-center">
            <h2 className="text-xl font-bold sm:text-2xl">
              Try ColdCrow Free — 30 Seconds
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Turn a one-line product description into a personalized cold email
              with a deliverability score. No signup required.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/try">
                  Try Free No Signup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
