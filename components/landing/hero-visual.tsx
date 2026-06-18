"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Abstract product visual: scattered source systems (tickets, logs, chat,
   runbooks) are learned into a structured process graph, which an agent then
   executes — a pink pulse travels the path. Built in code so it scales crisply
   and reads as "learn → build → run". */

const EASE = [0.16, 1, 0.3, 1] as const;

type Node = { id: string; label: string; cx: number; cy: number };

const HW = 44; // node half-width
const HH = 20; // node half-height

const NODES: Node[] = [
  { id: "triage", label: "TRIAGE", cx: 250, cy: 180 },
  { id: "diagnose", label: "DIAGNOSE", cx: 380, cy: 116 },
  { id: "resolve", label: "RESOLVE", cx: 380, cy: 244 },
  { id: "verify", label: "VERIFY", cx: 512, cy: 180 },
];

const SOURCES = [
  { label: "TICKETS", y: 72 },
  { label: "LOGS", y: 120 },
  { label: "CHAT", y: 168 },
  { label: "RUNBOOKS", y: 216 },
];
const SRC_X = 22;
const SRC_W = 96;
const SRC_H = 28;

const node = (id: string) => NODES.find((n) => n.id === id)!;

// Smooth, mostly-horizontal S-curve between two points.
function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M ${x1},${y1} C ${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

const EDGES: { d: string; hot?: boolean }[] = [
  ...SOURCES.map((s) => ({
    d: curve(SRC_X + SRC_W, s.y + SRC_H / 2, node("triage").cx - HW, 180),
  })),
  {
    d: curve(node("triage").cx + HW, 180, node("diagnose").cx - HW, 116),
    hot: true,
  },
  { d: curve(node("triage").cx + HW, 180, node("resolve").cx - HW, 244) },
  {
    d: curve(node("diagnose").cx + HW, 116, node("verify").cx - HW, 180),
    hot: true,
  },
  { d: curve(node("resolve").cx + HW, 244, node("verify").cx - HW, 180) },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  const pulse = {
    cx: [node("triage").cx, node("diagnose").cx, node("verify").cx],
    cy: [node("triage").cy, node("diagnose").cy, node("verify").cy],
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--on-deep-rule)] bg-bg-deep shadow-[0_1px_2px_rgba(20,9,11,0.06),0_40px_80px_-40px_rgba(20,9,11,0.5)]">
      <div className="grid-dots absolute inset-0 opacity-70" aria-hidden />

      {/* Panel header */}
      <div className="relative flex items-center justify-between border-b border-[color:var(--on-deep-rule)] px-5 py-3">
        <span className="eyebrow text-[color:var(--on-deep-3)]">
          Learned process · ITSM
        </span>
        <span className="flex items-center gap-2 eyebrow text-[color:var(--on-deep-3)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Agent running
        </span>
      </div>

      <svg
        viewBox="0 0 600 320"
        className="relative block h-auto w-full"
        role="img"
        aria-label="Source systems are learned into a structured process graph that an AI agent executes."
      >
        {/* Edges */}
        {EDGES.map((e, i) => (
          <motion.path
            key={i}
            d={e.d}
            fill="none"
            stroke={e.hot ? "rgba(246,242,238,0.34)" : "rgba(246,242,238,0.16)"}
            strokeWidth={1.25}
            initial={reduce ? { opacity: 1 } : { pathLength: 0, opacity: 0 }}
            whileInView={
              reduce ? { opacity: 1 } : { pathLength: 1, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 + i * 0.08 }}
          />
        ))}

        {/* Source chips */}
        {SOURCES.map((s, i) => (
          <motion.g
            key={s.label}
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
          >
            <rect
              x={SRC_X}
              y={s.y}
              width={SRC_W}
              height={SRC_H}
              rx={7}
              fill="rgba(246,242,238,0.03)"
              stroke="rgba(246,242,238,0.14)"
            />
            <circle
              cx={SRC_X + 13}
              cy={s.y + SRC_H / 2}
              r={2.5}
              fill="#a53860"
            />
            <text
              x={SRC_X + 24}
              y={s.y + SRC_H / 2 + 3.5}
              className="font-mono"
              fontSize={9.5}
              letterSpacing="0.08em"
              fill="rgba(246,242,238,0.7)"
            >
              {s.label}
            </text>
          </motion.g>
        ))}

        {/* Process nodes */}
        {NODES.map((n, i) => {
          const isVerify = n.id === "verify";
          return (
            <motion.g
              key={n.id}
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.12 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            >
              <rect
                x={n.cx - HW}
                y={n.cy - HH}
                width={HW * 2}
                height={HH * 2}
                rx={9}
                fill={
                  isVerify ? "rgba(165,56,96,0.16)" : "rgba(246,242,238,0.05)"
                }
                stroke={
                  isVerify ? "rgba(165,56,96,0.6)" : "rgba(246,242,238,0.2)"
                }
              />
              <text
                x={n.cx}
                y={n.cy + 3.5}
                textAnchor="middle"
                className="font-mono"
                fontSize={10}
                letterSpacing="0.06em"
                fill="rgba(246,242,238,0.86)"
              >
                {n.label}
              </text>
              {isVerify && (
                <motion.path
                  d={`M ${n.cx + 18} ${n.cy - 9} l 3 3 l 5 -6`}
                  fill="none"
                  stroke="#a53860"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reduce ? { opacity: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: 1.6 }}
                />
              )}
            </motion.g>
          );
        })}

        {/* Agent pulse traveling the hot path */}
        {!reduce && (
          <motion.circle
            r={4}
            fill="#a53860"
            style={{ filter: "drop-shadow(0 0 6px rgba(165,56,96,0.9))" }}
            initial={{ cx: pulse.cx[0], cy: pulse.cy[0], opacity: 0 }}
            animate={{
              cx: pulse.cx,
              cy: pulse.cy,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.8,
              delay: 1.8,
              times: [0, 0.1, 0.9, 1],
            }}
          />
        )}
      </svg>
    </div>
  );
}
