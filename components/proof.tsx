import { CountUp } from "./count-up";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

/**
 * The proof line: two numbers, one sentence, both halves of the product.
 * Green and pink are money direction, exactly as in the product.
 */
export function Proof() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <Scramble text="02 · A finding, not a feature" />
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="font-numeric tabular text-6xl font-semibold tracking-tight text-negative sm:text-7xl">
              <CountUp to={340000} prefix="$" />
            </p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              of last quarter&rsquo;s AI spend produced{" "}
              <span className="text-foreground">nothing measurable</span>.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-numeric tabular text-6xl font-semibold tracking-tight text-positive sm:text-7xl">
              <CountUp to={9.2} decimals={1} suffix="&times;" />
            </p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              is what contract review returns. It has been{" "}
              <span className="text-foreground">rate-limited since March</span>.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 max-w-2xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            Two numbers, one sentence, both halves of the product. Computed
            from your own billing data, with a methodology finance can attack.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
