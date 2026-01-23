"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/apply", label: "Apply" },
  { href: "/founder", label: "Founder" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Optional: close on Escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-mb-gold/60 bg-mb-dark/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center opacity-95 hover:opacity-100 transition">
          <Image
            src="/logo-miss-bitcoin-cropped.png"
            alt="Miss Bitcoin"
            width={260}
            height={70}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-mb-cream/70 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} className="hover:text-mb-cream" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Join + Hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/apply"
            className="rounded-full border border-mb-gold/40 px-4 py-1.5 text-sm text-mb-cream hover:border-mb-gold"
          >
            Join
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-mb-gold/25 text-mb-cream/80 hover:text-mb-cream hover:border-mb-gold/40"
          >
            {/* Icon */}
            <span className="sr-only">Menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-90"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay + panel */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Panel */}
          <div className="fixed right-3 top-3 z-50 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-mb-gold/20 bg-mb-dark/95 shadow-xl">
            <div className="flex items-center justify-between border-b border-mb-cream/10 px-4 py-3">
              <span className="text-sm font-semibold text-mb-cream/90">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mb-gold/25 text-mb-cream/80 hover:text-mb-cream hover:border-mb-gold/40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-2 py-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-mb-cream/85 hover:bg-mb-cream/5 hover:text-mb-cream"
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-2 pb-2 pt-1">
                <Link
                  href="/apply"
                  className="mt-2 flex w-full items-center justify-center rounded-xl bg-mb-cream px-4 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
                >
                  Apply / Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}