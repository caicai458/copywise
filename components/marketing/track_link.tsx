"use client";
import Link from "next/link";
import { track } from "@vercel/analytics/react";

interface TrackLinkProps {
  href: string;
  event: string;
  params?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackLink({ href, event, params, children, className, target, rel }: TrackLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => track(event, params)}
    >
      {children}
    </Link>
  );
}
