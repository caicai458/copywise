import type { ContentType } from "./types";

const ZHIPU_API_KEY = process.env.ZHIPU_API_KEY;
const ZHIPU_BASE_URL =
  process.env.ZHIPU_BASE_URL || "https://open.bigmodel.cn/api/paas/v4";
const ZHIPU_MODEL = process.env.ZHIPU_MODEL || "glm-5.3-flash";

export interface GenerateResult {
  content: string;
  tokens_used: number;
  model: string;
}

const SYSTEM_PROMPTS: Record<ContentType, string> = {
  cold_email:
    "You are an expert B2B sales copywriter. Write a concise, personalized cold email that gets replies. Keep it under 120 words. Use a friendly but professional tone. Include a clear call-to-action. Do not use spammy language or excessive capitalization.",
  social_post:
    "You are a social media marketing expert. Write an engaging social media post suitable for LinkedIn/Twitter. Keep it concise, use emojis sparingly, include relevant hashtags, and end with a question or call-to-action to drive engagement.",
  product_description:
    "You are an e-commerce copywriting expert. Write a compelling product description that highlights benefits, addresses customer pain points, and includes key features. Keep it persuasive but honest. Use bullet points for features.",
  ad_copy:
    "You are a direct-response advertising copywriter. Write high-converting ad copy with a strong headline, benefit-driven body, and clear call-to-action. Keep the headline under 40 characters and body under 125 characters for platform compatibility.",
  blog_intro:
    "You are a content marketing strategist. Write a compelling blog post introduction that hooks the reader, states the problem, and promises a solution. Keep it between 100-150 words. End with a smooth transition into the body content.",
};

export async function generateCopy(
  prompt: string,
  contentType: ContentType
): Promise<GenerateResult> {
  if (!ZHIPU_API_KEY) {
    throw new Error(
      "ZHIPU_API_KEY is not configured. Set it in your environment variables."
    );
  }

  const systemPrompt = SYSTEM_PROMPTS[contentType];

  const response = await fetch(`${ZHIPU_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ZHIPU_API_KEY}`,
    },
    body: JSON.stringify({
      model: ZHIPU_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `AI API request failed (${response.status}): ${errorText}`
    );
  }

  const data = await response.json();
  console.log("Zhipu API response:", JSON.stringify(data).substring(0, 500));
  const content = data.choices?.[0]?.message?.content || "";
  const tokensUsed = data.usage?.total_tokens || 0;

  return {
    content: content.trim(),
    tokens_used: tokensUsed,
    model: ZHIPU_MODEL,
  };
}
