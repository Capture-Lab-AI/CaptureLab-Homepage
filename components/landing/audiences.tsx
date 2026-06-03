import { ScrollReveal } from "./scroll-reveal"

const audiences = [
  {
    eyebrow: "For brokers",
    headline: "Get your day back.",
    body: "Two hours of tab-switching becomes a 30-second brief. You start the day with a call list, not a research list.",
  },
  {
    eyebrow: "For team leads",
    headline: "Junior reps, top-performer output.",
    body: "Capture Lab does the research and the synthesis, so every rep on your floor sounds as prepared as your best.",
  },
  {
    eyebrow: "For owners & principals",
    headline: "Nothing falls through.",
    body: "Every prospect gets the right follow-up at the right time, on the right channel. You see it all in one place.",
  },
]

export function Audiences() {
  return (
    <section id="why-capture-lab" className="scroll-mt-20 border-t border-rule bg-bg-soft">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl md:mb-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              Who it&rsquo;s for
            </p>
            <h2 className="font-display mt-5 text-balance text-[34px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[42px] lg:text-[48px]">
              Made for everyone working a deal.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {audiences.map((a, i) => (
            <ScrollReveal key={a.headline} delay={i * 100}>
              <div className="border-t border-ink pt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                  {a.eyebrow}
                </p>
                <p className="font-display mt-5 text-balance text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-ink md:text-[28px]">
                  {a.headline}
                </p>
                <p className="mt-4 text-[16px] leading-[1.6] text-ink-2">
                  {a.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
