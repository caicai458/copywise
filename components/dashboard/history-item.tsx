"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Generation } from "@/lib/types";

export function HistoryItem({ generation }: { generation: Generation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border bg-card p-4">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1 pr-4">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {generation.prompt}
          </p>
        </div>
        <Button variant="ghost" size="sm">
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </button>
      {expanded && (
        <div className="mt-3 border-t pt-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Generated content
          </p>
          <pre className="whitespace-pre-wrap rounded-lg border bg-muted/40 p-3 font-mono text-sm leading-relaxed">
            {generation.generated_content}
          </pre>
        </div>
      )}
    </div>
  );
}
