import Image, { type StaticImageData } from "next/image";
import { projects, projectsIntro, type Project } from "@/data/portfolio";
import { Section, SectionHead } from "@/components/Chrome";
import { FiArrowUpRight, FiGithub, FiArrowUp, FiLock } from "react-icons/fi";
import itineraryaiShot from "@/public/shots/itineraryai.jpg";
import urbanUpdateShot from "@/public/shots/urban-update.jpg";

/* Two plates, each a screenshot beside the write-up: index, live/private
 * state, what it is, the one decision worth reading, what it's built
 * from, and where to go next. */

const shots: Record<string, StaticImageData> = {
  itineraryai: itineraryaiShot,
  "urban-update": urbanUpdateShot,
};

function StateMark({ p }: { p: Project }) {
  const live = p.state === "live";

  return (
    <span className="flex shrink-0 items-center gap-2">
      {live ? (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--vermilion)" }}
          aria-hidden
        />
      ) : (
        <FiLock size={10} className="text-faint" aria-hidden />
      )}
      <span className="stamp" style={{ color: live ? "var(--vermilion)" : "var(--ink-faint)" }}>
        {p.stateLabel}
      </span>
      <span className="stamp text-faint" aria-hidden>
        ·
      </span>
      <span className="stamp text-faint">{p.span}</span>
    </span>
  );
}

function Links({ p }: { p: Project }) {
  if (p.links.length === 0) {
    return <p className="stamp py-4 text-faint">No public link · happy to walk through it</p>;
  }

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 py-4">
      {p.links.map((l) => {
        const internal = l.kind === "internal";
        // the case file lives above this section, so the arrow points back up
        const Icon = l.kind === "repo" ? FiGithub : internal ? FiArrowUp : FiArrowUpRight;

        return (
          <li key={l.label}>
            <a
              href={l.href}
              target={internal ? undefined : "_blank"}
              rel={internal ? undefined : "noreferrer"}
              className="stamp group/link flex items-center gap-2 transition-colors"
              style={{ color: l.kind === "live" ? "var(--ink)" : "var(--ink-soft)" }}
            >
              <Icon
                size={12}
                className="shrink-0 text-faint transition-colors group-hover/link:text-vermilion"
              />
              <span className="link-ink">{l.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Shot({ p }: { p: Project }) {
  const src = shots[p.shot];
  const live = p.links.find((l) => l.kind === "live");

  const frame = (
    <figure className="project-shot relative block aspect-[1470/682] overflow-hidden border-b border-rule bg-sunk">
      <Image
        src={src}
        alt={p.shotAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
        placeholder="blur"
      />
      {/* a drafting frame over the print, so it reads as a pasted-in plate */}
      <span
        className="pointer-events-none absolute inset-3 border border-dashed"
        style={{ borderColor: "rgba(150,150,150,0.4)" }}
        aria-hidden
      />
    </figure>
  );

  if (!live) return frame;

  return (
    <a
      href={live.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${p.name}`}
      className="block"
    >
      {frame}
    </a>
  );
}

function Plate({ p }: { p: Project }) {
  return (
    <article className="plate ticked project-plate group flex flex-col">
      <Shot p={p} />

      <div className="flex min-w-0 flex-1 flex-col p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <span
            className="display text-[1.5rem] leading-none text-rule-strong transition-colors duration-300 group-hover:text-vermilion"
            aria-hidden
          >
            {p.n}
          </span>
          <StateMark p={p} />
        </div>

        <h3 className="display mt-5 text-[clamp(1.55rem,3.4vw,2.1rem)] leading-tight">{p.name}</h3>
        <p className="stamp mt-2.5 text-vermilion">{p.tagline}</p>

        <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-soft">{p.summary}</p>

        {/* the one decision worth reading */}
        <div className="mt-6 flex gap-3 pl-4" style={{ borderLeft: "2px solid var(--vermilion)" }}>
          <span className="mono mt-[5px] shrink-0 text-[10px] text-vermilion" aria-hidden>
            ◆
          </span>
          <p className="marginalia max-w-[50ch] text-[16.5px]">{p.note}</p>
        </div>

        {/* built with — pushed down so the link row sits on the bottom edge */}
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-8">
          {p.stack.map((s) => (
            <li
              key={s}
              className="mono px-2.5 py-1.5 text-[11.5px] text-soft"
              style={{ background: "var(--paper-sunk)", border: "1px solid var(--rule)" }}
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-rule">
          <Links p={p} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHead
        stamp={projectsIntro.stamp}
        title={projectsIntro.title}
        lede={projectsIntro.lede}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <Plate key={p.n} p={p} />
        ))}
      </div>

      <p className="marginalia mt-8 max-w-[64ch] text-[17px]">
        Smaller experiments — a 3D haunted house, a shirt you can spin and redesign, a Kafka
        implementation, a realtime drawing board — live on GitHub without a write-up.{" "}
        <a
          href="https://github.com/lufyDev?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="link-ink not-italic"
        >
          All of them are there
        </a>
        .
      </p>
    </Section>
  );
}
