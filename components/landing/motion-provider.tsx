"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/* Honors prefers-reduced-motion across every Framer Motion descendant:
   transform/layout animations are disabled while opacity transitions are
   preserved — a single guard that also covers any component-local animation
   (e.g. the staggered product-panel visuals) that doesn't check itself. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
