export const metadata = {
  title: "How to Research a Prospect in 5 Minutes (Before You Write)",
  description:
    "The single biggest difference between a cold email that gets replies and one that gets deleted is the 5 minutes of research before you write. Here is exactly where to look, in order.",
  keywords: [
    "prospect research",
    "cold email personalization",
    "b2b sales research",
    "cold email tips",
    "sales prospecting",
  ],
  openGraph: {
    title: "How to Research a Prospect in 5 Minutes (Before You Write)",
    description:
      "5 minutes of research, 2 minutes of writing — the system that makes cold emails feel written for one person.",
    type: "article",
  },
};
export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
          Research
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to Research a Prospect in 5 Minutes (Before You Write)
        </h1>
        <p className="mt-4 text-base text-gray-600">
          The 5-minute prospect research system that separates replies from deletes.
        </p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The 5-Minute Prospect Research System
        </h2>
        <p>
          Most people spend 5 minutes writing a generic email and 0 minutes researching the prospect. Flip it: 5 minutes of research, 2 minutes of writing.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Minute 1: Their company website
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>What exactly do they sell? (One sentence, their words)</li>
          <li>Who do they sell to? (Check the homepage hero + customer logos)</li>
          <li>Any recent change? (New product, new team page, new pricing)</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Minute 2: Their pricing or product page
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>What is the product's core promise?</li>
          <li>Does anything look fresh (new feature, new integration)?</li>
          <li>One specific detail you can reference — this is your first line.</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Minute 3: Their LinkedIn or team page
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Who is the founder / decision-maker?</li>
          <li>What is their background (previous company, role, posts)?</li>
          <li>Anything they wrote recently that you can reference?</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Minute 4: Their recent activity
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Check their latest blog posts, tweets, or LinkedIn posts</li>
          <li>What are they talking about right now?</li>
          <li>A trigger: hiring, funding, launch, event, or a problem they named</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Minute 5: Search their name + your problem
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google: [name] + [outbound / sales / growth / your category]</li>
          <li>One article, podcast, or post they made — reference it</li>
        </ul>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The 2-Minute Email Formula
        </h2>
        <p>Now write:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><span className="font-medium text-gray-900">Line 1:</span> One researched detail (their product, their post, their trigger)</li>
          <li><span className="font-medium text-gray-900">Line 2:</span> Who you are in one sentence (not your company pitch)</li>
          <li><span className="font-medium text-gray-900">Line 3:</span> One relevant question or low-pressure ask</li>
          <li><span className="font-medium text-gray-900">Sign-off:</span> Your name</li>
        </ol>
        <p>
          That is it. No company history, no feature list, no "I hope this finds you well."
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Why This Works
        </h2>
        <p>
          The email feels like it was written for them — because it was. Prospects reply to emails that show you looked, even when the product fit is imperfect.
        </p>
        <p className="pt-4 border-t border-gray-200">
          Tools like ColdCrow automate the writing part: paste a prospect profile and get a researched-feeling email in seconds. The 5 minutes of research is still yours — and it is the part that compounds.{" "}
          <a className="font-medium text-orange-600" href="https://copywise.vercel.app/try">
            Try it free at copywise.vercel.app/try
          </a>
        </p>
      </div>
    </article>
  );
}
