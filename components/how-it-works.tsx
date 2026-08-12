import Image from "next/image";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { Tilt } from "./tilt";

const PROVIDERS = ["anthropic", "openai", "bedrock", "azure", "vertex", "m365"];

/** Curved connectors from each provider chip to the Capture Lab node, with
    packets traveling the wires. */
function ConnectDiagram() {
  const ys = [22, 64, 106, 148, 190, 232];
  return (
    <div className="relative mx-auto aspect-[7/6] w-full max-w-[360px]">
      <svg
        aria-hidden
        viewBox="0 0 360 270"
        className="absolute inset-0 h-full w-full"
      >
        {ys.map((y, i) => (
          <g key={y}>
            <path
              id={`wire-${i}`}
              d={`M 104 ${y + 17} C 175 ${y + 17}, 185 130, 244 130`}
              fill="none"
              stroke="var(--color-sand-600)"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              className="dash-flow"
            />
            <circle r="3" fill="var(--color-pink-500)" opacity="0.85">
              <animateMotion
                dur={`${2 + i * 0.4}s`}
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#wire-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>
      {PROVIDERS.map((name, i) => (
        <div
          key={name}
          className="absolute left-[3%] flex h-[34px] w-[92px] items-center justify-center rounded-lg bg-white/80 font-mono text-[10px] text-sand-800 shadow-sm"
          style={{ top: `${((ys[i] + 17) / 270) * 100}%`, translate: "0 -50%" }}
        >
          {name}
        </div>
      ))}
      <div className="absolute right-[3%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-1.5 rounded-xl bg-white/90 px-4 py-3 shadow-md">
        <Image src="/icon.png" alt="" width={30} height={30} />
        <p className="text-[10px] font-semibold tracking-tight text-sand-900">
          Capture Lab
        </p>
        <div className="flex gap-1">
          {["billed", "seats", "usage"].map((tag) => (
            <span
              key={tag}
              className="rounded bg-sand-200 px-1 py-0.5 font-mono text-[7px] text-sand-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-numeric tabular text-[9px] text-sand-700">
          $894k/yr observed
        </p>
      </div>
    </div>
  );
}

/** The cost-per-outcome sheet, tilted like a document on a desk. */
function PriceDiagram() {
  const rows = [
    { label: "merged PR", price: "$30.00", w: "72%" },
    { label: "resolved ticket", price: "$0.16", w: "22%" },
    { label: "processed claim", price: "$1.12", w: "38%" },
    { label: "reviewed contract", price: "$3.80", w: "48%" },
  ];
  return (
    <div className="relative mx-auto flex aspect-[7/6] w-full max-w-[360px] items-center justify-center">
      <div
        aria-hidden
        className="absolute h-[230px] w-[260px] rounded-xl bg-white/45 shadow-sm"
        style={{ rotate: "4deg" }}
      />
      <span className="float-y absolute right-[6%] top-[7%] rounded-md bg-white/90 px-2 py-1 font-mono text-[9px] text-positive shadow-sm">
        holdout ✓
      </span>
      <span className="absolute bottom-[8%] left-[5%] rounded-md bg-white/80 px-2 py-1 font-mono text-[9px] text-sand-700 shadow-sm">
        vs pre-AI baseline
      </span>
      <div
        className="float-y relative w-[260px] rounded-xl bg-white/95 p-5 shadow-lg"
        style={{ "--float-rotate": "-4deg" } as React.CSSProperties}
      >
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-sand-700">
            Cost per outcome
          </p>
          <p className="font-numeric tabular text-[9px] text-sand-700">Q2</p>
        </div>
        <div className="mt-3 space-y-2.5">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] text-sand-800">{row.label}</p>
                <p className="font-numeric tabular text-[11px] font-semibold text-sand-900">
                  {row.price}
                </p>
              </div>
              <div className="mt-1 h-1.5 rounded-[3px] bg-sand-200">
                <div
                  className="h-full rounded-[3px]"
                  style={{ width: row.w, backgroundColor: "var(--chart-pos)" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3.5 flex items-center justify-between border-t border-sand-200 pt-3">
          <p className="text-[10px] text-sand-700">contract review</p>
          <p className="font-numeric tabular text-[13px] font-bold text-positive">
            9.2&times;
          </p>
        </div>
      </div>
    </div>
  );
}

/** The action queue: one approval away from moving real money. */
function MoveDiagram() {
  return (
    <div className="relative mx-auto flex aspect-[7/6] w-full max-w-[360px] flex-col items-center justify-center">
      <p className="absolute left-[5%] top-[6%] font-mono text-[9px] uppercase tracking-[0.14em] text-sand-700">
        action queue · ranked by $
      </p>
      <div className="absolute w-[270px] translate-x-4 translate-y-12 rounded-xl bg-white/55 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium text-sand-800">
            Pause sales drafts
          </p>
          <p className="font-numeric tabular text-[10px] text-sand-700">
            saves $34k/qtr
          </p>
        </div>
        <div className="mt-2 h-1.5 w-2/5 rounded-[3px] bg-sand-300" />
      </div>
      <div className="float-y relative w-[280px] rounded-xl bg-white/95 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-sand-700">
            invest
          </p>
          <span className="rounded-md bg-pink-50 px-1.5 py-0.5 font-mono text-[9px] text-pink-900">
            ranked #1
          </span>
        </div>
        <p className="mt-2 text-[12px] font-semibold text-sand-900">
          Raise contract-review rate limit
        </p>
        <div className="mt-1 flex items-baseline gap-2">
          <p className="font-numeric tabular text-[11px] text-positive">
            +$310k/yr projected
          </p>
          <p className="font-numeric tabular text-[9px] text-sand-700">
            92% confidence
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="sheen inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground">
            Approve
          </span>
          <span className="inline-flex items-center rounded-md border border-sand-300 px-3 py-1.5 text-[10px] text-sand-700">
            Later
          </span>
          <span className="ml-auto font-mono text-[8px] text-sand-600">
            auto-drafted
          </span>
        </div>
      </div>
    </div>
  );
}

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

/** The Soren-style three-panel diagram: how the product actually functions. */
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
