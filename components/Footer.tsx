import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1.5 text-sm text-muted">
          Built with <FiHeart className="h-3.5 w-3.5 text-accent" /> by{" "}
          <span className="text-foreground">{personalInfo.name}</span>
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
