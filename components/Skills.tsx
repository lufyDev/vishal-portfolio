import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import {
  FiMonitor,
  FiServer,
  FiSmartphone,
  FiCpu,
  FiCloud,
  FiPenTool,
} from "react-icons/fi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: FiMonitor,
  backend: FiServer,
  mobile: FiSmartphone,
  ai: FiCpu,
  devops: FiCloud,
  creative: FiPenTool,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
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
            02.
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || FiMonitor;
            return (
              <motion.div
                key={category.title}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(100,255,218,0.05)]"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent/80 transition-all duration-200 hover:bg-accent/15 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
