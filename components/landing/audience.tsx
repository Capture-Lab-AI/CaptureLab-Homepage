import { Reveal, Stagger, Item } from "./motion";

const segments = [
  {
    title: "Financial services & insurance",
    body: "Banks, insurers, and capital markets firms where every entitlement and approval is examined by regulators.",
  },
  {
    title: "Healthcare",
    body: "Hospitals, payers, and health systems balancing clinician access to patient data against HIPAA and least-privilege rules.",
  },
  {
    title: "Government & public sector",
    body: "Agencies and public institutions managing clearances, role changes, and access that has to survive an audit.",
  },
];

export function Audience() {
  return (
    <section id="who-we-serve" className="scroll-mt-20 border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-20">
            <p className="eyebrow text-ink-3">Who we serve</p>
            <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
              Built for modern IT teams.
            </h2>
            <p className="mt-7 max-w-prose text-[17px] leading-[1.65] text-ink-2 md:text-[18px]">
              Capture Lab learns how your team handles repetitive IT operations
              and builds the automations itself, going deepest in the regulated
              industries where the stakes are highest.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3" gap={0.1}>
          {segments.map((s) => (
            <Item key={s.title}>
              <div className="h-full rounded-2xl border border-rule bg-bg-elev p-6 md:p-8">
                <span className="block h-px w-8 bg-accent" aria-hidden />
                <h3 className="font-display mt-5 text-[20px] font-normal leading-[1.2] tracking-[-0.01em] text-ink md:text-[22px]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink-2 md:text-[16px]">
                  {s.body}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
