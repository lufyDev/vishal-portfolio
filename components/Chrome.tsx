import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { useTheme, setTheme } from "@/components/externalState";

const nav = [
  { href: "#how", label: "How I work" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#ai", label: "On AI" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const theme = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="stamp cursor-pointer border border-rule px-2.5 py-2 text-faint transition-colors hover:border-vermilion hover:text-vermilion"
    >
      {theme === "dark" ? "Paper" : "Ink"}
    </button>
  );
}

export function Masthead() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center gap-6 px-5 py-3.5 md:px-10">
        <a href="#top" className="group flex items-baseline gap-2.5 shrink-0">
          <span className="display text-[19px] leading-none">{personalInfo.name}</span>
          <span className="stamp hidden text-faint sm:inline">Engineer</span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="stamp link-ink text-soft">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={personalInfo.resumeUrl}
            className="stamp border border-ink bg-ink px-3 py-2 text-paper transition-colors hover:bg-vermilion hover:border-vermilion"
          >
            Résumé
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* on small screens the nav moves below the title as a scrollable strip */}
      <nav
        aria-label="Sections"
        className="flex gap-4 overflow-x-auto border-t border-rule px-5 py-2.5 lg:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="stamp whitespace-nowrap text-soft">
            {n.label}
          </a>
        ))}
      </nav>

      <div
        className="h-[2px] origin-left bg-vermilion transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="stamp text-faint">{personalInfo.name}</p>
          <p className="stamp text-faint">Built by hand · {new Date().getFullYear()}</p>
        </div>
        <p className="marginalia mt-5 max-w-[56ch] text-[16px]">
          Every number here comes with how I measured it. Where I haven&apos;t measured something,
          I say so.
        </p>
      </div>
    </footer>
  );
}

/* Shared section furniture -------------------------------------------- */

export function SectionHead({
  stamp,
  title,
  lede,
}: {
  stamp: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="stamp mb-5 text-vermilion">{stamp}</p>
      <h2 className="display max-w-[20ch] text-[clamp(1.9rem,4.4vw,3rem)]">{title}</h2>
      {lede && (
        <p className="mt-5 max-w-[58ch] text-[16.5px] leading-relaxed text-soft">{lede}</p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  sunk = false,
}: {
  id: string;
  children: React.ReactNode;
  sunk?: boolean;
}) {
  return (
    <section
      id={id}
      className={`border-b border-rule ${sunk ? "bg-sunk" : ""}`}
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-10 md:py-28">{children}</div>
    </section>
  );
}
