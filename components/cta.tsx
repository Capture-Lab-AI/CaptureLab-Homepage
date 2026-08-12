import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

export function Cta() {
  return (
    <section id="demo" className="hero-wash scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-28 lg:pt-36">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow">Book a demo</p>
            <h2 className="figure mx-auto mt-5 max-w-3xl text-5xl sm:text-6xl">
              Know what it&rsquo;s{" "}
              <span className="italic text-primary">worth</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A thirty-minute walk-through of the method — on your numbers, not
              ours. First findings land in week one, off your billing APIs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:admin@capture-lab.com?subject=Capture%20Lab%20demo"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
              >
                Book a demo
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="mailto:admin@capture-lab.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                admin@capture-lab.com
              </a>
            </div>
          </Reveal>
        </div>

        <footer className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-border py-8 sm:flex-row">
          <Image
            src="/logo.png"
            alt="Capture Lab"
            width={122}
            height={22}
            className="brightness-[1.35]"
          />
          <p className="text-xs text-muted-foreground">
            Portfolio management for enterprise AI.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <p className="font-numeric tabular text-xs text-muted-foreground">
              &copy; 2026 Capture Lab
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
