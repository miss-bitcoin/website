import "./globals.css";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Miss Bitcoin",
  description: "More than a beauty pageant. A global movement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-mb-dark text-mb-cream">
        <SiteHeader />

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