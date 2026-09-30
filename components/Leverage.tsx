import { leverage } from "@/data/portfolio";

/* The claim the whole page rests on, so it gets its own section, sits
 * right under the hero, and carries no furniture. */

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
      <p className="stamp mb-5" style={{ color: colour }}>
        {stamp}
      </p>
      <ul className="border-t border-rule">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3.5 border-b border-rule py-4">
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
  return (
    <section id="ai" className="border-b border-rule bg-sunk" style={{ scrollMarginTop: "5rem" }}>
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-10 md:py-28">
        <p className="display max-w-[24ch] text-[clamp(1.4rem,2.8vw,1.95rem)] text-faint">
          {leverage.kicker}
        </p>

        <h2 className="display mt-4 max-w-[18ch] text-[clamp(2.5rem,6.4vw,4.6rem)] text-vermilion">
          {leverage.title}
        </h2>

        <p className="mt-8 max-w-[58ch] text-[clamp(1.02rem,1.9vw,1.2rem)] leading-relaxed text-soft">
          {leverage.lede}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <Column stamp={leverage.handOver.stamp} items={leverage.handOver.items} accent={false} />
          <Column stamp={leverage.staysMine.stamp} items={leverage.staysMine.items} accent />
        </div>
      </div>
    </section>
  );
}
