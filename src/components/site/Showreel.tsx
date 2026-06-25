import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

import campaignVideo from "@/assets/12642435_1920_1080_50fps.mp4";

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
      <div data-cursor="play" className="relative mx-auto h-[70vh] max-w-7xl overflow-hidden rounded-[2rem]">
        <motion.video
          style={{ scale, y }}
          src={campaignVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
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
