import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://copywise.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ColdCrow — AI Cold Email Writer for B2B Founders",
    template: "%s | ColdCrow",
  },
  description:
    "Generate high-converting cold emails, social posts, ad copy, and more with AI. Start free, upgrade when you need unlimited generations.",
  keywords: [
    "AI copywriting",
    "AI writing tool",
    "cold email generator",
    "social media copy",
    "ad copy generator",
    "SaaS copywriting",
    "AI content generator",
  ],
  authors: [{ name: "ColdCrow" }],
  creator: "ColdCrow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "ColdCrow — AI Cold Email Writer for B2B Founders",
    description:
      "Generate high-converting cold emails, social posts, ad copy, and more with AI.",
    siteName: "ColdCrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColdCrow — AI Cold Email Writer",
    description:
      "Generate high-converting copy with AI. Cold emails, social posts, ad copy & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="top-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
