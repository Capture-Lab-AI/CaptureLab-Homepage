import { Reveal } from "./motion";

const rowA = [
  "ServiceNow",
  "Jira",
  "Zendesk",
  "Salesforce",
  "Slack",
  "Outlook",
];
const rowB = [
  "Confluence",
  "PagerDuty",
  "GitHub",
  "Notion",
  "Linear",
  "Intercom",
];

function Chip({ name }: { name: string }) {
  const slug = name.toLowerCase();
  return (
    <span className="flex shrink-0 items-center gap-3 rounded-xl border border-[color:var(--on-deep-rule)] bg-[rgba(246,242,238,0.03)] py-2.5 pl-2.5 pr-5 text-[15px] text-[color:var(--on-deep)]">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logos/integrations/${slug}.svg`}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-[18px] w-[18px] object-contain"
        />
      </span>
      {name}
    </span>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  // Render twice for a seamless -50% translate loop.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-3 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {doubled.map((name, i) => (
          <Chip key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 bg-bg-deep">
      <div className="relative overflow-hidden">
        <div className="grid-dots absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
              <p className="eyebrow text-accent">Integrations</p>
              <h2 className="font-display mt-5 text-balance text-[32px] font-normal leading-[1.1] tracking-[-0.02em] text-[color:var(--on-deep)] md:text-[44px] lg:text-[50px]">
                Works on top of the stack you already run.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-[16px] leading-[1.6] text-[color:var(--on-deep-2)] md:text-[17px]">
                Capture Lab learns from and acts in the tools your teams live
                in. Connect in minutes, with read or read/write scopes you
                control.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              <Marquee items={rowA} />
              <Marquee items={rowB} reverse />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
