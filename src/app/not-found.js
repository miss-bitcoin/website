import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-10">
        <div className="text-xs uppercase tracking-widest text-mb-cream/60">404</div>
        <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-mb-cream/75">
          The page you’re looking for doesn’t exist — or it may have moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
          >
            Go to Home
          </Link>
          <Link
            href="/apply"
            className="inline-flex rounded-full border border-mb-gold/40 px-6 py-3 text-sm font-medium text-mb-cream hover:border-mb-gold"
          >
            Apply
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-mb-cream/10 px-6 py-3 text-sm font-medium text-mb-cream/85 hover:text-mb-cream hover:border-mb-cream/20"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}