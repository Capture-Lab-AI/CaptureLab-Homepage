import { Glow } from "./glow";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { Tilt } from "./tilt";

const BUYERS = [
  {
    role: "CIO / CAIO",
    quote:
      "When the board asks what you got for the AI budget, you'll have an answer with a methodology behind it.",
  },
  {
    role: "CFO",
    quote:
      "Cost per successful outcome, per workflow, auditable. Your assumptions, not our black box.",
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
      className="theme-light dotgrid scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl border-t border-border px-6 py-24 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="05 · Who it's for" />
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Built for the people who answer for the budget.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {BUYERS.map((buyer, i) => (
            <Reveal key={buyer.role} delay={0.08 + i * 0.08} className="h-full">
              <Tilt max={1.8} className="h-full">
                <Glow className="h-full rounded-xl">
                  <figure className="surface-sm flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7">
                    <blockquote className="text-lg font-medium leading-relaxed tracking-[-0.01em]">
                      &ldquo;{buyer.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary">
                      {buyer.role}
                    </figcaption>
                  </figure>
                </Glow>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
