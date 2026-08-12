import { Reveal } from "./reveal";

const BUYERS = [
  {
    role: "CIO / CAIO",
    quote:
      "When the board asks what you got for the AI budget, you'll have an answer with a methodology behind it.",
  },
  {
    role: "CFO",
    quote:
      "Cost per successful outcome, per workflow, auditable — with your assumptions, not our black box.",
  },
  {
    role: "FinOps / Platform",
    quote:
      "We'll show you the AI spend that produced nothing. Week one, off your billing APIs.",
  },
  {
    role: "AI Center of Excellence",
    quote:
      "We find the teams who figured it out, and help you spread what they did.",
  },
];

export function Buyers() {
  return (
    <section
      id="buyers"
      className="theme-light scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl border-t border-border px-6 py-24 lg:py-28">
        <Reveal>
          <p className="eyebrow">Who it&rsquo;s for</p>
          <h2 className="figure mt-4 max-w-2xl text-4xl sm:text-5xl">
            Built for the people who answer for the budget.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {BUYERS.map((buyer, i) => (
            <Reveal key={buyer.role} delay={0.08 + i * 0.08} className="h-full">
              <figure className="surface-sm lift flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7">
                <blockquote className="font-heading text-lg leading-relaxed">
                  &ldquo;{buyer.quote}&rdquo;
                </blockquote>
                <figcaption className="eyebrow mt-6">{buyer.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
