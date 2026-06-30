import { Reveal, Stagger, Item } from "./motion";

const metrics = [
  { value: "70%", label: "less repetitive work" },
  { value: "10×", label: "faster automation deployment" },
  { value: "24/7", label: "continuous execution" },
  { value: "0", label: "workflow diagrams required" },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-20">
            <p className="eyebrow text-ink-3">The payoff</p>
            <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
              Do more, without hiring more.
            </h2>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-10"
          gap={0.1}
        >
          {metrics.map((m) => (
            <Item key={m.label}>
              <div className="border-t border-rule pt-6">
                <p className="font-display text-[44px] font-normal leading-none tracking-[-0.02em] text-accent md:text-[58px] lg:text-[68px]">
                  {m.value}
                </p>
                <p className="mt-4 max-w-[14rem] text-[15px] leading-[1.5] text-ink-2 md:text-[16px]">
                  {m.label}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
