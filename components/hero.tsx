"use client";

import { motion, useReducedMotion } from "motion/react";
import { PortfolioCard } from "./portfolio-card";

const LINES = [
  { text: "You know what", italic: false },
  { text: "AI costs.", italic: false },
  { text: "Now know what", italic: true },
  { text: "it's worth.", italic: true },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="hero-wash relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-32 lg:pt-44">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Portfolio management for enterprise AI
          </motion.p>

          <h1 className="mt-5 text-[2.9rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem]">
            {LINES.map((line, i) => (
              <motion.span
                key={line.text}
                className={`block ${line.italic ? "italic text-primary" : ""}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12 + i * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Capture Lab measures the cost per successful outcome of every AI
            workflow in the company — then helps leadership move the money to
            the ones that are paying off.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
            >
              Book a demo
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </a>
            <a
              href="#method"
              className="inline-flex items-center rounded-lg border border-input bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-card"
            >
              See the method
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            First findings in week one, off your billing APIs — no
            instrumentation project.
          </motion.p>
        </div>

        <PortfolioCard />
      </div>
    </section>
  );
}
