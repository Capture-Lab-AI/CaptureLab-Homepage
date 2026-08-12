"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Scramble } from "./scramble";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

/**
 * The pitch sequence — always in this order, never reversed. On desktop the
 * section pins and the three phases land one at a time as the reader scrolls
 * through it: the order is the argument, so the scroll enforces it.
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
      className="theme-light scroll-mt-16 bg-background text-foreground"
    >
      <div className="mx-auto flex min-h-[calc(100vh-0px)] max-w-6xl flex-col justify-center px-6 py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="03 · The method" />
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Waste buys credibility.{" "}
            <em className="font-heading font-normal italic text-primary">
              Reallocation
            </em>{" "}
            is the story.
          </h2>
        </div>

        {/* the sequence line — draws left to right as the scroll advances */}
        <div
          data-seq-line
          aria-hidden
          className="mt-12 h-px bg-gradient-to-r from-primary via-primary/40 to-transparent"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PHASES.map((phase) => (
            <article
              key={phase.name}
              data-phase
              className={`surface-sm lift group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card p-7 ${
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
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {phase.kicker}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {phase.body}
              </p>
            </article>
          ))}
        </div>

        <p
          data-closing
          className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground"
        >
          Lead with the vision and you sound speculative. Stop at waste and
          you&rsquo;re a cost tool. The turn in the middle is the whole
          positioning — and the reason this is priced as ongoing management,
          not a one-time audit.
        </p>
      </div>
    </section>
  );
}
