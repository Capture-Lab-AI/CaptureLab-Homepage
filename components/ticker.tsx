const FINDINGS: { text: string; tone: "pos" | "neg" }[] = [
  { text: "retry storm · prod key eng-04 — $18,240/qtr", tone: "neg" },
  { text: "41 Copilot seats idle 90d — $73,800/yr", tone: "neg" },
  { text: "contract-review rate-limited since Mar — 9.2× held back", tone: "pos" },
  { text: "batch-eligible: nightly summarization — −52% unit cost", tone: "pos" },
  { text: "broken prompt cache · support-triage — $9,120/qtr", tone: "neg" },
  { text: "holdout complete: claims intake — +31% throughput", tone: "pos" },
  { text: "shadow AI on expense cards: 7 tools — $31,400/yr", tone: "neg" },
  { text: "winner packaged: eng review agent → 4 teams", tone: "pos" },
];

/** The findings feed — the product talking, in its own voice. */
export function Ticker() {
  const feed = [...FINDINGS, ...FINDINGS];
  return (
    <div className="marquee overflow-hidden border-y border-border bg-background/60 backdrop-blur-sm">
      <div className="marquee-track flex w-max items-center gap-10 py-3 pr-10">
        {feed.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            aria-hidden={i >= FINDINGS.length}
            className="flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] tracking-tight text-muted-foreground"
          >
            <span
              className={`inline-block size-1.5 rounded-full ${
                item.tone === "pos" ? "bg-positive" : "bg-negative"
              }`}
            />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
