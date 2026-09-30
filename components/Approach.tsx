import { approach } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

/* This is a sequence, not a values list, so it is drawn as one: numbered
 * stops on a line, in order. */

export default function Approach() {
  return (
    <Section id="how">
      <SectionHead
        stamp="How I work"
        title="Same four steps, every time."
        lede="In this order. The tools change constantly; the sequence hasn't."
      />

      <ol className="relative">
        {/* the line the steps sit on */}
        <span
          className="absolute left-[19px] top-4 bottom-4 hidden w-px bg-rule md:block"
          aria-hidden
        />

        {approach.map((a, i) => (
          <li key={a.n} className="relative pb-10 last:pb-0 md:pl-16">
            {/* the stop */}
            <span
              className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center border md:flex"
              style={{
                background: "var(--paper)",
                borderColor: "var(--vermilion)",
              }}
              aria-hidden
            >
              <span className="value text-[13px] text-vermilion">{a.n}</span>
            </span>

            <span className="stamp mb-2 block text-vermilion md:hidden">{a.n}</span>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
              <h3 className="display text-[clamp(1.35rem,2.8vw,1.85rem)] leading-tight">
                {a.title}
              </h3>
              <p className="max-w-[54ch] self-center text-[16px] leading-relaxed text-soft">
                {a.body}
              </p>
            </div>

            {i < approach.length - 1 && (
              <span className="mt-8 block h-px w-full bg-rule md:hidden" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
