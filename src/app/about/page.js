// src/app/about/page.js
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Miss Bitcoin</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Miss Bitcoin is a global initiative built around freedom, education, and decentralization.
        We exist to bring more women into Bitcoin — because real decentralization can’t happen if
        half the world is excluded.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/apply"
          className="inline-flex items-center justify-center rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
        >
          Apply to represent your country
        </Link>
        <Link className="text-sm text-mb-cream/80 hover:text-mb-cream" href="/program">
          How the program works →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-mb-cream/75">
            The mission of Miss Bitcoin is to empower women worldwide to participate in Bitcoin
            adoption by combining leadership, storytelling, and real-world community impact.
          </p>
          <p className="mt-4 text-mb-cream/75">
            Each representative designs and executes a Bitcoin-focused project during her reign —
            turning visibility into education, and inspiration into action.
          </p>
        </section>

        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-mb-cream/75">
            Miss Bitcoin envisions a world where Bitcoin adoption is truly decentralized — built by
            everyone, and led also by women.
          </p>
          <p className="mt-4 text-mb-cream/75">
            Through Miss Bitcoin, women step forward as educators and leaders, working alongside the
            broader Bitcoin community to accelerate adoption and expand financial sovereignty.
          </p>
        </section>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
          <h3 className="text-lg font-semibold">Not a traditional pageant</h3>
          <p className="mt-2 text-sm text-mb-cream/70">
            We prioritize purpose, leadership, and communication — not perfection.
          </p>
        </div>

        <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
          <h3 className="text-lg font-semibold">Education + mentorship</h3>
          <p className="mt-2 text-sm text-mb-cream/70">
            You don’t need to be a Bitcoin expert. We help you learn and build confidently.
          </p>
        </div>

        <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
          <h3 className="text-lg font-semibold">Real-world impact</h3>
          <p className="mt-2 text-sm text-mb-cream/70">
            Representatives create projects that drive local education and adoption.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
        <h2 className="text-xl font-semibold">Want to learn more?</h2>
        <p className="mt-3 text-mb-cream/75">
          Read the founder’s letter to understand the “why” behind Miss Bitcoin — or go straight to
          the program details and apply.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/founder"
            className="inline-flex items-center justify-center rounded-full border border-mb-gold/30 px-6 py-3 text-sm text-mb-cream/85 hover:border-mb-gold/50 hover:text-mb-cream"
          >
            Read the Founder’s Letter
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
          >
            Apply now
          </Link>
        </div>
      </div>
    </main>
  );
}