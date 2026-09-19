/**
 * Creem (Merchant of Record) API helper.
 * Docs: https://docs.creem.io
 * Base URL: https://api.creem.io/v1
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

  const response = await fetch(`${CREEM_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CREEM_API_KEY}`,
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
 */
export async function createCheckout(
  input: CreemCheckoutInput
): Promise<CreemCheckout> {
  return creemFetch<CreemCheckout>("/checkout", {
    method: "POST",
    body: JSON.stringify({
      price: input.price_id,
      customer_email: input.customer_email,
      customer_name: input.customer_name,
      success_url: input.success_url,
      cancel_url: input.cancel_url,
      metadata: input.metadata,
    }),
  });
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
 * Creem sends an X-Creem-Signature header with HMAC-SHA256 of the payload.
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
