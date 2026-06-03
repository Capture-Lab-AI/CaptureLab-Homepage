import { ScrollReveal } from "./scroll-reveal"

export function Pillars() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-rule bg-bg-soft"
    >
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <div className="mb-20 max-w-3xl md:mb-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              How it works
            </p>
            <h2 className="font-display mt-5 text-balance text-[34px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
              Three things Capture Lab does in your territory, every day.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          <Pillar
            number="01"
            tag="Discover"
            title="Find the companies worth calling."
            body="Tell us what you're looking for in plain English. We score every company in your market against it and hand back a ranked list."
            shot="/shots/discover.png"
            alt="Capture Lab Discover — a completed thesis search with ranked candidate companies and match scores."
            chrome="capture-lab.net/discover"
          />
          <Pillar
            number="02"
            tag="Enrich"
            title="Research every company, overnight."
            body="Website, decision-makers, lease data, the last 90 days of news. All on one page, refreshed every night."
            shot="/shots/enrich.png"
            alt="Capture Lab prospect 360 — research brief, decision window, lease data and signals for a company."
            chrome="capture-lab.net/prospects"
            reverse
          />
          <Pillar
            number="03"
            tag="Outreach"
            title="A daily call list with drafts ready to send."
            body="Emails, call scripts, and LinkedIn notes, written from the prospect's lease, recent news, and your last conversation. Log the call and the next one schedules itself."
            shot="/shots/outreach.png"
            alt="Capture Lab Today — the daily action queue of prospects with drafted outreach grouped by time block."
            chrome="capture-lab.net/today"
          />
        </div>
      </div>
    </section>
  )
}

function Pillar({
  number,
  tag,
  title,
  body,
  shot,
  alt,
  chrome,
  reverse = false,
}: {
  number: string
  tag: string
  title: string
  body: string
  shot: string
  alt: string
  chrome: string
  reverse?: boolean
}) {
  return (
    <ScrollReveal>
      <div
        className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            <span className="text-accent">{number}</span> · {tag}
          </p>
          <h3 className="font-display mt-5 text-balance text-[28px] font-normal leading-[1.15] tracking-[-0.02em] text-ink md:text-[36px] lg:text-[40px]">
            {title}
          </h3>
          <p className="mt-6 max-w-prose text-[16px] leading-[1.65] text-ink-2 md:text-[17px]">
            {body}
          </p>
        </div>
        <div className="lg:col-span-7">
          <AppShot src={shot} alt={alt} chrome={chrome} />
        </div>
      </div>
    </ScrollReveal>
  )
}

/* A real product screenshot framed in a minimal browser chrome. */
function AppShot({
  src,
  alt,
  chrome,
}: {
  src: string
  alt: string
  chrome: string
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-rule bg-bg-elev shadow-[0_1px_2px_rgba(20,9,11,0.04),0_24px_48px_-24px_rgba(20,9,11,0.18)]">
      <div className="flex items-center gap-3 border-b border-rule bg-bg-soft px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-rule" />
          <span className="h-2.5 w-2.5 rounded-full bg-rule" />
          <span className="h-2.5 w-2.5 rounded-full bg-rule" />
        </div>
        <div className="mx-auto hidden max-w-[60%] truncate rounded-md bg-bg px-3 py-1 font-mono text-[10.5px] tracking-[0.04em] text-ink-3 sm:block">
          {chrome}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block h-auto w-full"
        width={1440}
        height={900}
      />
    </figure>
  )
}
