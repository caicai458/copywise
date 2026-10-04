import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://copywise.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogs = [
    "how-to-find-email-addresses",
    "cold-email-mistakes-2026",
    "cold-email-deliverability-checklist",
    "cold-email-follow-up-sequence",
    "cold-email-for-saas-founders",
    "linkedin-cold-outreach",
    "cold-email-deliverability-checklist-2026",
    "cold-email-follow-up-sequence-2026",
    "why-cold-emails-go-to-spam-2026",
    "5-cold-email-openers-2026",
    "saas-cold-email-playbook-2026",
    "cold-email-guide",
    "cold-email-subject-lines",
    "cold-vs-warm-email",
  ];

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/try`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/legal/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/legal/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/legal/refund`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
