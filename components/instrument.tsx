"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

const UNITS = [
  { label: "resolved ticket", cost: "$0.16" },
  { label: "merged pull request", cost: "$30.00" },
  { label: "processed claim", cost: "$1.12" },
  { label: "closed deal", cost: "$44.00" },
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

/** The one metric the product owns, denominated in outcomes you can click. */
export function Instrument() {
  const [index, setIndex] = useState(0);
  const pausedUntil = useRef(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setIndex((i) => (i + 1) % UNITS.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const pick = (i: number) => {
    setIndex(i);
    pausedUntil.current = Date.now() + 9000;
  };

  return (
    <section
      id="instrument"
      className="theme-light scroll-mt-16 bg-background text-foreground"
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
                  key={UNITS[index].label}
                  className="inline-block whitespace-nowrap font-heading font-normal italic text-primary"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {UNITS[index].label}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            One metric, denominated in the outcomes your business already
            counts. Cost visibility is table stakes — the gap is knowing what
            any of it is worth.
          </p>
        </Reveal>

        {/* the denominations — click one and the heading follows */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {UNITS.map((unit, i) => (
              <button
                key={unit.label}
                type="button"
                onClick={() => pick(i)}
                aria-pressed={index === i}
                className={`group flex items-baseline gap-2.5 rounded-lg border px-4 py-2.5 text-left transition-all duration-200 ${
                  index === i
                    ? "border-primary/50 bg-accent shadow-sm"
                    : "border-border bg-card/60 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <span className="text-[13px] font-medium">{unit.label}</span>
                <span
                  className={`font-numeric tabular text-xs transition-colors ${
                    index === i
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {unit.cost}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROPERTIES.map((prop, i) => (
            <Reveal key={prop.title} delay={0.15 + i * 0.12} className="h-full">
              <div className="group h-full rounded-xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-primary/30 hover:bg-card">
                <p className="font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold">{prop.title}</h3>
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
