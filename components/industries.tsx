"use client";

import { GrainGradient, MeshGradient } from "@paper-design/shaders-react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

const UNITS = [
  {
    name: "Engineering",
    note: "coding agents at 5.4×",
    shader: "mesh" as const,
    colors: ["#da627d", "#ffba8a", "#45392c", "#24201c"],
  },
  {
    name: "IT Operations",
    note: "support triage at 3.1×",
    shader: "grain" as const,
    colors: ["#b57546", "#f1ead9", "#584b3a"],
  },
  {
    name: "Legal",
    note: "contract review at 9.2×",
    shader: "grain" as const,
    colors: ["#a53860", "#450920", "#d2c4a5"],
  },
  {
    name: "Finance",
    note: "claims intake +31% throughput",
    shader: "mesh" as const,
    colors: ["#ffa5ab", "#8d7c60", "#f8f3e8", "#1a1410"],
  },
  {
    name: "People",
    note: "baseline priced, ready to deploy",
    shader: "grain" as const,
    colors: ["#e5dbc4", "#7a6b56", "#da627d"],
  },
];

/**
 * Where the instrument lands: one abstract per business unit, drifting on an
 * auto-scrolling rail. Drag to browse; it resumes on release.
 */
export function Industries() {
  const reduce = useReducedMotion();
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 0.7,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      startDelay: 0,
    }),
  ]);

  return (
    <section className="overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pt-24 lg:pt-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="07 · Where it lands" />
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Five business units, one instrument.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div ref={emblaRef} className="mt-12 cursor-grab pb-24 active:cursor-grabbing lg:pb-28">
          <div className="flex touch-pan-y">
            {UNITS.map((unit) => (
              <div
                key={unit.name}
                className="min-w-0 flex-none pl-6 first:pl-6"
              >
                <div className="w-[280px] sm:w-[320px]">
                  <div className="h-64 overflow-hidden rounded-2xl border border-border">
                    {unit.shader === "mesh" ? (
                      <MeshGradient
                        colors={unit.colors}
                        distortion={0.9}
                        swirl={0.2}
                        speed={reduce ? 0 : 0.4}
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <GrainGradient
                        colors={unit.colors}
                        colorBack="#1a1410"
                        softness={0.7}
                        intensity={0.4}
                        noise={0.3}
                        speed={reduce ? 0 : 0.5}
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
                      {unit.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {unit.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
