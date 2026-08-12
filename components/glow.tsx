"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useRef, type ReactNode } from "react";

/** A card whose interior lights up under the cursor. Wrap the card itself. */
export function Glow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const reduce = useReducedMotion();
  const glow = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, color-mix(in srgb, var(--primary) 8%, transparent), transparent 70%)`;

  return (
    <div
      ref={ref}
      className={`group relative ${className ?? ""}`}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
    </div>
  );
}
