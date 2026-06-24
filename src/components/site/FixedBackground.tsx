import { motion, useScroll, useTransform } from "motion/react";

import modelPinkBg from "@/assets/model_pink_bg.png";

/**
 * A single shared backdrop that persists behind every section.
 * It subtly parallaxes and brightens on scroll so moving between
 * sections feels like moving deeper into one continuous space.
 */
export function FixedBackground() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 1], [0, 0.12, 0.22, 0.16]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <img
          src={modelPinkBg}
          alt=""
          className="h-full w-full object-cover blur-[2px]"
          width={1536}
          height={1024}
        />
      </motion.div>

      {/* themed glows */}
      <div className="absolute -left-40 top-1/4 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute -right-40 top-2/3 h-[36rem] w-[36rem] rounded-full bg-secondary/10 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
    </div>
  );
}
