import { NextResponse } from "next/server";

import { generateCopy } from "@/lib/ai";
import type { ContentType } from "@/lib/types";

interface GenerateRequest {
  prompt: string;
  content_type: ContentType;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateRequest;
    const { prompt, content_type } = body;

    if (!prompt || !content_type) {
      return NextResponse.json(
        { error: "Prompt and content type are required." },
        { status: 400 }
      );
    }

    // 调用 AI 生成文案
    const result = await generateCopy(prompt, content_type);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Public generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate copy. Please try again." },
      { status: 500 }
    );
  }
}
