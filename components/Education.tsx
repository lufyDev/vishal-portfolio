import Image from "next/image";
import campus from "@/public/campus.webp";
import { education, about, offTheClock } from "@/data/portfolio";

/* The campus photo is a 3.3:1 panorama, so it runs as a full-width band
 * rather than a cropped backdrop. It fades into the paper at the top and
 * bottom so it belongs to the page instead of sitting on top of it. */

export default function Education() {
  return (
    <section id="about" className="border-b border-rule" style={{ scrollMarginTop: "5rem" }}>
      <div className="mx-auto max-w-[1120px] px-5 pt-20 pb-14 md:px-10 md:pt-28 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="stamp mb-6 text-vermilion">{education.stamp}</p>

            <h2 className="display text-[clamp(2.8rem,8vw,5.2rem)] leading-[0.95]">
              {education.school}
            </h2>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="stamp text-ink">{education.degree}</span>
              <span className="value text-[14px] text-vermilion">{education.period}</span>
            </div>

            <p className="mt-7 max-w-[46ch] text-[16.5px] leading-relaxed text-soft">
              {education.note}
            </p>
          </div>

          <div className="plate ticked self-start p-6 md:p-8">
            <p className="stamp mb-4 text-vermilion">{about.stamp}</p>
            <p className="max-w-[44ch] text-[16.5px] leading-relaxed">{about.text}</p>

            <div className="mt-8 space-y-5 border-t border-rule pt-7">
              {offTheClock.map((o) => (
                <div key={o.stamp}>
                  <p className="stamp mb-1.5 text-faint">{o.stamp}</p>
                  <p className="marginalia max-w-[42ch] text-[17px]">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* the campus, faded into the paper at both edges */}
      <figure className="campus relative">
        <div className="relative h-[220px] w-full overflow-hidden md:h-[340px]">
          <Image
            src={campus}
            alt="BITS Pilani campus at dusk, clock tower lit against a violet sky"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.92]"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 26%, black 74%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 26%, black 74%, transparent)",
            }}
          />
          {/* pull it back toward the paper so it sits in the page, not on it */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--paper) 0%, color-mix(in srgb, var(--paper) 30%, transparent) 26%, transparent 50%, color-mix(in srgb, var(--paper) 30%, transparent) 74%, var(--paper) 100%)",
            }}
          />
        </div>

        <figcaption className="mx-auto max-w-[1120px] px-5 pb-16 md:px-10 md:pb-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-rule pt-4">
            <span className="stamp text-faint">Pilani campus · Rajasthan</span>
            <span className="stamp text-faint">Four years · one degree · a lot of opinions</span>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
