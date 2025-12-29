import Link from "next/link";

const projects = [
  "Bitcoin education in communities or public schools",
  "Development of Bitcoin tools or wallets",
  "Bitcoin-only farmers markets and circular economies",
  "Workshops, campaigns, and educational initiatives",
  "Any project that creates real Bitcoin adoption and impact",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl mb-hero-frame">
        <p className="text-xs uppercase tracking-[0.25em] text-mb-cream/70">
          More than a beauty pageant. A global movement.
        </p>

        <p className="mt-6 text-lg text-mb-cream/85">
          Miss Bitcoin is an international competition that celebrates beauty, intelligence,
          and impact. Unlike traditional pageants, Miss Bitcoin is not about looks alone—it is
          about action, leadership, and real change.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/get-involved"
            className="rounded-full bg-mb-cream px-6 py-3 text-center text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
          >
            Join the movement
          </Link>

          <Link
            href="/program"
            className="rounded-full border border-mb-gold/40 px-6 py-3 text-center text-sm font-medium text-mb-cream hover:border-mb-gold"
          >
            How it works
          </Link>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-mb-gold/70 to-transparent" />

        <div className="mt-14 rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <h2 className="text-xl font-semibold">Each representative builds real Bitcoin adoption</h2>

          <p className="mt-3 text-mb-cream/85">
            Each woman representing her country must create and execute a Bitcoin-based project designed
            to educate, empower, and drive adoption within her community.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-mb-gold/10 bg-mb-dark/60 px-4 py-3 text-sm text-mb-cream/85"
              >
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-mb-cream/85">
            At the end of each cycle, the project with the greatest real-world impact is awarded{" "}
            <span className="font-semibold text-mb-cream">1 Bitcoin</span>, funded by the Miss Bitcoin organization,
            to expand and scale the initiative—locally and globally.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
            <div className="text-sm text-mb-cream/70">Contestants</div>
            <div className="mt-2 font-semibold">Apply & build your project</div>
          </div>

          <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
            <div className="text-sm text-mb-cream/70">Sponsors</div>
            <div className="mt-2 font-semibold">Support global impact</div>
          </div>

          <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
            <div className="text-sm text-mb-cream/70">Investors</div>
            <div className="mt-2 font-semibold">Back the platform</div>
          </div>
        </div>
      </div>
    </main>
  );
}