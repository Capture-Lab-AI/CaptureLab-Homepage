import { ScrollReveal } from "./scroll-reveal"

export function Problem() {
  return (
    <section id="problem" className="border-t border-rule scroll-mt-20">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                The problem
              </p>
              <h2 className="font-display mt-5 max-w-2xl text-balance text-[34px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
                The best signal in real estate is also the one most brokers
                miss.
              </h2>
              <p className="mt-8 max-w-prose text-[17px] leading-[1.65] text-ink-2 md:text-[18px]">
                You spend half the day jumping between CoStar, LinkedIn, Google
                News, and your CRM, trying to figure out which companies to call
                this week. Capture Lab does that work for you, overnight.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={100}>
              <div className="flex h-full flex-col justify-center border-l border-rule pl-8 lg:pl-12">
                <p className="font-display text-[88px] font-normal leading-none tracking-[-0.04em] text-accent md:text-[110px] lg:text-[132px]">
                  18
                  <span className="font-mono text-[14px] tracking-normal text-ink-3 md:text-[15px]">
                    {" "}mo
                  </span>
                </p>
                <p className="mt-6 max-w-xs font-mono text-[12px] uppercase leading-[1.6] tracking-[0.12em] text-ink-3">
                  The window when tenants start touring. Most brokers find out
                  halfway through.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
