import { contact, personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const lines = [
  { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "vishal-pundhir",
    href: personalInfo.socials.linkedin,
  },
  { icon: FiGithub, label: "GitHub", value: "lufyDev", href: personalInfo.socials.github },
  { icon: FaXTwitter, label: "X", value: "@VishalP1226", href: personalInfo.socials.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-rule" style={{ scrollMarginTop: "5rem" }}>
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-10 md:py-28">
        <p className="stamp mb-10 text-vermilion">Contact</p>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2.4rem,7vw,4.6rem)]">{contact.title}</h2>
            <p className="mt-6 max-w-[50ch] text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-soft">{contact.lede}</p>
            <p className="marginalia mt-6 max-w-[44ch] text-[17px]">
              I&apos;ll happily argue the other side of anything on this page. Most of what I know
              came from being wrong out loud.
            </p>
          </div>

          <div className="min-w-0 border-t border-rule">
            {lines.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group flex items-center gap-4 border-b border-rule py-4 transition-colors hover:bg-sunk"
              >
                <l.icon size={15} className="shrink-0 text-faint group-hover:text-vermilion" />
                <span className="stamp sr-only min-[480px]:not-sr-only min-[480px]:w-[72px] min-[480px]:shrink-0 text-faint">
                  {l.label}
                </span>
                <span className="mono min-w-0 flex-1 truncate text-[13.5px] text-soft group-hover:text-ink">
                  {l.value}
                </span>
                <FiArrowUpRight
                  size={14}
                  className="hidden shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-vermilion min-[480px]:block"
                />
              </a>
            ))}

            <a
              href={personalInfo.resumeUrl}
              className="stamp mt-6 flex items-center justify-between gap-3 border border-ink bg-ink px-4 py-3.5 text-paper transition-colors hover:border-vermilion hover:bg-vermilion"
            >
              <span>Download my résumé</span>
              <FiArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
