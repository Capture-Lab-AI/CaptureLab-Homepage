import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

/**
 * The proof line: two numbers, one sentence, both halves of the product.
 * Green and pink here are money direction, exactly as in the product.
 */
export function Proof() {
  return (
    <section className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <p className="eyebrow">A finding, not a feature</p>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <Reveal delay={0.05}>
            <p className="figure text-6xl text-negative sm:text-7xl">
              <CountUp to={340000} prefix="$" />
            </p>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
              of last quarter&rsquo;s AI spend produced{" "}
              <span className="text-foreground">nothing measurable</span>.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="hidden self-center md:block">
            <p className="font-heading text-2xl italic text-muted-foreground">
              Meanwhile,
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="figure text-6xl text-positive sm:text-7xl">
              <CountUp to={9.2} decimals={1} suffix="&times;" />
            </p>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
              is what the contract-review workflow returns — and it has been{" "}
              <span className="text-foreground">rate-limited since March</span>.
            </p>
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
