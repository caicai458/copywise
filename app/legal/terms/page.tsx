import type { Metadata } from "next";
import { LegalLayout } from "@/components/marketing/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the Copywise AI copywriting platform.",
};

const LAST_UPDATED = "September 17, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms of Service ("Terms") govern your access to and use of
        Copywise (the "Service"), an AI copywriting platform operated by
        Copywise ("we", "us", or "our"). By creating an account or using the
        Service, you agree to be bound by these Terms. If you do not agree, do
        not use the Service.
      </p>

      <h2>1. Description of the Service</h2>
      <p>
        Copywise provides AI-generated marketing copy, including cold emails,
        social media posts, ad copy, product descriptions, and blog
        introductions. The Service is offered under a free tier and a paid Pro
        tier. Generated content is provided as a draft and must be reviewed by
        you before publication.
      </p>

      <h2>2. Your Account</h2>
      <p>
        To use most features, you must create an account using a valid email
        address. You are responsible for maintaining the confidentiality of
        your credentials and for all activity under your account. You agree to
        provide accurate information and to notify us immediately of any
        unauthorized use. You must be at least 18 years old to use the Service.
      </p>

      <h2>3. Acceptable Use Policy</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>
          Generate spam, phishing messages, or content that violates
          anti-spam laws.
        </li>
        <li>
          Create content that is unlawful, defamatory, harassing, discriminatory,
          or infringing on intellectual property rights.
        </li>
        <li>
          Impersonate any person or misrepresent your affiliation with any
          person or entity.
        </li>
        <li>
          Attempt to reverse engineer, scrape, or abuse the Service outside its
          documented interfaces.
        </li>
        <li>
          Resell the Service or use it to build a competing product.
        </li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate this policy without
        prior notice.
      </p>

      <h2>4. Subscriptions and Billing</h2>
      <p>
        Pro subscriptions are billed monthly or annually through our payment
        partner, Creem, and renew automatically until canceled. You may cancel
        at any time from your dashboard; access continues through the end of the
        current billing period. Fees are non-refundable except as expressly
        described in our{" "}
        <a href="/legal/refund">Refund Policy</a>. Prices may change with 30
        days' notice; existing subscriptions are honored at the then-current
        rate until renewal.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The Service, including its software, design, logos, and underlying
        models, is owned by Copywise and protected by intellectual property
        laws. Subject to these Terms, we grant you a limited, non-exclusive,
        non-transferable license to use the Service for your internal business
        purposes. You retain ownership of the prompts you submit and the
        content you generate through the Service, subject to the Acceptable Use
        Policy above.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
        ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE
        WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT GENERATED CONTENT
        WILL BE ACCURATE, COMPLETE, OR SUITABLE FOR ANY PARTICULAR PURPOSE. AI
        OUTPUT MAY CONTAIN MISTAKES; YOU ARE SOLELY RESPONSIBILITY FOR
        REVIEWING AND VERIFYING ALL CONTENT BEFORE USE.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, COPYWISE AND ITS SUPPLIERS WILL
        NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF OR RELATED TO
        THE SERVICE. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING FROM
        THE SERVICE WILL NOT EXCEED THE AMOUNTS YOU PAID US IN THE TWELVE (12)
        MONTHS PRECEDING THE CLAIM.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time from
        your account settings. We may suspend or terminate your access if you
        breach these Terms, if required by law, or if we discontinue the
        Service. Provisions that by their nature should survive termination
        (including intellectual property, disclaimers, and limitation of
        liability) will survive.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the updated
        version on this page and revise the "Last updated" date. Material
        changes may also be announced by email. Continued use after the effective
        date constitutes acceptance.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws applicable to Copywise's operating
        entity, without regard to conflict-of-law principles. Disputes will be
        resolved in the competent courts of that jurisdiction, except where
        consumer protection laws in your country of residence require otherwise.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:legal@getcopywise.com">legal@getcopywise.com</a>.
      </p>
    </LegalLayout>
  );
}
