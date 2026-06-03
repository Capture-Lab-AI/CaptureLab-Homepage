import { LinkButton } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"

export function FinalCTA() {
  return (
    <section id="cta" className="bg-bg-deep">
      <div className="mx-auto max-w-content px-6 py-28 text-bg md:py-36 lg:py-44">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/60">
              See it live
            </p>
            <h2 className="font-display mt-6 text-balance text-[40px] font-normal leading-[1.05] tracking-[-0.02em] text-bg md:text-[56px] lg:text-[68px]">
              Try it on your market.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-[17px] leading-[1.6] text-bg/75 md:text-[18px]">
              On the demo we&rsquo;ll show you live prospects in your geography,
              with the briefs already written.
            </p>
            <div className="mt-10 flex justify-center">
              <LinkButton
                href="https://calendly.com/matthew-capture-lab/30min"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="invert"
              >
                Talk to our team
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-[3px]"
                >
                  →
                </span>
              </LinkButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
