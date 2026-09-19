import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://getcopywise.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Copywise — AI Copywriting Tool for Modern Businesses",
    template: "%s | Copywise",
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
  authors: [{ name: "Copywise" }],
  creator: "Copywise",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Copywise — AI Copywriting Tool for Modern Businesses",
    description:
      "Generate high-converting cold emails, social posts, ad copy, and more with AI.",
    siteName: "Copywise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copywise — AI Copywriting Tool",
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
      </body>
    </html>
  );
}
