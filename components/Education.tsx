import Image from "next/image";
import campus from "@/public/campus.webp";
import { education, about, offTheClock } from "@/data/portfolio";

/* Everything sits on the campus photo so the whole section fits one
 * screen: the school over the open sky, then the short about spanning
 * the full width beneath it. The photo is dark at every hour it was
 * taken, so the type over it is fixed cream rather than themed. */

const OVER = "#f3f0e8";
const OVER_SOFT = "rgba(243, 240, 232, 0.76)";
const OVER_ACCENT = "#f08a62";

export default function Education() {
  return (
    <section
      id="about"
      className="campus relative isolate overflow-hidden border-b border-rule"
      style={{ scrollMarginTop: "5rem" }}
    >
      <Image
        src={campus}
        alt="BITS Pilani campus at dusk, the clock tower lit against a violet sky"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      {/* darken both edges so the type reads, leave the tower clear */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,8,14,0.92) 0%, rgba(10,8,14,0.7) 30%, rgba(10,8,14,0.3) 52%, rgba(10,8,14,0.68) 78%, rgba(10,8,14,0.88) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20"
        style={{ background: "linear-gradient(to bottom, var(--paper), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(10,8,14,0.82) 0%, rgba(10,8,14,0.55) 22%, rgba(10,8,14,0) 46%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-20"
        style={{ background: "linear-gradient(to top, var(--paper), transparent)" }}
      />

      <div className="mx-auto max-w-[1120px] px-5 py-24 md:px-10 md:py-32">
        <div>
          <p className="stamp mb-5" style={{ color: OVER_ACCENT }}>
            {education.stamp}
          </p>

          <h2
            className="display max-w-[9ch] text-[clamp(2.8rem,8vw,5rem)] leading-[0.94]"
            style={{ color: OVER }}
          >
            {education.school}
          </h2>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="stamp" style={{ color: OVER }}>
              {education.degree}
            </span>
            <span className="stamp" style={{ color: OVER_ACCENT }}>
              {education.period}
            </span>
          </div>

          <p className="mt-6 max-w-[44ch] text-[16px] leading-relaxed" style={{ color: OVER_SOFT }}>
            {education.note}
          </p>
        </div>

        {/* the short about, full width beneath the school */}
        <div className="mt-14">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:gap-14">
            <div>
              <p className="stamp mb-4" style={{ color: OVER_ACCENT }}>
                {about.stamp}
              </p>
              <p className="text-[16px] leading-relaxed" style={{ color: OVER }}>
                {about.text}
              </p>
            </div>

            {offTheClock.map((o) => (
              <div
                key={o.stamp}
                className="border-t pt-6 md:border-l md:border-t-0 md:pl-14 md:pt-0"
                style={{ borderColor: "rgba(243, 240, 232, 0.16)" }}
              >
                <p className="stamp mb-2" style={{ color: OVER_ACCENT }}>
                  {o.stamp}
                </p>
                <p className="marginalia text-[17px]" style={{ color: OVER_SOFT }}>
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
