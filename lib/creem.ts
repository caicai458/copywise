/**
 * Creem (Merchant of Record) API helper.
 * Docs: https://docs.creem.io
 * Base URL (live): https://api.creem.io/v1
 * Base URL (test): https://test-api.creem.io
 * Authentication: x-api-key header (NOT Authorization Bearer)
 */
const CREEM_API_KEY = process.env.CREEM_API_KEY;
const CREEM_BASE_URL = process.env.CREEM_BASE_URL || "https://api.creem.io/v1";
const CREEM_WEBHOOK_SECRET = process.env.CREEM_WEBHOOK_SECRET;
export interface CreemCheckoutInput {
  price_id: string;
  customer_email?: string;
  customer_name?: string;
  success_url: string;
  cancel_url: string;
  metadata?: Record<string, string>;
}
export interface CreemCheckout {
  id: string;
  url: string;
  status: string;
}
async function creemFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!CREEM_API_KEY) {
    throw new Error(
      "CREEM_API_KEY is not configured. Set it in your environment variables."
    );
  }
  // Normalize base URL: Creem API paths live under /v1 for both live and test.
  const base = CREEM_BASE_URL.endsWith("/v1")
    ? CREEM_BASE_URL
    : `${CREEM_BASE_URL}/v1`;
  const response = await fetch(`${base}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": CREEM_API_KEY,
      ...options.headers,
    },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Creem API error (${response.status}): ${errorText}`);
  }
  return response.json();
}
/**
 * Create a checkout session for a subscription.
 *
 * Test mode: Creem only accepts product_id + success_url (customer_email,
 * cancel_url, customer_name and metadata are rejected by the test API).
 * Live mode: pass the full payload so webhook events carry customer_email
 * and metadata.user_id, which the webhook handler needs to associate the
 * subscription with a local Supabase user.
 */
export async function createCheckout(
  input: CreemCheckoutInput
): Promise<CreemCheckout> {
  const isTest = CREEM_BASE_URL.includes("test");
  const payload: Record<string, unknown> = {
    product_id: input.price_id,
    success_url: input.success_url,
  };
  if (!isTest) {
    if (input.cancel_url) payload.cancel_url = input.cancel_url;
    if (input.customer_email) payload.customer_email = input.customer_email;
    if (input.customer_name) payload.customer_name = input.customer_name;
    if (input.metadata) payload.metadata = input.metadata;
  }
  const resp = await creemFetch<Record<string, unknown>>("/checkouts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return {
    id: String(resp.id || ""),
    url: String(resp.checkout_url || resp.url || ""),
    status: String(resp.status || ""),
  };
}
/**
 * Retrieve a subscription by ID.
 */
export async function getSubscription(
  subscriptionId: string
): Promise<Record<string, unknown>> {
  return creemFetch(`/subscriptions/${subscriptionId}`);
}
/**
 * Cancel a subscription.
 */
export async function cancelSubscription(
  subscriptionId: string
): Promise<Record<string, unknown>> {
  return creemFetch(`/subscriptions/${subscriptionId}/cancel`, {
    method: "POST",
  });
}
/**
 * Verify a Creem webhook signature.
 * Creem sends the signature in the "creem-signature" header:
 * HMAC-SHA256 hex digest of the raw request body, keyed by the webhook secret.
 */
export async function verifyWebhook(
  payload: string,
  signature: string
): Promise<boolean> {
  if (!CREEM_WEBHOOK_SECRET) {
    console.warn(
      "CREEM_WEBHOOK_SECRET not set. Skipping webhook verification."
    );
    return true;
  }
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(CREEM_WEBHOOK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload)
  );
  const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return signature === expectedSignature;
}
export interface CreemWebhookEvent {
  type: string;
  data: {
    id?: string;
    customer_id?: string;
    status?: string;
    plan?: string;
    current_period_end?: string;
    [key: string]: unknown;
  };
}
