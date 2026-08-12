"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const POOL = "abcdefghjkmnpqrstuvwxyz0123456789$×";

/**
 * Decrypt-style settle for the mono eyebrows: characters churn briefly, then
 * lock in left to right. Separators and spaces never churn, so the line's
 * shape holds while it resolves.
 */
export function Scramble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!inView || reduce) return;
    setRunning(true);
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const settled = Math.ceil((frame / 16) * text.length);
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (i < settled || ch === " " || ch === "·" || ch === "—") return ch;
            return POOL[Math.floor(Math.random() * POOL.length)];
          })
          .join(""),
      );
      if (settled >= text.length) {
        clearInterval(id);
        setRunning(false);
      }
    }, 38);
    return () => clearInterval(id);
  }, [inView, reduce, text]);

  return (
    <span ref={ref} className={className} aria-label={text} aria-live="off">
      <span aria-hidden={running}>{display}</span>
    </span>
  );
}
