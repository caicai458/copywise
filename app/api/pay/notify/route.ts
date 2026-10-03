import { NextRequest } from "next/server";
import crypto from "crypto";

const SECRET = process.env.HUPIJAO_SECRET || "";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const params: Record<string, string> = {};
    for (const [k, v] of form.entries()) {
      params[k] = String(v);
    }

    const hash = params.hash;
    delete params.hash;

    const keys = Object.keys(params).sort();
    const raw = keys.map((k) => `${k}=${params[k]}`).join("&");
    const calc = crypto
      .createHash("md5")
      .update(`${raw}&secret_key=${SECRET}`, "utf8")
      .digest("hex")
      .toUpperCase();

    if (calc !== hash) {
      return new Response("fail");
    }

    // 验签通过：记录订单（后续可在此发放 Pro 权限）
    console.log("CN_PAY_OK", {
      trade_order_id: params.trade_order_id,
      total_fee: params.total_fee,
      status: params.status,
    });

    return new Response("success");
  } catch {
    return new Response("fail");
  }
}
