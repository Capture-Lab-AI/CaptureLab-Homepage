"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Glow } from "./glow";
import { Scramble } from "./scramble";

/* Hand-drawn phase pictograms: same flat language as the diagrams above. */

function WasteMark() {
  return (
    <svg viewBox="0 0 64 32" className="h-8 w-16" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={2 + i * 16}
          y={9}
          width={12}
          height={14}
          rx={3}
          fill={i < 2 ? "var(--color-sand-400)" : "none"}
          stroke="var(--color-sand-700)"
          strokeWidth="1.5"
          opacity={i < 2 ? 1 : 0.55}
        />
      ))}
      <line
        x1={36}
        y1={26}
        x2={62}
        y2={6}
        stroke="var(--color-pink-500)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReallocationMark() {
  return (
    <svg viewBox="0 0 64 32" className="h-8 w-16" aria-hidden>
      <rect
        x={6}
        y={14}
        width={10}
        height={14}
        rx={3}
        fill="var(--chart-neg)"
      />
      <rect
        x={48}
        y={5}
        width={10}
        height={23}
        rx={3}
        fill="var(--chart-pos)"
      />
      <path
        d="M 16 8 C 28 -2, 40 -2, 50 4"
        fill="none"
        stroke="var(--color-sand-700)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 50 4 l -5.5 -1 M 50 4 l -2 5"
        stroke="var(--color-sand-700)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PropagationMark() {
  return (
    <svg viewBox="0 0 64 32" className="h-8 w-16" aria-hidden>
      <circle cx={8} cy={16} r={4.5} fill="var(--color-pink-500)" />
      {[4, 12, 20, 28].map((y) => (
        <path
          key={y}
          d={`M 12 16 C 30 16, 34 ${y}, 50 ${y}`}
          fill="none"
          stroke="var(--color-sand-700)"
          strokeWidth="1.2"
          opacity="0.7"
        />
      ))}
      {[4, 12, 20, 28].map((y) => (
        <circle
          key={y}
          cx={54}
          cy={y}
          r={3}
          fill="none"
          stroke="var(--color-pink-500)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

const PHASES = [
  {
    number: "01",
    name: "Waste",
    body: "Week one, off your billing APIs: retry storms, abandoned seats, dead scheduled jobs, unopened output. Immediate and unarguable. It pays for the engagement.",
    stat: "$151k surfaced in week one",
    ground: "bg-sand-200",
    mark: <WasteMark />,
    emphasized: false,
  },
  {
    number: "02",
    name: "Reallocation",
    body: "The story isn't cutting. The money is in the wrong places. Every deployment ranked by cost per successful outcome, so budget moves from the 0.3× to the 9×.",
    stat: "$795k worth redeploying",
    ground: "bg-pink-50",
    mark: <ReallocationMark />,
    emphasized: true,
  },
  {
    number: "03",
    name: "Propagation",
    body: "Somewhere in your org a team has already figured it out. We isolate what winners do differently, package it, and verify it replicates.",
    stat: "one winner, four teams",
    ground: "bg-umber-200",
    mark: <PropagationMark />,
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
                className={`surface-sm relative flex h-full flex-col overflow-hidden rounded-xl border bg-card ${
                  phase.emphasized ? "border-primary/40" : "border-border"
                }`}
              >
                {/* the phase mark: drawn, not generated */}
                <div
                  className={`relative flex h-20 items-center justify-between px-6 ${phase.ground}`}
                >
                  <span className="font-mono text-xs text-sand-700">
                    {phase.number}
                  </span>
                  {phase.mark}
                  {phase.emphasized ? (
                    <span className="rounded-md bg-white/85 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-pink-900">
                      the turn
                    </span>
                  ) : (
                    <span className="w-10" aria-hidden />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {phase.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                  <p className="mt-auto pt-4 font-mono text-[11px] text-primary">
                    {phase.stat}
                  </p>
                </div>
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
        <Scrollytelling.Pin childHeight="100vh" pinSpacerHeight="260vh">
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
