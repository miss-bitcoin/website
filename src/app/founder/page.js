import Image from "next/image";

export default function FounderPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Founder</h1>
      <p className="mt-4 text-mb-cream/75">
        A note from Alejandra Guajardo, creator of Miss Bitcoin.
      </p>

      {/* Letter Card */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-mb-gold/15 bg-mb-dark/60">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Left: Image */}
          <div className="p-6 md:p-8">
            <div className="relative overflow-hidden rounded-3xl border border-mb-gold/20">
              <Image
                src="/Alejandra-Guajardo-Miss-Bitcoin-scaled.jpeg"
                alt="Alejandra Guajardo, Founder of Miss Bitcoin"
                width={900}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Letter */}
          <div className="p-6 md:p-10">
            <div className="space-y-6">
              <p className="text-lg text-mb-cream/85">
                I created the Miss Bitcoin pageant because I believe in{" "}
                <span className="font-semibold text-mb-cream">
                  freedom, education, and decentralization
                </span>{" "}
                — and because women must be part of that conversation.
              </p>

              <p className="text-mb-cream/85">
                Bitcoin is more than technology. It represents financial freedom, sovereignty, and the
                possibility of living outside systems designed to limit us. My mission is to help more
                people understand that freedom is possible — the same freedom I have chosen for my own
                life.
              </p>

              <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-mb-gold/60 to-transparent" />

              <p className="text-mb-cream/85">
                During my time at Miss Universe, I learned something powerful: when you represent a
                title, people listen. They watch. Your voice carries weight. And if you have something
                meaningful to contribute to the world, that platform becomes a responsibility.
              </p>

              <p className="text-mb-cream/85">
                That experience showed me that visibility can be used to plant ideas, open minds, and
                inspire change — even if it starts with a single seed.
              </p>

              <blockquote className="rounded-2xl border border-mb-cream/10 bg-mb-dark/50 p-6">
                <p className="text-lg font-semibold text-mb-cream">
                  “Real change is not possible if half of the population is excluded.”
                </p>
                <p className="mt-2 text-sm text-mb-cream/70">
                  If women are not part of Bitcoin, true decentralization cannot exist.
                </p>
              </blockquote>

              <p className="text-mb-cream/85">
                That is why I created the Miss Bitcoin pageant: to bring more women into Bitcoin,
                promote decentralization, and educate more people about financial freedom.
              </p>

              <p className="text-mb-cream/85">
                I believe that if we unite, educate, and empower women, we can create a freer future —
                for ourselves and for the generations to come.
              </p>

              <div className="pt-4">
                <a
                  href="/apply"
                  className="inline-flex rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
                >
                  Apply to represent your country
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}