import Link from "next/link";

const faqs = [
  {
    q: "What is Miss Bitcoin?",
    a: "Miss Bitcoin is an international competition designed to bring more women into Bitcoin by combining visibility with real-world action and adoption projects.",
  },
  {
    q: "Is this a traditional beauty pageant?",
    a: "No. Miss Bitcoin is not about looks alone. It’s about leadership, intelligence, and impact—measured by real Bitcoin-focused projects executed during each representative’s reign.",
  },
  {
    q: "Who can apply?",
    a: "Women who want to represent their country and are ready to design and execute a Bitcoin-based project in their community.",
  },
  {
    q: "What kinds of projects qualify?",
    a: "Education initiatives, circular economy pilots, Bitcoin community programs, tools and wallets, workshops, and any initiative that measurably increases real adoption.",
  },
  {
    q: "How does the 1 BTC award work?",
    a: "At the end of each cycle, the project demonstrating the greatest real-world impact is awarded 1 Bitcoin to expand and scale its initiative (details and criteria will be published as the program finalizes).",
  },
  {
    q: "How can sponsors or partners get involved?",
    a: "Use the Contact page to submit an inquiry. We review sponsor/investor/franchise conversations on a rolling basis.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">FAQ</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        The program is launching in phases. Here are the most common questions we’re getting right now.
      </p>

      <div className="mt-10 grid gap-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold">
              <div className="flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-mb-cream/60 group-open:rotate-45 transition">+</span>
              </div>
            </summary>
            <p className="mt-4 text-mb-cream/75">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/apply"
          className="rounded-full bg-mb-cream px-6 py-3 text-center text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
        >
          Apply
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-mb-gold/40 px-6 py-3 text-center text-sm font-medium text-mb-cream hover:border-mb-gold"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}