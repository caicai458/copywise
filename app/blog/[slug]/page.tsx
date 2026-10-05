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
    "cold-email-personalization-scale": {
      title: "Cold Email Personalization at Scale: How to Sound Human in 200 Emails a Day",
      date: "Oct 8, 2026",
      readTime: "7 min read",
      content: `
# Cold Email Personalization at Scale: How to Sound Human in 200 Emails a Day

Everyone tells you to personalize. Nobody tells you how to do it when you're sending 200 emails a day without a team.

The good news: real personalization doesn't require 30 minutes per prospect. It requires a system. Here's the one that works.

## The 80/20 of Personalization

Study 100 replies you've gotten. You'll find the same pattern: prospects respond when you reference something specific about their company — a product change, a job posting, a recent launch, a specific page on their site.

Here's the uncomfortable truth: you only need ONE specific detail per email. One line of researched relevance beats four paragraphs of generic praise.

## The 10-Minute Research Loop

For each prospect, run this loop:

**Minute 1-2: Their website.** What do they sell? Who do they sell to? What's their headline claim?

**Minute 3-4: Their changelog or news.** What changed this month? New feature? New customer? New hire?

**Minute 5-6: Their content.** One blog post or LinkedIn post from the last 30 days. What's the topic? What's their opinion?

**Minute 7-8: Find the angle.** Pick ONE of these three:
- "I saw your new [feature]" — relevant if you complement it
- "Your post on [topic]" — relevant if you can add value
- "You're hiring for [role]" — relevant if you help with that workflow

**Minute 9-10: Write the first sentence.** Put the specific detail in sentence one. Everything else is boilerplate.

## The Template That Lets You Scale

\`\`\`
Hi {first name},

{Sentence 1: one specific detail about their company or content}

{One line about your product, tied to their situation}

{One question — low effort, specific to their context}

{Sign-off}
\`\`\`

The magic is in the constraint: only sentence one changes. That's what makes it scalable — you research one angle, write one sentence, and the rest is a template you've already perfected.

## Batch Your Research

Here's the workflow that makes this fast:

1. **Build the list on Monday.** 200 prospects who pass your ICP screen.
2. **Research in blocks.** 20 prospects at a time, 10 minutes each = 200 minutes. One focused session, not 200 interruptions.
3. **Write sentence one immediately** after researching each prospect, while the detail is fresh.
4. **Send in waves of 20-30** across the week — never 200 in one day (deliverability and spam risk).

## What Personalization Actually Buys You

Realistic numbers: a generic blast gets 1-3% replies. One researched line gets 5-8% on most lists — sometimes 10%+ if the ICP is tight.

That's not a small difference. On 1,000 emails, that's 50 vs 10 replies. Five times the conversations from the same effort.

## The Hard Rule

If you can't find one specific detail in 10 minutes, skip the prospect. A generic email to the wrong person wastes your sender reputation faster than it builds pipeline.

Fewer, better, researched — every time.

---

*ColdCrow turns a one-line product description into a personalized cold email with a deliverability score — so the research you do goes into an email that actually gets sent. Try it free: copywise.vercel.app/try*

`,
  },
    "how-to-find-right-person-to-email": {
      title: "How to Find the Right Person to Email: ICP Targeting for Cold Outreach",
      date: "Oct 7, 2026",
      readTime: "6 min read",
      content: `
# How to Find the Right Person to Email: ICP Targeting for Cold Outreach

You can write the perfect cold email and still get zero replies. The reason is almost never the copy — it's the target.

Most senders skip the most important step: deciding who deserves the email at all. Here's a practical framework for ICP (Ideal Customer Profile) targeting that actually improves reply rates.

## The 3-Question Screen

Before you add anyone to your list, run them through three questions:

**1. Does this person feel the pain your product solves?**

Not "could they theoretically benefit" — do they feel it this quarter? A founder with a hiring problem won't open an email about payroll software... until the week their only engineer quits.

**2. Can they say yes?**

The right person is the one who can act on a yes. A marketing coordinator can love your tool and still need three approvals. The CMO can say yes in one meeting. Title matters less than decision authority.

**3. Is this a company you actually want as a customer?**

This filters for the bottom half of your funnel: deal size, implementation effort, churn risk. A $29/month user who needs 4 hours of onboarding is a loss disguised as a win.

## How to Find Their Emails

Once you know who to target, finding the address is usually a 3-minute task:

- **Check the company's website first.** Many SaaS companies publish team pages or use a predictable pattern (first@company.com).
- **Search the person's public work.** If they've written blog posts or spoken at events, their email is often in the byline or profile.
- **Use LinkedIn for confirmation, not discovery.** LinkedIn is great for verifying titles and roles, but the email itself usually lives elsewhere — their site, their GitHub, their newsletter.

## The 100-Person Test

Here's the fastest way to validate your ICP: send your first outreach to just 100 people who pass the 3-question screen. Track only one metric — reply rate.

- Below 3% replies: your targeting is off, not your copy. Re-screen.
- 3-8%: decent. Your message needs work, your list doesn't.
- Above 8%: your ICP is strong. Scale the list and A/B test the message.

Most people reverse this. They polish the email for days and never question the list. The list is where the reply rate lives.

## The One-Email Rule

Here's the uncomfortable truth: if your product is genuinely useful to a specific type of company, you don't need a giant list. You need 200 right people, not 2,000 maybes.

One well-researched email to the right person outperforms ten templates to the wrong ones — every single time.

---

*ColdCrow helps you turn a one-line product description into personalized cold emails in seconds — with a deliverability score before you send. Try it free: copywise.vercel.app/try*

`,
  },
    "cold-email-metrics-that-matter": {
      title: "Cold Email Metrics That Actually Matter (And the Ones to Ignore)",
      date: "Oct 7, 2026",
      readTime: "5 min read",
      content: `
# Cold Email Metrics That Actually Matter (And the Ones to Ignore)

Every cold email dashboard looks the same: a big open rate, a small reply rate, and a button to "improve deliverability." But most of those numbers are vanity metrics that lead you in the wrong direction.

Here's how to read your cold email data like someone who actually wants replies.

## The Metric That Matters: Reply Rate

Reply rate is the only number that reflects whether your message resonated. Everything else is a proxy.

- **Below 3%** — your targeting or message is off. Before rewriting copy, re-examine who you're emailing.
- **3-8%** — healthy for cold outreach. Now A/B test subject lines and first sentences.
- **Above 8%** — strong. Scale the list carefully and protect the sender reputation that got you here.

## Open Rate: Useful Only as a Ceiling

Open rate tells you about your subject line, nothing else. A 60% open rate with a 2% reply rate means your subject line is great and your content isn't.

Two caveats:
- **Apple Mail Privacy Protection** inflates open rates (pixels load without real opens). Don't tune your email based on a 5% movement in opens.
- Open rate is a ceiling check: if it's under 20%, your subject line or sender reputation needs work before anything else.

## Bounce Rate: The Safety Metric

A bounce rate above 3% damages your sender reputation and pushes future emails to spam. Keep it low by verifying addresses before sending — never send to a list you scraped without validation.

## Spam Complaint Rate: The Kill Switch

Over 0.1% complaints (1 in 1,000) and providers start filtering you. Over 0.3% and you're in danger of blacklisting. Complaints come from three places: no relevance, no opt-out, or emailing people who never agreed to hear from you.

## Reply-to-Reply Quality: The Metric Nobody Tracks

The best signal isn't how many replies — it's what the replies say.

- "Not interested" — your targeting was wrong or your value prop was unclear.
- "Can you send more info?" — you were relevant, but you buried the lead.
- "Let's talk" — you nailed it. Study what this email did differently and do it again.

## The Only Dashboard You Need

Ignore the fancy charts. Track five numbers per batch:

| Metric | Healthy Range |
|---|---|
| Bounce rate | Under 3% |
| Open rate | 30-60% |
| Reply rate | 3%+ |
| Complaint rate | Under 0.1% |
| Positive replies | As many as possible |

## A Note on Volume

A common trap: sending more to compensate for a low reply rate. That's like turning up the radio because you're lost. Fix the message and the list first — then scale.

One hundred relevant emails that get 8% replies will outperform a thousand generic ones at 1% — with a fraction of the sender-reputation risk.

---

*ColdCrow scores your cold email for deliverability before you send — so you fix problems in the draft, not after 500 sends. Try it free: copywise.vercel.app/try*

`,
  },
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
  "cold-email-deliverability-checklist": {
    title: "Cold Email Deliverability Checklist: SPF, DKIM, DMARC That Actually Works",
    date: "Sep 30, 2026",
    readTime: "7 min read",
    content: `
# Cold Email Deliverability Checklist: SPF, DKIM, DMARC That Actually Works

Your cold email reply rate is 0.4%. Your emails are "sent" but nobody sees them. Before you blame the copy, check the plumbing — **Gmail and Outlook now route unauthenticated mail to spam regardless of content**.

## The Three Records That Decide Everything

### 1. SPF (Sender Policy Framework)
Tells receiving servers which IPs are allowed to send for your domain.

- Create a TXT record: \`v=spf1 include:your_sender include:_spf.google.com ~all\`
- One SPF record per domain max — multiple records cause failures
- Test with MXToolbox

### 2. DKIM (DomainKeys Identified Mail)
Cryptographically signs your emails so they can't be forged.

- Generate a keypair in your sending platform (Google Workspace, Outlook, etc.)
- Publish the public key as a TXT record: \`v=DKIM1; k=rsa; p=...\`
- The selector matters — it must match your sending service exactly

### 3. DMARC (Domain-based Message Authentication)
Tells receivers what to do with mail that fails SPF/DKIM.

- Start with monitoring: \`v=DMARC1; p=none; rua=mailto:you@yourdomain.com\`
- Once clean, move to quarantine: \`p=quarantine\`
- Check alignment — SPF and DKIM domains must match your From domain

## The 2026 Delivery Checklist

**Before sending anything:**

- [ ] SPF, DKIM, DMARC all verified via MXToolbox or dmarcian
- [ ] Sending domain warmed up 4–6 weeks (3–5 emails/day, ramping)
- [ ] Sender volume capped at 30–50 emails per inbox per day
- [ ] Bounce rate under 2% — bounce rates above 5% tank sender reputation
- [ ] Every contact verified before sending (never buy scraped lists)

**In every email:**

- [ ] Plain-text, human tone — no spam-trigger words ("free", "guarantee", "act now")
- [ ] Real sender name and clear signature
- [ ] One link max, from your primary domain
- [ ] Unsubscribe or "no worries if not" line — respect and deliverability win together

**Weekly:**

- [ ] Check deliverability dashboard (open rate vs. spam rate)
- [ ] Rotate volume across inboxes if scaling
- [ ] Remove hard bounces immediately

## The Bottom Line

SPF, DKIM, and DMARC aren't optional IT chores — they're the difference between your email reaching the inbox or the void. Fix authentication first, then let your copy do its job.

---

*ColdCrow scores your emails for deliverability risk before you send. Generate a cold email, get a delivery health check, and hit send with confidence. Free tier available.*
`,
  },
  "cold-email-volume-limits-2026": {
    title: "Cold Email Volume Limits in 2026: Why 50 Per Day Beats 500",
    date: "Sep 30, 2026",
    readTime: "6 min read",
    content: `
# Cold Email Volume Limits in 2026: Why 50 Per Day Beats 500

If you're blasting 500 cold emails a day from a single Gmail account, you're not doing outreach — you're burning your sender reputation.

## The 2026 Reality

Gmail and Microsoft have significantly tightened their spam filters. Industry analysis from 2026 is consistent: **a single inbox caps out at 30–50 cold emails per day**. Push past that and your deliverability collapses — emails start landing in spam, then get hard-bounced, and eventually the account gets flagged or locked.

This isn't speculation. Every major outreach guide published in 2026 repeats the same number: **30 to 50 emails per inbox per day**.

## The Math: How to Scale Safely

Want to send 500 emails a day? You need **10–16 sending inboxes** working in rotation.

- 50 emails × 10 inboxes = 500 emails/day
- Each inbox stays under the safety threshold
- No single account looks like a spammer

## Warm-Up Is Non-Negotiable

New sending domains need 4–6 weeks of warm-up:

- Start at 3–5 emails per inbox per day
- Ramp gradually over 2–4 weeks
- Never jump straight to 50/day on a cold domain

## What Actually Moves Reply Rates

Volume is not the lever. The 2026 data is clear:

- **Multi-channel sequencing** (email + LinkedIn + phone) yields 40% higher engagement and 31% lower cost-per-lead than single-channel
- **Three or more touchpoints** drive response rates up 287% compared to one
- **Hyper-personalized, tight-targeted campaigns** of 30–50 messages consistently outperform 300 blasts

## The Bottom Line

Stop asking "how many emails can I send" and start asking "which 50 prospects deserve my best message today." The research IS the deliverable — the email is just the delivery mechanism.

---

*Want to generate personalized cold emails that actually get replies? ColdCrow drafts high-deliverability outreach in seconds. Free tier available — no credit card required.*
`,
  },
  "multichannel-outreach-playbook": {
    title: "Multichannel Outreach: Why Email Alone Caps Your Reply Rate",
    date: "Sep 30, 2026",
    readTime: "6 min read",
    content: `
# Multichannel Outreach: Why Email Alone Caps Your Reply Rate

Cold email is still the workhorse of B2B outbound. But in 2026, running email-only outreach is like fishing with one line in one pond.

## The Numbers That Changed the Game

Recent B2B outreach benchmarks are dramatic:

- **Omnichannel campaigns yield 40% higher engagement** and 31% lower cost-per-lead than single-channel
- **Using three or more touchpoints** drives response rates up **287%** versus relying on one
- For enterprise, C-suite, and European markets, LinkedIn is sometimes **more effective than email**

## The 2026 Multichannel Sequence

The most effective sequences blend channels with specific purposes:

| Day | Channel | Purpose |
|-----|---------|---------|
| Day 1 | Email | Trigger + insight (personalized observation) |
| Day 3 | LinkedIn | Connection request with shared context |
| Day 7 | Email | Value follow-up — share insight, no pitch |
| Day 14 | LinkedIn | Soft close — is it still on your radar? |
| Day 19 | Email | Break-up message — creates urgency, respects autonomy |

## Why LinkedIn Complements Email

Email carries long-form context, attachments, and calendar links. LinkedIn wins where email can't:

- Buyers who decline LinkedIn connections, common at senior levels
- Account-based plays touching multiple stakeholders at one account
- ICPs with low email engagement — ops, finance, and technical roles

## Where Cold Email Still Wins

Don't drop email. It remains the most **scalable** outbound channel — lowest cost-per-touch, works across hundreds of prospects simultaneously. The winning play is email as the backbone, LinkedIn as the amplifier, phone as the closer.

## The Bottom Line

Single-channel outreach caps your reply rate. If your cold email reply rate has plateaued at 1–2%, the fastest unlock isn't a better template — it's a second channel.

---

*ColdCrow helps you write the email layer of your multichannel sequence in seconds — personalized, high-deliverability, ready to send. Try it free.*
`,
  },
  "cold-email-follow-up-sequence": {
    title: "The 5-Email Follow-Up Sequence That Recovers Lost Replies",
    date: "Sep 30, 2026",
    readTime: "6 min read",
    content: `
# The 5-Email Follow-Up Sequence That Recovers Lost Replies

Your first email gets 1-5% reply rate. Your third email, sent to the same person, often gets 3-4x more. That's not a coincidence — it's a pattern.

## Why Follow-Ups Work

Buyers are busy. Your first email arrives on a Tuesday at 9:00 AM, gets skimmed, and disappears under forty other messages. It's not rejection — it's timing.

Data across B2B outreach consistently shows:

- **80% of sales happen after follow-up #2**
- **44% of senders give up after the first email** — leaving replies on the table
- A single follow-up can lift reply rate by **25-30%**

## The 5-Step Sequence That Works

| Email | Day | Goal | Format |
|-------|-----|------|--------|
| #1 | Day 0 | Trigger + insight | 3-4 sentences, one observation |
| #2 | Day 3 | Add value, no ask | Share an insight or resource |
| #3 | Day 7 | Soft check-in | "Still on your radar?" |
| #4 | Day 14 | New angle | Different pain point, new proof |
| #5 | Day 21 | Break-up | "Closing the loop — happy to connect anytime" |

### Email #1: The Trigger (Day 0)
Open with something specific about their company, product, or content. Never "I hope this finds you well."

### Email #2: The Value Add (Day 3)
Don't pitch again. Send something genuinely useful — a benchmark, a case study, a relevant observation. This is the email that separates pros from spammers.

### Email #3: The Soft Check (Day 7)
One or two lines. "Circling back — is email still the best way to reach you?" Low pressure, high politeness.

### Email #4: The New Angle (Day 14)
You have permission to pitch differently now. New problem angle, new proof point, new example. Same product, different story.

### Email #5: The Break-Up (Day 21)
"Closing the loop on this one. If it's not a fit right now, no worries — happy to connect down the road." This email gets replies from people who were interested but forgot to say yes.

## Rules That Keep You Out of Spam

- Space follow-ups 3-7 days apart — daily pestering gets you blocked
- Never send more than 5 emails per prospect per cycle
- Every email must feel hand-written, never like part of a sequence
- Always honor "not interested" — remove them immediately
- Watch your volume: 30-50 emails per inbox per day max

## The Bottom Line

Your first email opens the conversation. Your follow-ups close it. Most people who reply to a cold email do so on email #3 or #4 — if you quit after #1, you'll never meet them.

---

*ColdCrow generates your full 5-email follow-up sequence automatically — personalized, spaced, and deliverability-scored. Try it free.*
`,
  },
  "ai-cold-email-personalization": {
    title: "AI Cold Email Personalization: How to Sound Human at Scale",
    date: "Sep 30, 2026",
    readTime: "6 min read",
    content: `
# AI Cold Email Personalization: How to Sound Human at Scale

Every B2B founder in 2026 has tried AI cold email. Most fail — not because the AI is bad, but because they use it wrong.

## The Two Ways People Use AI for Cold Email

**The lazy way:** "Write me a cold email for a SaaS founder."

Result: generic, fluffy, obviously AI. It could be sent to anyone. It gets deleted.

**The smart way:** Feed the AI real context — the prospect's name, company, what they do, one specific observation about them. Ask for 4 sentences with one clear CTA.

Result: an email that reads like a busy human wrote it. It gets replies.

## What AI Actually Needs to Personalize

AI personalization is only as good as the input. For each prospect, gather:

1. **Name and role** — the obvious stuff
2. **Company signal** — what they sell, their size, recent news
3. **One specific detail** — a recent post, a product change, a mutual contact, a funding round
4. **The pain you're solving for them** — not for their industry, for *them*

## The Prompt Framework That Works

\`\`\`
Role: You write short, human cold emails for B2B outreach.

Prospect: {name}, {role} at {company}.
Context: {one specific detail — post, launch, funding, product}.
Our product: {one sentence about what you do}.
Goal: Get a reply, not a demo.

Rules:
- 4 sentences max
- Start with the specific detail, not a greeting
- No "I hope this email finds you well"
- One low-effort CTA at the end
- Plain text, no emojis, no bold
\`\`\`

That's it. The specificity lives in the context line — if it's empty, the email will be generic.

## Why 4 Sentences Beats 400 Words

AI tends to over-explain. Long emails have two problems:

- **They read as AI.** Humans sending cold emails to strangers keep it short.
- **They lower reply rate.** Every sentence past the fourth is an argument against replying.

A 4-sentence email forces the AI to make choices: which detail matters, what the real ask is.

## The Human Edit Pass

Never send an AI draft untouched. A 30-second edit catches:

- The over-perfect phrasing AI loves ("I noticed that your company appears to be scaling...")
- The redundant second paragraph
- A CTA that's too big ("Let's schedule a demo" → "Open to a 10-minute chat?")

The best workflow: AI drafts, human trims, then send.

## Where AI Wins and Loses

**AI wins:** speed, volume, consistency, follow-up variation. You can generate 50 personalized first emails in 20 minutes.

**AI loses:** judgment about which prospects matter, reading between the lines of a company's real situation, knowing when *not* to email.

## The Bottom Line

AI didn't make cold email impersonal — it made personalization scalable. Feed it real context, cap it at 4 sentences, edit for 30 seconds, and you'll send emails that sound like you, at a volume that used to take a team.

---

*ColdCrow turns a prospect's name, company, and one detail into a personalized 4-sentence email in seconds — with a deliverability score before you send. Free tier available.*
`,
  },
  "cold-email-follow-up": {
    title: "The 3-Touch Follow-Up Framework That Actually Gets Replies",
    date: "Oct 1, 2026",
    readTime: "7 min read",
    content: `
# The 3-Touch Follow-Up Framework That Actually Gets Replies
Here's a number that surprises most founders: **80% of cold email replies come after the first email.**
Yet most people send one email and give up. Or worse, they send five identical "just bumping this" emails and wonder why they're marked as spam.
The middle ground is a follow-up sequence: a short series of touches, each adding new value. Here's the framework that works.
## Why Follow-Up Is Where Outreach Dies
Your first email gets maybe a 2-5% reply rate. That sounds low until you realize most prospects simply never saw it — they got 150 emails that day and yours got buried.
Follow-up isn't nagging. It's giving a busy person a second and third chance to respond. **Prospects who reply usually do so on touch 2 or 3.**
But there's a catch: if every follow-up looks like the first email, you're just spamming.
## The 3-Touch Framework
Keep it to three touches. After that, stop. More touches = more spam flags, not more replies.
### Touch 1: The Value Email (Day 0)
The first email should already be valuable on its own:
- Reference something specific about them
- Offer one genuinely useful insight
- End with a low-effort CTA ("Would a 15-minute call help?")
### Touch 2: The Insight Email (Day 3)
Don't say "just following up." Give them a reason to reply:
- Share a relevant data point about their industry
- Ask a specific question about their process
- Reference a change you noticed (new hire, new feature, new funding)
### Touch 3: The Breakup Email (Day 7)
Close the loop gracefully:
- Be honest: "I know you're busy — I'll stop bugging you after this."
- Leave the door open: "If this ever becomes a priority, here's my calendar."
- No guilt, no pressure
A polite breakup email often gets more replies than the first two touches combined, because it's the only one that doesn't feel like a pitch.
## Follow-Up Timing That Works
- Touch 1 → Day 0 (initial email)
- Touch 2 → Day 3 (give them a full business day to breathe)
- Touch 3 → Day 7 (one week total)
Longer cycles for enterprise buyers (7/14/30), shorter for SMBs (2/4/7).
## The One Rule: Every Touch Adds Value
The framework only works if each email earns its place:
- Touch 2 must contain new information, not a repeat
- Touch 3 must be honest, not pushy
If you have nothing new to say, don't send it. Silence is better than spam.
## How ColdCrow Automates This
ColdCrow generates your initial email and follow-up sequence in one pass:
- **Personalized first email** based on the prospect's company and role
- **Follow-ups with new angles** — insight, question, or polite breakup
- **Deliverability score** on every touch so you know what to fix
Instead of writing 3 emails per prospect by hand, you review 3 drafts and send.
[Try ColdCrow free →](https://copywise.vercel.app)
## Final Thoughts
Follow-up isn't about persistence — it's about sequence.
Three touches, each adding value, spaced over a week. That's the framework.
Most people give up after one email. You now know the 80% of replies you were missing.
`,
  },
  "cold-email-deliverability": {
    title: "Cold Email Deliverability 101: SPF, DKIM, DMARC for Founders",
    date: "Oct 1, 2026",
    readTime: "7 min read",
    content: `
# Cold Email Deliverability 101: SPF, DKIM, DMARC for Founders
You wrote the perfect cold email. Personal, short, valuable. And it lands in spam.
That's not bad luck — that's a deliverability problem. And for cold email, deliverability is the whole game: **an email that lands in spam is worth nothing.**
Here's what founders need to know about deliverability, without the jargon.
## Why Emails Go to Spam
Spam filters score every email on three things:
1. **Identity** — can they prove it's really you? (SPF, DKIM, DMARC)
2. **Reputation** — has this domain sent spam before?
3. **Engagement** — do people open, reply, or delete-and-report?
You can't fix all three overnight. But you can fix the foundation.
## The Three Records You Must Set Up
### SPF (Sender Policy Framework)
SPF is a DNS record that lists which servers are allowed to send email from your domain.
If you send from Gmail's servers, Gmail's SPF record covers you. The moment you use a cold email tool or a custom domain, you need your own:
v=spf1 include:_spf.google.com ~all
### DKIM (DomainKeys Identified Mail)
DKIM is a digital signature attached to your emails. It lets the receiver verify the email wasn't tampered with and actually came from your domain.
Your email provider gives you a DKIM key to add to DNS. This one record does the most heavy lifting for deliverability.
### DMARC (Domain-based Message Authentication, Reporting & Conformance)
DMARC tells receivers what to do with emails that fail SPF and DKIM checks.
Start with a monitoring policy (p=none), check your reports for a few weeks, then move to p=quarantine.
## The Fastest Way to Check Your Setup
Send a test email and look at the raw headers, or use a free deliverability tester. If SPF and DKIM show "pass," you've cleared the biggest hurdle.
## Warm Up Before You Send at Scale
A brand-new domain sending 500 emails on day one is the fastest way to get blacklisted.
The safe pattern:
- **Week 1-2**: 20-30 emails per day to engaged recipients
- **Week 3**: slowly increase volume
- **Only then**: start a real campaign
Your sending reputation is built over weeks and destroyed in one bad day. Warm up first.
## Engagement Is the New Spam Filter
Modern spam filters care less about keywords and more about what recipients do:
- **Open rate** — if nobody opens, you look like spam
- **Reply rate** — replies are the strongest signal you're wanted
- **Delete-without-read** — the death knell
That's why personalization isn't just nice-to-have. It directly drives the metrics that keep you out of spam.
## A Simple Pre-Send Checklist
Before every campaign:
- [ ] SPF record set and passing
- [ ] DKIM key added and signing
- [ ] DMARC at least at p=none
- [ ] Domain warmed up for 2 weeks
- [ ] Each email personalized (no identical sends)
- [ ] Low-effort CTA (replies beat clicks)
## How ColdCrow Helps
ColdCrow doesn't send your email — but it makes deliverability a first-class concern:
- **Deliverability score** on every generated email
- **Personalization built in** so engagement signals work for you
- **Follow-up sequences** that avoid spammy repetition
Write better, more personal emails, and the inbox placement problem gets dramatically smaller.
[Try ColdCrow free →](https://copywise.vercel.app)
## Final Thoughts
Deliverability is boring, and that's exactly why it wins.
Set up SPF, DKIM and DMARC. Warm up your domain. Write emails people actually reply to.
Do the unglamorous work, and your cold email will land where it belongs — the inbox.
`,
  },

  "cold-email-ab-testing": {
    title: "Cold Email A/B Testing: What to Test First",
    date: "Oct 5, 2026",
    readTime: "4 min read",
    content: `
# Cold Email A/B Testing: What to Test First

Teams test subject lines first because they are easy. But subject lines move open rates, not reply rates — and in cold email, replies are the only metric that pays rent.

The right order targets the variables with the biggest leverage first: deliverability, then offer clarity, then personalization depth, then length, then subject lines.

## 1. Test Your Sending Infrastructure First

Before any copy test, check the foundation: SPF, DKIM, DMARC, dedicated sending domain, and warmup state.

If your emails land in promotions or spam, no copy test matters. Fix deliverability before touching a single word.

## 2. Test Offer Clarity (The One-Liner)

The single highest-leverage copy variable: can a prospect understand what you do and why it matters in under 5 seconds?

Test two versions of your first paragraph:
- Version A: feature-led ("We provide AI-powered cold email software with deliverability scoring")
- Version B: outcome-led ("Write a cold email that gets replies — in 20 seconds, without sounding like a bot")

## 3. Test Personalization Depth

Real personalization (a company-specific detail in line one) beats merge-tag personalization (first name only). Test one researched detail versus none.

The detail does not need to be impressive. A pricing page observation, a recent hire, a new integration — anything that proves you looked.

## 4. Test Length

Shorter emails win on mobile and get read faster. Test a 60-word version against a 150-word version.

Rule of thumb: cut every sentence that does not move the reader toward a reply. If a line does not create curiosity or clarity, delete it.

## 5. Test Subject Lines Last

Subject lines matter for opens, but with a good sender reputation and a clean domain, opens are not the bottleneck. Test subject lines only after the above four are stable.

## The Minimum Viable Test Setup

- One variable at a time (changing two things means you cannot attribute the result)
- 50-100 sends per variation for statistical signal
- Same time window, same segment
- Track replies, not opens

## What Good Looks Like

After fixing deliverability and testing offer clarity, most teams see reply rates move from 1-2 percent to 3-5 percent. Personalization depth adds another 1-2 points. Length and subject lines are the finishing touches.
`
  },    "cold-email-follow-up-framework": {
    title: "The Follow-Up Email That Gets Replies (Day 3/7/14 Framework)",
    date: "Oct 6, 2026",
    readTime: "5 min read",
    content: `
Most cold email replies come from the follow-up, not the first touch.

The data is consistent across tools: 60–70% of replies happen after the first email, in the follow-up sequence. And yet the majority of senders fire one email, wait a week, and call it done.

If you're sending cold outreach, the follow-up isn't optional — it's where the ROI lives.

## The 3-touch rhythm that works

The goal isn't to annoy. It's to stay present while the prospect's priorities shift. Three touches, spread over two weeks, each with a different job:

**Day 3 — Gentle nudge.**
Your first email got buried under 200 others. The nudge is short and honest: "Just floating this back up in case it got lost." No new pitch, no value re-statement. One or two lines.

**Day 7 — Value add, no ask.**
This is the highest-leverage email in the sequence. Share something genuinely useful — a relevant stat, a mini-analysis of their situation, a resource. Attach zero ask. The point is to be the person who gave before asking.

**Day 14 — Clean close.**
"I'm closing my file on this, but the door stays open." This gets replies more than any pushy "just checking in" — because it removes pressure, and people respond to a graceful exit.

## Why Day 7 works harder than Day 3

The nudge (Day 3) keeps you top-of-mind. The close (Day 14) creates a clean psychological endpoint. But the value add (Day 7) is where the relationship shifts from "sender" to "useful person."

No ask attached. Just useful. When you finally do ask (in a later sequence, or when they reply), the ask lands in a different context.

## What kills follow-ups

- **Same message re-sent.** Copy-paste with a new date reads as spam instantly.
- **Guilt-tripping.** "Just following up on my previous email" repeated 4 times is pressure, not presence.
- **No value.** Three emails that all ask "did you see this?" give the prospect nothing to say yes to.

## The 30-second version

Want this built for your actual email? We made a free tool for exactly this:

**Paste your cold email → get a Day 3 / Day 7 / Day 14 follow-up plan** with low-pressure, ready-to-send copy.

Try it free: https://copywise.vercel.app/followup
`
  },
    "cold-email-deliverability-mistakes": {
    title: "Cold Email Deliverability: 9 Mistakes That Send You to Spam",
    date: "Oct 6, 2026",
    readTime: "6 min read",
    content: `
You wrote a good cold email. Personalized, short, clear CTA.

And it went to spam.

Deliverability isn't about the copy — it's about the plumbing. Here are the 9 mistakes that send your outreach to the spam folder, and what to do instead.

## 1. Sending from a domain with no warm-up
A brand-new domain that starts blasting 500 emails on day one gets flagged immediately. **Fix:** warm up over 2–4 weeks, starting at 10–20 emails/day and scaling up.

## 2. No SPF, DKIM, or DMARC records
These three DNS records prove you're allowed to send from that domain. **Fix:** set all three up before your first send — they're free and take minutes.

## 3. A .com domain you just bought
Fresh domains have zero reputation. **Fix:** let the domain age a few weeks before heavy sending, and keep the same domain for your site and your sending.

## 4. Identical content to 500 people
The spam filter compares your email to every other email you've sent. Identical templates are a mass-detection trigger. **Fix:** personalize at least one specific detail per prospect — company, role, or product mention.

## 5. Link-heavy emails
Three links in your first email to a stranger is a spam signature. **Fix:** one link maximum. Better: zero links in the first touch — reply first, link later.

## 6. Salesy words in the subject line
"Free," "Guaranteed," "Act now," "$$$" — these are classic spam-trigger words. **Fix:** write subject lines a human would: specific, boring, and relevant.

## 7. No plain-text version
Some email clients render only the plain-text version, and HTML-only emails can look like phishing. **Fix:** always send a text/plain alternative.

## 8. Buying lists
Purchased lists are full of dead addresses and spam traps — one trap and your domain's reputation takes a hit. **Fix:** build your own list, one verified prospect at a time.

## 9. Ignoring bounce rates
A bounce rate above 5% tells Google and Microsoft your list is dirty. **Fix:** clean bounces immediately, remove hard bounces permanently, and keep soft bounces under 2%.

## The fast path

Deliverability is a checklist, not a mystery. And personalization is the one variable you control on every email.

We built ColdCrow to make the personalization part instant: describe a prospect, get a personalized cold email with a **deliverability score** in seconds — so you never send a spam-suspect email again.

Try it free — no signup needed: https://copywise.vercel.app/try
`
  },
    "cold-email-vs-linkedin-outreach": {
    title: "Cold Email vs LinkedIn Outreach: Which Works in 2026",
    date: "Oct 6, 2026",
    readTime: "5 min read",
    content: `
## The Two Pillars of Outbound

Every B2B founder eventually asks: should I send cold emails or LinkedIn messages? The honest answer: both, but for different jobs.

## Cold Email: The Scale Play

- **Reach**: Unlimited by connection limits - anyone with an email is reachable
- **Reply rates**: 1-5% depending on list quality and personalization
- **Effort per message**: High if done right (research + personalization)
- **Deliverability**: The bottleneck - SPF/DKIM/DMARC, warmup, volume limits
- **Best for**: Companies with a clear ICP and a product people can evaluate from a link

Cold email rewards research. A personalized first line referencing their product or a recent change doubles reply rates. Generic mail merges die.

## LinkedIn: The Relationship Play

- **Reach**: Limited by connection request quotas (weekly caps, ~100-200 new requests)
- **Reply rates**: 10-30% on messages to warm connections; lower on cold connection requests
- **Effort per message**: Low to medium
- **Deliverability**: No DNS to configure, but account health limits you
- **Best for**: Building relationships, warm intros, following up after cold email

LinkedIn is better for the long game: comments on their posts, a thoughtful first message, and a slow build. It converts slower but compounds.

## The 2026 Pattern That Works

Most successful outbound teams use a hybrid:

1. **Cold email first** - personalized, low-pressure, with a clear CTA
2. **LinkedIn follow-up** - 2-3 days later, "saw you might have missed my email" or a comment on their recent post
3. **LinkedIn presence** - comment on their content weekly so your name is familiar before you ever pitch

The combination beats either channel alone: email for reach, LinkedIn for warmth.

## The Cold Email Shortcut

Writing personalized emails at scale is the hard part - that is why tools like ColdCrow exist. Paste a prospect profile, get a researched-feeling email with a deliverability score in seconds. The research is still yours; the writing gets faster.

**slug**: cold-email-vs-linkedin-outreach
**date**: 2026-10-05
`
  },
    "write-cold-email-10-minutes": {
    title: "How to Write a Cold Email in 10 Minutes (Template Inside)",
    date: "Oct 6, 2026",
    readTime: "4 min read",
    content: `
|
| 1. Hook | Reference the specific thing | "Saw your post on Stripe rate limits — the checkout-point analysis was spot on." |
| 2. Context | What you do, in one line | "I build ColdCrow, an AI cold email writer for B2B founders." |
| 3. Question | One low-pressure question | "Curious how you're handling refunds at that scale?" |
| 4. Close | Soft exit | "Either way, keep building. — ColdCrow" |

That's it. 4 sentences. If you can't write it in 2 minutes, you don't have enough of a hook — go back to minute 3.

## Minute 8-9: Cut it in half

Every cold email has 30% fat. Delete:
- Your company's history
- The feature list
- "I hope this email finds you well"

## Minute 10: Check the 3 spam killers

Before you hit send:
1. One link maximum (zero is safer for the first touch)
2. No salesy subject words ("free," "guaranteed," "limited time")
3. One CTA only (one question, not three options)

## The template you can steal

\`\`\`
Subject: [their specific thing]

Hi [name],

[Their specific thing] — [one-line observation about it].

I build [your product], [what it does in 10 words].

Curious how you [question about their world]?

Either way, keep building.

— [Your name]
\`\`\`

## The 1-minute shortcut

If 10 minutes still feels like too much, the writing is the bottleneck — not the research.

ColdCrow does the writing: describe a prospect, get a **personalized cold email with a deliverability score** in seconds. You keep the research; the first draft is instant.

Try it free — no signup: https://copywise.vercel.app/try
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
