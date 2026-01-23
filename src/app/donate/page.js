"use client";

import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  // Placeholder BTC address for now
  const BTC_ADDRESS = "bc1qYOUR_BITCOIN_ADDRESS_HERE";
  // Placeholder Stripe link for now
  const STRIPE_LINK = "https://buy.stripe.com/YOUR_STRIPE_PAYMENT_LINK";

  async function copyBtc() {
    try {
      await navigator.clipboard.writeText(BTC_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // If clipboard blocked, do nothing (user can manually copy)
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Donate</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Donations help fund education, travel, local community projects, and the growth of women-led Bitcoin initiatives.
      </p>

      {/* Top CTA */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/apply"
          className="inline-flex rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
        >
          Apply to represent your country
        </Link>
        <a
          href="mailto:contact@miss-bitcoin.com"
          className="inline-flex rounded-full border border-mb-gold/40 px-6 py-3 text-sm font-medium text-mb-cream hover:border-mb-gold"
        >
          Contact us
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Stripe */}
        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Option 1</div>
          <h2 className="mt-3 text-xl font-semibold">Donate with card (Stripe)</h2>
          <p className="mt-3 text-mb-cream/75">
            Use credit/debit card or supported wallet options (Apple Pay / Google Pay depending on device).
          </p>

          <div className="mt-6 rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-5">
            <p className="text-sm text-mb-cream/70">
              <span className="font-semibold text-mb-cream/85">Placeholder:</span>{" "}
              Replace the Stripe link in this page when you’re ready.
            </p>
          </div>

          <div className="mt-6">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-mb-cream px-4 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
            >
              Donate via Stripe
            </a>
            <p className="mt-2 text-xs text-mb-cream/55">
              This will open Stripe in a new tab.
            </p>
          </div>
        </section>

        {/* BTC */}
        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Option 2</div>
          <h2 className="mt-3 text-xl font-semibold">Donate with Bitcoin</h2>
          <p className="mt-3 text-mb-cream/75">
            Send Bitcoin directly to the address below. (We’ll add a QR code here once the final address is set.)
          </p>

          <div className="mt-6 rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-5">
            <div className="text-xs uppercase tracking-widest text-mb-cream/50">Bitcoin Address</div>
            <div className="mt-2 break-all font-mono text-sm text-mb-cream/85">{BTC_ADDRESS}</div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyBtc}
                className="rounded-full border border-mb-gold/40 px-4 py-2 text-sm text-mb-cream hover:border-mb-gold"
              >
                {copied ? "Copied!" : "Copy address"}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full border border-mb-cream/10 px-4 py-2 text-sm text-mb-cream/80 hover:text-mb-cream hover:border-mb-cream/20"
              >
                Print
              </button>
            </div>

            <p className="mt-3 text-xs text-mb-cream/55">
              Placeholder address — replace before sharing publicly.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-mb-cream/10 bg-black/10 p-5">
            <h3 className="text-sm font-semibold text-mb-cream/90">Add a QR code later</h3>
            <p className="mt-2 text-sm text-mb-cream/70">
              When you have the final BTC address (or Lightning), we can generate a QR SVG/PNG and drop it in
              <span className="font-mono"> /public </span>
              then render it here.
            </p>
          </div>
        </section>
      </div>

      {/* What donations do */}
      <section className="mt-10 rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-8">
        <h2 className="text-xl font-semibold">What your donation supports</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Education", desc: "Workshops, content, and community learning." },
            { title: "Local projects", desc: "Funding real initiatives in each country." },
            { title: "Growth", desc: "Operations, tools, and program expansion." },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-mb-cream/10 bg-mb-dark/60 p-6">
              <div className="text-sm font-semibold text-mb-cream">{x.title}</div>
              <p className="mt-2 text-sm text-mb-cream/70">{x.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-mb-cream/60">
          Questions about sponsorships or larger donations? Email{" "}
          <a className="text-mb-cream/80 hover:text-mb-cream" href="mailto:contact@miss-bitcoin.com">
            contact@miss-bitcoin.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}