// src/app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-mb-gold/20">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Miss Bitcoin
              <span className="block text-mb-cream/85">
                More than a pageant. A global platform for financial freedom.
              </span>
            </h1>

            <p className="mt-6 text-lg text-mb-cream/75">
              Miss Bitcoin selects women to represent their countries and lead a Bitcoin-based
              education or community project — supported by mentorship, visibility, and a global
              network.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
              >
                Apply to represent your country
              </Link>

              <div className="flex items-center gap-4 text-sm">
                <Link className="text-mb-cream/80 hover:text-mb-cream" href="/program">
                  How it works →
                </Link>
                <Link className="text-mb-cream/80 hover:text-mb-cream" href="/faq">
                  FAQ →
                </Link>
              </div>
            </div>

            <p className="mt-6 text-sm text-mb-cream/60">
              Not a Bitcoin expert? That’s okay — curiosity and leadership matter more. We teach you
              what you need to know.
            </p>

            <p className="mt-2 text-xs text-mb-cream/55">
              Eligibility: women ages <span className="text-mb-cream/80 font-medium">18–45</span>.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-semibold">What is Miss Bitcoin?</h2>
              <p className="mt-4 text-mb-cream/75">
                Miss Bitcoin is an international initiative built around freedom, education, and
                decentralization. We select women who want to represent their countries and create
                real-world impact by bringing Bitcoin education and opportunity to their communities.
              </p>

              <ul className="mt-6 space-y-3 text-mb-cream/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    <span className="text-mb-cream">Not a traditional pageant</span> — leadership,
                    purpose, and storytelling matter most.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    Built around a <span className="text-mb-cream">community project</span> you design and execute.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>A global platform to amplify women’s voices in Bitcoin and decentralization.</span>
                </li>
              </ul>
            {/* What we look for */}
            <div className="mt-8 rounded-2xl border border-mb-gold/15 bg-mb-dark/50 p-6">
              <h3 className="text-lg font-semibold">What we look for</h3>
              <p className="mt-2 text-sm text-mb-cream/70">
                A modern representative at the intersection of presence, Bitcoin curiosity, and real-world impact.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "Bitcoin",
                    desc: "Curiosity and alignment with the mission — you don’t need to be technical to start.",
                  },
                  {
                    title: "Impact",
                    desc: "Leadership and execution — building a project that helps your community.",
                  },
                  {
                    title: "Appearance",
                    desc: "Confidence, professionalism, and taking care of yourself — because you’ll represent your country publicly.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-mb-cream/10 bg-mb-dark/60 p-4"
                  >
                    <div className="text-sm font-semibold text-mb-cream">{x.title}</div>
                    <p className="mt-2 text-xs text-mb-cream/65">{x.desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-mb-cream/55">
                Beauty and physical appearance are a component — but not the primary one. We prioritize purpose, voice, and impact.
              </p>
            </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex rounded-full border border-mb-gold/30 px-5 py-2.5 text-sm text-mb-cream/85 hover:border-mb-gold/50 hover:text-mb-cream"
                >
                  Read the full story
                </Link>
              </div>
            </div>

            {/* Quick cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/apply"
                className="group rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6 transition hover:border-mb-gold/40 hover:bg-mb-dark/70 focus:outline-none focus:ring-2 focus:ring-mb-gold/40"
              >
                <h3 className="text-lg font-semibold group-hover:text-mb-cream">Applicants</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Women ready to represent their country, learn fast, and lead a meaningful project.
                </p>
                <p className="mt-4 text-xs text-mb-cream/60 underline decoration-mb-gold/40 underline-offset-4">
                  Apply now →
                </p>
              </Link>

              <Link
                href="/contact"
                className="group rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6 transition hover:border-mb-gold/40 hover:bg-mb-dark/70 focus:outline-none focus:ring-2 focus:ring-mb-gold/40"
              >
                <h3 className="text-lg font-semibold group-hover:text-mb-cream">Sponsors / Partners</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Organizations aligned with education, empowerment, and responsible adoption.
                </p>
                <p className="mt-4 text-xs text-mb-cream/60 underline decoration-mb-gold/40 underline-offset-4">
                  Get in touch →
                </p>
              </Link>

              <Link
                href="/contact"
                className="group rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6 transition hover:border-mb-gold/40 hover:bg-mb-dark/70 focus:outline-none focus:ring-2 focus:ring-mb-gold/40"
              >
                <h3 className="text-lg font-semibold group-hover:text-mb-cream">Press</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Stories at the intersection of women’s leadership, freedom, and Bitcoin.
                </p>
                <p className="mt-4 text-xs text-mb-cream/60 underline decoration-mb-gold/40 underline-offset-4">
                  Contact us →
                </p>
              </Link>

              <Link
                href="/contact"
                className="group rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6 transition hover:border-mb-gold/40 hover:bg-mb-dark/70 focus:outline-none focus:ring-2 focus:ring-mb-gold/40"
              >
                <h3 className="text-lg font-semibold group-hover:text-mb-cream">Community</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Builders and supporters helping deliver education and impact worldwide.
                </p>
                <p className="mt-4 text-xs text-mb-cream/60 underline decoration-mb-gold/40 underline-offset-4">
                  Join the community →
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WIN / WHAT YOU DO */}
      <section className="border-y border-mb-gold/20">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
              <h2 className="text-2xl font-semibold">What does a Miss Bitcoin winner receive?</h2>

              <ul className="mt-6 space-y-3 text-mb-cream/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>National / international recognition</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>Education + mentorship in Bitcoin, storytelling, and community-building</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>Global visibility through the Miss Bitcoin platform and partner events</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>Support to design and execute a real Bitcoin-based community project</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>
                    <span className="text-mb-cream">Up to 1 BTC in project funding</span>{" "}
                    awarded to the highest-impact initiative
                    <span className="block mt-1 text-xs text-mb-cream/60">
                      The funding is directed to the winning project’s execution and growth — not a personal cash gift.
                    </span>
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-mb-cream/60">
                Exact support details evolve by country and sponsor partners, but the mission stays constant:
                education + empowerment + impact.
              </p>
            </div>

            <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
              <h2 className="text-2xl font-semibold">What will you actually do?</h2>

              <p className="mt-4 text-mb-cream/75">
                As a Miss Bitcoin representative, you’ll propose a simple, meaningful idea to help people in your
                country better understand Bitcoin and financial freedom — then bring it to life with guidance
                and support.
              </p>

              <p className="mt-4 text-mb-cream/75">
                <span className="text-mb-cream">You do not need to be a Bitcoin expert.</span> Many participants
                start with little or no technical background. What matters most is your curiosity, leadership,
                and ability to communicate and connect with people.
              </p>

              <p className="mt-4 text-mb-cream/75">
                Projects can take many forms: educational workshops, school sessions, women’s learning circles,
                small business education, community meetups, or beginner-friendly resources in your local
                language. You’ll receive mentorship to help shape your idea, learn the fundamentals of Bitcoin,
                and execute your project effectively.
              </p>

              <p className="mt-4 text-sm text-mb-cream/60">
                The focus is impact — creating something real, accessible, and useful for your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD APPLY */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-semibold">Who should apply?</h2>
              <p className="mt-4 text-mb-cream/75">
                We’re looking for women who want to represent their country with confidence and
                purpose — and who care about freedom, education, and opportunity.
              </p>

              <ul className="mt-6 space-y-3 text-mb-cream/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>Women who are curious, ambitious, and ready to learn</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>Women who can communicate and inspire people around them</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70"/>
                  <span>Women who want to build a real project with measurable impact</span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-mb-cream/60">
                Still unsure? Read the FAQ or the founder’s letter — then apply if it resonates.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/founder"
                  className="inline-flex rounded-full border border-mb-gold/30 px-5 py-2.5 text-sm text-mb-cream/85 hover:border-mb-gold/50 hover:text-mb-cream"
                >
                  Read Alejandra’s letter
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex rounded-full border border-mb-gold/30 px-5 py-2.5 text-sm text-mb-cream/85 hover:border-mb-gold/50 hover:text-mb-cream"
                >
                  View FAQ
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
              <h3 className="text-xl font-semibold">Ready to apply?</h3>
              <p className="mt-3 text-mb-cream/75">
                The application takes a few minutes and includes:
              </p>

              <ul className="mt-5 space-y-3 text-sm text-mb-cream/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>Basic personal details</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>Two photos + a short intro video</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>10 simple questions (honesty & vision matter most)</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-center rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95"
                >
                  Start application
                </Link>
                <p className="mt-3 text-xs text-mb-cream/60">
                  Sponsors / press / partnerships:{" "}
                  <Link className="underline hover:text-mb-cream" href="/contact">
                    contact us here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}