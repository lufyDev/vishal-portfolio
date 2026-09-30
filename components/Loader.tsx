import { personalInfo } from "@/data/portfolio";

/* A registration pass over blank paper, then it lifts. ~1.5s.
 *
 * No state and no effect: CSS animates it out and hides it, the boot
 * script in _document marks repeat visits so it never runs twice in a
 * session, and the reduced-motion rule removes it outright. The page
 * underneath renders the whole time, so nothing waits on this. */

export default function Loader() {
  return (
    <div
      className="loader fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-5">
        <svg width="34" height="34" viewBox="0 0 34 34" className="loader-mark">
          <circle cx="17" cy="17" r="9" fill="none" stroke="var(--vermilion)" strokeWidth="1" />
          <path
            d="M17 0 V11 M17 23 V34 M0 17 H11 M23 17 H34"
            stroke="var(--vermilion)"
            strokeWidth="1"
          />
        </svg>

        <span className="loader-name stamp text-ink">{personalInfo.name}</span>

        <span className="block h-px w-[180px] bg-rule">
          <span className="loader-line block h-full w-full bg-vermilion" />
        </span>
      </div>
    </div>
  );
}
