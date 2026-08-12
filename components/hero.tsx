"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { Magnetic } from "./magnetic";
import { Scramble } from "./scramble";
import { Ticker } from "./ticker";

gsap.registerPlugin(SplitText, useGSAP);

const Dust = dynamic(() => import("./dust").then((m) => m.Dust), {
  ssr: false,
});

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  // parallax: the room recedes slower than the page scrolls away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // cursor spotlight — a faint warm glow that follows the mouse
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const smx = useSpring(mx, { stiffness: 120, damping: 25 });
  const smy = useSpring(my, { stiffness: 120, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${smx}px ${smy}px, rgb(255 186 138 / 0.07), transparent 65%)`;

  // the headline rises out of per-word masks, character by character
  useGSAP(
    () => {
      if (!headRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(headRef.current, { autoAlpha: 1 });
        return;
      }
      const split = SplitText.create(headRef.current, {
        type: "words,chars",
        mask: "words",
      });
      gsap.set(headRef.current, { autoAlpha: 1 });
      gsap.from(split.chars, {
        yPercent: 118,
        stagger: 0.016,
        duration: 1.05,
        ease: "power4.out",
        delay: 0.3,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = sectionRef.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {/* the room */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY }}
        initial={reduce ? { opacity: 0 } : { scale: 1.07, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
      </motion.div>

      {/* scrims: seat the headline on the dark wall, land the section on the page */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent"
      />

      {/* dust in the lamplight */}
      <Dust />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      <motion.div
        className="relative mx-auto max-w-6xl px-6 pb-40 pt-40 lg:pb-48 lg:pt-48"
        style={reduce ? undefined : { opacity: contentOpacity }}
      >
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Scramble text="Portfolio management for enterprise AI" />
        </motion.p>

        <h1
          ref={headRef}
          className="not-display invisible mt-6 max-w-3xl font-sans text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[4.6rem]"
        >
          <span className="block">You know what AI costs.</span>
          <span className="mt-1 block text-muted-foreground">
            Now know what{" "}
            <em className="font-display font-normal italic tracking-[-0.01em] text-primary">
              it&rsquo;s worth.
            </em>
          </span>
        </h1>

        <motion.p
          className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Capture Lab measures the cost per successful outcome of every AI
          workflow in the company — then helps leadership move the money to the
          ones that are paying off.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
        >
          <Magnetic>
            <a
              href="#demo"
              className="sheen group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110"
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
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-lg border border-input bg-background/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition hover:bg-background/70"
          >
            See the portfolio view
            <span
              aria-hidden
              className="text-muted-foreground transition-transform duration-200 group-hover:translate-y-0.5"
            >
              &darr;
            </span>
          </a>
        </motion.div>

        <motion.p
          className="mt-7 font-mono text-[11px] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          first findings in week one · billing APIs only · no instrumentation
          project
        </motion.p>
      </motion.div>

      {/* the product talking: live-feed ticker along the hero's bottom edge */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.45 }}
      >
        <Ticker />
      </motion.div>
    </section>
  );
}
