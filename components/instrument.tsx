import { Reveal } from "./reveal";
import { RotatingWord } from "./rotating-word";

const UNITS = [
  "resolved ticket",
  "merged pull request",
  "processed claim",
  "closed deal",
];

const PROPERTIES = [
  {
    title: "It finds both halves",
    body: "The metric improves when cost falls or when the success rate rises — so the same instrument that surfaces waste surfaces value. A portfolio manager cuts losers and funds winners with one number.",
  },
  {
    title: "It survives finance",
    body: "Holdout-tested: one team gets access, a matched team doesn't, and the difference over 60 days is the evidence. Your finance team sets the value assumptions — not our black box.",
  },
  {
    title: "It points both directions",
    body: "Underfunded winners — rate limits, truncated context, a cheap model where a correct answer is worth far more than the token difference — get flagged to spend more, not just losers to cut.",
  },
];

/** The one metric the product owns. */
export function Instrument() {
  return (
    <section
      id="instrument"
      className="theme-light scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl border-t border-border px-6 py-24 lg:py-28">
        <Reveal>
          <p className="eyebrow">The instrument</p>
          <h2 className="figure mt-4 text-4xl sm:text-5xl">
            Cost per <RotatingWord words={UNITS} />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            One metric, denominated in the outcomes your business already
            counts. Cost visibility is table stakes — the gap is knowing what
            any of it is <em className="font-heading">worth</em>.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROPERTIES.map((prop, i) => (
            <Reveal key={prop.title} delay={0.1 + i * 0.12} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card/60 p-6">
                <h3 className="text-base font-semibold">{prop.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {prop.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
