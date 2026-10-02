import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email Tracker | ColdCrow",
  description:
    "Track cold email replies and follow-ups. Log every prospect, their status, and the next action.",
};

const sampleRows = [
  { date: "Oct 01", company: "Rystic", contact: "founders@rystic.com", status: "Sent", next: "Follow up Oct 08" },
  { date: "Oct 01", company: "OpenHack", contact: "hello@openhack.dev", status: "Sent", next: "Follow up Oct 08" },
  { date: "Oct 01", company: "Frontrunner", contact: "team@frontrunner.io", status: "Replied", next: "Reply today" },
  { date: "Oct 02", company: "Pennant", contact: "hello@pennant.co", status: "Sent", next: "Follow up Oct 09" },
  { date: "Oct 02", company: "Familiar", contact: "founders@familiar.app", status: "Sent", next: "Follow up Oct 09" },
];

export default function TrackerPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-600">
          ColdCrow Tracker
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Know who replied. Follow up on time.
        </h1>
        <p className="mt-4 text-base text-gray-600">
          A simple log of every cold email you send, its status, and the next
          action. Your outbound stays organized without a CRM.
        </p>
      </header>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Date</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Company</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Contact</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Status</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Next action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sampleRows.map((row) => (
              <tr key={row.contact}>
                <td className="px-4 py-3 text-gray-600">{row.date}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{row.company}</td>
                <td className="px-4 py-3 text-gray-600">{row.contact}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      "inline-flex rounded-full px-2 py-0.5 text-xs font-medium " +
                      (row.status === "Replied"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600")
                    }
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{row.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Sample data shown. Log your own sends in the same format to track replies
        and follow-ups.
      </p>
    </div>
  );
}

