export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Miss Bitcoin</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Miss Bitcoin exists to bring more women into Bitcoin. Women represent half of the world’s population—
        and without them, true decentralization is impossible.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-mb-cream/10 bg-black/10 p-8">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-mb-cream/75">
            The mission of Miss Bitcoin is to empower women around the world to participate in Bitcoin adoption
            by combining femininity, intelligence, and real-world impact.
          </p>
          <p className="mt-4 text-mb-cream/75">
            Each representative designs and executes a Bitcoin-focused project during her reign, transforming beauty
            into purpose and visibility into action.
          </p>
        </section>

        <section className="rounded-2xl border border-mb-cream/10 bg-black/10 p-8">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-mb-cream/75">
            Miss Bitcoin envisions a world where Bitcoin adoption is truly decentralized—built by everyone and led also by women.
          </p>
          <p className="mt-4 text-mb-cream/75">
            True decentralization requires representation. Through Miss Bitcoin, women step forward as builders, educators,
            and leaders—working alongside existing leaders—to accelerate global adoption and create a more sovereign,
            decentralized financial future.
          </p>
        </section>
      </div>
    </main>
  );
}