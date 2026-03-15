import { motion } from "framer-motion";
import { aboutParagraphs, personalInfo } from "@/data/portfolio";

const stats = [
  { label: "Videos / Month", value: "1000+" },
  { label: "Videos / Day", value: "500+" },
  { label: "Platform Uptime", value: "99.9%" },
  { label: "Load Time Win", value: "99.9%" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
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
            01.
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {aboutParagraphs.map((text, i) => (
              <motion.p
                key={i}
                className="text-base leading-relaxed text-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-2.5 text-sm text-accent transition-all hover:border-accent hover:bg-accent/5"
              >
                Download Resume
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                className="mb-4 flex items-center gap-2 text-xs text-muted"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2">about.ts</span>
              </div>
              <pre
                className="overflow-x-auto text-xs leading-relaxed md:text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-accent">developer</span>{" "}
                  <span className="text-muted">=</span> {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">name</span>
                  <span className="text-muted">:</span>{" "}
                  <span className="text-amber-300">
                    &quot;{personalInfo.name}&quot;
                  </span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">role</span>
                  <span className="text-muted">:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Full Stack SDE&quot;
                  </span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">loves</span>
                  <span className="text-muted">:</span> [
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">&quot;Clean Code&quot;</span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">&quot;3D on Web&quot;</span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">
                    &quot;AI Products&quot;
                  </span>
                  <span className="text-muted">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">
                    &quot;Open Source&quot;
                  </span>
                  {"\n"}
                  {"  "}]<span className="text-muted">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">available</span>
                  <span className="text-muted">:</span>{" "}
                  <span className="text-accent">true</span>
                  {"\n"}
                  {"}"}<span className="text-muted">;</span>
                </code>
              </pre>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
