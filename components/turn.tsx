"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Glow } from "./glow";
import { Scramble } from "./scramble";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
 */
export function Turn() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-phase]");
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(cards, { yPercent: 26, autoAlpha: 0 });
          gsap.set("[data-closing]", { autoAlpha: 0 });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=1250",
              pin: true,
              scrub: 0.55,
            },
          });
          tl.from("[data-seq-line]", {
            scaleX: 0,
            transformOrigin: "0% 50%",
            duration: 0.7,
          })
            .to(cards[0], { yPercent: 0, autoAlpha: 1, duration: 1 }, 0.25)
            .to(cards[1], { yPercent: 0, autoAlpha: 1, duration: 1 }, 0.95)
            .to(cards[2], { yPercent: 0, autoAlpha: 1, duration: 1 }, 1.65)
            .to("[data-closing]", { autoAlpha: 1, duration: 0.6 }, 2.5)
            .to({}, { duration: 0.35 });
        },
      );

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.from("[data-seq-line]", {
            scaleX: 0,
            transformOrigin: "0% 50%",
            duration: 1,
            scrollTrigger: { trigger: "[data-seq-line]", start: "top 88%" },
          });
          for (const card of cards) {
            gsap.from(card, {
              y: 44,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 88%" },
            });
          }
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="method"
      className="theme-light dotgrid scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="03 · The method" />
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Waste buys credibility.{" "}
            <span className="text-primary">Reallocation</span> is the story.
          </h2>
        </div>

        {/* the sequence line draws left to right as the scroll advances */}
        <div
          data-seq-line
          aria-hidden
          className="mt-12 h-px bg-gradient-to-r from-primary via-primary/40 to-transparent"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PHASES.map((phase) => (
            <div key={phase.name} data-phase className="h-full">
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
          data-closing
          className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground"
        >
          Stop at waste and you&rsquo;re a cost tool. The turn in the middle is
          the whole positioning.
        </p>
      </div>
    </section>
  );
}
