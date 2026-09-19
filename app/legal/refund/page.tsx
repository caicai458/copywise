import type { Metadata } from "next";
import { LegalLayout } from "@/components/marketing/legal-layout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Copywise refund policy — 14-day money-back guarantee for Pro subscriptions, how to request a refund, and exceptions.",
};

const LAST_UPDATED = "September 17, 2026";

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated={LAST_UPDATED}>
      <p>
        We want you to love Copywise. If you're not satisfied with your Pro
        subscription, this policy explains how refunds work and when they
        apply.
      </p>

      <h2>1. 14-Day Money-Back Guarantee</h2>
      <p>
        If you upgrade to the Pro plan and are not satisfied for any reason,
        you may request a full refund within <strong>14 days</strong> of your
        original purchase. No questions asked. This guarantee applies to both
        monthly and annual Pro plans.
      </p>

      <h2>2. How to Request a Refund</h2>
      <p>To request a refund, contact us at:</p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:billing@getcopywise.com">billing@getcopywise.com</a>
        </li>
        <li>
          Include the email address used to create your Copywise account and the
          date of purchase.
        </li>
      </ul>
      <p>
        We will confirm your request by email and process the refund through
        our payment partner, Creem.
      </p>

      <h2>3. Processing Time</h2>
      <p>
        Approved refunds are typically processed within <strong>5–10 business
        days</strong>. The time it takes for the funds to appear in your
        account depends on your card issuer or bank and may take up to two
        billing cycles.
      </p>

      <h2>4. Exceptions</h2>
      <p>The following are not eligible for a refund:</p>
      <ul>
        <li>
          Refund requests made after the 14-day guarantee window.
        </li>
        <li>
          Renewal charges for subscriptions that were not canceled before the
          renewal date. You are responsible for canceling your subscription
          before it renews if you do not wish to continue.
        </li>
        <li>
          Free-tier plans — there is nothing to refund.
        </li>
        <li>
          Subscriptions terminated for a violation of our Terms of Service
          (including abuse, spam generation, or payment fraud).
        </li>
      </ul>

      <h2>5. Canceling Does Not Equal a Refund</h2>
      <p>
        Canceling a subscription prevents future renewals but does not
        automatically issue a refund. If you are within the 14-day window and
        want your money back, you must explicitly request it using the process
        above. Canceling alone only stops the next charge.
      </p>

      <h2>6. Contact</h2>
      <p>
        For any billing or refund questions, reach us at{" "}
        <a href="mailto:billing@getcopywise.com">billing@getcopywise.com</a>.
      </p>
    </LegalLayout>
  );
}
