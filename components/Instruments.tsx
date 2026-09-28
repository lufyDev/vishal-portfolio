import {
  instruments,
  instrumentsNote,
  offTheClock,
  experience,
} from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

export default function Instruments() {
  return (
    <Section id="instruments" sunk>
      <SectionHead
        fig="Fig. 05"
        stamp="Instruments"
        title="What I reach for."
        lede={instrumentsNote}
      />

      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {instruments.map((g) => (
          <div key={g.stamp} className="bg-raised p-5">
            <p className="stamp mb-4 text-vermilion">{g.stamp}</p>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="mono border border-rule px-2 py-1 text-[11.5px] text-soft transition-colors hover:border-ink hover:text-ink"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 border border-rule bg-raised px-5 py-4">
        <p className="stamp mb-2 text-faint">{experience.education.stamp}</p>
        <p className="text-[15px] text-soft">{experience.education.line}</p>
      </div>

      {/* off the clock — personality, kept in the margin where it belongs */}
      <div className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="stamp text-vermilion">Fig. 06</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="stamp text-faint">Off the clock</span>
        </div>

        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {offTheClock.map((o) => (
            <div key={o.stamp} className="border-t border-rule pt-4">
              <p className="stamp mb-2 text-faint">{o.stamp}</p>
              <p className="marginalia text-[16px] leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
