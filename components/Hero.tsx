import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

const PhotoRing = dynamic(() => import("@/components/PhotoRing"), {
  ssr: false,
});

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: "Twitter" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50">
        <ThreeScene />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span
                className="text-xs uppercase tracking-widest text-muted"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Available for hire
              </span>
            </motion.div>

            <motion.h1
              className="mb-2 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="text-foreground">I BUILD</span>
              <br />
              <span className="gradient-text">EXPERIENCES</span>
            </motion.h1>

            <motion.p
              className="mb-5 flex items-center gap-2 text-sm text-accent md:text-base"
              style={{ fontFamily: "var(--font-mono)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="text-accent">&gt;</span>
              {personalInfo.title}
            </motion.p>

            <motion.p
              className="mb-8 max-w-md text-sm leading-relaxed text-muted md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  VIEW WORK
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-accent-secondary transition-transform duration-300 group-hover:translate-x-0" />
              </a>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent"
                    aria-label={s.label}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhotoRing />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="h-5 w-5 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
