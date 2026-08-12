"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";

const PHASES = [
  {
    number: "01",
    name: "Waste",
    kicker: "start concrete",
    body: "Week one, off your billing APIs: the retry storms, abandoned seats, dead scheduled jobs, and unopened output your invoices quietly fund. Immediate, unarguable — it pays for the engagement.",
    emphasized: false,
  },
  {
    number: "02",
    name: "Reallocation",
    kicker: "then the turn",
    body: "The real story isn't cutting — it's that the money is in the wrong places. Every deployment ranked by cost per successful outcome, so leadership can move budget from the 0.3× to the 9×.",
    emphasized: true,
  },
  {
    number: "03",
    name: "Propagation",
    kicker: "where this goes",
    body: "Somewhere in your org, a team has already figured it out. We isolate what the winners do differently, package it, and verify it replicates — retiring the patterns that don't.",
    emphasized: false,
  },
];

/** The pitch sequence — always in this order, never reversed. */
export function Turn() {
  const reduce = useReducedMotion();

  return (
    <section
      id="method"
      className="theme-light scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            03 · The method
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Waste buys credibility.{" "}
            <em className="font-heading font-normal italic text-primary">
              Reallocation
            </em>{" "}
            is the story.
          </h2>
        </Reveal>

        {/* the sequence line — draws left to right as the section arrives */}
        <motion.div
          aria-hidden
          className="mt-12 h-px origin-left bg-gradient-to-r from-primary via-primary/40 to-transparent"
          initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
          whileInView={reduce ? { opacity: 1 } : { scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.name} delay={0.1 + i * 0.12} className="h-full">
              <article
                className={`surface-sm lift group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card p-7 ${
                  phase.emphasized
                    ? "border-primary/40 md:-translate-y-2"
                    : "border-border"
                }`}
              >
                {/* hover: the top edge takes the brand */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {phase.number}
                  </p>
                  {phase.emphasized && (
                    <span className="rounded-md bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-foreground">
                      the turn
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                  {phase.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {phase.kicker}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {phase.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.45}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Lead with the vision and you sound speculative. Stop at waste and
            you&rsquo;re a cost tool. The turn in the middle is the whole
            positioning — and the reason this is priced as ongoing management,
            not a one-time audit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
