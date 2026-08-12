"use client";

import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Glow } from "./glow";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

const UNITS = [
  {
    label: "resolved ticket",
    cost: 0.16,
    volume: 3120,
    spend: 499,
    displaced: 27400,
  },
  {
    label: "merged pull request",
    cost: 30,
    volume: 412,
    spend: 12360,
    displaced: 86000,
  },
  {
    label: "processed claim",
    cost: 1.12,
    volume: 1840,
    spend: 2061,
    displaced: 41200,
  },
  {
    label: "closed deal",
    cost: 44,
    volume: 96,
    spend: 4224,
    displaced: 118000,
  },
];

const PROPERTIES = [
  {
    title: "It finds both halves",
    body: "Improves when cost falls or when success rises, so the instrument that finds waste finds value. Cut losers, fund winners, one number.",
  },
  {
    title: "It survives finance",
    body: "Holdout-tested: one team gets access, a matched team doesn't, and the 60-day difference is the evidence. Finance sets the assumptions, not our black box.",
  },
  {
    title: "It points both directions",
    body: "Underfunded winners get flagged to spend more: rate limits, truncated context, a cheap model where the right answer is worth far more than the tokens.",
  },
];

/** The one metric the product owns, denominated in outcomes you can click. */
export function Instrument() {
  const [index, setIndex] = useState(0);
  const pausedUntil = useRef(0);
  const reduce = useReducedMotion();
  const unit = UNITS[index];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setIndex((i) => (i + 1) % UNITS.length);
    }, 3000);
    return () => clearInterval(id);
  }, [reduce]);

  const pick = (i: number) => {
    setIndex(i);
    pausedUntil.current = Date.now() + 9000;
  };

  return (
    <section
      id="instrument"
      className="theme-light dotgrid scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl border-t border-border px-6 py-24 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="04 · The instrument" />
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Cost per{" "}
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={unit.label}
                  className="inline-block whitespace-nowrap text-primary"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {unit.label}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            One metric, denominated in the outcomes your business already
            counts. Cost visibility is table stakes. The gap is knowing what
            any of it is worth.
          </p>
        </Reveal>

        {/* the denominations: click one and the whole section follows */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {UNITS.map((u, i) => (
              <button
                key={u.label}
                type="button"
                onClick={() => pick(i)}
                aria-pressed={index === i}
                className={`group flex items-baseline gap-2.5 rounded-lg border px-4 py-2.5 text-left transition-all duration-200 ${
                  index === i
                    ? "border-primary/50 bg-accent shadow-sm"
                    : "border-border bg-card/60 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <span className="text-[13px] font-medium">{u.label}</span>
                <span
                  className={`font-numeric tabular text-xs transition-colors ${
                    index === i
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  ${u.cost.toFixed(2)}
                </span>
              </button>
            ))}
          </div>

          {/* the economics of the selected unit, digits rolling as it changes */}
          <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 rounded-xl border border-border bg-card/60 px-6 py-5">
            <p className="font-numeric tabular text-sm">
              <NumberFlow
                value={unit.volume}
                className="text-xl font-semibold"
              />{" "}
              <span className="text-muted-foreground">last month</span>
            </p>
            <p className="font-numeric tabular text-sm">
              <NumberFlow
                value={unit.spend}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }}
                className="text-xl font-semibold"
              />{" "}
              <span className="text-muted-foreground">of AI spend</span>
            </p>
            <p className="font-numeric tabular text-sm">
              <NumberFlow
                value={unit.displaced}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }}
                className="text-xl font-semibold text-positive"
              />{" "}
              <span className="text-muted-foreground">
                of handling time displaced
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROPERTIES.map((prop, i) => (
            <Reveal key={prop.title} delay={0.15 + i * 0.12} className="h-full">
              <Glow className="h-full rounded-xl">
                <div className="h-full rounded-xl border border-border bg-card/60 p-6 transition-colors duration-300 group-hover:border-primary/30">
                  <h3 className="text-base font-semibold">{prop.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {prop.body}
                  </p>
                </div>
              </Glow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
