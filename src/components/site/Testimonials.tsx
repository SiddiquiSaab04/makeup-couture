import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import testimonialsData from "@/data/testimonials.json";

type Voice = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const voices: Voice[] = testimonialsData;

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % voices.length), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const active = voices[index];

  return (
    <section id="voices" className="relative w-full py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary"
        >
          Voices
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 font-display text-4xl font-extrabold md:text-6xl"
        >
          Worn by the <span className="neon-gradient-text">front row.</span>
        </motion.h2>

        <div className="relative min-h-[230px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl font-bold leading-snug text-foreground md:text-4xl md:leading-tight"
            >
              “{active.quote}”
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`name-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <p className="font-semibold text-foreground">{active.name}</p>
            <p className="text-sm text-muted-foreground">{active.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive selectors */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {voices.map((v, i) => {
            const isActive = i === index;
            return (
              <button
                key={v.initials}
                onClick={() => setIndex(i)}
                aria-label={`Show review from ${v.name}`}
                className={`relative flex h-14 w-14 items-center justify-center rounded-full border font-display text-sm font-bold transition-all duration-500 ${
                  isActive
                    ? "scale-110 border-transparent bg-primary text-primary-foreground shadow-[var(--glow-neon)]"
                    : "border-border bg-card/50 text-muted-foreground hover:border-secondary hover:text-foreground"
                }`}
              >
                {v.initials}
                {isActive && (
                  <motion.span
                    layoutId="voice-ring"
                    className="absolute inset-0 rounded-full ring-2 ring-secondary/60"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
