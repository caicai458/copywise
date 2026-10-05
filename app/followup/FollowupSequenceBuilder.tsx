"use client";

import { useState } from "react";
import { CalendarDays, Mail, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FOLLOWUPS = [
  {
    day: 3,
    tone: "gentle-nudge",
    subject: "Re: [original subject]",
    template:
      "Hi {{name}}, just floating this back up in case it got buried. Happy to jump on a 10-min call if easier.",
  },
  {
    day: 7,
    tone: "value-add",
    subject: "One thing worth seeing",
    template:
      "Hi {{name}}, came across something relevant to [their company] — [short link or idea]. No reply needed, just thought it was useful.",
  },
  {
    day: 14,
    tone: "breakup",
    subject: "Closing your file",
    template:
      "Hi {{name}}, I'll stop emailing after this one so I don't waste your inbox. If cold outreach becomes a priority later, my door is open.",
  },
];

export default function FollowupSequenceBuilder() {
  const [originalEmail, setOriginalEmail] = useState("");
  const [sequence, setSequence] = useState<typeof FOLLOWUPS>([]);

  function buildSequence() {
    if (!originalEmail.trim()) return;
    setSequence(FOLLOWUPS);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">1 · Paste your cold email</CardTitle>
          <CardDescription>
            The sequence is built around your original subject line and tone.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <textarea
            value={originalEmail}
            onChange={(e) => setOriginalEmail(e.target.value)}
            placeholder="Paste your original cold email here..."
            rows={6}
            className="w-full rounded-md border border-border bg-muted/30 px-4 py-3 text-sm"
          />
          <Button onClick={buildSequence} disabled={!originalEmail.trim()}>
            <Wand2 className="mr-2 h-4 w-4" />
            Build Sequence
          </Button>
        </CardContent>
      </Card>

      {sequence.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">2 · Your 3-step follow-up plan</h2>
          {sequence.map((f, i) => (
            <Card key={f.day}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <CardTitle className="text-base">
                      Day {f.day} — {f.tone.replace(/-/g, " ")}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary">#{i + 1}</Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  {f.subject}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.template}
                </p>
              </CardContent>
            </Card>
          ))}
          <p className="text-xs text-muted-foreground">
            Replace {"{{name}}"} and [brackets] with the prospect's details.
            Send day 3, 7, and 14 after your first email.
          </p>
        </div>
      )}
    </div>
  );
}
