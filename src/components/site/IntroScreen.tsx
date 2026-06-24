import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the intro screen after allowing the fancy animation to play out
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const text = "VELOUR".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-screen"
          // Fully opaque on SSR, slides up smoothly when unmounting.
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-primary"
        >
          <div className="absolute inset-0 bg-[var(--gradient-neon)] opacity-60 mix-blend-overlay" />
          
          <div className="relative z-10 flex font-display text-[16vw] font-extrabold tracking-[0.2em] text-transparent md:text-[10vw]">
            {text.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "80%", opacity: 0, rotateZ: 8, scale: 0.8, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, rotateZ: 0, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 1.4,
                  ease: [0.19, 1, 0.22, 1], // Cinematic easing
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
