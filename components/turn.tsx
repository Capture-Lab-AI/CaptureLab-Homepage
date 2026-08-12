"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Glow } from "./glow";
import { Scramble } from "./scramble";

const PHASES = [
  {
    number: "01",
    name: "Waste",
    body: "Week one, off your billing APIs: retry storms, abandoned seats, dead scheduled jobs, unopened output. Immediate and unarguable. It pays for the engagement.",
    emphasized: false,
  },
  {
    number: "02",
    name: "Reallocation",
    body: "The story isn't cutting. The money is in the wrong places. Every deployment ranked by cost per successful outcome, so budget moves from the 0.3× to the 9×.",
    emphasized: true,
  },
  {
    number: "03",
    name: "Propagation",
    body: "Somewhere in your org a team has already figured it out. We isolate what winners do differently, package it, and verify it replicates.",
    emphasized: false,
  },
];

/**
 * The pitch sequence, always in this order. On desktop the section pins and
 * the three phases land as the reader scrolls: the order is the argument.
 * Built on @bsmnt/scrollytelling over the shared GSAP/Lenis clock.
 */
export function Turn() {
  const [pinned, setPinned] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const closingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setPinned(
      window.matchMedia(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      ).matches,
    );
  }, []);

  const body = (
    <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-24">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          <Scramble text="04 · The method" />
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Waste buys credibility.{" "}
          <span className="text-primary">Reallocation</span> is the story.
        </h2>
      </div>

      <div
        ref={lineRef}
        aria-hidden
        className="mt-12 h-px bg-gradient-to-r from-primary via-primary/40 to-transparent"
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {PHASES.map((phase, i) => (
          <div key={phase.name} ref={cardRefs[i]} className="h-full">
            <Glow className="h-full rounded-xl">
              <article
                className={`surface-sm relative flex h-full flex-col overflow-hidden rounded-xl border bg-card p-7 ${
                  phase.emphasized ? "border-primary/40" : "border-border"
                }`}
              >
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
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {phase.body}
                </p>
              </article>
            </Glow>
          </div>
        ))}
      </div>

      <p
        ref={closingRef}
        className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground"
      >
        Stop at waste and you&rsquo;re a cost tool. The turn in the middle is
        the whole positioning.
      </p>
    </div>
  );

  if (!pinned) {
    return (
      <Section>
        <div className="min-h-0">{body}</div>
      </Section>
    );
  }

  return (
    <Scrollytelling.Root start="top top" end="bottom bottom" scrub={0.7}>
      <Section>
        <Scrollytelling.Pin childHeight="100vh" pinSpacerHeight="300vh">
          {body}
        </Scrollytelling.Pin>
        <Scrollytelling.Animation
          tween={{
            start: 0,
            end: 14,
            target: lineRef,
            from: { scaleX: 0, transformOrigin: "0% 50%" },
          }}
        />
        {cardRefs.map((ref, i) => (
          <Scrollytelling.Animation
            key={PHASES[i].name}
            tween={{
              start: 8 + i * 22,
              end: 30 + i * 22,
              target: ref,
              from: { y: 70, autoAlpha: 0 },
            }}
          />
        ))}
        <Scrollytelling.Animation
          tween={{
            start: 80,
            end: 94,
            target: closingRef,
            from: { autoAlpha: 0 },
          }}
        />
      </Section>
    </Scrollytelling.Root>
  );
}

function Section({ children }: { children: ReactNode }) {
  return (
    <section
      id="method"
      className="theme-light dotgrid scroll-mt-16 bg-background text-foreground"
    >
      {children}
    </section>
  );
}
