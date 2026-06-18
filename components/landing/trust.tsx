import { Check } from "lucide-react";
import { Reveal, Stagger, Item } from "./motion";

const columns = [
  {
    eyebrow: "Transparency",
    title: "Nothing happens in a black box.",
    points: [
      "Every answer is grounded in a source you can open",
      "A full audit trail of every action an agent takes",
      "Human approval on any step you choose to gate",
      "Reversible by design — undo a run, not just regret it",
    ],
  },
  {
    eyebrow: "Security",
    title: "Your data stays yours.",
    points: [
      "Scoped to your tenant — your data isn't pooled",
      "Least-privilege access, per integration, revocable anytime",
      "Never used to train shared or third-party models",
      "Encrypted in transit and at rest",
    ],
  },
];

export function Trust() {
  return (
    <section id="security" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-20">
            <p className="eyebrow text-ink-3">Trust &amp; control</p>
            <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
              Powerful, without giving up control.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-0">
          {columns.map((col, ci) => (
            <Reveal
              key={col.eyebrow}
              delay={ci * 0.1}
              className={
                ci === 1
                  ? "md:border-l md:border-rule md:pl-12 lg:pl-16"
                  : "md:pr-12 lg:pr-16"
              }
            >
              <p className="eyebrow text-accent">{col.eyebrow}</p>
              <h3 className="font-display mt-4 text-balance text-[24px] font-normal leading-[1.15] tracking-[-0.01em] text-ink md:text-[30px]">
                {col.title}
              </h3>
              <Stagger className="mt-7" gap={0.07}>
                {col.points.map((p) => (
                  <Item key={p}>
                    <div className="flex items-start gap-3 border-t border-rule py-4 first:border-t-0">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      <span className="text-[15px] leading-[1.55] text-ink-2 md:text-[16px]">
                        {p}
                      </span>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
