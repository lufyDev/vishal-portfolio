import { leverage } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

function Column({
  stamp,
  items,
  tone,
}: {
  stamp: string;
  items: string[];
  tone: "faint" | "verm";
}) {
  const accent = tone === "verm" ? "var(--vermilion)" : "var(--ink-faint)";
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="stamp" style={{ color: accent }}>
          {stamp}
        </span>
        <span className="h-px flex-1" style={{ background: "var(--rule)" }} />
      </div>
      <ul className="space-y-0 border-t border-rule">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 border-b border-rule py-3.5">
            <span className="stamp mt-1 shrink-0" style={{ color: accent }}>
              {tone === "verm" ? "◆" : "→"}
            </span>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: tone === "verm" ? "var(--ink)" : "var(--ink-soft)" }}
            >
              {it}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Leverage() {
  return (
    <Section id="leverage">
      <SectionHead fig="Fig. 04" stamp="The multiplier" title={leverage.title} />

      <div className="mb-12 max-w-3xl space-y-4">
        {leverage.lede.map((p, i) => (
          <p key={i} className="text-[17px] leading-relaxed text-soft">
            {p}
          </p>
        ))}
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <Column stamp={leverage.handOver.stamp} items={leverage.handOver.items} tone="faint" />
        <Column stamp={leverage.staysMine.stamp} items={leverage.staysMine.items} tone="verm" />
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="plate ticked p-5 md:p-7">
          <p className="stamp mb-3 text-vermilion">{leverage.guardrail.stamp}</p>
          <p className="display text-[clamp(1.05rem,2.1vw,1.35rem)] leading-snug">
            {leverage.guardrail.text}
          </p>
        </div>

        <div className="border border-rule bg-sunk p-5 md:p-7">
          <p className="stamp mb-3 text-faint">{leverage.system.stamp}</p>
          <p className="text-[14.5px] leading-relaxed text-soft">{leverage.system.text}</p>
        </div>
      </div>
    </Section>
  );
}
