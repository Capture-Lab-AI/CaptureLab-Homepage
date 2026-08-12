import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

/**
 * The proof line: two numbers, one sentence, both halves of the product.
 * Green and pink are money direction, exactly as in the product. Hovering a
 * figure shows where it comes from — a claim you can attack is a claim you
 * can believe.
 */
export function Proof() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            02 · A finding, not a feature
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <Reveal delay={0.05}>
            <div className="group">
              <p className="font-numeric tabular text-6xl font-semibold tracking-tight text-negative sm:text-7xl">
                <CountUp to={340000} prefix="$" />
              </p>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
                of last quarter&rsquo;s AI spend produced{" "}
                <span className="text-foreground">nothing measurable</span>.
              </p>
              <p className="mt-3 max-w-xs font-mono text-[11px] leading-relaxed text-muted-foreground/0 transition-colors duration-300 group-hover:text-muted-foreground">
                = runs with no accepted outcome, 90 days, straight off the
                billing APIs
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hidden self-center md:block">
            <p className="font-heading text-2xl italic text-muted-foreground">
              Meanwhile,
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="group">
              <p className="font-numeric tabular text-6xl font-semibold tracking-tight text-positive sm:text-7xl">
                <CountUp to={9.2} decimals={1} suffix="&times;" />
              </p>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
                is what the contract-review workflow returns — and it has been{" "}
                <span className="text-foreground">rate-limited since March</span>
                .
              </p>
              <p className="mt-3 max-w-xs font-mono text-[11px] leading-relaxed text-muted-foreground/0 transition-colors duration-300 group-hover:text-muted-foreground">
                = value per review ÷ fully-loaded cost, holdout-tested, your
                finance team&rsquo;s assumptions
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <p className="mt-14 max-w-2xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            Two numbers, one sentence — both halves of the product. Every
            engagement opens with a version of this, computed from your own
            billing data, with a methodology finance can attack.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
