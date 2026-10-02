import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email Sender | ColdCrow",
  description:
    "Compose and send personalized cold emails from your own inbox. ColdCrow writes the email, your mailbox sends it.",
};

export default function SenderPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-600">
          ColdCrow Sender
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Write once. Send from your own inbox.
        </h1>
        <p className="mt-4 text-base text-gray-600">
          ColdCrow drafts a personalized, deliverability-scored email for each
          prospect. You send it from your own mailbox so your sender reputation
          stays in your hands.
        </p>
      </header>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          1. Generate the email in the Dashboard
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Paste a one-line description of your prospect. ColdCrow returns a
          personalized email built on the six reply triggers, with a
          deliverability score. Copy it.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-gray-900">
          2. Open your mailbox
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Use your own Gmail or Outlook. Paste the email, personalize the first
          line if you like, and send. Ten to thirty personalized emails per day
          per mailbox keeps your domain healthy.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-gray-900">
          3. Track replies
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Move to the{" "}
          <a href="/tracker" className="font-medium text-indigo-600 hover:underline">
            Tracker
          </a>{" "}
          to log who replied and schedule a follow-up.
        </p>
        <div className="mt-8 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-700">
          <span className="font-semibold">Deliverability tip:</span> keep each
          email under 120 words, one clear ask, and no more than one link. ColdCrow
          scores this before you send.
        </div>
      </div>
    </div>
  );
}

