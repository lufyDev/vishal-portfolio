import { useState } from "react";
import { caseFiles, type CaseFile } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";
import Diagram from "@/components/diagrams";

const STAGES = [
  { key: "brief", n: "01", label: "The problem" },
  { key: "decomp", n: "02", label: "What it really was" },
  { key: "arch", n: "03", label: "How I built it" },
  { key: "measured", n: "04", label: "What changed" },
] as const;

type StageKey = (typeof STAGES)[number]["key"];

function Stages({
  active,
  onPick,
  id,
}: {
  active: StageKey;
  onPick: (k: StageKey) => void;
  id: string;
}) {
  return (
    <div role="tablist" aria-label="Stages" className="grid grid-cols-2 border-b border-rule sm:grid-cols-4">
      {STAGES.map((s, i) => {
        const on = s.key === active;
        return (
          <button
            key={s.key}
            role="tab"
            aria-selected={on}
            aria-controls={`${id}-${s.key}`}
            onClick={() => onPick(s.key)}
            className={`flex items-baseline gap-2 border-rule px-4 py-3.5 text-left transition-colors ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < 2 ? "border-b sm:border-b-0" : ""} ${i === 1 ? "sm:border-r" : ""} ${
              i === 2 ? "sm:border-r" : ""
            }`}
            style={{
              background: on ? "var(--paper-raised)" : "transparent",
              color: on ? "var(--ink)" : "var(--ink-faint)",
            }}
          >
            <span className="stamp" style={{ color: on ? "var(--vermilion)" : "var(--ink-faint)" }}>
              {s.n}
            </span>
            <span className="stamp">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function MetricTable({ metrics }: { metrics: CaseFile["metrics"] }) {
  return (
    <>
      <div className="hidden border border-rule md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-sunk">
              {["What", "Before", "After", "How I measured it"].map((h, i) => (
                <th
                  key={h}
                  className={`stamp border-b border-rule px-4 py-3 font-normal ${
                    i === 3 ? "text-vermilion" : "text-faint"
                  }`}
                  style={{ width: i === 0 ? "24%" : i === 3 ? "32%" : "22%" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map((m) => (
              <tr key={m.metric}>
                <td className="border-b border-rule px-4 py-3.5 align-top text-[14px] leading-snug text-soft">
                  {m.metric}
                </td>
                <td className="value border-b border-rule px-4 py-3.5 align-top text-[13.5px] leading-snug text-faint">
                  {m.before}
                </td>
                <td className="value border-b border-rule px-4 py-3.5 align-top text-[13.5px] leading-snug text-vermilion">
                  {m.after}
                </td>
                <td className="border-b border-rule px-4 py-3.5 align-top text-[13px] leading-snug text-faint">
                  {m.how}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {metrics.map((m) => (
          <div key={m.metric} className="border border-rule px-4 py-3.5">
            <p className="text-[15px] leading-snug">{m.metric}</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
              <span className="value text-[13.5px] text-faint line-through decoration-rule-strong">
                {m.before}
              </span>
              <span className="text-faint">→</span>
              <span className="value text-[13.5px] text-vermilion">{m.after}</span>
            </div>
            <p className="mt-2.5 text-[13px] leading-snug text-faint">{m.how}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function StageBody({ c, stage }: { c: CaseFile; stage: StageKey }) {
  if (stage === "brief") {
    return (
      <div className="grid gap-9 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-14">
        <p className="max-w-[62ch] text-[16.5px] leading-relaxed text-soft">{c.brief}</p>
        <div className="space-y-5 border-t border-rule pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div>
            <p className="stamp mb-1.5 text-faint">Where it stands</p>
            <p className="text-[15px] text-vermilion">{c.status}</p>
          </div>
          <div>
            <p className="stamp mb-2 text-faint">Built with</p>
            <ul className="flex flex-wrap gap-1.5">
              {c.stack.map((s) => (
                <li key={s} className="mono border border-rule px-2.5 py-1.5 text-[12px] text-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (stage === "decomp") {
    return (
      <div>
        <p className="stamp mb-6 text-faint">
          <span className="text-vermilion">◆</span> marks the thing that decided the design
        </p>
        <ol className="border-t border-rule">
          {c.decomposition.map((d, i) => (
            <li key={i} className="border-b border-rule py-5">
              <div className="grid gap-2.5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-12">
                <div className="flex items-start gap-3">
                  <span
                    className="stamp mt-1 shrink-0"
                    style={{ color: d.edge ? "var(--vermilion)" : "var(--ink-faint)" }}
                  >
                    {d.edge ? "◆" : String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-[16px] leading-snug"
                    style={{ color: d.edge ? "var(--vermilion)" : "var(--ink)" }}
                  >
                    {d.label}
                  </p>
                </div>
                <p className="max-w-[60ch] text-[15.5px] leading-relaxed text-soft">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (stage === "arch") {
    return (
      <div className="space-y-10">
        <div>
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <p className="stamp text-faint">Diagram</p>
            <p className="stamp text-faint md:hidden" aria-hidden>
              drag to pan →
            </p>
          </div>
          <div className="border border-rule bg-paper p-4 md:p-7">
            <div className="overflow-x-auto">
              <Diagram name={c.diagram} />
            </div>
          </div>
          <p className="marginalia mt-3.5 max-w-[66ch] text-[16px]">{c.diagramCaption}</p>
        </div>

        <div>
          <p className="stamp mb-5 text-faint">
            Choices I made · <span className="text-vermilion">and what I turned down</span>
          </p>
          <div className="border-t border-rule">
            {c.decisions.map((d, i) => (
              <div key={i} className="border-b border-rule py-5">
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <p className="stamp mb-2 text-blueprint">I chose</p>
                    <p className="max-w-[46ch] text-[16px] leading-snug">{d.chose}</p>
                    {d.insteadOf && (
                      <>
                        <p className="stamp mb-2 mt-4 text-faint">Instead of</p>
                        <p className="max-w-[46ch] text-[15px] leading-snug text-faint line-through decoration-rule-strong">
                          {d.insteadOf}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="border-t border-rule pt-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p className="stamp mb-2 text-vermilion">Why</p>
                    <p className="max-w-[54ch] text-[15.5px] leading-relaxed text-soft">
                      {d.because}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <MetricTable metrics={c.metrics} />
      <div className="border-l-2 border-vermilion pl-6">
        <p className="stamp mb-3 text-vermilion">What I&apos;d do differently</p>
        <p className="max-w-[64ch] text-[16px] leading-relaxed text-soft">{c.reflection}</p>
      </div>
    </div>
  );
}

function Entry({ c }: { c: CaseFile }) {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<StageKey>("brief");
  const id = `case-${c.id}`;
  const work = c.badge === "work";

  return (
    <article className={open ? "plate ticked" : "border-b border-rule"}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full cursor-pointer px-0 py-6 text-left transition-colors md:px-6"
        style={open ? { background: "var(--paper-raised)" } : undefined}
      >
        <div className="flex items-start gap-4 md:gap-6">
          <span className="display shrink-0 pt-1 text-[1.6rem] leading-none text-rule-strong">
            {c.id}
          </span>

          <div className="min-w-0 flex-1">
            <p className="display text-[clamp(1.2rem,2.7vw,1.75rem)] leading-snug">
              <span className="text-faint">&ldquo;</span>
              {c.ask}
              <span className="text-faint">&rdquo;</span>
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="stamp" style={{ color: work ? "var(--blueprint)" : "var(--vermilion)" }}>
                {work ? "Work" : "Side project"}
              </span>
              <span className="stamp text-faint">{c.domain}</span>
              <span className="stamp text-soft">→ {c.headline}</span>
            </div>
          </div>

          <span
            className="stamp mt-2 shrink-0 text-faint transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
            aria-hidden
          >
            ✛
          </span>
        </div>
      </button>

      {open && (
        <div id={id}>
          <Stages active={stage} onPick={setStage} id={id} />
          <div key={stage} role="tabpanel" id={`${id}-${stage}`} className="rise px-5 py-8 md:px-8 md:py-10">
            <StageBody c={c} stage={stage} />
          </div>
          {stage !== "measured" && (
            <button
              onClick={() => setStage(STAGES[STAGES.findIndex((s) => s.key === stage) + 1].key)}
              className="stamp flex w-full cursor-pointer items-center justify-between gap-3 border-t border-rule px-5 py-4 text-faint transition-colors hover:bg-sunk hover:text-vermilion md:px-8"
            >
              <span>Next — {STAGES[STAGES.findIndex((s) => s.key === stage) + 1].label}</span>
              <span aria-hidden>→</span>
            </button>
          )}
        </div>
      )}
    </article>
  );
}

export default function CaseFiles() {
  return (
    <Section id="work" sunk>
      <SectionHead
        stamp="Recent work"
        title="Problems I worked on."
        lede="Four recent ones. Open any to see what was asked, what it turned out to be, how I built it and what changed. This is the short version — the rest is what interviews are for."
      />

      <div className="border-t border-rule">
        {caseFiles.map((c) => (
          <Entry key={c.id} c={c} />
        ))}
      </div>
    </Section>
  );
}
