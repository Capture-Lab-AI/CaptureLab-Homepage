import { LinkButton, CtaDot } from "@/components/ui/button";
import { Reveal } from "./motion";

const CALENDLY = "https://calendly.com/matthew-capture-lab/30min";

export function FinalCTA() {
  return (
    <section id="cta" className="bg-bg-deep">
      <div className="relative overflow-hidden">
        <div className="grid-dots absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-content px-6 py-28 text-[color:var(--on-deep)] md:py-36 lg:py-44">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-balance text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-[color:var(--on-deep)] md:text-[56px] lg:text-[68px]">
                Watch it build itself.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-[17px] leading-[1.6] text-[color:var(--on-deep-2)] md:text-[18px]">
                We&rsquo;ll connect a slice of your data and show you your own
                processes, ready to run.
              </p>
              <div className="mt-10 flex justify-center">
                <LinkButton
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="invert"
                >
                  <CtaDot />
                  Book a demo
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-[3px]"
                  >
                    →
                  </span>
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
