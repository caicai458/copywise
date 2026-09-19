import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    monthly: process.env.CREEM_PRICE_PRO_MONTHLY || "",
    yearly: process.env.CREEM_PRICE_PRO_YEARLY || "",
  });
}
