"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

interface UserNavProps {
  email: string;
}

export function UserNav({ email }: UserNavProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSignOut() {
    await fetch("/auth/sign-out", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        className="gap-2"
        onClick={() => setOpen((v) => !v)}
      >
        <Mail className="h-4 w-4" />
        <span className="max-w-[160px] truncate">{email}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-md border bg-card p-2 shadow-md">
          <div className="px-2 py-1.5">
            <p className="text-sm font-medium">Signed in as</p>
            <p className="truncate text-xs text-muted-foreground">{email}</p>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-destruct hover:text-destructive"
            onClick={handleSignOut}
          >
            <LogOut />
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
