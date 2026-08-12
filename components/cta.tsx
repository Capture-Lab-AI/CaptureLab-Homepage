"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Magnetic } from "./magnetic";
import { Reveal } from "./reveal";

export function Cta() {
  const reduce = useReducedMotion();

  return (
    <section
      id="demo"
      className="relative scroll-mt-16 overflow-hidden border-t border-border"
    >
      {/* slow espresso-and-rose weather behind the close */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <MeshGradient
          colors={["#1a1410", "#450920", "#a53860", "#24201c"]}
          distortion={0.8}
          swirl={0.2}
          speed={reduce ? 0 : 0.25}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/35 to-background/80"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-28 lg:pt-36">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Book a demo
            </p>
            <h2 className="not-display mx-auto mt-5 max-w-3xl font-sans text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Know what it&rsquo;s{" "}
              <em className="font-display font-normal italic tracking-[-0.01em] text-primary">
                worth.
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A thirty-minute walk-through of the method, on your numbers.
              First findings land in week one.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Magnetic strength={0.35}>
                <a
                  href="mailto:admin@capture-lab.com?subject=Capture%20Lab%20demo"
                  className="sheen group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110"
                >
                  Book a demo
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
              </Magnetic>
              <a
                href="mailto:admin@capture-lab.com"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                admin@capture-lab.com
              </a>
            </div>
          </Reveal>
        </div>

        <footer className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-border py-8 sm:flex-row">
          <Image
            src="/logo.png"
            alt="Capture Lab"
            width={122}
            height={22}
            className="brightness-[1.35]"
          />
          <p className="text-xs text-muted-foreground">
            Portfolio management for enterprise AI.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <p className="font-numeric tabular text-xs text-muted-foreground">
              &copy; 2026 Capture Lab
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
