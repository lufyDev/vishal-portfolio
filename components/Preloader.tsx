import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const name = "VISHAL";

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("reveal"), 1100);
    const timer2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1550);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex items-center gap-1">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                className="text-5xl font-bold tracking-widest text-accent md:text-7xl"
                style={{ fontFamily: "var(--font-mono)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="ml-1 inline-block h-12 w-[3px] bg-accent md:h-16"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <motion.p
            className="mt-4 text-sm tracking-[0.3em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            FULL STACK DEVELOPER
          </motion.p>

          <motion.div
            className="absolute bottom-16 h-px bg-accent/30"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
