"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

/**
 * The hero visual: a miniature of the product's portfolio view. Five
 * workflows ranked by return per dollar, colored by polarity against the 1×
 * breakeven — the product's validated diverging pair, never decoration.
 * Every mark carries a direct label, so identity and value never rest on
 * color alone.
 */

const SCALE_MAX = 10;

const ROWS = [
  { name: "Contract review", unit: "per reviewed contract", mult: 9.2, flag: "rate-limited since March" },
  { name: "Coding agents", unit: "per merged pull request", mult: 5.4 },
  { name: "Support triage", unit: "per resolved ticket", mult: 3.1 },
  { name: "Meeting summaries", unit: "per meeting", mult: 0.4 },
  { name: "Sales drafts", unit: "per outbound email", mult: 0.3 },
];

export function PortfolioCard() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="surface rounded-2xl border border-border bg-card p-6 sm:p-7"
    >
      <div className="flex items-baseline justify-between">
        <p className="eyebrow">The portfolio view</p>
        <p className="font-numeric tabular text-xs text-muted-foreground">
          return per dollar of AI spend
        </p>
      </div>

      <div className="relative mt-5 space-y-1">
        {ROWS.map((row, i) => {
          const positive = row.mult >= 1;
          return (
            <div
              key={row.name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`group grid grid-cols-[7rem_1fr_3.5rem] items-center gap-3 rounded-md px-2 py-2 transition-colors sm:grid-cols-[8.5rem_1fr_3.5rem] ${
                active === i ? "bg-foreground/[0.04]" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-[13px] leading-tight text-foreground">
                  {row.name}
                </p>
                <p className="truncate text-[11px] leading-tight text-muted-foreground">
                  {row.unit}
                </p>
              </div>
              <div className="relative h-2.5">
                {/* 1× breakeven — ticks align across rows into one rule */}
                <div
                  aria-hidden
                  className="absolute -inset-y-2 border-l border-dashed border-foreground/15"
                  style={{ left: `${(1 / SCALE_MAX) * 100}%` }}
                />
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-[4px]"
                  style={{
                    backgroundColor: positive
                      ? "var(--chart-pos)"
                      : "var(--chart-neg)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(row.mult / SCALE_MAX) * 100}%`,
                  }}
                  viewport={{ once: true }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : {
                          duration: 1.1,
                          delay: 0.5 + i * 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                />
              </div>
              <p
                className={`font-numeric tabular text-right text-sm font-semibold ${
                  positive ? "text-positive" : "text-negative"
                }`}
              >
                {row.mult.toFixed(1)}×
              </p>
            </div>
          );
        })}
      </div>

      {/* the flagged finding */}
      <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-4">
        <span className="inline-block size-1.5 rounded-full bg-negative" aria-hidden />
        <p className="text-xs text-muted-foreground">
          <span className="font-numeric tabular font-semibold text-foreground">
            $340k
          </span>{" "}
          of quarterly spend sits below 1× — flagged for reallocation.
        </p>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="inline-block size-1.5 rounded-full bg-positive" aria-hidden />
        <p className="text-xs text-muted-foreground">
          Contract review returns{" "}
          <span className="font-numeric tabular font-semibold text-foreground">
            9.2×
          </span>{" "}
          and has been {ROWS[0].flag}.
        </p>
      </div>
    </motion.div>
  );
}
