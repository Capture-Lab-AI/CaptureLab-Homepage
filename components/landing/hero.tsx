import { LinkButton, CtaDot } from "@/components/ui/button";
import { Reveal, Stagger, Item } from "./motion";
import { HeroVisual } from "./hero-visual";

const CALENDLY = "https://calendly.com/matthew-capture-lab/30min";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft accent wash, top-center — the only color bloom on the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[560px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(165,56,96,0.10), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-content px-6 pb-16 pt-14 md:pt-20 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Stagger gap={0.1}>
            <Item>
              <h1 className="font-display text-balance text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-ink sm:text-[50px] lg:text-[58px] xl:text-[66px]">
                IT automation,
                <span className="block">
                  That <em className="italic">builds itself.</em>
                </span>
              </h1>
            </Item>
            <Item>
              <p className="mx-auto mt-7 max-w-[36rem] text-[17px] leading-[1.6] text-ink-2 md:text-[19px]">
                Learn from tickets, chats, runbooks, and terminal sessions.
                Turns every resolved incident into automation that improves
                over time.
              </p>
            </Item>
            <Item>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <LinkButton
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
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
            </Item>
          </Stagger>
        </div>

        <div className="mx-auto mt-16 max-w-4xl lg:mt-20">
          <Reveal delay={0.35} y={28}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
