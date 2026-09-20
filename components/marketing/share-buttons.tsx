"use client";

import { Link2, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  text?: string;
  size?: "sm" | "default" | "lg";
}

export function ShareButtons({
  url = typeof window !== "undefined" ? window.location.href : "https://copywise.vercel.app",
  title = "Copywise - AI Copywriting Tool",
  text = "Check out Copywise - AI-powered copywriting tool for cold emails, social posts, and ad copy. 5 free generations daily!",
  size = "default",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(text);
  const shareTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "width=600,height=500");
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        size={size}
        onClick={() => openShareWindow(twitterUrl)}
      >
        Share on X
      </Button>
      <Button
        variant="outline"
        size={size}
        onClick={() => openShareWindow(linkedinUrl)}
      >
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size={size}
        onClick={() => openShareWindow(facebookUrl)}
      >
        Facebook
      </Button>
      <Button
        variant="outline"
        size={size}
        onClick={handleCopyLink}
        className="gap-2"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
        {copied ? "Copied!" : "Copy Link"}
      </Button>
    </div>
  );
}
