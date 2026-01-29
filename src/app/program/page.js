// src/app/program/page.js
import Link from "next/link";

export default function ProgramPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">How it works</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Miss Bitcoin is a yearly program where women represent their countries, learn about Bitcoin,
        and lead a community project designed to drive education and adoption.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link className="text-sm text-mb-cream/80 hover:text-mb-cream" href="/faq">
          Questions? Read the FAQ →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Step 1</div>
          <h2 className="mt-3 text-lg font-semibold">Apply & represent your country</h2>
          <p className="mt-3 text-mb-cream/75">
            Submit your application. Selected candidates become Miss Bitcoin representatives for
            their country.
          </p>
        </div>

        <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Step 2</div>
          <h2 className="mt-3 text-lg font-semibold">Build a Bitcoin-based project</h2>
          <p className="mt-3 text-mb-cream/75">
            During the cycle, each representative designs and executes a project that drives
            education and adoption locally.
          </p>
        </div>

        <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Step 3</div>
          <h2 className="mt-3 text-lg font-semibold">Impact recognition</h2>
          <p className="mt-3 text-mb-cream/75">
            The strongest projects earn global visibility, support, and recognition — designed to
            help scale impact beyond one community.
          </p>

          <p className="mt-4 text-sm text-mb-cream/60">
            Note: Any awards or funding details may vary by year and partner support.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-8">
          <h2 className="text-xl font-semibold">What kinds of projects?</h2>
          <p className="mt-3 text-mb-cream/75">
            Projects are practical, local, and community-first. They can be small to start — what
            matters is clarity, execution, and measurable impact.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-mb-cream/75">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
              <span>Beginner workshops or meetups</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
              <span>Local-language Bitcoin education content</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
              <span>Youth or women-focused learning circles</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
              <span>Small business education initiatives</span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-8">
          <h2 className="text-xl font-semibold">Do I need to know Bitcoin already?</h2>
          <p className="mt-3 text-mb-cream/75">
            No. We care most about your leadership, your voice, and your willingness to learn.
            Miss Bitcoin exists to educate — we’ll support you as you grow.
          </p>

          <div className="mt-6 rounded-xl border border-mb-cream/10 bg-mb-dark/60 p-5">
            <p className="text-sm font-semibold text-mb-cream">Best applicants are:</p>
            <p className="mt-2 text-sm text-mb-cream/70">
              Curious • Coachable • Confident • Mission-driven • Ready to execute
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link className="text-sm text-mb-cream/80 hover:text-mb-cream" href="/faq">
              Read the FAQ →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}