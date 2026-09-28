import { principles } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

export default function Notes() {
  return (
    <Section id="notes">
      <SectionHead
        fig="Fig. 02"
        stamp="Operating notes"
        title="How I actually work."
        lede="Six positions I hold, each with the moment that earned it. Not values — habits, with receipts."
      />

      <div className="border-t border-rule">
        {principles.map((p) => (
          <article
            key={p.n}
            className="group grid gap-4 border-b border-rule py-7 md:grid-cols-[auto_minmax(0,1.25fr)_minmax(0,1fr)] md:gap-9"
          >
            <span className="display text-[2rem] leading-none text-rule-strong transition-colors group-hover:text-vermilion md:w-14">
              {p.n}
            </span>

            <div>
              <h3 className="display text-[clamp(1.2rem,2.5vw,1.6rem)] leading-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[15.5px] leading-relaxed text-soft">{p.body}</p>
            </div>

            <div className="border-l-2 border-rule pl-4 transition-colors group-hover:border-vermilion">
              <p className="stamp mb-2 text-vermilion">Evidence</p>
              <p className="text-[14px] leading-relaxed text-faint">{p.evidence}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
