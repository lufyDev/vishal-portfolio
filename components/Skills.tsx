import { skills } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

/* The earlier version read as muted grey chips. Now the group name is
 * display type, the chips are filled rather than hairline, and the two
 * core groups are carried in vermilion so the eye lands there first. */

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead
        stamp="Skills"
        title="What I work with."
        lede="Grouped by what I actually reach for. The three marked core are where most of my time goes — and monitoring is the one I would defend hardest."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((g) => {
          const core = Boolean(g.core);
          return (
            <article
              key={g.stamp}
              className="group relative border p-6 transition-colors md:p-8"
              style={{
                borderColor: core ? "var(--vermilion)" : "var(--rule)",
                background: core ? "var(--vermilion-wash)" : "var(--paper-raised)",
              }}
            >
              {/* accent bar */}
              <span
                className="absolute left-0 top-0 h-full w-[3px]"
                style={{ background: core ? "var(--vermilion)" : "transparent" }}
                aria-hidden
              />

              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h3
                  className="display text-[clamp(1.35rem,2.6vw,1.75rem)]"
                  style={{ color: core ? "var(--vermilion)" : "var(--ink)" }}
                >
                  {g.stamp}
                </h3>
                {core && (
                  <span
                    className="stamp shrink-0 border px-2 py-1"
                    style={{ color: "var(--vermilion)", borderColor: "var(--vermilion)" }}
                  >
                    Core
                  </span>
                )}
              </div>

              <p className="mb-6 max-w-[44ch] text-[15px] leading-snug text-soft">{g.lead}</p>

              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="mono px-3 py-2 text-[12.5px] transition-transform hover:-translate-y-px"
                    style={{
                      background: core ? "var(--paper-raised)" : "var(--paper-sunk)",
                      color: "var(--ink)",
                      border: "1px solid var(--rule-strong)",
                    }}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}

        {/* odd number of groups — the spare cell carries the closing note */}
        <div className="flex items-end border border-dashed border-rule-strong p-6 md:p-8">
          <p className="marginalia max-w-[34ch] text-[18px]">
            The list is the easy part. Picking one, and knowing why not the other, is the hard
            part — which is what the next section is actually about.
          </p>
        </div>
      </div>
    </Section>
  );
}
