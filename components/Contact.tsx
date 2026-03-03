import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: "Twitter" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-2 text-sm tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            05.
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Have a question or want to work together? I&apos;m always open to
              discussing new projects, creative ideas, or opportunities to be part
              of your vision.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 text-xl font-medium text-accent transition-all hover:gap-4"
            >
              <FiMail className="h-5 w-5" />
              {personalInfo.email}
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex gap-4 pt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="glass space-y-5 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm text-muted"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm text-muted"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-lg bg-accent py-3 text-sm font-medium text-background transition-all duration-300 hover:shadow-[0_0_25px_rgba(100,255,218,0.3)]"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 -translate-x-full bg-accent-secondary transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
