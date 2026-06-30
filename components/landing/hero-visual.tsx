"use client";

import { motion, useReducedMotion } from "framer-motion";

/* "Self-routing board" — the hero visual reads as a circuit assembling itself:
   a central processor (the pink core), scattered component pads, and traces
   that route themselves in with right-angle, chamfered PCB geometry. Pink
   signals then run the board. No panel — a faint PCB grid fades into the cream
   page at the edges. Built in code so it scales crisply and stays in palette. */

const INK = "#0e0d0c";
const ACCENT = "#a53860";
const BG = "#fbf9f7";
const EASE = [0.16, 1, 0.3, 1] as const;

const W = 880;
const H = 560;
const CX = W / 2;
const CY = H / 2;
const DIE = 44; // processor half-size
const G = 40; // grid pitch

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

// Deterministic PRNG so server and client render identical markup.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type P = { x: number; y: number };

// --- Geometry, computed once (deterministic) ---------------------------------

// Component pads on a grid, scattered around the processor.
const pads = (() => {
  const rng = mulberry32(11);
  const out: { x: number; y: number; accent: boolean }[] = [];
  for (let gx = -9; gx <= 9; gx++) {
    for (let gy = -6; gy <= 6; gy++) {
      const x = CX + gx * G;
      const y = CY + gy * G;
      const r = Math.hypot(x - CX, y - CY);
      if (r < DIE * 2.3 || r > 312) continue;
      if (x < 70 || x > W - 70 || y < 44 || y > H - 44) continue;
      if (rng() < 0.46) out.push({ x, y, accent: rng() < 0.12 });
    }
  }
  return out;
})();

// Nearest point on the processor's edge, and which axis the trace arrives on.
function dieEdge(px: number, py: number) {
  const dx = px - CX;
  const dy = py - CY;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return {
      x: CX + Math.sign(dx) * DIE,
      y: clamp(py, CY - DIE + 10, CY + DIE - 10),
      axis: "h" as const,
    };
  }
  return {
    x: clamp(px, CX - DIE + 10, CX + DIE - 10),
    y: CY + Math.sign(dy) * DIE,
    axis: "v" as const,
  };
}

// Right-angle (Manhattan) route with a 45° chamfered corner — the PCB look.
function route(p: P, e: ReturnType<typeof dieEdge>) {
  const bend: P =
    e.axis === "h" ? { x: p.x, y: e.y } : { x: e.x, y: p.y };
  const l1 = Math.hypot(bend.x - p.x, bend.y - p.y) || 1;
  const l2 = Math.hypot(e.x - bend.x, e.y - bend.y) || 1;
  const c = Math.min(12, l1 * 0.5, l2 * 0.5);
  const a: P = {
    x: bend.x - ((bend.x - p.x) / l1) * c,
    y: bend.y - ((bend.y - p.y) / l1) * c,
  };
  const b: P = {
    x: bend.x + ((e.x - bend.x) / l2) * c,
    y: bend.y + ((e.y - bend.y) / l2) * c,
  };
  return {
    d: `M ${p.x} ${p.y} L ${a.x} ${a.y} L ${b.x} ${b.y} L ${e.x} ${e.y}`,
    pts: [p, a, b, e, { x: CX, y: CY }],
  };
}

const traces = pads.map((p) => ({
  ...route(p, dieEdge(p.x, p.y)),
  accent: p.accent,
  pad: p,
}));

// A few traces carry running signals into the processor.
const pulseTraces = traces.filter((_, i) => i % 4 === 0).slice(0, 4);

// Faint PCB grid dots behind everything.
const gridDots = (() => {
  const out: { x: number; y: number; o: number }[] = [];
  for (let gx = -10; gx <= 10; gx++) {
    for (let gy = -7; gy <= 7; gy++) {
      const x = CX + gx * G;
      const y = CY + gy * G;
      const r = Math.hypot(x - CX, y - CY);
      if (r < DIE * 1.4) continue;
      out.push({ x, y, o: clamp(0.16 * (1 - r / 360), 0, 0.16) });
    }
  }
  return out;
})();

// Processor pin ticks along each edge.
const pins = (() => {
  const out: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const N = 4;
  for (let i = 0; i < N; i++) {
    const off = -DIE + ((i + 0.5) / N) * (DIE * 2);
    out.push({ x1: CX - DIE, y1: CY + off, x2: CX - DIE - 7, y2: CY + off }); // left
    out.push({ x1: CX + DIE, y1: CY + off, x2: CX + DIE + 7, y2: CY + off }); // right
    out.push({ x1: CX + off, y1: CY - DIE, x2: CX + off, y2: CY - DIE - 7 }); // top
    out.push({ x1: CX + off, y1: CY + DIE, x2: CX + off, y2: CY + DIE + 7 }); // bottom
  }
  return out;
})();

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full overflow-visible"
        role="img"
        aria-label="A circuit board routing itself: scattered component pads connect by traces into a central processor, with signals running along the board."
      >
        <defs>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.2" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="58%" stopColor="#fff" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
          <mask id="hv-mask">
            <rect x="0" y="0" width={W} height={H} fill="url(#hv-fade)" />
          </mask>
        </defs>

        <g mask="url(#hv-mask)">
          {/* PCB grid dots */}
          {gridDots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={1} fill={INK} opacity={d.o} />
          ))}

          {/* Center glow */}
          <circle cx={CX} cy={CY} r={150} fill="url(#hv-glow)" />

          {/* Self-routing traces */}
          {traces.map((t, i) => {
            const peak = t.accent ? 0.5 : 0.28;
            if (reduce) {
              return (
                <path
                  key={i}
                  d={t.d}
                  fill="none"
                  stroke={t.accent ? ACCENT : INK}
                  strokeWidth={t.accent ? 1.3 : 1}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity={peak}
                />
              );
            }
            // Accent traces keep re-routing; the rest draw in once and hold.
            return (
              <motion.path
                key={i}
                d={t.d}
                fill="none"
                stroke={t.accent ? ACCENT : INK}
                strokeWidth={t.accent ? 1.3 : 1}
                strokeLinejoin="round"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  t.accent
                    ? { pathLength: [0, 1, 1, 0], opacity: [0, peak, peak, 0] }
                    : { pathLength: 1, opacity: peak }
                }
                transition={
                  t.accent
                    ? {
                        duration: 6,
                        ease: EASE,
                        times: [0, 0.25, 0.8, 1],
                        repeat: Infinity,
                        delay: (i % 9) * 0.5,
                      }
                    : { duration: 1.5, ease: EASE, delay: 0.2 + i * 0.05 }
                }
              />
            );
          })}

          {/* Pads + vias */}
          {pads.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={4.5}
                fill="none"
                stroke={p.accent ? ACCENT : INK}
                strokeWidth={1}
                opacity={p.accent ? 0.75 : 0.45}
              />
              <rect
                x={p.x - 2}
                y={p.y - 2}
                width={4}
                height={4}
                rx={0.5}
                fill={p.accent ? ACCENT : INK}
                opacity={p.accent ? 0.9 : 0.55}
              />
            </g>
          ))}

          {/* Running signals */}
          {!reduce &&
            pulseTraces.map((t, i) => (
              <motion.circle
                key={i}
                r={3}
                fill={ACCENT}
                style={{ filter: "drop-shadow(0 0 5px rgba(165,56,96,0.8))" }}
                initial={{ cx: t.pts[0].x, cy: t.pts[0].y, opacity: 0 }}
                animate={{
                  cx: t.pts.map((q) => q.x),
                  cy: t.pts.map((q) => q.y),
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.12, 0.5, 0.82, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: i * 0.9,
                }}
              />
            ))}
        </g>

        {/* Processor */}
        {pins.map((p, i) => (
          <line
            key={i}
            x1={p.x1}
            y1={p.y1}
            x2={p.x2}
            y2={p.y2}
            stroke={INK}
            strokeWidth={1}
            opacity={0.4}
          />
        ))}
        <rect
          x={CX - DIE}
          y={CY - DIE}
          width={DIE * 2}
          height={DIE * 2}
          rx={12}
          fill={BG}
          stroke={INK}
          strokeOpacity={0.55}
          strokeWidth={1.2}
        />
        <rect
          x={CX - DIE + 12}
          y={CY - DIE + 12}
          width={(DIE - 12) * 2}
          height={(DIE - 12) * 2}
          rx={6}
          fill="none"
          stroke={ACCENT}
          strokeOpacity={0.3}
          strokeWidth={1}
        />
        <circle cx={CX} cy={CY} r={4.5} fill={ACCENT} />
        {!reduce && (
          <motion.circle
            cx={CX}
            cy={CY}
            r={4.5}
            fill="none"
            stroke={ACCENT}
            strokeWidth={1}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 3], opacity: [0.6, 0] }}
            transition={{
              duration: 2.6,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.4,
            }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        )}
      </svg>
    </div>
  );
}
