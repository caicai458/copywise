import Link from "next/link";
import { Sparkles } from "lucide-react";
const PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund" },
];
const COMPANY_LINKS = [
  { label: "Contact", href: "mailto:billing@getcopywise.com" },
];
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>ColdCrow</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI-powered copywriting for modern businesses. Write emails, social
              posts, and ads that convert.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="https://theaidirectory.ai" target="_blank" rel="noopener noreferrer" className="ml-4 inline-block text-xs text-muted-foreground underline">AI Tools Directory</a>
              <a href="https://indexof.ai/tool/coldcrow-idxc7ebti?ref=coldcrow-idxc7ebti" target="_blank" rel="noopener">
                <img src="https://indexof.ai/badge-light.svg" alt="Featured on IndexOf.AI" width="200" height="40" />
              </a>
              <a href="https://aidreamhub.com" target="_blank" rel="noopener">
                <img src="https://aidreamhub.com/api/badge" alt="Featured on AI Dreamhub" width="200" height="54" />
              <a href="https://nicklaunches.com/products/coldcrow/" target="_blank" rel="noopener">
                <img src="https://nicklaunches.com/badges/featured-dark.png" alt="ColdCrow on Nick Launches" width="244" height="56" />
              </a>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 ColdCrow. All rights reserved.
          </p>
          <div className="mt-4">
            <a target="_blank" href="https://goodaitools.com/ai/getcopywise" rel="noopener">
              <img src="https://goodaitools.com/assets/images/badge.png" alt="Good AI Tools" height="54" loading="lazy" />
            </a>
            <a target="_blank" href="https://toolfame.com/item/coldcrow" rel="noopener" className="ml-4 inline-block">
              <img src="https://toolfame.com/badge-light.svg" alt="Featured on ToolFame" height="54" loading="lazy" />
            </a>
            <a target="_blank" href="https://saasaitools.com/portal/" rel="noopener" className="ml-4 inline-block">
              <img src="https://saasaitools.com/wp-content/uploads/uploads/branding/saasaitools-badge-light.svg" alt="Featured on SaaS AI Tools" height="54" loading="lazy" />
            </a>
            <a target="_blank" href="https://appalist.com/ai/getcopywise" rel="noopener" className="ml-4 inline-block">
              <img src="https://appalist.com/assets/images/badge.png" alt="Appa List" height="54" loading="lazy" />
            </a>
<a target="_blank" href="https://dang.ai" rel="noopener" className="ml-4 inline-block text-xs text-muted-foreground underline">
              Find more AI tools on Dang.ai</a>
            
          <a href="https://openhunts.com" target="_blank" rel="noopener" title="OpenHunts Club">
            <img alt="OpenHunts Club Member" height="105" src="https://cdn.openhunts.com/badges/club.webp" style={{width: '195px', height: 'auto'}} width="486" />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


