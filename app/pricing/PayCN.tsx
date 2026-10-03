"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CN_FEATURES = [
  "All Pro features unlocked",
  "Unlimited AI generations",
  "WeChat / Alipay instant payment",
  "Priority support",
];

export default function PayCN() {
  const [loading, setLoading] = useState(false);
  const [qr, setQr] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function createOrder(type: string) {
    setLoading(true);
    setError(null);
    setQr(null);
    try {
      const res = await fetch("/api/pay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "pro_monthly", type }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.error === "PAYMENT_NOT_CONFIGURED"
            ? "人民币支付暂未开通，请先用国际信用卡（$29/月）"
            : "下单失败，请稍后重试"
        );
        return;
      }
      setQr(data.url_qrcode);
    } catch {
      setError("网络错误，请稍后重试");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mt-10">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-xl">中国大陆用户 · 人民币支付</CardTitle>
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
            CN
          </span>
        </div>
        <CardDescription className="mt-2">
          微信 / 支付宝扫码，即时开通 ColdCrow Pro
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight">¥99</span>
          <span className="text-sm text-muted-foreground">per month</span>
        </div>
        <ul className="mt-4 space-y-2">
          {CN_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        {!qr && (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => createOrder("wechat")} disabled={loading}>
              {loading ? "正在创建订单…" : "微信扫码支付"}
            </Button>
            <Button
              variant="outline"
              onClick={() => createOrder("alipay")}
              disabled={loading}
            >
              支付宝扫码支付
            </Button>
          </div>
        )}
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
        {qr && (
          <div className="mt-4">
            <img
              src={qr}
              alt="Payment QR code"
              className="h-48 w-48 rounded-md border border-border"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              请使用微信 / 支付宝扫一扫完成支付，付款后自动开通
            </p>
            <Button
              variant="outline"
              className="mt-3"
              onClick={() => setQr(null)}
            >
              重新下单
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
