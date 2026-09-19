-- ============================================
-- Copywise AI - Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ============================================
-- Table: profiles (extends auth.users)
-- ============================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text unique,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

comment on table public.profiles is 'User profile information extending Supabase auth.users';

-- ============================================
-- Table: subscriptions (Creem payment status)
-- ============================================
create table public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  creem_customer_id text,
  creem_subscription_id text,
  plan text not null default 'free' check (plan in ('free', 'pro_monthly', 'pro_yearly')),
  status text not null default 'active' check (status in ('active', 'past_due', 'canceled', 'trialing')),
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique(user_id)
);

comment on table public.subscriptions is 'User subscription status synced from Creem webhooks';

-- ============================================
-- Table: generations (AI generation history)
-- ============================================
create table public.generations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  prompt text not null,
  content_type text not null check (content_type in ('cold_email', 'social_post', 'product_description', 'ad_copy', 'blog_intro')),
  generated_content text not null,
  model text not null default 'glm-5.3-flash',
  tokens_used integer not null default 0,
  created_at timestamp with time zone default now()
);

comment on table public.generations is 'History of AI-generated copy for each user';

-- Index for fast usage queries
create index idx_generations_user_created on public.generations(user_id, created_at desc);

-- ============================================
-- Row Level Security (RLS)
-- ============================================
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.generations enable row level security;

-- Profiles policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Subscriptions policies
create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Note: insert/update on subscriptions is handled by service role
-- (Creem webhook handler), not by end users directly.

-- Generations policies
create policy "Users can view own generations"
  on public.generations for select
  using (auth.uid() = user_id);

create policy "Users can insert own generations"
  on public.generations for insert
  with check (auth.uid() = user_id);

-- ============================================
-- Trigger: auto-create profile + free subscription on signup
-- ============================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');

  insert into public.subscriptions (user_id, plan, status)
  values (new.id, 'free', 'active');

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- ============================================
-- Trigger: auto-update updated_at timestamp
-- ============================================
create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_profiles_updated on public.profiles;
create trigger on_profiles_updated
  before update on public.profiles
  for each row
  execute function public.update_updated_at();

drop trigger if exists on_subscriptions_updated on public.subscriptions;
create trigger on_subscriptions_updated
  before update on public.subscriptions
  for each row
  execute function public.update_updated_at();

-- ============================================
-- View: daily usage count (for rate limiting)
-- ============================================
create or replace view public.daily_usage as
select
  user_id,
  count(*) as used_today
from public.generations
where created_at >= date_trunc('day', now())
group by user_id;

comment on view public.daily_usage is 'Daily AI generation count per user for rate limiting';
