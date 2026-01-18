"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();

    // capture the form immediately so we can safely reset later
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

      // only reset if it's really a form element
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
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-mb-cream/75">
          Investors, sponsors, press, or partners — send us a note and we’ll reply soon.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          {/* Honeypot: bots will fill this, humans won't see it */}
          <input name="company" tabIndex={-1} autoComplete="off" className="hidden"/>

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
              <option>Franchise</option>
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
              className="rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95 disabled:opacity-60"
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

        <p className="mt-8 text-center text-sm text-mb-cream/60">
          If none of the options above fit your inquiry, feel free to email us directly at{" "}
          <a
              href="mailto:contact@miss-bitcoin.com"
              className="text-mb-cream underline hover:text-mb-gold"
          >
            contact@miss-bitcoin.com
          </a>
          .
        </p>
      </main>
  );
}