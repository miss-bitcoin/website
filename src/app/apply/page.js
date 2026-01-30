"use client";

import { useState } from "react";

function normalizeUrl(raw) {
  const s = String(raw || "").trim();
  if (!s) return "";
  // If user pastes drive/youtube without protocol, make it clickable
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

export default function ApplyPage() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;

    setStatus({ state: "loading", message: "" });

    const form = new FormData(formEl);

    // Normalize URLs so users don't have to type https://
    for (const key of ["fullBodyPhotoLink", "facePhotoLink", "introVideoLink"]) {
      const v = form.get(key);
      form.set(key, normalizeUrl(v));
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: form,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      if (formEl && typeof formEl.reset === "function") formEl.reset();

      setStatus({ state: "success", message: "Application submitted! We’ll be in touch." });
    } catch (err) {
      setStatus({
        state: "error",
        message: err?.message || "Failed to submit.",
      });
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Apply to be the next Miss Bitcoin</h1>
      <p className="mt-4 text-mb-cream/75">
        There are no right or wrong answers — we value honesty, vision, and impact.
      </p>

      <form onSubmit={onSubmit} className="mt-10 space-y-8">
        {/* Honeypot */}
        <input name="company" tabIndex={-1} autoComplete="off" className="hidden" />

        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-mb-cream/70">First Name *</label>
              <input
                name="firstName"
                required
                placeholder="First name"
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
              />
            </div>
            <div>
              <label className="text-sm text-mb-cream/70">Last Name *</label>
              <input
                name="lastName"
                required
                placeholder="Last name"
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-mb-cream/70">Nationality *</label>
              <input
                name="nationality"
                required
                placeholder="Nationality"
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
              />
            </div>
            <div>
              <label className="text-sm text-mb-cream/70">Age *</label>
              <input
                name="age"
                type="number"
                min="1"
                step="1"
                required
                placeholder="Age"
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-mb-cream/70">Country of Residence *</label>
            <input
              name="countryResidence"
              required
              placeholder="Country of residence"
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm text-mb-cream/70">Email *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm text-mb-cream/70">Highest Level of Education Completed *</label>
            <input
              name="education"
              required
              placeholder="e.g., High school, Bachelor’s, Master’s..."
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm text-mb-cream/70">Field of Study / Academic Background *</label>
            <input
              name="fieldOfStudy"
              required
              placeholder="Your academic background"
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm text-mb-cream/70">Current Profession or Occupation *</label>
            <input
              name="profession"
              required
              placeholder="Your current profession"
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>
        </section>

        {/* Photo links */}
        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
          <h2 className="text-xl font-semibold">Photo Submission</h2>
          <p className="mt-2 text-sm text-mb-cream/70">
            Please share links (not uploads). We recommend Google Drive, Dropbox, iCloud, or OneDrive.
          </p>

          <div className="mt-4 rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-4 text-xs text-mb-cream/60">
            Tip: If using Google Drive, set access to <span className="text-mb-cream/80">“Anyone with the link can view”</span>.
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-mb-cream/70">Full-body photo link *</label>
              <input
                name="fullBodyPhotoLink"
                required
                placeholder="drive.google.com/..."
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
              />
            </div>

            <div>
              <label className="text-sm text-mb-cream/70">Front face photo link *</label>
              <input
                name="facePhotoLink"
                required
                placeholder="drive.google.com/..."
                className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
              />
            </div>
          </div>
        </section>

        {/* Video link */}
        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
          <h2 className="text-xl font-semibold">Video Submission</h2>
          <p className="mt-2 text-sm text-mb-cream/70">
            Please share a link to a short video answering: “Why do you want to become the next Miss Bitcoin?”
          </p>

          <div className="mt-4 rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-4 text-xs text-mb-cream/60">
            You can use YouTube (unlisted), Google Drive, Dropbox, Loom, or any platform where we can view the video.
          </div>

          <div className="mt-5">
            <label className="text-sm text-mb-cream/70">Intro video link *</label>
            <input
              name="introVideoLink"
              required
              placeholder="youtube.com/... or drive.google.com/..."
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
          <h2 className="text-xl font-semibold">Video Submission</h2>
          <p className="mt-2 text-sm text-mb-cream/70">
            Please share a link to a short video answering: “Why do you want to become the next Miss Bitcoin?”
          </p>

          <div className="mt-4 rounded-2xl border border-mb-gold/15 bg-black/10 p-4">
            <p className="text-xs text-mb-cream/65">
              You can use YouTube (unlisted), Google Drive, Dropbox, Loom, or any platform where we can view the video.
            </p>
          </div>

          <div className="mt-5">
            <label className="text-sm text-mb-cream/70">Intro video link *</label>
            <input
              name="introVideoLink"
              type="url"
              required
              placeholder="https://youtube.com/... or https://drive.google.com/..."
              className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
          <h2 className="text-xl font-semibold">Bitcoin Questionnaire</h2>
          <p className="mt-1 text-sm text-mb-cream/60">
            (If you are not into Bitcoin or don&apos;t know how to answer, just answer the best way you can.)
          </p>

          {[
            "What does Bitcoin mean to you?",
            "When did you first learn about Bitcoin?",
            "Tell us your story: how did you get involved with Bitcoin?",
            "If you were selected as the representative of your country, what would you do to help Bitcoin adoption locally?",
            "If you had access to an unlimited amount of Bitcoin, what would you do with it?",
            "What problem in your country do you believe Bitcoin can help solve?",
            "How would you educate young people about Bitcoin?",
            "Have you participated in any social, educational, or community projects before? If yes, please describe.",
            "What makes you different from other candidates?",
            "What values do you believe a Miss Bitcoin representative should embody?",
          ].map((label, idx) => {
            const n = idx + 1;
            return (
              <div className="mt-5" key={n}>
                <label className="text-sm text-mb-cream/70">
                  {n}. {label} *
                </label>
                <textarea
                  name={`q${n}`}
                  rows={4}
                  required
                  className="mt-2 w-full rounded-xl border border-mb-cream/10 bg-mb-dark/60 px-4 py-3 text-mb-cream outline-none focus:border-mb-gold/60"
                />
              </div>
            );
          })}
        </section>

        <button
          type="submit"
          disabled={status.state === "loading"}
          className="rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95 disabled:opacity-60"
        >
          {status.state === "loading" ? "Submitting..." : "Submit application"}
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
    </main>
  );
}