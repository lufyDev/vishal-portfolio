import { personalInfo, masthead, ledger, experience } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import Portrait from "@/components/Portrait";

export default function Brief() {
  return (
    <section id="top" className="border-b border-rule" style={{ scrollMarginTop: "5rem" }}>
      <div className="mx-auto max-w-[1120px] px-5 pt-10 pb-16 md:px-10 md:pt-14 md:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.84fr)] lg:gap-14">
          <div>
            <p className="display text-[clamp(1.25rem,2.3vw,1.65rem)] text-soft">{masthead.role}</p>
            <div className="mt-2.5 mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-vermilion" />
              <span className="stamp text-faint">
                {personalInfo.name} · {personalInfo.locus}
              </span>
            </div>

            <h1 className="display rise max-w-[15ch] text-[clamp(2.3rem,4.8vw,3.3rem)] text-vermilion">
              {masthead.headline}
            </h1>

            <p className="display mt-4 max-w-[36ch] text-[clamp(1.1rem,1.9vw,1.3rem)]">
              {masthead.sub}
            </p>

            <p className="mt-6 max-w-[50ch] text-[16px] leading-relaxed text-soft">
              {masthead.lede}
            </p>

            <p className="marginalia mt-3 text-[17px]">{masthead.kicker}</p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
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
          </div>

          {/* photo, and the numbers directly under it */}
          <div className="lg:pt-3">
            <Portrait />

            <div className="mt-7 grid grid-cols-2 gap-px border border-rule bg-rule">
              {ledger.map((l, i) => (
                <div
                  key={l.value}
                  className="bg-raised px-4 py-4"
                  style={i === 1 ? { background: "var(--vermilion-wash)" } : undefined}
                >
                  <p className="value text-[clamp(1.3rem,2.6vw,1.75rem)] leading-none text-vermilion">
                    {l.value}
                  </p>
                  <p className="mt-2 text-[12px] leading-snug text-soft">{l.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-rule pt-6 sm:flex-row sm:gap-6">
          <p className="stamp shrink-0 pt-1 text-faint">{experience.stamp}</p>
          <div>
            <p className="text-[15.5px] text-ink">{experience.line}</p>
            <p className="mt-1 max-w-[70ch] text-[15px] leading-relaxed text-soft">
              {experience.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
