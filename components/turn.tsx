import { Reveal } from "./reveal";

const PHASES = [
  {
    number: "01",
    name: "Waste",
    kicker: "Start concrete.",
    body: "Week one, off your billing APIs: the retry storms, abandoned seats, dead scheduled jobs, and unopened output your invoices quietly fund. Immediate, unarguable — it pays for the engagement.",
    emphasized: false,
  },
  {
    number: "02",
    name: "Reallocation",
    kicker: "Then the turn.",
    body: "The real story isn't cutting — it's that the money is in the wrong places. Every deployment ranked by cost per successful outcome, so leadership can move budget from the 0.3× to the 9×.",
    emphasized: true,
  },
  {
    number: "03",
    name: "Propagation",
    kicker: "Where this goes.",
    body: "Somewhere in your org, a team has already figured it out. We isolate what the winners do differently, package it, and verify it replicates — retiring the patterns that don't.",
    emphasized: false,
  },
];

/** The pitch sequence — always in this order, never reversed. */
export function Turn() {
  return (
    <section id="method" className="theme-light scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <p className="eyebrow">The method</p>
          <h2 className="figure mt-4 max-w-2xl text-4xl sm:text-5xl">
            Waste buys credibility.
            <br />
            <span className="italic text-primary">Reallocation</span> is the
            story.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.name} delay={0.1 + i * 0.12} className="h-full">
              <article
                className={`surface-sm lift flex h-full flex-col rounded-xl border bg-card p-7 ${
                  phase.emphasized
                    ? "border-primary/40 md:-translate-y-2"
                    : "border-border"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <p className="figure text-3xl text-muted-foreground/70">
                    {phase.number}
                  </p>
                  {phase.emphasized && (
                    <span className="rounded-md bg-accent px-2 py-1 text-[11px] font-semibold text-accent-foreground">
                      the turn
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{phase.name}</h3>
                <p className="mt-1 font-heading italic text-muted-foreground">
                  {phase.kicker}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {phase.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.45}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Lead with the vision and you sound speculative. Stop at waste and
            you&rsquo;re a cost tool. The turn in the middle is the whole
            positioning — and the reason this is priced as ongoing management,
            not a one-time audit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
