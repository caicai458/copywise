"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Loader2,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  AlertTriangle,
  ArrowUpCircle,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONTENT_TYPE_LABELS, type ContentType, type UsageInfo } from "@/lib/types";
import { ShareButtons } from "@/components/marketing/share-buttons";
import { track } from "@vercel/analytics/react";

const contentTypes = Object.entries(CONTENT_TYPE_LABELS) as [ContentType, string][];

interface GenerateResponse {
  content: string;
  tokens_used: number;
  model: string;
}

export default function DashboardPage() {
  const [contentType, setContentType] = useState<ContentType>("cold_email");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [copied, setCopied] = useState(false);
  const [usage, setUsage] = useState<UsageInfo | null>(null);

  const fetchUsage = useCallback(async () => {
    try {
      const res = await fetch("/api/usage");
      if (res.ok) {
        const data = (await res.json()) as UsageInfo;
        setUsage(data);
      }
    } catch {
      // ignore — usage card will show as unavailable
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/usage")
      .then((res) => (res.ok ? (res.json() as Promise<UsageInfo>) : null))
      .then((data) => {
        if (data && !cancelled) setUsage(data);
      })
      .catch(() => {});
    track("dashboard_view");
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleGenerate(isRegenerate = false) {
    if (!prompt.trim()) {
      toast.error("Please describe what copy you need to generate.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim(), content_type: contentType }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to generate copy. Please try again.");
        return;
      }

      setResult(data as GenerateResponse);
      setCopied(false);
      if (!isRegenerate) {
        toast.success("Copy generated!");
      }
      fetchUsage();
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.content);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy.");
    }
  }

  const unlimited = false; // 所有用户都有每日限制
  const used = usage?.used_today ?? 0;
  const limit = usage?.daily_limit ?? 5;
  const percent = Math.min(100, (used / Math.max(limit, 1)) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Copy Generator</h1>
        <p className="text-sm text-muted-foreground">
          Describe your product or topic and let Copywise write it for you.
        </p>
      </div>

      {/* Usage card */}
      <Card>
        <CardContent className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">
              <span>
                {used} / {limit} generations used today
              </span>
            </p>
            {usage && used >= limit && (
              <p className="mt-1 text-xs text-destructive">
                You&apos;ve reached your daily limit.
              </p>
            )}
          </div>
          <Link href="/dashboard/billing">
            <Button size="sm" variant="outline" className="gap-1">
              <ArrowUpCircle />
              Upgrade to Pro
            </Button>
          </Link>
        </CardContent>
        <div className="px-6 pb-6">
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Referral card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Refer & Earn Free Generations</CardTitle>
          <CardDescription>
            Share your referral link. Every friend who signs up gets you +5 free generations per day!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 rounded-lg border bg-muted/40 p-3">
            <code className="flex-1 truncate text-xs">
              {typeof window !== "undefined" ? `${window.location.origin}/?ref=your-user-id` : ""}
            </code>
            <Button
              size="sm"
              variant="outline"
              onClick={async () => {
                const link = `${window.location.origin}/?ref=your-user-id`;
                await navigator.clipboard.writeText(link);
                toast.success("Referral link copied!");
              }}
            >
              Copy
            </Button>
          </div>
          <ShareButtons
            size="sm"
            text="Get free AI copywriting with Copywise! Sign up with my link: "
          />
        </CardContent>
      </Card>

      {/* Generator form */}
      <Card>
        <CardHeader>
          <CardTitle>Create new copy</CardTitle>
          <CardDescription>
            Pick a content type and describe what you want to write.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="content-type">Content type</Label>
            <select
              id="content-type"
              value={contentType}
              onChange={(e) => setContentType(e.target.value as ContentType)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {contentTypes.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="prompt">Topic / product description</Label>
            <Textarea
              id="prompt"
              rows={5}
              placeholder={
                "e.g. Write a cold email selling our project management tool to startup CTOs who are overwhelmed by status meetings..."
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleGenerate(false)}
            disabled={loading || (usage ? used >= limit : false)}
            className="w-full sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles />
                Generate Copy
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Result area */}
      {result && (
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="flex items-center gap-2">
                Result
                <Badge variant="secondary">
                  {CONTENT_TYPE_LABELS[contentType]}
                </Badge>
              </CardTitle>
              <CardDescription className="mt-1">
                Model: {result.model} · {result.tokens_used} tokens
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="whitespace-pre-wrap rounded-lg border bg-muted/40 p-4 font-mono text-sm leading-relaxed">
              {result.content}
            </pre>
            <p className="text-xs text-muted-foreground">
              <AlertTriangle className="mr-1 inline h-3.5 w-3.5" />
              AI-generated content. Please review before use.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={handleCopy} disabled={loading}>
                {copied ? <Check /> : <Copy />}
                {copied ? "Copied" : "Copy to Clipboard"}
              </Button>
              <Button
                variant="outline"
                onClick={() => handleGenerate(true)}
                disabled={loading}
              >
                <RefreshCw className={loading ? "animate-spin" : ""} />
                Regenerate
              </Button>
            </div>
            <div className="border-t pt-4">
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Share this copy or recommend Copywise:
              </p>
              <ShareButtons
                size="sm"
                text={`Just generated this ${CONTENT_TYPE_LABELS[contentType].toLowerCase()} with Copywise AI! Try it free: `}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
