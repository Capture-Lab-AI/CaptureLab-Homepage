import { ArrowRight } from "lucide-react";
import { LinkButton, CtaDot } from "@/components/ui/button";
import { Reveal, Stagger, Item } from "./motion";
import { HeroVisual } from "./hero-visual";

const CALENDLY = "https://calendly.com/matthew-capture-lab/30min";

const learnsFrom = [
  "ServiceNow",
  "Jira",
  "Zendesk",
  "Salesforce",
  "Slack",
  "Outlook",
  "Confluence",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft accent wash, top-right — the only color bloom on the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-12%] h-[460px] w-[560px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(165,56,96,0.10), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-content px-6 pb-16 pt-14 md:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Stagger gap={0.1}>
              <Item>
                <p className="eyebrow text-accent">
                  Agentic automation platform
                </p>
              </Item>
              <Item>
                <h1 className="font-display mt-6 text-balance text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-ink sm:text-[50px] lg:text-[58px] xl:text-[66px]">
                  Learns how your business runs.{" "}
                  <span className="block">
                    Then <em className="italic">automates</em> it.
                  </span>
                </h1>
              </Item>
              <Item>
                <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-ink-2 md:text-[19px]">
                  Your agents are only as good as what they know. Capture Lab
                  turns the tickets, docs, and conversations you already have
                  into knowledge AI can execute — no scripts, no months of
                  setup.
                </p>
              </Item>
              <Item>
                <div className="mt-9 flex flex-wrap items-center gap-3">
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
              </Item>
              <Item>
                <p className="eyebrow mt-8 text-ink-3">
                  Runs on your stack · Your data stays yours
                </p>
              </Item>
            </Stagger>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.35} y={28}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>

      {/* "Learns from" ticker */}
      <Reveal delay={0.2}>
        <div className="border-y border-rule bg-bg-soft">
          <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-5">
            <span className="eyebrow text-accent">Learns from</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 eyebrow text-ink-3">
              {learnsFrom.map((item, i) => (
                <span key={item} className="flex items-center gap-6">
                  {item}
                  {i < learnsFrom.length - 1 && (
                    <span className="text-rule">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
