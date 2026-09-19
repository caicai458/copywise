import type { Metadata } from "next";
import { LegalLayout } from "@/components/marketing/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Copywise collects, uses, stores, and protects your personal data. GDPR-compliant.",
};

const LAST_UPDATED = "September 17, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        Copywise ("we", "us", or "our") is committed to protecting your personal
        data. This Privacy Policy explains what information we collect, how we
        use it, and what rights you have. By using our website and services, you
        agree to the practices described below.
      </p>

      <h2>1. Data We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account data:</strong> your email address and display name when
          you create an account.
        </li>
        <li>
          <strong>Usage data:</strong> the prompts you submit, the AI-generated
          content we return, content type, generation timestamps, and daily
          usage counts.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser type, device
          information, and pages visited, collected via cookies and standard
          server logs.
        </li>
        <li>
          <strong>Payment data:</strong> billing details are processed by our
          payment partner, Creem. We do not store your full credit card number
          on our servers.
        </li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Provide, operate, and maintain the Copywise service.</li>
        <li>Generate AI copy in response to your prompts.</li>
        <li>Track your daily generation limits and subscription status.</li>
        <li>Send transactional emails (account, billing, security).</li>
        <li>Improve our models, features, and user experience.</li>
        <li>Detect abuse, fraud, and security incidents.</li>
      </ul>
      <p>
        We do not sell your personal data. We do not use your prompts or
        generated content to train third-party advertising models.
      </p>

      <h2>3. Cookies</h2>
      <p>
        We use a small number of cookies to keep you signed in, remember your
        preferences, and measure aggregate traffic. You can control cookies
        through your browser settings; disabling them may prevent sign-in and
        core functionality.
      </p>

      <h2>4. Data Storage and Transfers</h2>
      <p>
        Your account data and generated content are stored securely using
        Supabase, hosted in the <strong>US West (California, USA)</strong>{" "}
        region. When you access the service from outside the United States, your
        data may be transferred to and processed in the US. We rely on standard
        contractual mechanisms (including SCCs where applicable) to ensure an
        adequate level of protection.
      </p>

      <h2>5. Your Rights (GDPR / CCPA)</h2>
      <p>
        If you are located in the European Economic Area, the United Kingdom,
        or California, you have the right to:
      </p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate data.</li>
        <li>Request deletion of your data ("right to be forgotten").</li>
        <li>Request a portable copy of your data in a machine-readable format.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Withdraw consent at any time.</li>
      </ul>
      <p>
        You can exercise many of these rights directly from your account
        settings. For other requests, contact us at the address below. We will
        respond within 30 days.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your account data and generated content for as long as your
        account remains active. If you delete your account, we will delete or
        anonymize your personal data within 30 days, except where we are
        required to retain certain records for legal, tax, or security reasons.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how we handle your
        data, please contact us at{" "}
        <a href="mailto:privacy@getcopywise.com">privacy@getcopywise.com</a>.
      </p>
    </LegalLayout>
  );
}
