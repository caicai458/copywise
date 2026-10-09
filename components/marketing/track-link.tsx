"use client";
import Link from "next/link";
import { track } from "@vercel/analytics/react";

interface TrackLinkProps {
  href: string;
  event: string;
  params?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
}

export function TrackLink({ href, event, params, children, className }: TrackLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track(event, params)}
    >
      {children}
    </Link>
  );
}
