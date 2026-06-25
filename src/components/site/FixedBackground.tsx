import { motion, useScroll, useTransform } from "motion/react";

import modelPinkBg from "@/assets/model_pink_bg.png";

/**
 * A single shared backdrop that persists behind every section.
 * It subtly parallaxes and brightens on scroll so moving between
 * sections feels like moving deeper into one continuous space.
 */
export function FixedBackground() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 1], [0.2, 0.4, 0.6, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.4]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <img
          src={modelPinkBg}
          alt=""
          className="h-full w-full object-cover blur-[1px] brightness-110 contrast-125"
          width={1536}
          height={1024}
        />
      </motion.div>

      {/* themed animated glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-primary/30 blur-[150px] mix-blend-screen" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-40 top-2/3 h-[45rem] w-[45rem] rounded-full bg-secondary/30 blur-[150px] mix-blend-screen" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
    </div>
  );
}
