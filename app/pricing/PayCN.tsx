"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CN_FREE_FEATURES = [
  "5 AI generations per day",
  "Basic copy formats (cold email, social post)",
  "Copy to clipboard",
  "Community support",
];

const CN_PRO_FEATURES = [
  "100 AI generations per day",
  "All copy formats (emails, social, ads, product descriptions, blog intros)",
  "Copy history and favorites",
  "Priority support",
  "GDPR-compliant data handling",
];

const CN_YEARLY_FEATURES = [
  "100 AI generations per day",
  "All copy formats (emails, social, ads, product descriptions, blog intros)",
  "Copy history and favorites",
  "Priority support",
  "GDPR-compliant data handling",
  "Save ¥237.60 per year vs monthly",
];

export default function PayCN() {
  const [loading, setLoading] = useState(false);
  const [qr, setQr] = useState<{ plan: string; url: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function createOrder(plan: string, type: string) {
    setLoading(true);
    setError(null);
    setQr(null);
    try {
      const res = await fetch("/api/pay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, type }),
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
      setQr({ plan, url: data.url_qrcode });
    } catch {
      setError("网络错误，请稍后重试");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          中国大陆用户 · 人民币支付
        </h2>
        <p className="mt-2 text-muted-foreground">
          微信 / 支付宝扫码即时开通，免国际信用卡
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        {/* CN Free */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Free</CardTitle>
            <CardDescription className="mt-2">
              免费开始使用 AI 文案创作
            </CardDescription>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">¥0</span>
              <span className="text-sm text-muted-foreground">forever</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {CN_FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="lg" className="mt-8 w-full">
              <Link href="/signup?plan=pro">免费开始</Link>
            </Button>
          </CardContent>
        </Card>

        {/* CN Pro Monthly */}
        <Card className="relative border-2 border-primary shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Pro</CardTitle>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                最受欢迎
              </span>
            </div>
            <CardDescription className="mt-2">
              解锁全部专业功能，不限生成次数
            </CardDescription>
            <div className="mt-4 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">¥99</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
              <p className="text-sm text-primary">微信 / 支付宝扫码即开</p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {CN_PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {!qr && (
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  size="lg"
                  onClick={() => createOrder("pro_monthly", "wechat")}
                  disabled={loading}
                >
                  {loading ? "正在创建订单…" : "微信扫码支付"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => createOrder("pro_monthly", "alipay")}
                  disabled={loading}
                >
                  支付宝扫码支付
                </Button>
              </div>
            )}
            {qr && qr.plan === "pro_monthly" && (
              <div className="mt-6">
                <img
                  src={qr.url}
                  alt="Payment QR code"
                  className="h-48 w-48 rounded-md border border-border"
                />
                <p className="mt-3 text-sm text-muted-foreground">
                  请使用微信 / 支付宝扫一扫完成支付
                </p>
                <Button variant="outline" className="mt-3" onClick={() => setQr(null)}>
                  重新下单
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* CN Pro Yearly */}
        <Card className="relative border-2 border-primary shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Pro Yearly</CardTitle>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                Save 20%
              </span>
            </div>
            <CardDescription className="mt-2">
              年付更省，适合长期使用
            </CardDescription>
            <div className="mt-4 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">¥79.20</span>
                <span className="text-sm text-muted-foreground">
                  per month, billed annually
                </span>
              </div>
              <p className="text-sm text-primary">
                ¥950.40/year · Save ¥237.60 vs monthly
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {CN_YEARLY_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {!qr && (
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  size="lg"
                  onClick={() => createOrder("pro_yearly", "wechat")}
                  disabled={loading}
                >
                  {loading ? "正在创建订单…" : "微信扫码支付"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => createOrder("pro_yearly", "alipay")}
                  disabled={loading}
                >
                  支付宝扫码支付
                </Button>
              </div>
            )}
            {qr && qr.plan === "pro_yearly" && (
              <div className="mt-6">
                <img
                  src={qr.url}
                  alt="Payment QR code"
                  className="h-48 w-48 rounded-md border border-border"
                />
                <p className="mt-3 text-sm text-muted-foreground">
                  请使用微信 / 支付宝扫一扫完成支付
                </p>
                <Button variant="outline" className="mt-3" onClick={() => setQr(null)}>
                  重新下单
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {error && <p className="mt-4 text-center text-sm text-destructive">{error}</p>}
    </div>
  );
}
