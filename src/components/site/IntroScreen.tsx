import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const columnVariants = {
  initial: {
    y: "0%",
  },
  exit: (i: number) => ({
    y: "-100%",
    transition: {
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.08,
    },
  }),
};

const contentVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
    filter: "blur(8px)",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Trigger transition exit after 2.0s
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const text = "VELOUR".split("");

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[999999] overflow-hidden pointer-events-none flex items-center justify-center">
          {/* Background Shutter Columns (Daby / Grid Blocks) */}
          <div className="absolute inset-0 flex pointer-events-auto">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                variants={columnVariants}
                initial="initial"
                exit="exit"
                custom={i}
                className="h-full flex-1 bg-primary relative"
              >
                {/* 4 horizontal sub-blocks in each column to form a 5x4 grid of 'daby' */}
                <div className="absolute inset-0 flex flex-col">
                  {[...Array(4)].map((_, j) => (
                    <div
                      key={j}
                      className="flex-1 border-b border-r border-white/[0.04] relative"
                    >
                      {/* Subtle neon glowing dot in the center of each box for visual luxury */}
                      <div className="absolute top-1/2 left-1/2 h-0.5 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Glowing background radial overlay */}
          <motion.div
            initial={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[var(--gradient-neon)] opacity-60 mix-blend-overlay pointer-events-none"
          />

          {/* Centered Logo text reveal */}
          <motion.div
            variants={contentVariants}
            initial="initial"
            exit="exit"
            className="relative z-10 flex font-display text-[20vh] font-extrabold tracking-[0.2em] text-transparent md:text-[35vh] lg:text-[40vh] select-none pointer-events-none"
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
                initial={{
                  y: "80%",
                  opacity: 0,
                  rotateZ: 8,
                  scale: 0.8,
                  filter: "blur(12px)",
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                  rotateZ: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.15 + i * 0.08,
                }}
                style={{
                  WebkitTextStroke: "min(3px, 0.4vw) rgba(255, 255, 255, 0.9)",
                  display: "inline-block",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
