import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

import heroImg from "@/assets/hero.jpg";

export function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative w-full px-6 py-10">
      <div className="relative mx-auto h-[70vh] max-w-7xl overflow-hidden rounded-[2rem]">
        <motion.img
          style={{ scale, y }}
          src={heroImg}
          alt="VELOUR campaign film"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-[var(--glow-neon)] backdrop-blur-sm"
            aria-label="Play campaign film"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mt-8 font-display text-3xl font-extrabold md:text-5xl"
          >
            Watch the <span className="neon-gradient-text">campaign film</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            SS25 — Colour, in motion
          </motion.p>
        </div>
      </div>
    </section>
  );
}
