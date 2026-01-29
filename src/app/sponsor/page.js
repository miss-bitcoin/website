import Link from "next/link";

export default function SponsorPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold">Sponsorship Opportunities</h1>
        <p className="mt-4 text-lg text-mb-cream/75">
          Miss Bitcoin offers a unique opportunity for brands to align with
          financial sovereignty, innovation, and global Bitcoin adoption —
          while gaining meaningful visibility at an international event.
        </p>
        <p className="mt-4 text-mb-cream/75">
          Our sponsors support education, decentralization, and women-led
          impact projects around the world.
        </p>
      </section>

      {/* Tiers */}
      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {/* WHALE */}
        <div className="rounded-2xl border border-mb-gold/40 bg-black/20 p-8">
          <div className="text-sm uppercase tracking-widest text-mb-gold">
            🐋 Whale
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Main Sponsor</h2>
          <p className="mt-3 text-mb-cream/75">
            Maximum visibility and event-wide presence.
          </p>

          <ul className="mt-6 space-y-3 text-mb-cream/80">
            <li>• Top-tier logo placement on the Miss Bitcoin website</li>
            <li>• Largest logo on all event banners and digital screens</li>
            <li>• Verbal mentions throughout the competition</li>
            <li>• 5 dedicated social media posts</li>
            <li>• Inclusion in official press releases</li>
            <li>• Opportunity to present a special award on stage</li>
            <li>• 8–10 VIP passes</li>
          </ul>

          <div className="mt-6 font-medium text-mb-gold">
            USD 25,000 – 50,000
          </div>
        </div>

        {/* SHARK */}
        <div className="rounded-2xl border border-mb-cream/20 bg-black/10 p-8">
          <div className="text-sm uppercase tracking-widest text-mb-cream/70">
            🦈 Shark
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Premium Sponsor</h2>
          <p className="mt-3 text-mb-cream/75">
            High visibility without main sponsor exclusivity.
          </p>

          <ul className="mt-6 space-y-3 text-mb-cream/80">
            <li>• Priority logo placement on the Miss Bitcoin website</li>
            <li>• Medium-size logo on event banners</li>
            <li>• 3 social media mentions</li>
            <li>• Verbal mention during the competition</li>
            <li>• 4–6 VIP passes</li>
          </ul>

          <div className="mt-6 font-medium text-mb-cream">
            USD 10,000 – 20,000
          </div>
        </div>

        {/* DOLPHIN */}
        <div className="rounded-2xl border border-mb-cream/10 bg-black/5 p-8">
          <div className="text-sm uppercase tracking-widest text-mb-cream/60">
            🐬 Dolphin
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Supporting Sponsor</h2>
          <p className="mt-3 text-mb-cream/75">
            Brand exposure with a lower investment.
          </p>

          <ul className="mt-6 space-y-3 text-mb-cream/80">
            <li>• Logo in the sponsors section on the website</li>
            <li>• Small logo on event banners</li>
            <li>• 1 social media mention</li>
            <li>• 2 general admission passes</li>
          </ul>

          <div className="mt-6 font-medium text-mb-cream">
            USD 3,000 – 8,000
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 max-w-3xl rounded-2xl border border-mb-gold/20 bg-black/20 p-10">
        <h3 className="text-2xl font-semibold">Interested in sponsoring?</h3>
        <p className="mt-4 text-mb-cream/75">
          Sponsorship packages can be customized based on your brand,
          objectives, and level of involvement.
        </p>
        <p className="mt-2 text-mb-cream/75">
          To start a conversation, reach out to us directly.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-full border border-mb-gold px-6 py-3 text-sm font-medium text-mb-cream hover:bg-mb-gold hover:text-mb-dark transition"
        >
          Contact us about sponsorship
        </Link>
      </section>
    </main>
  );
}