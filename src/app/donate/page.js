"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  const [copied, setCopied] = useState(null); // "btc" | "ln" | null

  // Real values (replace when ready)
  const BTC_ADDRESS = "bc1q47nltav0khw37se8pa9vurj6mysam05de4gw3y";
  const LIGHTNING_HANDLE = "missbitcoin@walletofsatoshi.com";

  // Placeholder Stripe link for now
  const STRIPE_LINK = "https://buy.stripe.com/YOUR_STRIPE_PAYMENT_LINK";

  async function copyText(value, key) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard blocked; user can manually copy
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Donate</h1>
      <p className="mt-4 max-w-3xl text-mb-cream/75">
        Donations support education, travel, local community projects, and the growth of women-led Bitcoin initiatives.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* BTC FIRST */}
        <section className="rounded-2xl border border-mb-gold/25 bg-mb-dark/60 p-8 shadow-[0_0_0_1px_rgba(212,175,55,0.12)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-mb-cream/60">Option 1</div>
              <h2 className="mt-3 text-xl font-semibold">Donate with Bitcoin</h2>
              <p className="mt-3 text-mb-cream/75">
                Choose on-chain (universal) or Lightning (fast + low-fee).
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* On-chain */}
            <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.08)]">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-widest text-mb-cream/50">Bitcoin (On-chain)</div>
                <span className="rounded-full border border-mb-gold/20 px-2 py-0.5 text-[10px] text-mb-cream/70">
                  Universal
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-mb-cream/10 bg-white">
                <Image
                  src="/donate-btc-onchain.png"
                  alt="Bitcoin on-chain donation QR"
                  width={900}
                  height={900}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <div className="mt-4">
                <div className="text-xs uppercase tracking-widest text-mb-cream/50">Address</div>
                <div className="mt-2 break-all font-mono text-sm text-mb-cream/85">
                  {BTC_ADDRESS}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => copyText(BTC_ADDRESS, "btc")}
                    className="rounded-full border border-mb-gold/40 px-4 py-2 text-sm text-mb-cream hover:border-mb-gold"
                  >
                    {copied === "btc" ? "Copied!" : "Copy address"}
                  </button>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="rounded-full border border-mb-cream/10 px-4 py-2 text-sm text-mb-cream/80 hover:text-mb-cream hover:border-mb-cream/20"
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>

            {/* Lightning */}
            <div className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.08)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-mb-cream/50">
                  <span className="text-mb-gold/90">⚡</span> Lightning
                </div>
                <span className="rounded-full border border-mb-gold/20 px-2 py-0.5 text-[10px] text-mb-cream/70">
                  Fast
                </span>
              </div>

              <p className="mt-3 text-sm text-mb-cream/70">
                Great for conference QR scans and smaller tips.
              </p>

              <div className="mt-4 overflow-hidden rounded-2xl border border-mb-cream/10 bg-white">
                <Image
                  src="/donate-btc-lightning.png"
                  alt="Lightning donation QR"
                  width={900}
                  height={900}
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs uppercase tracking-widest text-mb-cream/50">Lightning handle</div>
                <div className="mt-2 break-all font-mono text-sm text-mb-cream/85">
                  {LIGHTNING_HANDLE}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => copyText(LIGHTNING_HANDLE, "ln")}
                    className="rounded-full border border-mb-gold/40 px-4 py-2 text-sm text-mb-cream hover:border-mb-gold"
                  >
                    {copied === "ln" ? "Copied!" : "Copy Lightning"}
                  </button>
                </div>

                <p className="mt-3 text-xs text-mb-cream/55">
                  If your wallet doesn’t support Lightning, use on-chain instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stripe SECOND */}
        <section className="rounded-2xl border border-mb-cream/10 bg-mb-dark/60 p-8">
          <div className="text-xs uppercase tracking-widest text-mb-cream/60">Option 2</div>
          <h2 className="mt-3 text-xl font-semibold">Donate with card (Stripe)</h2>
          <p className="mt-3 text-mb-cream/75">
            Credit/debit card or supported wallet options (Apple Pay / Google Pay depending on device).
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
            <p className="mt-2 text-xs text-mb-cream/55">Opens Stripe in a new tab.</p>
          </div>

          <div className="mt-6 rounded-2xl border border-mb-gold/15 bg-mb-dark/50 p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.10)]">
            <h3 className="text-sm font-semibold text-mb-cream/90">Want to sponsor instead?</h3>
            <p className="mt-2 text-sm text-mb-cream/70">
              Check the{" "}
              <Link className="text-mb-cream/85 hover:text-mb-cream underline decoration-mb-gold/40" href="/sponsor">
                Sponsorship
              </Link>{" "}
              page for packages.
            </p>
          </div>
        </section>
      </div>

      {/* What donations do */}
      <section className="mt-10 rounded-2xl border border-mb-gold/15 bg-mb-dark/50 p-8 shadow-[0_0_0_1px_rgba(212,175,55,0.08)]">
        <h2 className="text-xl font-semibold">What your donation supports</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Education", desc: "Workshops, content, and community learning." },
            { title: "Local projects", desc: "Funding real initiatives in each country." },
            { title: "Growth", desc: "Operations, tools, and program expansion." },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-mb-cream/10 bg-mb-dark/60 p-6 shadow-[0_0_0_1px_rgba(212,175,55,0.06)]"
            >
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