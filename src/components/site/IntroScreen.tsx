import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hold screen, then trigger exit animation
    const timer = setTimeout(() => {
      setShow(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const text = "VELOUR".split("");
  const panelsCount = 5;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-screen"
          // Keep root container fixed while child panels wipe out
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-transparent pointer-events-none"
        >
          {/* 1. Staggered Curtain Reveal Panels */}
          <div className="absolute inset-0 flex w-full h-full pointer-events-none z-0">
            {Array.from({ length: panelsCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 1.0,
                  ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for snappy slide
                  delay: i * 0.08,
                }}
                className="h-full bg-primary relative"
                style={{
                  width: `${100 / panelsCount}%`,
                }}
              >
                {/* Visual texture matching the overlay gradient inside each panel */}
                <div className="absolute inset-0 bg-[var(--gradient-neon)] opacity-40 mix-blend-overlay" />
              </motion.div>
            ))}
          </div>

          {/* 2. Headline text elements */}
          <div className="relative z-10 flex font-display text-[20vh] font-extrabold tracking-[0.2em] text-transparent md:text-[35vh] lg:text-[40vh] pointer-events-none">
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
                exit={{
                  y: "-60%",
                  opacity: 0,
                  scale: 0.85,
                  filter: "blur(8px)",
                  transition: {
                    duration: 0.7,
                    ease: [0.32, 1, 0.22, 1],
                    delay: i * 0.04,
                  },
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.15 + i * 0.08,
                }}
                style={{
                  WebkitTextStroke: "min(3px, 0.4vw) rgba(255, 255, 255, 0.95)",
                  display: "inline-block",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
