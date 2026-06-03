import { ScrollReveal } from "./scroll-reveal"

// Heights are tuned per-logo for optical balance, not pixel parity: CMU and
// Harvard are wordmarks (wide), Pear is a near-square mark, so they need
// different heights to read at the same visual weight.
const backers = [
  { name: "Carnegie Mellon University", src: "/logos/cmu-wordmark.svg", className: "h-6 md:h-7" },
  { name: "Harvard University", src: "/logos/harvard.svg", className: "h-10 md:h-12" },
  { name: "Pear VC (PearX)", src: "/logos/pearvc.png", className: "h-9 md:h-11" },
]

export function Backed() {
  return (
    <section className="border-t border-rule bg-bg-soft">
      <div className="mx-auto max-w-content px-6 py-14 md:py-16">
        <ScrollReveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            Supported by a team from
          </p>
          <ul className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-14 gap-y-8 md:mt-10 md:gap-x-20">
            {backers.map((b) => (
              <li key={b.name} className="flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.src}
                  alt={b.name}
                  className={`${b.className} w-auto object-contain opacity-60 grayscale transition duration-300 ease-out hover:opacity-100 hover:grayscale-0`}
                />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
