import { useEffect, useState } from "react";
import { personalInfo, masthead, ledger, resolutions, experience } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { useMediaQuery } from "@/components/externalState";
import Portrait from "@/components/Portrait";

/* ------------------------------------------------------------------ *
 * The one idea on the front page: a vague ask turning into a real
 * answer. Three short lines, nothing more. Everything else is a click.
 * ------------------------------------------------------------------ */

const HOLD_MS = 4600;

function Resolver() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setI((i + 1) % resolutions.length), HOLD_MS);
    return () => clearTimeout(t);
  }, [i, paused, reduced]);

  const r = resolutions[i];

  const rows = [
    { stamp: "They said", text: r.ask, big: true },
    { stamp: "It really was", text: r.real },
    { stamp: "Proof", text: r.proof, accent: true },
  ];

  return (
    <div
      className="plate ticked"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3 border-b border-rule px-5 py-3">
        <span className="stamp text-faint">How a vague ask becomes a real answer</span>
        <div className="flex items-center gap-2">
          {resolutions.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Example ${k + 1}`}
              aria-current={k === i}
              className="h-[7px] w-[7px] border transition-colors"
              style={{
                borderColor: k === i ? "var(--vermilion)" : "var(--rule-strong)",
                background: k === i ? "var(--vermilion)" : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      <div key={i} className="rise divide-y divide-[var(--rule)]">
        {rows.map((row) => (
          <div key={row.stamp} className="px-5 py-5 sm:flex sm:gap-7">
            <span className="stamp mb-2 block shrink-0 text-faint sm:mb-0 sm:w-[124px] sm:pt-1.5">
              {row.stamp}
            </span>
            {row.big ? (
              <p className="display text-[clamp(1.35rem,3vw,1.9rem)]">
                <span className="text-faint">&ldquo;</span>
                {row.text}
                <span className="text-faint">&rdquo;</span>
              </p>
            ) : (
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: row.accent ? "var(--vermilion)" : "var(--ink-soft)" }}
              >
                {row.text}
              </p>
            )}
          </div>
        ))}
      </div>

      <a
        href="#work"
        className="stamp flex items-center justify-between gap-3 border-t border-rule px-5 py-3.5 text-faint transition-colors hover:bg-sunk hover:text-vermilion"
      >
        <span>Open the full story</span>
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export default function Brief() {
  return (
    <section id="top" className="border-b border-rule" style={{ scrollMarginTop: "5rem" }}>
      <div className="mx-auto max-w-[1120px] px-5 pt-16 pb-18 md:px-10 md:pt-28 md:pb-28">
        <p className="stamp mb-7 text-vermilion">
          {masthead.eyebrow} · {personalInfo.locus}
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.75fr)] lg:gap-16">
          <div>
            <h1 className="display rise max-w-[14ch] text-[clamp(2.7rem,6.6vw,4.7rem)]">
              {masthead.headline}
            </h1>

            <p className="mt-8 max-w-[50ch] text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-soft">
              {masthead.lede}
            </p>

            <p className="display mt-6 max-w-[38ch] text-[clamp(1.2rem,2.3vw,1.55rem)] text-vermilion">
              {masthead.kicker}
            </p>
          </div>

          <div className="lg:pt-3">
            <Portrait />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <a
            href="#work"
            className="stamp flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:border-vermilion hover:bg-vermilion"
          >
            See the work <FiArrowDown size={12} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="stamp border border-rule px-4 py-3 text-soft transition-colors hover:border-ink hover:text-ink"
          >
            Résumé
          </a>
          {[
            { icon: FiGithub, href: personalInfo.socials.github, label: "GitHub" },
            { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="border border-rule p-3 text-soft transition-colors hover:border-ink hover:text-ink"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>

        {/* three numbers, then the one interactive idea */}
        <div className="mt-16 grid gap-px border border-rule bg-rule sm:grid-cols-3">
          {ledger.map((l) => (
            <div key={l.label} className="bg-raised px-5 py-6">
              <p className="value text-[clamp(1.7rem,3.4vw,2.2rem)] leading-none text-vermilion">
                {l.value}
              </p>
              <p className="mt-3 text-[14px] leading-snug text-soft">{l.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
          <p className="stamp shrink-0 text-faint">{experience.stamp}</p>
          <p className="max-w-[58ch] text-[15px] leading-relaxed text-soft">
            {experience.line}. {experience.note}
          </p>
        </div>

        <div className="mt-14">
          <Resolver />
        </div>
      </div>
    </section>
  );
}
