import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const categories = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Apps" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "ai", label: "AI / ML" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
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
            04.
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.key
                  ? "bg-accent text-background"
                  : "bg-surface text-muted hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(100,255,218,0.05)]"
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <FiFolder className="h-9 w-9 text-accent/60 transition-colors group-hover:text-accent" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted transition-colors hover:text-accent"
                      aria-label="GitHub"
                    >
                      <FiGithub className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted transition-colors hover:text-accent"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-accent/60"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
