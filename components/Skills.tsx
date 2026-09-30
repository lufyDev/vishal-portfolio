import { skills } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead
        stamp="Skills"
        title="What I work with."
        lede="Grouped by what I actually reach for, not by how long the list looks. The first two are where most of my time goes."
      />

      <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
        {skills.map((g, i) => (
          <div
            key={g.stamp}
            className="bg-raised px-6 py-7 md:px-8 md:py-8"
            style={i < 2 ? { background: "var(--paper-raised)" } : undefined}
          >
            <div className="mb-2 flex items-baseline gap-3">
              <span className="stamp text-vermilion">{g.stamp}</span>
              {i < 2 && <span className="stamp text-faint">core</span>}
            </div>
            <p className="mb-5 max-w-[42ch] text-[14.5px] leading-snug text-soft">{g.lead}</p>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="mono border border-rule px-2.5 py-1.5 text-[12px] text-soft transition-colors hover:border-ink hover:text-ink"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* an odd number of groups leaves one cell — it gets the closing note */}
        <div className="flex items-end bg-sunk px-6 py-7 md:px-8 md:py-8">
          <p className="marginalia max-w-[34ch] text-[17px]">
            The list is the easy part. Picking one, and knowing why not the other, is the hard
            part — which is what the next section is actually about.
          </p>
        </div>
      </div>
    </Section>
  );
}
