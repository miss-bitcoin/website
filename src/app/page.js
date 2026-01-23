// src/app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-mb-gold/20">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-mb-gold/25 bg-mb-dark/60 px-3 py-1 text-xs text-mb-cream/70">
              Applications open • Global program • Impact-led
            </p>

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
                    Built around a{" "}
                    <span className="text-mb-cream">community project</span> you design and execute.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    A global platform to amplify women’s voices in Bitcoin and decentralization.
                  </span>
                </li>
              </ul>

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
              <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
                <h3 className="text-lg font-semibold">Applicants</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Women ready to represent their country, learn fast, and lead a meaningful project.
                </p>
              </div>

              <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
                <h3 className="text-lg font-semibold">Sponsors / Partners</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Organizations aligned with education, empowerment, and responsible adoption.
                </p>
              </div>

              <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
                <h3 className="text-lg font-semibold">Press</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Stories at the intersection of women’s leadership, freedom, and Bitcoin.
                </p>
              </div>

              <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-6">
                <h3 className="text-lg font-semibold">Community</h3>
                <p className="mt-2 text-sm text-mb-cream/70">
                  Builders and supporters helping deliver education and impact worldwide.
                </p>
              </div>
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
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    National/International recognition
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    Education + mentorship in Bitcoin, storytelling, and community-building
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    Global visibility through the Miss Bitcoin platform and partner events
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>
                    Support to design and execute a real Bitcoin-based community project
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-mb-cream/60">
                Exact support details evolve by country and sponsor partners, but the mission stays
                constant: education + empowerment + impact.
              </p>
            </div>

            <div className="rounded-2xl border border-mb-gold/15 bg-mb-dark/60 p-8">
              <h2 className="text-2xl font-semibold">What will you actually do?</h2>

              <p className="mt-4 text-mb-cream/75">
                You’ll propose a simple idea, then build it with guidance — something that can
                meaningfully help people understand Bitcoin and financial freedom locally.
              </p>

              <div className="mt-6 space-y-3 text-mb-cream/75">
                <div className="rounded-xl border border-mb-cream/10 bg-mb-dark/50 p-4">
                  <p className="text-sm font-semibold text-mb-cream">Examples of projects</p>
                  <p className="mt-1 text-sm text-mb-cream/70">
                    Workshops • school sessions • women’s learning circles • small business education
                    • community meetups • beginner resources in your language
                  </p>
                </div>

                <div className="rounded-xl border border-mb-cream/10 bg-mb-dark/50 p-4">
                  <p className="text-sm font-semibold text-mb-cream">You don’t need to be technical</p>
                  <p className="mt-1 text-sm text-mb-cream/70">
                    We care about your voice, values, and leadership. We teach Bitcoin basics and
                    help you shape your story.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-center rounded-full bg-mb-cream px-6 py-3 text-sm font-medium text-mb-dark hover:bg-mb-cream/95 sm:w-auto"
                >
                  Apply now
                </Link>
              </div>
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
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>Women who are curious, ambitious, and ready to learn</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
                  <span>Women who can communicate and inspire people around them</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-gold/70" />
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