import { leverage } from "@/data/portfolio";

/* The claim the whole page rests on. It gets the full width of the row
 * and nothing else competing with it. */

export default function Leverage() {
  return (
    <section id="ai" className="border-b border-rule bg-sunk" style={{ scrollMarginTop: "5rem" }}>
      <div className="mx-auto max-w-[1120px] px-5 py-24 md:px-10 md:py-32">
        <p className="display text-[clamp(1.35rem,2.6vw,1.9rem)] text-faint">{leverage.kicker}</p>

        <h2 className="display mt-4 text-[clamp(2.4rem,7.4vw,5.4rem)] leading-[1.02] text-vermilion">
          {leverage.title}
        </h2>

        <p className="mt-10 max-w-[92ch] text-[clamp(1.05rem,1.9vw,1.3rem)] leading-relaxed text-soft">
          {leverage.lede}
        </p>
      </div>
    </section>
  );
}
