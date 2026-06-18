import { Reveal, Stagger, Item } from "./motion";

const hidesIn = [
  { k: "Tickets & logs", v: "Years of resolved cases nobody mined" },
  { k: "Chat threads", v: "The real fix, three replies deep in Slack" },
  { k: "Runbooks & docs", v: "Half-current, scattered across wikis" },
  { k: "Senior people", v: "The steps that only live in their heads" },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-ink-3">The gap</p>
              <h2 className="font-display mt-5 max-w-2xl text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
                Your AI is only as good as what it knows.
              </h2>
              <p className="mt-7 max-w-prose text-[17px] leading-[1.65] text-ink-2 md:text-[18px]">
                Automation projects stall because the AI doesn&rsquo;t
                understand how your organization actually operates. That
                knowledge isn&rsquo;t missing — it&rsquo;s scattered across the
                systems you already run and the people you can least afford to
                interrupt.
              </p>
              <p className="mt-5 max-w-prose text-[17px] leading-[1.65] text-ink-2 md:text-[18px]">
                Capture Lab reads it, structures it, and turns it into something
                an agent can actually execute.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-rule bg-bg-elev p-6 md:p-8">
                <p className="eyebrow text-ink-3">
                  Where your process knowledge lives today
                </p>
                <Stagger className="mt-6" gap={0.07}>
                  {hidesIn.map((row) => (
                    <Item key={row.k}>
                      <div className="grid grid-cols-[140px_1fr] items-baseline gap-4 border-t border-rule py-4 first:border-t-0 first:pt-0 md:grid-cols-[170px_1fr]">
                        <p className="font-display text-[18px] leading-tight text-ink md:text-[20px]">
                          {row.k}
                        </p>
                        <p className="text-[14px] leading-[1.5] text-ink-3 md:text-[15px]">
                          {row.v}
                        </p>
                      </div>
                    </Item>
                  ))}
                </Stagger>
                <p className="mt-6 border-t border-rule pt-5 text-[14px] leading-[1.55] text-ink-2">
                  None of it is in a form an agent can run.{" "}
                  <span className="text-accent">That&rsquo;s the work.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
