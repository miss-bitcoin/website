import Link from "next/link";

const APPLY_URL = process.env.NEXT_PUBLIC_TYPEFORM_APPLY_URL;

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Apply to Miss Bitcoin</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Miss Bitcoin is for women who want to build real Bitcoin adoption in their communities.
        If you’re ready to lead with purpose and execute a real-world project, we’d love to hear from you.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-8">
          <h2 className="text-xl font-semibold">What you’ll do</h2>
          <ul className="mt-4 grid gap-3 text-mb-cream/80">
            <li>• Represent your country</li>
            <li>• Build and execute a Bitcoin-focused project</li>
            <li>• Share impact and progress publicly</li>
            <li>• Compete for the annual 1 BTC award</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {APPLY_URL ? (
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-mb-cream px-6 py-3 text-center text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
              >
                Open application form
              </a>
            ) : (
              <div className="rounded-xl border border-mb-gold/20 bg-black/10 p-4 text-sm text-mb-cream/70">
                Set <code className="text-mb-cream">NEXT_PUBLIC_TYPEFORM_APPLY_URL</code> in <code>.env.local</code>
              </div>
            )}

            <Link
              href="/faq"
              className="rounded-full border border-mb-gold/40 px-6 py-3 text-center text-sm font-medium text-mb-cream hover:border-mb-gold"
            >
              Read the FAQ
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-mb-cream/10 bg-black/10 p-8">
          <h2 className="text-xl font-semibold">Prefer to apply here?</h2>
          <p className="mt-4 text-mb-cream/75">
            You can embed the Typeform directly on this page once your form is finalized.
            For now, we’ll route people to the official application link.
          </p>

          {APPLY_URL && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-mb-cream/10">
              <iframe
                title="Miss Bitcoin Application"
                src={APPLY_URL}
                className="h-[640px] w-full"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}