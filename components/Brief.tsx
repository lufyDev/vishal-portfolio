import { useEffect, useState } from "react";
import {
  personalInfo,
  masthead,
  ledger,
  resolutions,
  experience,
} from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { useMediaQuery } from "@/components/externalState";

/* ------------------------------------------------------------------ *
 * The signature interaction: a vague business ask resolving, step by
 * step, into a spec. It is the claim of the whole site, demonstrated
 * rather than asserted.
 * ------------------------------------------------------------------ */

const STEP_MS = 2100;

function Resolver() {
  const [caseIdx, setCaseIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  const active = resolutions[caseIdx];
  const total = active.steps.length;

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(
      () => {
        if (step < total) {
          setStep(step + 1);
        } else {
          setCaseIdx((caseIdx + 1) % resolutions.length);
          setStep(0);
        }
      },
      step === 0 ? 1200 : step === total ? 4200 : STEP_MS,
    );
    return () => clearTimeout(t);
  }, [caseIdx, step, paused, reduced, total]);

  // with reduced motion the whole resolution is shown at once, no stepping
  const shown = reduced ? total : step;

  const pick = (i: number) => {
    setCaseIdx(i);
    setStep(0);
  };

  return (
    <div
      className="plate ticked"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3 border-b border-rule px-4 py-2.5 md:px-5">
        <span className="stamp text-vermilion">Fig. 01 — a vague ask, resolved</span>
        <div className="flex items-center gap-1.5">
          {resolutions.map((r, i) => (
            <button
              key={i}
              onClick={() => pick(i)}
              aria-label={`Show case: ${r.ask}`}
              aria-current={i === caseIdx}
              className="h-[7px] w-[7px] border transition-colors"
              style={{
                borderColor: i === caseIdx ? "var(--vermilion)" : "var(--rule-strong)",
                background: i === caseIdx ? "var(--vermilion)" : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      {/* the ask, as the business said it */}
      <div className="border-b border-rule bg-sunk px-4 py-5 md:px-5">
        <p className="stamp mb-2.5 text-faint">Inbound</p>
        <p className="display text-[clamp(1.25rem,2.6vw,1.75rem)] leading-tight">
          <span className="text-faint">&ldquo;</span>
          {active.ask}
          <span className="text-faint">&rdquo;</span>
          {shown === 0 && <span className="caret ml-1.5" />}
        </p>
      </div>

      {/* it resolves */}
      <ol className="divide-y divide-[var(--rule)]">
        {active.steps.map((s, i) => {
          const visible = i < shown;
          return (
            <li
              key={`${caseIdx}-${i}`}
              className="px-4 py-3.5 transition-all duration-500 md:px-5"
              style={{
                opacity: visible ? 1 : 0.16,
                transform: visible ? "none" : "translateY(5px)",
              }}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
                <div className="flex shrink-0 items-baseline gap-2 sm:w-[132px]">
                  <span
                    className="stamp"
                    style={{ color: visible ? "var(--vermilion)" : "var(--ink-faint)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="stamp text-soft">{s.stamp}</span>
                </div>
                <p className="flex-1 text-[15px] leading-relaxed text-soft">
                  {s.text}
                  {visible && i === shown - 1 && i < active.steps.length - 1 && (
                    <span className="caret ml-1.5" />
                  )}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="rule-dashed flex flex-wrap items-baseline justify-between gap-2 px-4 py-3 md:px-5">
        <p className="marginalia text-[14px]">
          Same four moves every time. The tooling changes; the sequence does not.
        </p>
        <span className="stamp text-faint">{paused ? "paused" : "auto"}</span>
      </div>
    </div>
  );
}

export default function Brief() {
  return (
    <section id="brief" className="border-b border-rule" style={{ scrollMarginTop: "4rem" }}>
      <div className="mx-auto max-w-[1180px] px-5 pt-14 pb-16 md:px-8 md:pt-24 md:pb-24">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="stamp text-vermilion">{masthead.eyebrow}</span>
          <span className="hidden h-px flex-1 bg-rule sm:block" />
          <span className="stamp text-faint">
            {personalInfo.school} · {personalInfo.locus}
          </span>
        </div>

        <h1 className="display rise text-[clamp(2.6rem,8.2vw,6rem)]">
          {masthead.headline}
        </h1>

        <p className="display mt-5 max-w-3xl text-[clamp(1.15rem,2.5vw,1.6rem)] italic text-vermilion">
          {masthead.standfirst}
        </p>

        <div className="mt-10 grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            {masthead.lede.map((p, i) => (
              <p
                key={i}
                className={
                  i === masthead.lede.length - 1
                    ? "display text-[clamp(1.25rem,2.4vw,1.7rem)] leading-snug"
                    : "text-[17px] leading-relaxed text-soft"
                }
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="#cases"
                className="stamp flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-paper transition-colors hover:border-vermilion hover:bg-vermilion"
              >
                Read the case files <FiArrowDown size={12} />
              </a>
              <a
                href={personalInfo.socials.github}
                className="stamp flex items-center gap-2 border border-rule px-3.5 py-2.5 text-soft transition-colors hover:border-ink hover:text-ink"
              >
                <FiGithub size={13} /> GitHub
              </a>
              <a
                href={personalInfo.socials.linkedin}
                className="stamp flex items-center gap-2 border border-rule px-3.5 py-2.5 text-soft transition-colors hover:border-ink hover:text-ink"
              >
                <FiLinkedin size={13} /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="stamp flex items-center gap-2 border border-rule px-3.5 py-2.5 text-soft transition-colors hover:border-ink hover:text-ink"
              >
                <FiMail size={13} /> Email
              </a>
            </div>
          </div>

          {/* the ledger */}
          <div className="grid grid-cols-2 self-start border-l border-t border-rule">
            {ledger.map((l) => (
              <div key={l.label} className="border-r border-b border-rule px-4 py-5">
                <p className="value text-[clamp(1.5rem,3.4vw,2.1rem)] leading-none text-vermilion">
                  {l.value}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-soft">{l.label}</p>
              </div>
            ))}
            <div className="col-span-2 border-r border-b border-rule px-4 py-4">
              <p className="stamp mb-1.5 text-faint">{experience.stamp}</p>
              <p className="text-[14px] leading-snug">
                <span className="text-ink">{experience.role}</span>
                <span className="text-faint"> · {experience.company}</span>
                <span className="text-faint"> · {experience.period}</span>
              </p>
              <p className="mt-2 text-[13px] leading-snug text-soft">{experience.note}</p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Resolver />
        </div>
      </div>
    </section>
  );
}
