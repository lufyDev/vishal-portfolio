import Image from "next/image";
import campus from "@/public/campus.webp";
import { education, about, offTheClock } from "@/data/portfolio";

/* The campus photo runs full-bleed and the text sits over the sky — the
 * left half of the frame, which is open. The photo is dark at every hour
 * it was taken, so the type over it is fixed cream rather than themed. */

const OVER = "#f3f0e8";
const OVER_SOFT = "rgba(243, 240, 232, 0.78)";
const OVER_ACCENT = "#f08a62";

export default function Education() {
  return (
    <section id="about" className="border-b border-rule" style={{ scrollMarginTop: "5rem" }}>
      <div className="campus relative isolate overflow-hidden">
        <Image
          src={campus}
          alt="BITS Pilani campus at dusk, the clock tower lit against a violet sky"
          fill
          priority={false}
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />

        {/* darken the left, where the words go; leave the tower clear */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,8,14,0.9) 0%, rgba(10,8,14,0.74) 34%, rgba(10,8,14,0.34) 62%, rgba(10,8,14,0.12) 100%)",
          }}
        />
        {/* and fade the whole thing into the page top and bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24"
          style={{ background: "linear-gradient(to bottom, var(--paper), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24"
          style={{ background: "linear-gradient(to top, var(--paper), transparent)" }}
        />

        <div className="mx-auto max-w-[1120px] px-5 py-28 md:px-10 md:py-40">
          <div className="max-w-[46ch]">
            <p className="stamp mb-6" style={{ color: OVER_ACCENT }}>
              {education.stamp}
            </p>

            <h2
              className="display max-w-[9ch] text-[clamp(3rem,9vw,5.8rem)] leading-[0.94]"
              style={{ color: OVER }}
            >
              {education.school}
            </h2>

            <div className="mt-7 flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="stamp" style={{ color: OVER }}>
                {education.degree}
              </span>
              <span className="stamp" style={{ color: OVER_ACCENT }}>
                {education.period}
              </span>
            </div>

            <p
              className="mt-7 max-w-[44ch] text-[16.5px] leading-relaxed"
              style={{ color: OVER_SOFT }}
            >
              {education.note}
            </p>
          </div>
        </div>
      </div>

      {/* about + off the clock, back on paper */}
      <div className="mx-auto max-w-[1120px] px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-10 border-t border-rule pt-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="stamp mb-5 text-vermilion">{about.stamp}</p>
            <p className="max-w-[52ch] text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed">
              {about.text}
            </p>
          </div>

          <div className="space-y-6 self-start">
            {offTheClock.map((o) => (
              <div key={o.stamp}>
                <p className="stamp mb-1.5 text-faint">{o.stamp}</p>
                <p className="marginalia max-w-[42ch] text-[17px]">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
