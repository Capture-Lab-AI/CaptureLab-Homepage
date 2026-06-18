"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

// Exponential ease-out — natural deceleration (impeccable motion ref).
const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Seconds before the reveal starts. */
  delay?: number;
  /** Vertical travel distance in px (ignored under reduced motion). */
  y?: number;
};

/** Fade + rise into view once, respecting prefers-reduced-motion. */
export function Reveal({ delay = 0, y = 22, children, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  /** Seconds between each child's reveal. */
  gap?: number;
  /** Seconds before the first child reveals. */
  delay?: number;
};

/** Container that reveals its <Item> children in sequence. */
export function Stagger({
  gap = 0.09,
  delay = 0,
  children,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = HTMLMotionProps<"div"> & { y?: number };

/** A single staggered child. Must be rendered inside <Stagger>. */
export function Item({ y = 22, children, ...props }: ItemProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

export { motion, useReducedMotion, EASE };
