import { useState } from "react";
import { caseFiles, type CaseFile } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";
import Diagram from "@/components/diagrams";

const STAGES = [
  { key: "brief", n: "01", label: "Brief" },
  { key: "decomp", n: "02", label: "Decomposition" },
  { key: "arch", n: "03", label: "Architecture" },
  { key: "measured", n: "04", label: "Measured" },
] as const;

type StageKey = (typeof STAGES)[number]["key"];

function Badge({ badge }: { badge: CaseFile["badge"] }) {
  const work = badge === "work";
  return (
    <span
      className="stamp border px-2 py-1"
      style={{
        color: work ? "var(--blueprint)" : "var(--vermilion)",
        borderColor: work ? "var(--blueprint)" : "var(--vermilion)",
        background: work ? "var(--blueprint-wash)" : "var(--vermilion-wash)",
      }}
    >
      {work ? "Work" : "Personal"}
    </span>
  );
}

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
    <div
      role="tablist"
      aria-label="Case stages"
      className="grid grid-cols-2 border-b border-rule sm:grid-cols-4"
    >
      {STAGES.map((s, i) => {
        const on = s.key === active;
        return (
          <button
            key={s.key}
            role="tab"
            aria-selected={on}
            aria-controls={`${id}-${s.key}`}
            onClick={() => onPick(s.key)}
            className={`group flex items-baseline gap-2 px-4 py-3 text-left transition-colors ${
              i < 3 ? "sm:border-r" : ""
            } ${i % 2 === 0 ? "border-r sm:border-r" : ""} ${i < 2 ? "border-b sm:border-b-0" : ""} border-rule`}
            style={{
              background: on ? "var(--paper-raised)" : "transparent",
              color: on ? "var(--ink)" : "var(--ink-faint)",
            }}
          >
            <span
              className="stamp"
              style={{ color: on ? "var(--vermilion)" : "var(--ink-faint)" }}
            >
              {s.n}
            </span>
            <span className="stamp">{s.label}</span>
            {on && <span className="ml-auto h-1.5 w-1.5 shrink-0 bg-vermilion" />}
          </button>
        );
      })}
    </div>
  );
}

function MetricTable({ metrics }: { metrics: CaseFile["metrics"] }) {
  return (
    <>
      {/* desktop: a real table, because the "how measured" column is the point */}
      <div className="hidden overflow-hidden border border-rule md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-sunk">
              {["Metric", "Before", "After", "How measured"].map((h, i) => (
                <th
                  key={h}
                  className={`stamp border-b border-rule px-3.5 py-2.5 font-normal ${
                    i === 3 ? "text-vermilion" : "text-faint"
                  }`}
                  style={{ width: i === 0 ? "22%" : i === 3 ? "34%" : "22%" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map((m, i) => (
              <tr key={m.metric} className={i % 2 ? "bg-sunk/40" : ""}>
                <td className="border-b border-rule px-3.5 py-3 align-top text-[13.5px] leading-snug text-soft">
                  {m.metric}
                </td>
                <td className="value border-b border-rule px-3.5 py-3 align-top text-[13.5px] leading-snug text-faint">
                  {m.before}
                </td>
                <td className="value border-b border-rule px-3.5 py-3 align-top text-[13.5px] font-medium leading-snug text-vermilion">
                  {m.after}
                </td>
                <td className="border-b border-rule px-3.5 py-3 align-top text-[12.5px] leading-snug text-faint">
                  {m.how}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile: stacked records */}
      <div className="space-y-3 md:hidden">
        {metrics.map((m) => (
          <div key={m.metric} className="border border-rule px-3.5 py-3">
            <p className="text-[14px] leading-snug text-ink">{m.metric}</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="value text-[13px] text-faint line-through decoration-rule-strong">
                {m.before}
              </span>
              <span className="text-faint">→</span>
              <span className="value text-[13px] font-medium text-vermilion">{m.after}</span>
            </div>
            <p className="stamp mt-2.5 text-faint">How measured</p>
            <p className="mt-1 text-[12.5px] leading-snug text-faint">{m.how}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function StageBody({ c, stage }: { c: CaseFile; stage: StageKey }) {
  if (stage === "brief") {
    return (
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <div>
          <p className="stamp mb-3 text-faint">As it arrived</p>
          <p className="text-[16.5px] leading-relaxed text-soft">{c.brief}</p>
        </div>
        <div className="space-y-4 border-t border-rule pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <div>
            <p className="stamp mb-2 text-faint">Domain</p>
            <p className="text-[14px] text-ink">{c.domain}</p>
          </div>
          <div>
            <p className="stamp mb-2 text-faint">Span</p>
            <p className="value text-[14px] text-ink">{c.span}</p>
          </div>
          <div>
            <p className="stamp mb-2 text-faint">Status</p>
            <p className="text-[14px] text-vermilion">{c.status}</p>
          </div>
          <div>
            <p className="stamp mb-2 text-faint">Reached for</p>
            <ul className="flex flex-wrap gap-1.5">
              {c.stack.map((s) => (
                <li key={s} className="stamp border border-rule px-2 py-1 text-soft">
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
        <p className="stamp mb-5 text-faint">
          What it actually was ·{" "}
          <span className="text-vermilion">
            ◆ marks an edge case that decided the design
          </span>
        </p>
        <ol className="space-y-0 border-t border-rule">
          {c.decomposition.map((d, i) => (
            <li key={i} className="border-b border-rule py-4">
              <div className="grid gap-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.7fr)] lg:gap-8">
                <div className="flex items-start gap-2.5">
                  <span
                    className="stamp mt-1 shrink-0"
                    style={{ color: d.edge ? "var(--vermilion)" : "var(--ink-faint)" }}
                  >
                    {d.edge ? "◆" : String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-[15px] font-medium leading-snug"
                    style={{ color: d.edge ? "var(--vermilion)" : "var(--ink)" }}
                  >
                    {d.label}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-soft">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (stage === "arch") {
    return (
      <div className="space-y-8">
        <div>
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <p className="stamp text-faint">Schematic</p>
            <p className="stamp text-faint md:hidden" aria-hidden>
              drag to pan →
            </p>
          </div>
          <div className="border border-rule bg-paper p-4 md:p-6">
            <div className="overflow-x-auto">
              <Diagram name={c.diagram} />
            </div>
          </div>
          <p className="marginalia mt-3 text-[14.5px]">{c.diagramCaption}</p>
        </div>

        <div>
          <p className="stamp mb-4 text-faint">
            Decisions · <span className="text-vermilion">and what they were chosen over</span>
          </p>
          <div className="border-t border-rule">
            {c.decisions.map((d, i) => (
              <div key={i} className="border-b border-rule py-4">
                <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
                  <div>
                    <p className="stamp mb-1.5 text-blueprint">Chose</p>
                    <p className="text-[15px] leading-snug text-ink">{d.chose}</p>
                    {d.insteadOf && (
                      <>
                        <p className="stamp mb-1.5 mt-3 text-faint">Instead of</p>
                        <p className="text-[14px] leading-snug text-faint line-through decoration-rule-strong">
                          {d.insteadOf}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="border-t border-rule pt-3 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <p className="stamp mb-1.5 text-vermilion">Because</p>
                    <p className="text-[15px] leading-relaxed text-soft">{d.because}</p>
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
    <div className="space-y-7">
      <MetricTable metrics={c.metrics} />
      <div className="border-l-2 border-vermilion pl-5">
        <p className="stamp mb-2.5 text-vermilion">What I&apos;d do differently</p>
        <p className="text-[15.5px] leading-relaxed text-soft">{c.reflection}</p>
      </div>
    </div>
  );
}

function Entry({ c, defaultOpen }: { c: CaseFile; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const [stage, setStage] = useState<StageKey>("brief");
  const id = `case-${c.id}`;

  return (
    <article className={`plate ${open ? "ticked" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full cursor-pointer px-4 py-4 text-left transition-colors hover:bg-sunk md:px-6 md:py-5"
      >
        <div className="flex items-start gap-4">
          <span className="display shrink-0 text-[clamp(1.6rem,4vw,2.4rem)] leading-none text-vermilion">
            {c.id}
          </span>
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge badge={c.badge} />
              <span className="stamp text-faint">{c.domain}</span>
              <span className="stamp text-faint">· {c.span}</span>
            </div>
            <p className="display text-[clamp(1.2rem,2.8vw,1.85rem)] leading-tight">
              <span className="text-faint">&ldquo;</span>
              {c.ask}
              <span className="text-faint">&rdquo;</span>
            </p>
            <p className="stamp mt-2 text-vermilion">{c.status}</p>
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
          <div
            key={stage}
            role="tabpanel"
            id={`${id}-${stage}`}
            className="rise px-4 py-6 md:px-6 md:py-8"
          >
            <StageBody c={c} stage={stage} />
          </div>

          {/* next stage nudge */}
          {stage !== "measured" && (
            <button
              onClick={() => {
                const i = STAGES.findIndex((s) => s.key === stage);
                setStage(STAGES[i + 1].key);
              }}
              className="stamp flex w-full cursor-pointer items-center justify-between gap-3 border-t border-rule px-4 py-3.5 text-faint transition-colors hover:bg-sunk hover:text-vermilion md:px-6"
            >
              <span>
                Next — {STAGES[STAGES.findIndex((s) => s.key === stage) + 1].n}{" "}
                {STAGES[STAGES.findIndex((s) => s.key === stage) + 1].label}
              </span>
              <span aria-hidden>→</span>
            </button>
          )}
        </div>
      )}
    </article>
  );
}

export default function CaseFiles() {
  const [filter, setFilter] = useState<"all" | "work" | "personal">("all");
  const shown = caseFiles.filter((c) => filter === "all" || c.badge === filter);

  return (
    <Section id="cases" sunk>
      <SectionHead
        fig="Fig. 03"
        stamp="Six problem statements"
        title="Case files."
        lede="Each one opens the same way: the brief as it arrived, what it actually turned out to be, the architecture and what it was chosen over, and the numbers — with how they were measured. Where something is unmeasured or unshipped, the file says so."
      />

      <div className="mb-7 flex flex-wrap items-center gap-2">
        <span className="stamp mr-1 text-faint">Filter</span>
        {(["all", "work", "personal"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="stamp cursor-pointer border px-3 py-2 transition-colors"
            style={{
              borderColor: filter === f ? "var(--ink)" : "var(--rule)",
              background: filter === f ? "var(--ink)" : "transparent",
              color: filter === f ? "var(--paper)" : "var(--ink-soft)",
            }}
          >
            {f === "all" ? `All · ${caseFiles.length}` : f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {shown.map((c, i) => (
          <Entry key={c.id} c={c} defaultOpen={i === 0 && filter === "all"} />
        ))}
      </div>
    </Section>
  );
}
