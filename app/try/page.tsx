"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2, Sparkles, Copy, Check, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react";
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
import { CONTENT_TYPE_LABELS, type ContentType } from "@/lib/types";

const contentTypes = Object.entries(CONTENT_TYPE_LABELS) as [ContentType, string][];
const TRIAL_LIMIT = 3;

interface GenerateResponse {
  content: string;
  tokens_used: number;
  model: string;
}

export default function TryPage() {
  const [contentType, setContentType] = useState<ContentType>("cold_email");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [copied, setCopied] = useState(false);
  const [trialUsed, setTrialUsed] = useState(0);

  // 从 localStorage 读取试用次数
  useEffect(() => {
    const used = localStorage.getItem("trial_generations");
    if (used) {
      setTrialUsed(parseInt(used));
    }
  }, []);

  const trialRemaining = TRIAL_LIMIT - trialUsed;

  async function handleGenerate(isRegenerate = false) {
    if (!prompt.trim()) {
      toast.error("Please describe what copy you need to generate.");
      return;
    }

    if (trialRemaining <= 0 && !isRegenerate) {
      toast.error("Trial limit reached. Please sign up to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate-public", {
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
        const newCount = trialUsed + 1;
        setTrialUsed(newCount);
        localStorage.setItem("trial_generations", newCount.toString());
        toast.success("Copy generated!");
      }
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

  // 如果试用次数用完了，显示注册提示
  if (trialRemaining <= 0 && !loading) {
    return (
      <div className="flex min-h-screen flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <Sparkles className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-2xl font-bold">Trial Complete!</CardTitle>
            <CardDescription className="mt-2">
              You&apos;ve used all {TRIAL_LIMIT} free trial generations.
              Sign up to get <strong>5 free generations every day</strong>!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted/50 p-4 text-sm">
              <p className="font-medium">What you get with a free account:</p>
              <ul className="mt-2 space-y-1 text-left text-muted-foreground">
                <li>• 5 AI generations per day</li>
                <li>• All copy formats (emails, social, ads, etc.)</li>
                <li>• Copy history and favorites</li>
                <li>• Refer friends to earn more free generations</li>
              </ul>
            </div>
            <Link href="/signup">
              <Button size="lg" className="w-full">
                Sign Up Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="mb-4">
          <Sparkles className="mr-1 h-3 w-3" />
          Free Trial - No Signup Required
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Try Copywise AI <span className="text-primary">Free</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Generate high-quality copy in seconds. You have{" "}
          <strong className="text-primary">{trialRemaining}</strong> free trial
          generations left.
        </p>
      </div>

      {/* Generator form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Create your first copy</CardTitle>
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
                "e.g. Write a cold email selling our project management tool to startup CTOs..."
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleGenerate(false)}
            disabled={loading || trialRemaining <= 0}
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
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-sm font-medium">
                  Love it? Sign up to keep generating for free every day!
                </p>
                <Link href="/signup">
                  <Button size="sm">
                    Sign Up Free
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
