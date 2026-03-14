import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, education } from "@/data/portfolio";

type Tab = "work" | "education";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  const data = activeTab === "work" ? experiences : education;

  return (
    <section id="experience" className="section-padding relative">
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
            03.
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <motion.div
          className="mb-10 flex gap-1 rounded-full bg-surface p-1"
          style={{ width: "fit-content" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {(["work", "education"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab ? "text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-accent"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">{tab === "work" ? "Work Experience" : "Education"}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-border md:left-[140px]" />

            <div className="space-y-12">
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col gap-2 pl-8 md:flex-row md:gap-8 md:pl-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="hidden w-[120px] shrink-0 text-right md:block">
                    <span
                      className="text-sm text-muted"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <div className="absolute left-0 top-1.5 md:left-[133px]">
                    <div
                      className={`h-[14px] w-[14px] rounded-full border-2 ${
                        "current" in item && item.current
                          ? "border-accent bg-accent/30"
                          : "border-muted bg-background"
                      }`}
                    />
                  </div>

                  <div className="glass flex-1 rounded-xl p-6 transition-all duration-300 hover:border-accent/10">
                    <span
                      className="mb-1 block text-xs text-muted md:hidden"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.period}
                    </span>

                    {"current" in item && item.current && (
                      <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                        Current
                      </span>
                    )}

                    <h3 className="text-lg font-semibold text-foreground">
                      {"role" in item ? item.role : item.degree}
                    </h3>
                    <p className="text-sm text-accent/80">
                      {"company" in item ? item.company : item.institution}
                    </p>
                    {"subtitle" in item && item.subtitle && (
                      <p className="mb-3 text-xs text-muted">{item.subtitle}</p>
                    )}
                    {!("subtitle" in item) && <div className="mb-3" />}

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hi) => (
                        <li key={hi} className="flex gap-2 text-sm text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
