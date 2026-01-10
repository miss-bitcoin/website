import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Miss Bitcoin",
  description: "More than a beauty pageant. A global movement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-mb-dark text-mb-cream">
        <header className="sticky top-0 z-50 border-b-4 border-mb-gold bg-mb-dark/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center opacity-95 hover:opacity-100 transition">
              <Image
                src="/logo-miss-bitcoin.png"
                alt="Miss Bitcoin"
                width={220}
                height={64}
                priority
                className="h-auto w-[280px]"
              />
            </Link>

            <nav className="hidden gap-6 text-sm text-mb-cream/70 md:flex">
              <Link className="hover:text-mb-cream" href="/about">About</Link>
              <Link className="hover:text-mb-cream" href="/program">Program</Link>
              <Link className="hover:text-mb-cream" href="/faq">FAQ</Link>
              <Link className="hover:text-mb-cream" href="/contact">Contact</Link>
            </nav>

            <Link
              href="/apply"
              className="rounded-full border border-mb-gold/40 px-4 py-2 text-sm text-mb-cream hover:border-mb-gold"
            >
              Join
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-mb-cream/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-mb-cream/60">
            © {new Date().getFullYear()} Miss Bitcoin. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}