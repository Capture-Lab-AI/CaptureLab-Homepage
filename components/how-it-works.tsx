import { ConnectDiagram, MoveDiagram, PriceDiagram } from "./diagrams";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { Tilt } from "./tilt";

const STEPS = [
  {
    ground: "bg-sand-200",
    diagram: <ConnectDiagram />,
    title: "Connect the spend",
    body: "Billing APIs and seat data from every provider, in week one. No instrumentation project.",
  },
  {
    ground: "bg-pink-50",
    diagram: <PriceDiagram />,
    title: "Price every outcome",
    body: "Each workflow gets a cost per successful outcome, measured against your pre-AI baseline.",
  },
  {
    ground: "bg-umber-200",
    diagram: <MoveDiagram />,
    title: "Move the money",
    body: "A ranked queue of cuts and investments, each with projected effect. The next quarter proves it.",
  },
];

/** Three live diagrams: how the product actually functions, working. */
export function HowItWorks() {
  return (
    <section
      id="how"
      className="theme-light scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="03 · How it works" />
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            From invoices to decisions.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.1 + i * 0.12}>
              <Tilt max={1.6} className="rounded-2xl">
                <div
                  className={`flex items-center justify-center overflow-hidden rounded-2xl p-5 ${step.ground}`}
                >
                  {step.diagram}
                </div>
              </Tilt>
              <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
