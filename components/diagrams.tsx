"use client";

import { useGSAP } from "@gsap/react";
import NumberFlow from "@number-flow/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

gsap.registerPlugin(MotionPathPlugin, useGSAP);

/* ------------------------------------------------------------------ */
/* 01 · Connect the spend: packets travel the wires, the node breathes */
/* ------------------------------------------------------------------ */

const PROVIDERS = ["anthropic", "openai", "bedrock", "azure", "vertex", "m365"];
const WIRE_YS = [39, 81, 123, 165, 207, 249];

export function ConnectDiagram() {
  const uid = useId().replace(/[:]/g, "");
  const scope = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(scope, { margin: "-15%" });
  const [observed, setObserved] = useState(894_110);
  const timelines = useRef<gsap.core.Timeline[]>([]);

  useGSAP(
    () => {
      if (reduce) return;
      timelines.current = WIRE_YS.map((_, i) => {
        const dot = scope.current?.querySelector(`[data-dot="${i}"]`);
        const chip = scope.current?.querySelector(`[data-chip="${i}"]`);
        const wire = `#${uid}-wire-${i}`;
        if (!dot) return gsap.timeline();
        const tl = gsap.timeline({
          repeat: -1,
          delay: i * 0.55,
          repeatDelay: 1.4 + (i % 3) * 0.7,
        });
        tl.call(() => {
          if (chip) {
            gsap.fromTo(
              chip,
              { scale: 1 },
              { scale: 1.04, duration: 0.14, yoyo: true, repeat: 1 },
            );
          }
        })
          .fromTo(dot, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 })
          .to(dot, {
            motionPath: { path: wire, align: wire, alignOrigin: [0.5, 0.5] },
            duration: 1.5 + i * 0.18,
            ease: "power1.inOut",
          })
          .call(() => {
            if (ringRef.current) {
              gsap.fromTo(
                ringRef.current,
                { scale: 0.55, autoAlpha: 0.5 },
                { scale: 1.6, autoAlpha: 0, duration: 0.7, ease: "power2.out" },
              );
            }
            if (nodeRef.current) {
              gsap.fromTo(
                nodeRef.current,
                { scale: 1 },
                { scale: 1.02, duration: 0.13, yoyo: true, repeat: 1 },
              );
            }
            setObserved((v) => 893_900 + ((v - 893_900 + 137) % 640));
          })
          .to(dot, { autoAlpha: 0, duration: 0.12 });
        return tl;
      });
    },
    { scope, dependencies: [reduce] },
  );

  useEffect(() => {
    for (const tl of timelines.current) {
      if (inView) tl.play();
      else tl.pause();
    }
  }, [inView]);

  return (
    <div ref={scope} className="relative mx-auto aspect-[7/6] w-full max-w-[430px]">
      <svg
        aria-hidden
        viewBox="0 0 360 270"
        className="absolute inset-0 h-full w-full"
      >
        {WIRE_YS.map((y, i) => (
          <path
            key={y}
            id={`${uid}-wire-${i}`}
            d={`M 104 ${y} C 175 ${y}, 185 130, 244 130`}
            fill="none"
            stroke="var(--color-sand-600)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            className="dash-flow"
          />
        ))}
        {WIRE_YS.map((_, i) => (
          <circle
            key={i}
            data-dot={i}
            r="3.2"
            fill="var(--color-pink-500)"
            opacity="0"
          />
        ))}
      </svg>
      {PROVIDERS.map((name, i) => (
        <div
          key={name}
          data-chip={i}
          className="absolute left-[3%] flex h-[38px] w-[102px] items-center justify-center rounded-lg bg-white/80 font-mono text-[11px] text-sand-800 shadow-sm"
          style={{ top: `${(WIRE_YS[i] / 270) * 100}%`, translate: "0 -50%" }}
        >
          {name}
        </div>
      ))}
      <div
        aria-hidden
        ref={ringRef}
        className="absolute right-[3%] top-1/2 h-24 w-28 -translate-y-1/2 rounded-2xl border-2 border-pink-300 opacity-0"
      />
      <div
        ref={nodeRef}
        className="absolute right-[3%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-1.5 rounded-xl bg-white/90 px-4 py-3 shadow-md"
      >
        <Image src="/icon.png" alt="" width={30} height={30} />
        <p className="text-[11px] font-semibold tracking-tight text-sand-900">
          Capture Lab
        </p>
        <div className="flex gap-1">
          {["billed", "seats", "usage"].map((tag) => (
            <span
              key={tag}
              className="rounded bg-sand-200 px-1 py-0.5 font-mono text-[8px] text-sand-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-numeric tabular text-[10px] text-sand-700">
          <NumberFlow
            value={observed}
            format={{
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }}
          />
          /yr observed
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- */
/* 02 · Price every outcome: a sheet that keeps auditing itself         */
/* ------------------------------------------------------------------- */

const BASE_ROWS = [
  { label: "merged PR", price: 30.0, w: 72 },
  { label: "resolved ticket", price: 0.16, w: 22 },
  { label: "processed claim", price: 1.12, w: 38 },
  { label: "reviewed contract", price: 3.8, w: 48 },
];

export function PriceDiagram() {
  const scope = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(scope, { margin: "-15%" });
  const [prices, setPrices] = useState(BASE_ROWS.map((r) => r.price));
  const drift = useRef(0);

  // ambient life: one row re-measures every couple of seconds
  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => {
      drift.current += 1;
      const row = drift.current % BASE_ROWS.length;
      const jitter = [0.24, 0.01, 0.04, 0.12][row];
      setPrices((prev) =>
        prev.map((p, i) =>
          i === row
            ? Math.round(
                (BASE_ROWS[i].price +
                  Math.sin(drift.current * 1.7) * jitter) *
                  100,
              ) / 100
            : p,
        ),
      );
      const bar = scope.current?.querySelector<HTMLElement>(
        `[data-bar="${row}"]`,
      );
      if (bar) {
        gsap.to(bar, {
          width: `${BASE_ROWS[row].w + Math.sin(drift.current * 1.3) * 4}%`,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    }, 2200);
    return () => clearInterval(id);
  }, [inView, reduce]);

  // the recompute sweep + badge pulse
  useGSAP(
    () => {
      if (reduce || !sweepRef.current) return;
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 4.6 });
      tl.fromTo(
        sweepRef.current,
        { top: "-12%", autoAlpha: 0 },
        { autoAlpha: 0.6, duration: 0.25 },
      )
        .to(sweepRef.current, {
          top: "108%",
          duration: 1.5,
          ease: "power1.inOut",
        })
        .to(sweepRef.current, { autoAlpha: 0, duration: 0.2 }, "-=0.3")
        .call(() => {
          if (badgeRef.current) {
            gsap.fromTo(
              badgeRef.current,
              { scale: 1 },
              { scale: 1.12, duration: 0.16, yoyo: true, repeat: 1 },
            );
          }
        });
      const pause = () => (inView ? tl.play() : tl.pause());
      pause();
    },
    { scope, dependencies: [reduce, inView] },
  );

  return (
    <div
      ref={scope}
      className="relative mx-auto flex aspect-[7/6] w-full max-w-[430px] items-center justify-center"
    >
      <div
        aria-hidden
        className="absolute h-[250px] w-[300px] rounded-xl bg-white/45 shadow-sm"
        style={{ rotate: "4deg" }}
      />
      <span className="float-y absolute right-[6%] top-[7%] rounded-md bg-white/90 px-2 py-1 font-mono text-[10px] text-positive shadow-sm">
        holdout ✓
      </span>
      <span className="absolute bottom-[8%] left-[5%] rounded-md bg-white/80 px-2 py-1 font-mono text-[10px] text-sand-700 shadow-sm">
        vs pre-AI baseline
      </span>
      <div
        className="float-y relative w-[300px] overflow-hidden rounded-xl bg-white/95 p-5 shadow-lg"
        style={{ "--float-rotate": "-4deg" } as React.CSSProperties}
      >
        <div
          aria-hidden
          ref={sweepRef}
          className="pointer-events-none absolute inset-x-0 h-8 opacity-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgb(218 98 125 / 0.16), transparent)",
          }}
        />
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand-700">
            Cost per outcome
          </p>
          <p className="font-numeric tabular text-[10px] text-sand-700">live</p>
        </div>
        <div className="mt-3 space-y-2.5">
          {BASE_ROWS.map((row, i) => (
            <div key={row.label}>
              <div className="flex items-baseline justify-between">
                <p className="text-[12px] text-sand-800">{row.label}</p>
                <p className="font-numeric tabular text-[12px] font-semibold text-sand-900">
                  <NumberFlow
                    value={prices[i]}
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }}
                  />
                </p>
              </div>
              <div className="mt-1 h-1.5 rounded-[3px] bg-sand-200">
                <div
                  data-bar={i}
                  className="h-full rounded-[3px]"
                  style={{
                    width: `${row.w}%`,
                    backgroundColor: "var(--chart-pos)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3.5 flex items-center justify-between border-t border-sand-200 pt-3">
          <p className="text-[11px] text-sand-700">contract review</p>
          <p
            ref={badgeRef}
            className="font-numeric tabular text-[15px] font-bold text-positive"
          >
            9.2&times;
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- */
/* 03 · Move the money: the queue works itself                          */
/* ------------------------------------------------------------------- */

const ACTIONS = [
  {
    tag: "invest",
    rank: "#1",
    title: "Raise contract-review rate limit",
    figure: "+$310k/yr projected",
    sub: "92% confidence",
  },
  {
    tag: "cut",
    rank: "#2",
    title: "Pause sales drafts",
    figure: "saves $34k/qtr",
    sub: "reversible",
  },
  {
    tag: "invest",
    rank: "#3",
    title: "Move summarization to batch",
    figure: "−52% unit cost",
    sub: "no latency need",
  },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function MoveDiagram() {
  const scope = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(scope, { margin: "-15%" });
  const [queue, setQueue] = useState([0, 1, 2]);
  const [phase, setPhase] = useState<"idle" | "press" | "approved">("idle");

  useEffect(() => {
    if (!inView || reduce) return;
    let alive = true;
    (async () => {
      while (alive) {
        await sleep(2100);
        if (!alive) break;
        setPhase("press");
        await sleep(420);
        if (!alive) break;
        setPhase("approved");
        await sleep(1250);
        if (!alive) break;
        setQueue((q) => [...q.slice(1), q[0]]);
        setPhase("idle");
      }
    })();
    return () => {
      alive = false;
      setPhase("idle");
    };
  }, [inView, reduce]);

  return (
    <div
      ref={scope}
      className="relative mx-auto flex aspect-[7/6] w-full max-w-[430px] flex-col items-center justify-center"
    >
      <p className="absolute left-[5%] top-[6%] font-mono text-[10px] uppercase tracking-[0.14em] text-sand-700">
        action queue · ranked by $
      </p>
      <p className="absolute right-[5%] top-[6%] font-numeric tabular text-[10px] text-sand-700">
        $1.2M in play
      </p>
      <div className="relative h-[210px] w-[320px]">
        {queue.map((actionIdx, pos) => {
          const action = ACTIONS[actionIdx];
          const front = pos === 0;
          return (
            <motion.div
              key={actionIdx}
              layout
              animate={{
                y: pos * 16,
                x: pos * 10,
                scale: 1 - pos * 0.045,
                opacity: front ? 1 : pos === 1 ? 0.6 : 0.35,
                zIndex: 3 - pos,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              className="absolute inset-x-0 top-0 rounded-xl bg-white p-4 shadow-lg"
              style={{ zIndex: 3 - pos }}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-sand-700">
                  {action.tag}
                </p>
                <span className="rounded-md bg-pink-50 px-1.5 py-0.5 font-mono text-[10px] text-pink-900">
                  ranked {action.rank}
                </span>
              </div>
              <p className="mt-2 text-[13px] font-semibold text-sand-900">
                {action.title}
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="font-numeric tabular text-[12px] text-positive">
                  {action.figure}
                </p>
                <p className="font-numeric tabular text-[10px] text-sand-700">
                  {action.sub}
                </p>
              </div>
              {front && (
                <>
                  {/* the budget rebalancing when the approval lands */}
                  <div className="mt-2.5 flex h-1.5 gap-1">
                    <motion.div
                      className="rounded-[3px]"
                      style={{ backgroundColor: "var(--chart-neg)" }}
                      animate={{ width: phase === "approved" ? "20%" : "42%" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.div
                      className="rounded-[3px]"
                      style={{ backgroundColor: "var(--chart-pos)" }}
                      animate={{ width: phase === "approved" ? "44%" : "22%" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <motion.span
                      className="sheen inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground"
                      animate={{ scale: phase === "press" ? 0.93 : 1 }}
                      transition={{ duration: 0.16 }}
                    >
                      Approve
                    </motion.span>
                    <span className="inline-flex items-center rounded-md border border-sand-300 px-3 py-1.5 text-[11px] text-sand-700">
                      Later
                    </span>
                    <AnimatePresence>
                      {phase === "approved" && (
                        <motion.span
                          initial={{ opacity: 0, y: 5, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="ml-auto rounded-md bg-white px-2 py-1 font-mono text-[10px] text-positive shadow-sm"
                        >
                          approved ✓
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {phase !== "approved" && (
                      <span className="ml-auto font-mono text-[9px] text-sand-600">
                        auto-drafted
                      </span>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
