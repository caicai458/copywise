import { History } from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { HistoryItem } from "@/components/dashboard/history-item";
import {
  CONTENT_TYPE_LABELS,
  type ContentType,
  type Generation,
} from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function HistoryPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("generations")
    .select("*")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  const generations = (data ?? []) as Generation[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Generation History</h1>
        <p className="text-sm text-muted-foreground">
          All the copy you&apos;ve generated, newest first.
        </p>
      </div>

      {generations.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <History className="mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-medium">No generations yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Head over to the dashboard and generate your first piece of copy.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {generations.map((g) => (
            <div key={g.id}>
              <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="secondary">
                  {CONTENT_TYPE_LABELS[g.content_type as ContentType]}
                </Badge>
                <span>{formatDate(g.created_at)}</span>
              </div>
              <HistoryItem generation={g} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
