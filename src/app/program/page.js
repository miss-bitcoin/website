export default function ProgramPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">How it works</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Each year, women from countries around the world participate, creating dozens of impactful Bitcoin projects and
        forming a powerful global network of leaders.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-mb-cream/10 bg-black/10 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Step 1</div>
          <h2 className="mt-3 text-lg font-semibold">Apply & represent your country</h2>
          <p className="mt-3 text-mb-cream/75">
            Selected candidates become Miss Bitcoin representatives for their country.
          </p>
        </div>

        <div className="rounded-2xl border border-mb-cream/10 bg-black/10 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Step 2</div>
          <h2 className="mt-3 text-lg font-semibold">Build a Bitcoin-based project</h2>
          <p className="mt-3 text-mb-cream/75">
            During the cycle, each representative designs and executes a project that drives education and adoption.
          </p>
        </div>

        <div className="rounded-2xl border border-mb-cream/10 bg-black/10 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Step 3</div>
          <h2 className="mt-3 text-lg font-semibold">Impact award: 1 Bitcoin</h2>
          <p className="mt-3 text-mb-cream/75">
            The project with the greatest real-world impact is awarded 1 Bitcoin to expand and scale.
          </p>
        </div>
      </div>
    </main>
  );
}