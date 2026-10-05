import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import FollowupSequenceBuilder from "./FollowupSequenceBuilder";

export const metadata: Metadata = {
  title: "Cold Email Follow-Up Sequence Builder",
  description:
    "Paste your cold email and get a 3-step follow-up plan (day 3 / 7 / 14) with low-pressure copy that actually gets replies.",
};

export default function FollowupPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Follow-Up Sequence Builder
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Most cold email replies come from the follow-up, not the first
                touch — but 90% of senders never send one. Paste your email and
                get a low-pressure 3-step plan.
              </p>
            </div>

            <div className="mt-12">
              <FollowupSequenceBuilder />
            </div>

            <div className="mt-16 rounded-xl border border-border bg-muted/40 p-6">
              <h2 className="text-lg font-semibold">
                Why follow-ups matter
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  · Day 3 gentle nudge — most replies land within 72 hours, a
                  short bump catches inbox-orphans.
                </li>
                <li>
                  · Day 7 value add — give something useful, no ask attached.
                  This is where reply rates jump.
                </li>
                <li>
                  · Day 14 breakup — a clean close keeps your domain healthy
                  and leaves the door open.
                </li>
              </ul>
              <p className="mt-4 text-sm">
                Want follow-ups written from scratch?{" "}
                <Link href="/dashboard" className="font-medium text-primary underline-offset-4 hover:underline">
                  Generate a cold email first
                </Link>
                , then build its sequence here.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
