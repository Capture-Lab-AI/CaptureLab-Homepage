import { Reveal, Stagger, Item } from "./motion";

const features = [
  {
    num: "01",
    title: "Self-building automations",
    body: "You don't script the automation. Capture Lab maps each process from your data and builds the steps an agent can run — then keeps them in sync as the way you work changes.",
  },
  {
    num: "02",
    title: "Minimal setup",
    body: "Point it at the systems you already use. There's no taxonomy to define and no workshops to schedule. You see structure in days, not quarters.",
  },
  {
    num: "03",
    title: "Learns your institutional knowledge",
    body: "The fixes buried in tickets, threads, and senior engineers' heads become shared, executable knowledge — not tribal memory that walks out the door.",
  },
  {
    num: "04",
    title: "Full transparency",
    body: "Every step is grounded in a source you can open, every action is logged, and nothing runs without the guardrails and approvals you set.",
  },
];

export function Capabilities() {
  return (
    <section id="platform" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow text-ink-3">Why Capture Lab</p>
                <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[40px] lg:text-[46px]">
                  Built for teams who can&rsquo;t afford a black box.
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Stagger gap={0.1}>
              {features.map((f) => (
                <Item key={f.num}>
                  <div className="grid grid-cols-[2.5ch_1fr] gap-x-5 gap-y-2 border-t border-rule py-8 first:border-t-0 first:pt-0 md:gap-x-8">
                    <span className="eyebrow pt-2 text-accent tabular-nums">
                      {f.num}
                    </span>
                    <div>
                      <h3 className="font-display text-[24px] font-normal leading-[1.15] tracking-[-0.01em] text-ink md:text-[30px]">
                        {f.title}
                      </h3>
                      <p className="mt-3 max-w-prose text-[16px] leading-[1.6] text-ink-2 md:text-[17px]">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
