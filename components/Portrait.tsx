import Image from "next/image";
import portrait from "@/public/v2.png";
import { personalInfo } from "@/data/portfolio";

/* A print, mounted on card, in a frame, on the drafting table.
 * The beige in the photo reads as the mount, which is why it works
 * here rather than fighting the page. */

const corners = [
  {
    className: "portrait-corner",
    style: {
      top: -1,
      left: -1,
      borderTop: "1px solid",
      borderLeft: "1px solid",
    },
  },
  {
    className: "portrait-corner",
    style: {
      top: -1,
      right: -1,
      borderTop: "1px solid",
      borderRight: "1px solid",
    },
  },
  {
    className: "portrait-corner",
    style: {
      bottom: -1,
      left: -1,
      borderBottom: "1px solid",
      borderLeft: "1px solid",
    },
  },
  {
    className: "portrait-corner",
    style: {
      bottom: -1,
      right: -1,
      borderBottom: "1px solid",
      borderRight: "1px solid",
    },
  },
];

export default function Portrait() {
  return (
    <figure className="portrait relative mx-auto w-full max-w-[330px] lg:mx-0">
      <div className="relative">
        {/* a dimension line down the left edge, the way a drawing is marked up */}
        <div
          className="absolute -left-7 inset-y-0 hidden w-4 lg:block"
          aria-hidden
        >
          <span className="absolute left-1/2 top-0 h-px w-4 -translate-x-1/2 bg-rule-strong" />
          <span className="absolute left-1/2 inset-y-0 w-px -translate-x-1/2 bg-rule" />
          <span className="absolute left-1/2 bottom-0 h-px w-4 -translate-x-1/2 bg-rule-strong" />
        </div>

        <div className="portrait-float plate relative p-2.5">
          {corners.map((c, i) => (
            <span
              key={i}
              className={c.className}
              style={{ ...c.style, borderColor: "var(--vermilion)" }}
              aria-hidden
            />
          ))}

          {/* the plotter line that keeps tracing the frame */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <rect
              className="portrait-trace"
              x="1"
              y="1"
              width="98"
              height="98"
              fill="none"
              stroke="var(--vermilion)"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              opacity={0.3}
            />
          </svg>

          <div className="relative overflow-hidden bg-sunk">
            <Image
              src={portrait}
              alt={`${personalInfo.name}`}
              priority
              sizes="(max-width: 1024px) 330px, 330px"
              className="portrait-print block h-auto w-full"
            />

            {/* one pass over the print on load */}
            <span
              className="portrait-sweep pointer-events-none absolute inset-x-0 top-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--vermilion) 22%, var(--vermilion) 78%, transparent)",
                opacity: 0.55,
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex items-baseline justify-between gap-3">
        <span className="stamp text-ink">{personalInfo.name}</span>
        <span className="stamp text-faint">{personalInfo.school}</span>
      </figcaption>
    </figure>
  );
}
