# Copywise AI

AI-powered copywriting SaaS built with Next.js, Supabase, and Zhipu AI.

## Tech Stack
- Frontend: Next.js 16 (App Router) + React + TypeScript + Tailwind CSS v4 + shadcn/ui
- Backend: Supabase (PostgreSQL, Auth, Storage)
- AI: Zhipu AI (glm-5.3-flash, OpenAI-compatible API)
- Payments: Creem (Merchant of Record)
- Email: Resend
- Deployment: Vercel
- Domain: Namecheap (getcopywise.com)

## Prerequisites
- Node.js 18+ 
- npm
- A Supabase account
- A Zhipu AI API key (open.bigmodel.cn)
- A Creem account (for payments)
- A Resend account (for emails, optional for MVP)
- A Vercel account (for deployment)

## Local Development

### 1. Clone and install
```bash
npm install
```

### 2. Environment variables
Copy `.env.example` to `.env.local` and fill in all values:
```bash
cp .env.example .env.local
```

Required variables:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- ZHIPU_API_KEY
- CREEM_API_KEY (for payment testing)
- CREEM_WEBHOOK_SECRET
- CREEM_PRICE_PRO_MONTHLY
- CREEM_PRICE_PRO_YEARLY

### 3. Set up Supabase
1. Create a new Supabase project (US West region recommended)
2. Go to SQL Editor and run `supabase/schema.sql`
3. In Authentication > Providers, enable Email provider
4. (Optional) Disable email confirmation for local testing: Authentication > Providers > Email > Confirm email (off)
5. Get API keys from Settings > API

### 4. Run the dev server
```bash
npm run dev
```
Open http://localhost:3000

## Deployment to Vercel

### 1. Push to GitHub
Push the project to a GitHub repository (account: caicai458).

### 2. Import to Vercel
1. Log in to Vercel (team: lavro)
2. Click "Add New..." > "Project"
3. Import the GitHub repository
4. Configure build settings (Next.js is auto-detected)

### 3. Environment Variables
In Vercel Project Settings > Environment Variables, add all variables from `.env.example`:
- Set `NEXT_PUBLIC_APP_URL` to your Vercel URL (e.g., https://copywise.vercel.app) or custom domain
- All other variables same as local

### 4. Deploy
Click "Deploy". Vercel will build and deploy automatically.

### 5. Custom Domain (getcopywise.com)
1. In Vercel Project Settings > Domains, add `getcopywise.com` and `www.getcopywise.com`
2. In Namecheap DNS settings, add:
   - A record: @ → 76.76.21.21
   - CNAME record: www → cname.vercel-dns.com
3. Wait for DNS propagation and SSL certificate issuance

## Creem Payment Setup

### 1. Creem Account Setup
1. Sign up at https://creem.io
2. Complete identity verification (KYC) — required before going live
3. Create products and prices in Creem dashboard:
   - Product: "Copywise Pro"
   - Price 1: Monthly, $19.00 USD → copy the Price ID as CREEM_PRICE_PRO_MONTHLY
   - Price 2: Yearly, $180.00 USD ($15/mo equivalent) → copy the Price ID as CREEM_PRICE_PRO_YEARLY

### 2. API Key
1. In Creem dashboard > Developers > API Keys, create a secret key
2. Add as CREEM_API_KEY in environment variables

### 3. Webhook
1. In Creem dashboard > Developers > Webhooks, add endpoint:
   - URL: https://getcopywise.com/api/creem/webhook
   - Events: subscription.*, payment.*, customer.*
2. Copy the webhook signing secret as CREEM_WEBHOOK_SECRET
3. For local testing, use a tool like ngrok to expose localhost:
   ```bash
   ngrok http 3000
   ```
   Then set the webhook URL to your ngrok URL + /api/creem/webhook

### 4. Test Mode
Creem supports test mode. Use test API keys and test card numbers for development.

## Supabase Configuration Details

### Database Schema
Run `supabase/schema.sql` in Supabase SQL Editor. This creates:
- `profiles` — user profile data
- `subscriptions` — Creem subscription status
- `generations` — AI generation history
- RLS policies on all tables
- Trigger to auto-create profile + free subscription on signup

### Auth Configuration
- Email/Password auth enabled by default
- For production, enable email confirmation
- Configure redirect URLs in Supabase Authentication > URL Configuration:
  - Site URL: https://getcopywise.com
  - Redirect URLs: https://getcopywise.com/auth/callback

### Storage (Optional for MVP)
No storage buckets required for MVP.

## Zhipu AI Configuration
1. Sign up at https://open.bigmodel.cn
2. Create an API key
3. Add as ZHIPU_API_KEY in environment variables
4. Model: glm-5.3-flash (default, can override with ZHIPU_MODEL)
5. Base URL: https://open.bigmodel.cn/api/paas/v4 (can override with ZHIPU_BASE_URL)
6. **Important**: API key is only used server-side in API routes. Never expose it to the client.

## Resend Email Configuration (Optional for MVP)
1. Sign up at https://resend.com
2. Verify your domain (getcopywise.com)
3. Create an API key
4. Add as RESEND_API_KEY and RESEND_FROM_EMAIL
5. Free tier: 3,000 emails/month
6. Alternative: SendGrid

## Project Structure
```
copywise/
├── app/
│   ├── (marketing)/          # Public landing pages
│   ├── api/                  # API routes
│   │   ├── generate/         # AI copy generation
│   │   ├── usage/            # Usage stats
│   │   └── creem/            # Payment checkout + webhook
│   ├── auth/                 # Auth callback + sign-out
│   ├── dashboard/            # Authenticated user dashboard
│   ├── legal/                # Privacy, Terms, Refund
│   ├── login/                # Login page
│   ├── signup/               # Signup page
│   ├── globals.css           # Tailwind + shadcn theme
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   ├── robots.ts             # robots.txt
│   └── sitemap.ts            # sitemap.xml
├── components/
│   ├── dashboard/            # Dashboard components
│   ├── marketing/            # Landing page components
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── supabase/             # Supabase clients
│   ├── ai.ts                 # Zhipu AI client
│   ├── creem.ts              # Creem API helper
│   ├── types.ts              # TypeScript types
│   └── utils.ts              # Utility functions
├── supabase/
│   └── schema.sql            # Database schema
├── .env.example              # Environment variables template
├── middleware.ts             # Auth middleware
└── README.md                 # This file
```

## Environment Variables Reference
| Variable | Required | Description |
|---|---|---|
| NEXT_PUBLIC_SUPABASE_URL | Yes | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Yes | Supabase anon key (public) |
| SUPABASE_SERVICE_ROLE_KEY | Yes | Supabase service role key (secret) |
| ZHIPU_API_KEY | Yes | Zhipu AI API key (secret) |
| ZHIPU_BASE_URL | No | Zhipu API base URL override |
| ZHIPU_MODEL | No | Model name override (default: glm-5.3-flash) |
| CREEM_API_KEY | Yes* | Creem secret API key (*for payments) |
| CREEM_WEBHOOK_SECRET | Yes* | Creem webhook signing secret |
| CREEM_BASE_URL | No | Creem API base URL override |
| CREEM_PRICE_PRO_MONTHLY | Yes* | Creem price ID for Pro Monthly |
| CREEM_PRICE_PRO_YEARLY | Yes* | Creem price ID for Pro Yearly |
| RESEND_API_KEY | No | Resend API key |
| RESEND_FROM_EMAIL | No | From email address |
| NEXT_PUBLIC_APP_URL | Yes | App URL (localhost or production domain) |
| NEXT_PUBLIC_SITE_NAME | No | Site name (default: Copywise) |

## Important Notes for Production

### Vercel Hobby Plan Limitations
- **Vercel Hobby (free) plan has commercial use restrictions**. Once the product generates revenue, you must upgrade to Vercel Pro ($20/month).
- Hobby plan: 100 GB bandwidth/month, 6000 build minutes/month, 100 GB-hours serverless function execution.
- Serverless functions have 10s execution timeout on Hobby (60s on Pro). AI generation calls should complete within this limit.

### Supabase Free Plan Limitations
- 500 MB database storage
- 1 GB bandwidth/month
- 50,000 monthly active users
- Project pauses after 7 days of inactivity (need to manually restore)
- Consider upgrading to Pro ($25/month) for production

### Creem
- Creem acts as Merchant of Record: handles global VAT/GST tax calculation and collection, payment processing, fraud detection, and compliance.
- Pricing: 3.9% + $0.40 per transaction
- Supports Alipay withdrawal for mainland China individuals
- **Identity verification (KYC) must be completed before accepting live payments**

### Security
- All API keys are server-side only. Never commit `.env.local` to git.
- Supabase RLS is enabled on all tables.
- Creem webhooks are signature-verified.
- AI-generated content should always be reviewed by humans before use.

## Troubleshooting

### Supabase Auth: "Invalid API key"
- Check that NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are correct
- Ensure the anon key, not the service_role key, is used for public variables

### AI Generation: "ZHIPU_API_KEY is not configured"
- Ensure ZHIPU_API_KEY is set in `.env.local` (for local) or Vercel env vars (for production)
- The key is only read server-side, so restart the dev server after changing it

### Creem Checkout: "CREEM_API_KEY is not configured"
- Ensure CREEM_API_KEY is set
- For local testing without Creem, the billing page will show price IDs as empty — this is expected

### Build errors on Vercel
- Ensure all environment variables are set in Vercel (not just locally)
- Check that `.env.local` is in `.gitignore` (it is by default)
- Run `npm run build` locally to reproduce

## License
Proprietary. All rights reserved.
