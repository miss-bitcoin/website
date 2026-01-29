"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;

    setStatus({ state: "loading", message: "" });

    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");

      if (formEl && typeof formEl.reset === "function") formEl.reset();
      setStatus({ state: "success", message: "Thanks — we’ll follow up shortly." });
    } catch (err) {
      setStatus({
        state: "error",
        message: err?.message || "Failed to submit.",
      });
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left: context + trust */}
        <section>
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-4 text-mb-cream/75">
            Investors, sponsors, press, or partners — send us a note and we’ll reply soon.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Sponsors", desc: "Partner with Miss Bitcoin to expand global education." },
              { title: "Investors", desc: "Support the program, funding, and long-term growth." },
              { title: "Press", desc: "Stories, interviews, podcasts, speaking requests." },
              { title: "Partnerships", desc: "Bitcoin communities, NGOs, education orgs, brands." },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-5"
              >
                <h3 className="text-sm font-semibold text-mb-cream">{card.title}</h3>
                <p className="mt-2 text-sm text-mb-cream/70">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
            <h2 className="text-lg font-semibold">Want to support the mission?</h2>
            <p className="mt-2 text-sm text-mb-cream/70">
              Donations help fund education, travel, local projects, and the growth of women-led Bitcoin initiatives.
            </p>
            <div className="mt-4">
              <Link
                href="/donate"
                className="inline-flex rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
              >
                Donate
              </Link>
            </div>
          </div>

          <p className="mt-8 text-sm text-mb-cream/60">
            If none of these options fit, email us directly at{" "}
            <a className="text-mb-cream/80 hover:text-mb-cream" href="mailto:contact@miss-bitcoin.com">
              contact@miss-bitcoin.com
            </a>
            .
          </p>
        </section>

        {/* Right: the form (same fields) */}
        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
          <h2 className="text-xl font-semibold">Send a message</h2>
          <p className="mt-2 text-sm text-mb-cream/70">
            Fill this out and we’ll route it to the right person.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            {/* Honeypot: bots will fill this, humans won't see it */}
            <input name="company" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-mb-cream/70">Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-mb-cream/70">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-mb-cream/70">Category</label>
              <select
                name="category"
                required
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
                defaultValue="Investor"
              >
                <option>Investor</option>
                <option>Sponsor</option>
                <option>Partnerships</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-mb-cream/70">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
                placeholder="Tell us what you’re reaching out about..."
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="w-full rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95 disabled:opacity-60 sm:w-auto"
            >
              {status.state === "loading" ? "Sending..." : "Send"}
            </button>

            {status.state !== "idle" && (
              <p
                className={
                  "text-sm " +
                  (status.state === "success"
                    ? "text-mb-cream/80"
                    : status.state === "error"
                    ? "text-red-300"
                    : "text-mb-cream/70")
                }
              >
                {status.message}
              </p>
            )}

          </form>
        </section>
      </div>
    </main>
  );
}