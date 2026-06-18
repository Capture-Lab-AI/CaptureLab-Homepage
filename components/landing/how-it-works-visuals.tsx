"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

function PanelFrame({
  label,
  status,
  children,
}: {
  label: string;
  status: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-[color:var(--on-deep-rule)] bg-bg-deep shadow-[0_1px_2px_rgba(20,9,11,0.06),0_40px_80px_-40px_rgba(20,9,11,0.5)]">
      <div className="grid-dots absolute inset-0 opacity-60" aria-hidden />
      <div className="relative flex items-center justify-between border-b border-[color:var(--on-deep-rule)] px-5 py-3">
        <span className="eyebrow text-[color:var(--on-deep-3)]">{label}</span>
        <span className="flex items-center gap-2 eyebrow text-[color:var(--on-deep-3)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {status}
        </span>
      </div>
      <div className="relative p-5 md:p-6">{children}</div>
    </div>
  );
}

const item = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE, delay: 0.1 + i * 0.12 },
});

/* 01 — DISCOVER: knowledge library populating with learned processes. */
const learned = [
  { name: "Password reset", from: "1,204 tickets", conf: 0.97 },
  { name: "VPN access request", from: "312 tickets", conf: 0.91 },
  { name: "Laptop provisioning", from: "486 tickets", conf: 0.84 },
  { name: "Incident · payment API 5xx", from: "73 threads", conf: 0.68 },
];

export function DiscoverVisual() {
  return (
    <PanelFrame label="Knowledge library · auto-built" status="Learning">
      <div className="space-y-1">
        {learned.map((row, i) => (
          <motion.div
            key={row.name}
            {...item(i)}
            className="border-t border-[color:var(--on-deep-rule)] py-3.5 first:border-t-0 first:pt-0"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[14px] text-[color:var(--on-deep)] md:text-[15px]">
                {row.name}
              </span>
              <span className="eyebrow text-[color:var(--on-deep-3)]">
                {row.from}
              </span>
            </div>
            <div className="mt-2.5 h-[3px] overflow-hidden rounded-full bg-[rgba(246,242,238,0.08)]">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${row.conf * 100}%` }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.3 + i * 0.12,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </PanelFrame>
  );
}

/* 02 — BUILD: a process assembling itself into runnable steps. */
const buildSteps = [
  "Verify identity",
  "Check group policy",
  "Grant access",
  "Notify requester",
];

export function BuildVisual() {
  return (
    <PanelFrame label="Automation · VPN access request" status="Assembling">
      <div className="flex flex-wrap items-center gap-2">
        {buildSteps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <motion.span
              {...item(i)}
              className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--on-deep-rule)] bg-[rgba(246,242,238,0.04)] px-3 py-2 text-[13px] text-[color:var(--on-deep)]"
            >
              <span className="eyebrow text-accent">{`0${i + 1}`}</span>
              {s}
            </motion.span>
            {i < buildSteps.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                className="text-[color:var(--on-deep-3)]"
                aria-hidden
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            )}
          </div>
        ))}
      </div>
      <motion.div
        {...item(buildSteps.length)}
        className="mt-6 flex items-center justify-between border-t border-[color:var(--on-deep-rule)] pt-4"
      >
        <span className="eyebrow text-[color:var(--on-deep-3)]">
          Assembled from 312 resolved tickets
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(165,56,96,0.16)] px-2.5 py-1 eyebrow text-accent">
          <Check className="h-3 w-3" /> Ready to review
        </span>
      </motion.div>
    </PanelFrame>
  );
}

/* 03 — RUN: an agent executing a process, with human approval. */
const runSteps = [
  { t: "Identity verified", time: "0.4s", done: true },
  { t: "Group policy checked — SSO-Eng", time: "0.9s", done: true },
  { t: "Access grant drafted", time: "1.2s", done: true },
  { t: "Awaiting human approval", time: "now", done: false },
];

export function RunVisual() {
  return (
    <PanelFrame label="Run · INC-4821" status="Executing">
      <div className="space-y-0">
        {runSteps.map((s, i) => (
          <motion.div
            key={s.t}
            {...item(i)}
            className="flex items-center gap-3 border-t border-[color:var(--on-deep-rule)] py-3 first:border-t-0 first:pt-0"
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                s.done
                  ? "bg-[rgba(246,242,238,0.1)] text-[color:var(--on-deep)]"
                  : "border border-accent text-accent"
              }`}
            >
              {s.done ? (
                <Check className="h-3 w-3" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
              )}
            </span>
            <span
              className={`flex-1 text-[13px] md:text-[14px] ${
                s.done
                  ? "text-[color:var(--on-deep-2)]"
                  : "text-[color:var(--on-deep)]"
              }`}
            >
              {s.t}
            </span>
            <span className="eyebrow text-[color:var(--on-deep-3)]">
              {s.time}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        {...item(runSteps.length)}
        className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-[color:var(--on-deep-rule)] bg-[rgba(246,242,238,0.03)] px-4 py-3"
      >
        <span className="flex items-center gap-2 text-[13px] text-[color:var(--on-deep-2)]">
          <ShieldCheck className="h-4 w-4 text-accent" />
          Grounded · logged · reversible
        </span>
        <span className="rounded-full bg-on-deep px-3 py-1.5 text-[12px] font-medium text-ink">
          Approve
        </span>
      </motion.div>
    </PanelFrame>
  );
}
