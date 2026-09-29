import { useState } from "react";
import { about, instruments, instrumentsNote, offTheClock } from "@/data/portfolio";
import { Section } from "@/components/Chrome";

export default function About() {
  const [openTools, setOpenTools] = useState(false);

  return (
    <Section id="about" sunk>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="stamp mb-6 text-vermilion">{about.stamp}</p>
          <p className="max-w-[46ch] text-[clamp(1.1rem,2.1vw,1.35rem)] leading-relaxed">
            {about.text}
          </p>

          <div className="mt-10 space-y-5">
            {offTheClock.map((o) => (
              <div key={o.stamp}>
                <p className="stamp mb-1.5 text-faint">{o.stamp}</p>
                <p className="marginalia max-w-[44ch] text-[17px]">{o.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* tools are a long list nobody skims, so they stay folded away */}
        <div className="self-start">
          <button
            onClick={() => setOpenTools(!openTools)}
            aria-expanded={openTools}
            className="flex w-full cursor-pointer items-center justify-between gap-4 border-y border-rule py-4 text-left transition-colors hover:text-vermilion"
          >
            <span className="stamp">Tools I use</span>
            <span
              className="stamp text-faint transition-transform duration-300"
              style={{ transform: openTools ? "rotate(45deg)" : "none" }}
              aria-hidden
            >
              ✛
            </span>
          </button>

          {openTools && (
            <div className="rise space-y-6 pt-7">
              {instruments.map((g) => (
                <div key={g.stamp}>
                  <p className="stamp mb-3 text-faint">{g.stamp}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="mono border border-rule px-2.5 py-1.5 text-[12px] text-soft"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="marginalia max-w-[42ch] text-[16px]">{instrumentsNote}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
