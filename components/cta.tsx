"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Magnetic } from "./magnetic";
import { Reveal } from "./reveal";

export function Cta() {
  const reduce = useReducedMotion();

  return (
    <section
      id="demo"
      className="hero-wash relative scroll-mt-16 overflow-hidden border-t border-border"
    >
      {/* a slow warm breath behind the closing line */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 size-[520px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(218 98 125 / 0.09), transparent 65%)",
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

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
