import { LinkButton, CtaDot } from "@/components/ui/button";
import { Reveal, Stagger, Item } from "./motion";

const CALENDLY = "https://calendly.com/matthew-capture-lab/30min";

const week = [
  {
    day: "Day 1",
    t: "Connect a slice of your data",
    d: "One system, read-only. Nothing to configure.",
  },
  {
    day: "Day 3",
    t: "See your process map",
    d: "How work actually runs today — surfaced, not assumed.",
  },
  {
    day: "Day 7",
    t: "Watch the first automation run",
    d: "A real process, executed by an agent, with you in the loop.",
  },
];

export function Pilot() {
  return (
    <section className="border-b border-rule bg-bg-soft">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink-3">Zero-setup pilot</p>
              <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
                See your processes in one week.
              </h2>
              <p className="mt-7 max-w-prose text-[17px] leading-[1.6] text-ink-2 md:text-[18px]">
                Start with a cut of your data. In a week, we&rsquo;ll show you a
                clear view of how your work runs today — and run the first
                process for you.
              </p>
              <div className="mt-9">
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
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="lg:pt-2" gap={0.1}>
              {week.map((w) => (
                <Item key={w.day}>
                  <div className="grid grid-cols-[88px_1fr] items-baseline gap-5 border-t border-rule py-7 first:border-t-0 first:pt-0 md:grid-cols-[120px_1fr] md:gap-8">
                    <span className="eyebrow text-accent">{w.day}</span>
                    <div>
                      <p className="font-display text-[22px] leading-tight tracking-[-0.01em] text-ink md:text-[26px]">
                        {w.t}
                      </p>
                      <p className="mt-2 text-[15px] leading-[1.55] text-ink-2 md:text-[16px]">
                        {w.d}
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
