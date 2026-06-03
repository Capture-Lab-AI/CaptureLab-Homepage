import { ArrowRight } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"

const tickerItems = [
  "LEASE EXPIRES",
  "FUNDING ROUND",
  "OWNERSHIP CHANGE",
  "HIRING SURGE",
  "M&A",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-content px-6 pb-24 pt-20 md:pb-32 md:pt-28 lg:pb-40 lg:pt-36">
        <ScrollReveal>
          <h1 className="font-display text-[44px] font-normal leading-[1.02] tracking-[-0.02em] text-ink sm:text-[60px] md:text-[76px] lg:text-[88px]">
            Every lease in your market,
            <span className="block">18 months early.</span>
          </h1>

          <p className="mt-8 max-w-prose text-[18px] leading-[1.55] text-ink-2 md:text-[20px]">
            We tell you which companies are about to need space,
            <span className="block">so you can be the call they take.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton
              href="https://calendly.com/matthew-capture-lab/30min"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
            >
              Book a demo
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-[3px]"
              >
                →
              </span>
            </LinkButton>
            <LinkButton
              href="#how-it-works"
              size="lg"
              variant="ghost"
              className="gap-1.5"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 after:ease-out after:content-[''] group-hover:after:w-full">
                See how it works
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1" />
            </LinkButton>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={150}>
        <div className="border-y border-rule bg-bg-soft">
          <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            <span className="text-accent">Signals we watch</span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {tickerItems.map((item, i) => (
                <span key={item} className="flex items-center gap-7">
                  {item}
                  {i < tickerItems.length - 1 && (
                    <span className="text-rule">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
