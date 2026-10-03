import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// 虎皮椒 V3 网关（xunhupay）
const XUNHU_GATEWAY = "https://api.xunhupay.com/payment/do.html";
const APPID = process.env.HUPIJAO_APPID || "";
const SECRET = process.env.HUPIJAO_SECRET || "";

const PRICES: Record<string, string> = {
  pro_monthly: "99.00",
  pro_yearly: "399.00",
};

const TITLES: Record<string, string> = {
  pro_monthly: "ColdCrow Pro 月付（人民币）",
  pro_yearly: "ColdCrow Pro 年付（人民币）",
};

function md5Sign(params: Record<string, string>): string {
  const keys = Object.keys(params).sort();
  const raw = keys.map((k) => `${k}=${params[k]}`).join("&");
  return crypto
    .createHash("md5")
    .update(`${raw}&secret_key=${SECRET}`, "utf8")
    .digest("hex")
    .toUpperCase();
}

export async function POST(req: NextRequest) {
  try {
    if (!APPID || !SECRET) {
      return NextResponse.json(
        { error: "PAYMENT_NOT_CONFIGURED" },
        { status: 503 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const plan = body.plan === "pro_yearly" ? "pro_yearly" : "pro_monthly";
    const type = body.type === "alipay" ? "alipay" : "wechat";
    const totalFee = PRICES[plan];
    const tradeOrderId = `CC${Date.now()}${Math.floor(
      Math.random() * 900 + 100
    )}`;

    const params: Record<string, string> = {
      version: "1.1",
      appid: APPID,
      trade_order_id: tradeOrderId,
      total_fee: totalFee,
      title: TITLES[plan],
      type,
      nonce_str: crypto.randomBytes(8).toString("hex"),
    };
    params.hash = md5Sign(params);

    const res = await fetch(XUNHU_GATEWAY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(params).toString(),
    });
    const data = await res.json();

    if (data.errcode !== 0) {
      return NextResponse.json(
        { error: "XUNHU_API_ERROR", detail: data.errmsg },
        { status: 502 }
      );
    }

    return NextResponse.json({
      trade_order_id: tradeOrderId,
      url_qrcode: data.url_qrcode || "",
      plan,
      total_fee: totalFee,
    });
  } catch {
    return NextResponse.json({ error: "INTERNAL" }, { status: 500 });
  }
}
