import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ArrowLeft } from "lucide-react";

const POSTS: Record<
  string,
  { title: string; date: string; readTime: string; content: string }
> = {
  "cold-email-guide": {
    title: "The Ultimate Guide to Cold Emails That Actually Get Replies (2026)",
    date: "Sep 20, 2026",
    readTime: "8 min read",
    content: `
# The Ultimate Guide to Cold Emails That Actually Get Replies (2026)

Cold email is dead. Or so everyone says.

But here's the truth: cold email isn't dead. **Bad cold email is dead.** The generic templates, the obvious copy-pastes, the "Hi [First Name]" garbage — those don't work anymore.

But cold emails that feel personal, that show you actually understand the prospect's problem, those still work. Really well.

In this guide, I'll show you exactly how to write cold emails that get replies — no fancy tools required, just good principles and a little AI help.

## Why Most Cold Emails Fail

Let's start with the bad news: **9 out of 10 cold emails get ignored.**

Why? Because they all sound the same. Let me guess what your inbox looks like right now:

- "Hi [Name], I came across your company and was impressed by..."
- "I hope this email finds you well..."
- "I'm reaching out because we help companies like yours..."

Boring. Generic. Obvious spam.

The problem isn't cold email itself. The problem is that most people write lazy cold emails.

## What Makes a Cold Email Actually Work

After sending thousands of cold emails and testing dozens of approaches, here's what actually moves the needle:

### 1. It's Short

Long cold emails get deleted. Period.

The best cold emails are **3-5 sentences**. That's it.

Why? Because prospects are busy. They don't have time to read your life story. They want to know: who are you, why are you emailing me, and what do you want?

### 2. It's Personal (Not Generic)

This is the #1 rule. If your email could be sent to anyone, it'll get ignored.

Personalization doesn't mean "Hi John" instead of "Hi [First Name]." Real personalization means:

- You reference something specific about their company
- You mention a blog post they wrote
- You talk about a problem they're likely facing

The more specific you are, the higher your reply rate.

### 3. It Leads With a Problem, Not a Pitch

Nobody cares about your product. They care about their problems.

Bad opening: "We help SaaS companies reduce churn by 30%."

Good opening: "I noticed you're onboarding 100+ new customers a week — how's your churn looking?"

See the difference? The bad opening is all about you. The good opening is all about their problem.

### 4. It Has a Clear, Low-Effort Call to Action

Your CTA shouldn't be "book a demo." That's too big of a ask.

Start smaller:
- "Would you be open to a 15-minute chat?"
- "Is this something you'd be interested in learning more about?"
- "Should I send over a quick one-pager?"

The easier you make it to say "yes," the more yeses you'll get.

## The Cold Email Formula That Actually Works

Here's the exact formula I've been using that gets 15-25% reply rates:

**Line 1: The Hook** — Reference something specific about them
**Line 2: The Problem** — State the problem they're likely facing
**Line 3: The Solution** — Briefly explain how you solve it
**Line 4: The CTA** — Ask for something small

Here's what that looks like in practice:

> Hi Sarah,
> 
> I saw your recent post on LinkedIn about customer onboarding challenges — totally relatable.
> 
> Most SaaS companies lose 20-30% of new users in the first week, and it's almost always because the onboarding experience is confusing.
> 
> We built a tool that helps SaaS companies cut their onboarding time in half with personalized walkthroughs.
> 
> Would you be open to a quick chat about how it works?

That's it. 4 lines. Specific. Problem-focused. Low-effort CTA.

## How AI Changed Cold Email Writing

Up until last year, writing good cold emails was a huge time sink. You had to:

1. Research each prospect
2. Write a personalized email from scratch
3. Edit and rewrite to sound natural
4. Test different versions

That's 20-30 minutes per email. Not scalable.

Now? AI changed everything.

With the right AI tool, you can:
- **Generate a personalized email in 30 seconds**
- **Test different angles automatically**
- **Score your emails and know what to improve**

The key is using AI the right way: as a drafting tool, not a replacement for judgment.

You still need to:
- Pick the right prospects
- Make sure the email sounds human
- Follow up appropriately

But AI does the heavy lifting of writing the first draft.

## How Copywise Can Help

That's exactly why I built Copywise.

It's an AI cold email generator that:
- **Writes personalized cold emails in 30 seconds**
- **Scores your emails and tells you how to improve them**
- **Generates follow-up sequences automatically**
- **Sounds human, not robotic**

You can try it for free — 5 emails per day, no credit card required.

[Try Copywise free →](https://copywise.vercel.app)

## Final Thoughts

Cold email isn't dead. It's just harder than it used to be.

The people who win aren't the ones who send the most emails. They're the ones who send the most *personalized* emails.

AI makes personalization at scale possible. You just need to use it the right way.

Stop sending generic templates. Start sending emails that sound like a real human wrote them.

Your reply rates will thank you.
`,
  },
  "cold-email-subject-lines": {
    title: "10 Cold Email Subject Lines That Actually Get Opened",
    date: "Sep 20, 2026",
    readTime: "6 min read",
    content: `
# 10 Cold Email Subject Lines That Actually Get Opened

Your subject line is the most important part of your cold email. If it doesn't get opened, nothing else matters.

After testing hundreds of subject lines, here are the 10 that consistently get the highest open rates.

## Why Subject Lines Matter

64% of people say they open an email because of the subject line. That means your subject line is doing 80% of the work.

A great subject line gets opened. A bad one gets deleted — or worse, marked as spam.

## The 10 Best Cold Email Subject Lines

### 1. "Quick question about [specific topic]"

Example: "Quick question about your onboarding flow"

Why it works: It's specific, it's humble, and it implies you have a real question (not a sales pitch).

### 2. "Saw your post about [topic]"

Example: "Saw your post about AI in sales"

Why it works: It shows you've done your research. It's personal. It implies you're not spamming everyone.

### 3. "Ideas for [specific problem]"

Example: "Ideas for reducing customer churn"

Why it works: It's solution-oriented. It promises value, not a pitch.

### 4. "[First Name] — quick thought"

Example: "Sarah — quick thought"

Why it works: It's casual. It feels like a friend sending you a message, not a sales email.

### 5. "Following up on [specific thing]"

Example: "Following up on your Product Hunt launch"

Why it works: It references something specific. It gives you a reason to follow up.

### 6. "Loved your recent [content type]"

Example: "Loved your recent blog post on cold email"

Why it works: It starts with a compliment. It's personal. People love hearing good things about their work.

### 7. "Question about [their product/service]"

Example: "Question about your analytics dashboard"

Why it works: It positions you as a potential customer. It's low-pressure.

### 8. "[Mutual connection] suggested I reach out"

Example: "John suggested I reach out"

Why it works: Social proof. It instantly builds trust. (Only use this if it's true!)

### 9. "Quick idea for [their company]"

Example: "Quick idea for Acme Corp"

Why it works: It promises value. It's short. It makes people curious.

### 10. "Just a quick one"

Example: "Just a quick one about your sales process"

Why it works: It's short. It implies the email won't be long. It lowers the barrier to opening.

## Subject Lines to Avoid

These subject lines will get your email deleted or marked as spam:

- "Opportunity"
- "Partnership"
- "Following up" (without context)
- "Hello"
- "Quick question" (too generic)
- "Important"
- "Urgent"

## How to Test Your Subject Lines

The best way to find what works for your audience is to test:

1. Send two versions of the same email with different subject lines
2. Track open rates
3. Double down on what works

With Copywise, you can automatically generate multiple subject line options and pick the best one.

[Try Copywise free →](https://copywise.vercel.app)

## Final Tip

Keep it short. Most people check email on their phone, and long subject lines get cut off.

Aim for 6-10 words. That's long enough to be specific, short enough to be read on a phone.
`,
  },
  "cold-vs-warm-email": {
    title: "Cold Email vs Warm Email: Which One Actually Works?",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    content: `
# Cold Email vs Warm Email: Which One Actually Works?

When it comes to B2B sales, you have two main options: cold email and warm email. But which one actually works?

Let's break down the pros, cons, and best use cases for each.

## What's the Difference?

**Cold email** = emailing someone you've never met. You don't have a prior relationship.

**Warm email** = emailing someone you already have some connection with. Maybe you met at a conference, or they downloaded your ebook, or you follow each other on LinkedIn.

## Cold Email: Pros and Cons

### Pros

- **Scalable**: You can reach hundreds of new prospects every day
- **Low cost**: No need to attend conferences or build a huge network
- **Targeted**: You can email exactly the people you want to talk to

### Cons

- **Lower reply rate**: Usually 1-5%
- **Time-consuming**: Writing personalized cold emails takes time
- **Deliverability risk**: Too many cold emails can get you flagged as spam

## Warm Email: Pros and Cons

### Pros

- **Higher reply rate**: Usually 10-25%
- **Better trust**: You already have some connection
- **Shorter sales cycle**: People already know who you are

### Cons

- **Not scalable**: You can only warm up so many relationships
- **Takes time**: Building warm relationships takes months or years
- **Limited audience**: You can only reach people you already know

## Which One Should You Use?

It depends on your goals:

**Use cold email if:**
- You're just starting out and don't have a network
- You need to reach a lot of new prospects fast
- You have a clear target audience

**Use warm email if:**
- You already have a network or email list
- You're selling high-ticket items that require trust
- You're launching a new product to existing customers

## The Best Strategy: Use Both

The best sales teams use both:

1. **Use cold email to build your list** — reach new prospects
2. **Use warm email to nurture them** — send valuable content, build relationships
3. **Convert warm leads into customers** — they're more likely to buy

## How AI Makes Cold Email Better

Cold email used to be a numbers game. You had to send hundreds of emails to get a handful of replies.

Now? AI changed everything.

With AI tools like Copywise, you can:
- **Write personalized cold emails in 30 seconds**
- **Score your emails and know what to improve**
- **Send follow-up sequences automatically**

This means you can send more personalized cold emails without spending hours writing each one.

[Try Copywise free →](https://copywise.vercel.app)

## Final Thoughts

Cold email and warm email aren't competitors — they're complements.

Use cold email to find new prospects. Use warm email to turn them into customers.

And use AI to make both faster and more effective.
`,
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
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
