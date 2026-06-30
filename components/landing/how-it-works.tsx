"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Reveal } from "./motion";
import { DiscoverVisual, BuildVisual, RunVisual } from "./how-it-works-visuals";

const EASE = [0.16, 1, 0.3, 1] as const;
const INTERVAL = 6000;

type Step = {
  num: string;
  label: string;
  title: string;
  body: string;
  Visual: ComponentType;
};

const steps: Step[] = [
  {
    num: "01",
    label: "Discover",
    title: "Learns your processes. Zero setup.",
    body: "Capture Lab reads your tickets, logs, and messages to reverse-engineer how work actually gets done, then organizes it into a library of executable knowledge. No interviews, no workshops.",
    Visual: DiscoverVisual,
  },
  {
    num: "02",
    label: "Build",
    title: "Self-building automations.",
    body: "From that knowledge, Capture Lab assembles the automations itself, mapping each process into steps an agent can run. You review and approve. You never script.",
    Visual: BuildVisual,
  },
  {
    num: "03",
    label: "Run",
    title: "Agents that execute, transparently.",
    body: "Agents run your processes on top of the tools you already use. Every action is grounded in your knowledge, logged, and reversible, with human approval wherever you want it.",
    Visual: RunVisual,
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Scroll-scrub is reserved for large screens, where the side-by-side layout
  // fits in one viewport. Smaller screens keep the timed auto-advance.
  const [scrubbing, setScrubbing] = useState(false);
  const [fill, setFill] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setScrubbing(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Fallback: timed auto-advance on small screens only.
  useEffect(() => {
    if (scrubbing || reduce || paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      INTERVAL,
    );
    return () => clearInterval(t);
  }, [scrubbing, reduce, paused]);

  // Drive the active step from scroll position while the section is pinned.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!scrubbing) return;
    const raw = v * steps.length;
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(raw)));
    setActive(idx);
    setFill(Math.min(1, Math.max(0, raw - idx)));
  });

  const handleTab = (i: number) => {
    if (scrubbing && sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      const target = top + ((i + 0.5) / steps.length) * scrollable;
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      setActive(i);
    }
  };

  const ActiveVisual = steps[active].Visual;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative scroll-mt-20 border-b border-rule bg-bg-soft lg:h-[300vh]"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <div
          className="mx-auto w-full max-w-content px-6 py-24 md:py-32 lg:py-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal>
            <div className="mb-16 max-w-3xl md:mb-20">
              <p className="eyebrow text-ink-3">How it works</p>
              <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
                From your systems to running agents, in three moves.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Tab rail */}
            <div className="lg:col-span-5">
              <Reveal>
                <ul role="tablist" aria-label="How Capture Lab works">
                  {steps.map((step, i) => {
                    const on = i === active;
                    return (
                      <li
                        key={step.label}
                        className="border-t border-rule first:border-t-0"
                      >
                        <button
                          type="button"
                          role="tab"
                          id={`hiw-tab-${i}`}
                          aria-selected={on}
                          aria-controls="hiw-panel"
                          onClick={() => handleTab(i)}
                          className="group w-full rounded-md py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg-soft"
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`eyebrow tabular-nums transition-colors ${
                                on
                                  ? "text-accent"
                                  : "text-ink-3 group-hover:text-ink-2"
                              }`}
                            >
                              {step.num}
                            </span>
                            <span
                              className={`font-display text-[24px] leading-tight tracking-[-0.01em] transition-colors md:text-[28px] ${
                                on
                                  ? "text-ink"
                                  : "text-ink-3 group-hover:text-ink-2"
                              }`}
                            >
                              {step.title}
                            </span>
                          </div>

                          <AnimatePresence initial={false}>
                            {on && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: EASE }}
                                className="overflow-hidden"
                              >
                                <p className="max-w-prose pt-4 pl-[calc(1rem+1.5ch)] text-[15px] leading-[1.6] text-ink-2 md:text-[16px]">
                                  {step.body}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Progress line: scroll-driven when scrubbing, else timed. */}
                          <div className="mt-5 ml-[calc(1rem+1.5ch)] h-px bg-rule">
                            {scrubbing ? (
                              <div
                                className="h-full bg-accent"
                                style={{
                                  width:
                                    i < active
                                      ? "100%"
                                      : on
                                        ? `${fill * 100}%`
                                        : "0%",
                                }}
                              />
                            ) : on && !reduce && !paused ? (
                              <motion.div
                                key={`p-${active}`}
                                className="h-full bg-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                  duration: INTERVAL / 1000,
                                  ease: "linear",
                                }}
                              />
                            ) : on && (reduce || paused) ? (
                              <div className="h-full w-full bg-[rgba(165,56,96,0.5)]" />
                            ) : null}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>

            {/* Visual panel */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div
                  id="hiw-panel"
                  role="tabpanel"
                  aria-labelledby={`hiw-tab-${active}`}
                  className="min-h-[320px] md:min-h-[360px]"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <ActiveVisual />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
