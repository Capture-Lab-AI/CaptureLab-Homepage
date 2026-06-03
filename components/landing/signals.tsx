import { Building2, TrendingUp, Users, RefreshCw, Newspaper } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const signals = [
  {
    Icon: Building2,
    label: "Lease",
    title: "Lease expiring in 12–24 months",
    body: "The window when tenants start touring. Before the incumbent broker even knows.",
  },
  {
    Icon: TrendingUp,
    label: "Funding",
    title: "Funding round",
    body: "More money, more headcount, more space. You want the call before the wire clears.",
  },
  {
    Icon: Users,
    label: "Hiring",
    title: "Hiring surge",
    body: "Headcount moves first. Square footage follows a quarter later.",
  },
  {
    Icon: RefreshCw,
    label: "Ownership",
    title: "Ownership change",
    body: "New decision-maker, the lease conversation resets. First call wins.",
  },
  {
    Icon: Newspaper,
    label: "M&A",
    title: "M&A activity",
    body: "Two footprints become one. Someone's relocating, someone's subleasing.",
  },
]

export function Signals() {
  return (
    <section id="signals" className="border-t border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                The score
              </p>
              <h2 className="font-display mt-5 text-balance text-[34px] font-normal leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px] lg:text-[52px]">
                What pushes a prospect to the top of your call list.
              </h2>
              <p className="mt-6 max-w-prose text-[17px] leading-[1.65] text-ink-2">
                Five signals we watch for. Each one moves the prospect up your
                list.
              </p>
            </div>

            <ul className="lg:col-span-7">
              {signals.map(({ Icon, label, title, body }) => (
                <li
                  key={label}
                  className="grid grid-cols-[auto_120px_1fr] items-start gap-x-6 gap-y-2 border-t border-rule py-7 first:border-t-0 first:pt-0"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center border border-rule bg-bg-elev text-ink-2">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                    {label}
                  </p>
                  <div>
                    <p className="font-display text-[20px] font-medium leading-[1.25] tracking-[-0.01em] text-ink md:text-[22px]">
                      {title}
                    </p>
                    <p className="mt-1.5 text-[15px] leading-[1.55] text-ink-2">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
