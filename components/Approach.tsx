import { approach } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

export default function Approach() {
  return (
    <Section id="how">
      <SectionHead stamp="How I work" title="Four things, every time." />

      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {approach.map((a) => (
          <article key={a.n} className="bg-raised px-6 py-7 md:px-8 md:py-9">
            <span className="stamp text-vermilion">{a.n}</span>
            <h3 className="display mt-4 text-[clamp(1.25rem,2.4vw,1.6rem)]">{a.title}</h3>
            <p className="mt-3 max-w-[42ch] text-[15.5px] leading-relaxed text-soft">{a.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
