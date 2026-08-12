"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";
import { Tilt } from "./tilt";

type Mode = "return" | "spend";

const ROWS = [
  {
    name: "Contract review",
    unit: "per reviewed contract",
    short: "contract",
    mult: 9.2,
    spendQ: 21,
    costPer: "$3.80",
    flag: "rate-limited since March",
  },
  {
    name: "Coding agents",
    unit: "per merged pull request",
    short: "merged PR",
    mult: 5.4,
    spendQ: 86,
    costPer: "$30.00",
  },
  {
    name: "Support triage",
    unit: "per resolved ticket",
    short: "ticket",
    mult: 3.1,
    spendQ: 12,
    costPer: "$0.16",
  },
  {
    name: "Meeting summaries",
    unit: "per meeting",
    short: "meeting",
    mult: 0.4,
    spendQ: 48,
    costPer: "$1.90",
  },
  {
    name: "Sales drafts",
    unit: "per outbound email",
    short: "email",
    mult: 0.3,
    spendQ: 34,
    costPer: "$0.85",
  },
];

const MULT_MAX = 10;
const SPEND_MAX = Math.max(...ROWS.map((r) => r.spendQ));

/**
 * A miniature of the product's portfolio screen. Bars wear the validated
 * diverging pair — teal above 1×, pink below — and every mark carries a
 * direct label, so nothing rests on color alone. The Return/Spend flip is
 * the pitch in one gesture: the two worst returns are the second- and
 * third-largest lines of spend.
 */
export function Portfolio() {
  const [mode, setMode] = useState<Mode>("return");
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="portfolio" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                <Scramble text="01 · The portfolio view" />
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Every workflow, priced by what it returns.
              </h2>
            </div>
            {/* the flip: same rows, two truths */}
            <div
              role="tablist"
              aria-label="Rank by"
              className="flex rounded-lg border border-border bg-card p-1"
            >
              {(["return", "spend"] as Mode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => setMode(m)}
                  className={`relative rounded-md px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    mode === m
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {mode === m && (
                    <motion.span
                      layoutId="mode-pill"
                      className="absolute inset-0 rounded-md bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {m === "return" ? "by return" : "by spend"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <Tilt max={1.6} className="mt-10">
            <div className="border-beam surface rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {mode === "return"
                    ? "return per dollar of AI spend"
                    : "AI spend per quarter ($k)"}
                </p>
                <p className="hidden font-numeric tabular text-xs text-muted-foreground sm:block">
                  hover a row for cost per outcome
                </p>
              </div>

              <div className="mt-6 space-y-1">
                {ROWS.map((row, i) => {
                  const positive = row.mult >= 1;
                  const frac =
                    mode === "return"
                      ? row.mult / MULT_MAX
                      : row.spendQ / SPEND_MAX;
                  return (
                    <div
                      key={row.name}
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                      className={`group grid grid-cols-[7.5rem_1fr_4.5rem] items-center gap-3 rounded-md px-2 py-2.5 transition-colors sm:grid-cols-[10rem_1fr_5rem] ${
                        active === i ? "bg-foreground/[0.045]" : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-medium leading-tight">
                          {row.name}
                        </p>
                        <p className="truncate text-[11px] leading-tight text-muted-foreground">
                          {active === i ? (
                            <span className="font-mono">
                              {row.costPer} / {row.short}
                            </span>
                          ) : (
                            row.unit
                          )}
                        </p>
                      </div>
                      <div className="relative h-2.5">
                        {mode === "return" && (
                          <div
                            aria-hidden
                            className="absolute -inset-y-2 border-l border-dashed border-foreground/15"
                            style={{ left: `${(1 / MULT_MAX) * 100}%` }}
                          />
                        )}
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-[4px]"
                          style={{
                            backgroundColor: positive
                              ? "var(--chart-pos)"
                              : "var(--chart-neg)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${frac * 100}%` }}
                          viewport={{ once: true }}
                          animate={{ width: `${frac * 100}%` }}
                          transition={
                            reduce
                              ? { duration: 0 }
                              : {
                                  type: "spring",
                                  stiffness: 90,
                                  damping: 20,
                                  delay: active === null ? i * 0.04 : 0,
                                }
                          }
                        />
                      </div>
                      <p
                        className={`font-numeric tabular text-right text-sm font-semibold ${
                          positive ? "text-positive" : "text-negative"
                        }`}
                      >
                        {mode === "return"
                          ? `${row.mult.toFixed(1)}×`
                          : `$${row.spendQ}k`}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-border pt-4">
                {mode === "return" ? (
                  <div className="flex flex-col gap-1.5">
                    <p className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-negative" aria-hidden />
                      <span>
                        <span className="font-numeric tabular font-semibold text-foreground">
                          $340k
                        </span>{" "}
                        of quarterly spend sits below 1× — flagged for
                        reallocation.
                      </span>
                    </p>
                    <p className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-positive" aria-hidden />
                      <span>
                        Contract review returns{" "}
                        <span className="font-numeric tabular font-semibold text-foreground">
                          9.2×
                        </span>{" "}
                        and has been {ROWS[0].flag}.
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-negative" aria-hidden />
                    <span>
                      The two workflows below 1× are the second- and
                      third-largest lines of spend —{" "}
                      <span className="font-numeric tabular font-semibold text-foreground">
                        $82k
                      </span>{" "}
                      a quarter pointed the wrong way.
                    </span>
                  </p>
                )}
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
