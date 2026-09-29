import { useState } from "react";
import { leverage } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";

function Column({
  stamp,
  items,
  accent,
}: {
  stamp: string;
  items: string[];
  accent: boolean;
}) {
  const colour = accent ? "var(--vermilion)" : "var(--ink-faint)";
  return (
    <div>
      <p className="stamp mb-4" style={{ color: colour }}>
        {stamp}
      </p>
      <ul className="border-t border-rule">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 border-b border-rule py-3.5">
            <span className="stamp mt-1 shrink-0" style={{ color: colour }}>
              {accent ? "◆" : "→"}
            </span>
            <p
              className="text-[15.5px] leading-relaxed"
              style={{ color: accent ? "var(--ink)" : "var(--ink-soft)" }}
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
  const [open, setOpen] = useState(false);

  return (
    <Section id="ai">
      <SectionHead stamp="On AI" title={leverage.title} />

      <p className="max-w-[56ch] text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-soft">
        {leverage.lede}
      </p>

      <div className="mt-10 plate ticked p-6 md:p-9">
        <p className="stamp mb-4 text-vermilion">{leverage.guardrail.stamp}</p>
        <p className="display max-w-[58ch] text-[clamp(1.1rem,2.1vw,1.4rem)]">
          {leverage.guardrail.text}
        </p>
      </div>

      {/* the full split is detail — folded until someone wants it */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="stamp mt-8 flex w-full cursor-pointer items-center justify-between gap-4 border-y border-rule py-4 text-left transition-colors hover:text-vermilion"
      >
        <span>What I hand over, and what I don&apos;t</span>
        <span
          className="text-faint transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
          aria-hidden
        >
          ✛
        </span>
      </button>

      {open && (
        <div className="rise grid gap-10 pt-9 md:grid-cols-2 md:gap-16">
          <Column stamp={leverage.handOver.stamp} items={leverage.handOver.items} accent={false} />
          <Column stamp={leverage.staysMine.stamp} items={leverage.staysMine.items} accent />
          <div className="border-l-2 border-rule pl-5 md:col-span-2">
            <p className="stamp mb-2.5 text-faint">{leverage.system.stamp}</p>
            <p className="max-w-[62ch] text-[15.5px] leading-relaxed text-soft">
              {leverage.system.text}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}
