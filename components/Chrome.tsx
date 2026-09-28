import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { useTheme, setTheme } from "@/components/externalState";

const nav = [
  { href: "#brief", label: "Brief" },
  { href: "#notes", label: "Notes" },
  { href: "#cases", label: "Case files" },
  { href: "#leverage", label: "Leverage" },
  { href: "#instruments", label: "Instruments" },
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
      <div className="mx-auto flex max-w-[1180px] items-center gap-6 px-5 py-3 md:px-8">
        <a href="#brief" className="group flex items-baseline gap-2.5 shrink-0">
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
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="stamp text-faint">
            {personalInfo.name} · Engineering dossier · built and measured by hand
          </p>
          <p className="stamp text-faint">
            Next.js · no template · {new Date().getFullYear()}
          </p>
        </div>
        <p className="marginalia mt-5 max-w-2xl text-[15px] leading-relaxed">
          Every figure on this page carries how it was measured. Where something is unmeasured or
          unshipped, it says so.
        </p>
      </div>
    </footer>
  );
}

/* Shared section furniture -------------------------------------------- */

export function SectionHead({
  fig,
  stamp,
  title,
  lede,
}: {
  fig: string;
  stamp: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-5 flex items-center gap-3">
        <span className="stamp text-vermilion">{fig}</span>
        <span className="h-px flex-1 bg-rule" />
        <span className="stamp text-faint">{stamp}</span>
      </div>
      <h2 className="display max-w-4xl text-[clamp(1.9rem,4.6vw,3.1rem)]">{title}</h2>
      {lede && (
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-soft">{lede}</p>
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
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">{children}</div>
    </section>
  );
}
