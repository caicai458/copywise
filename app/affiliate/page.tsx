"use client";

import Link from "next/link";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ColdCrow
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/pricing" className="hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/templates" className="hover:text-gray-900">
              Templates
            </Link>
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            Affiliate Program
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Earn 30% recurring for every referral
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Recommend ColdCrow to founders, sales teams, and marketers who write
            cold emails. You get paid every month they stay subscribed. No
            caps, no minimums.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-gray-900">30%</p>
            <p className="mt-1 text-sm text-gray-600">recurring commission</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-gray-900">$29</p>
            <p className="mt-1 text-sm text-gray-600">per referred Pro sale</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-gray-900">∞</p>
            <p className="mt-1 text-sm text-gray-600">no payout minimum</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">How it works</h2>
          <ol className="mt-4 space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">1.</span>
              <span>
                Join with your email — you get a unique referral link
                instantly.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">2.</span>
              <span>
                Share it in your newsletter, blog, Twitter, or LinkedIn. Every
                click is tracked.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">3.</span>
              <span>
                When a referred user upgrades to Pro ($29/mo), you earn $8.70
                every single month they stay — forever.
              </span>
            </li>
          </ol>
          <div className="mt-8">
            <button
              onClick={() => {
                const email = window.prompt("Enter your email to get your referral link:");
                if (email) {
                  window.alert("Thanks! Your referral link will be emailed to " + email + " shortly.");
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Get my referral link
            </button>
          </div>
        </div>

        <footer className="mt-14 py-8 border-t border-gray-200 text-center text-sm text-gray-500">
          ColdCrow — AI cold email writer with deliverability scoring.
        </footer>
      </main>
    </div>
  );
}
