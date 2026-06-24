import { useScroll, useTransform, motion, useSpring } from "motion/react";

import kitBase from "@/assets/kit-base.png";
import kitLid from "@/assets/kit-lid.png";

/**
 * An eyeshadow kit that drifts across the viewport as the page scrolls.
 * Its lid hinges open and shut along the journey, tying the sections together
 * with one continuous, living object.
 */
export function FloatingCompact() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.6,
  });

  const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], ["70vw", "14vw", "76vw", "10vw", "58vw"]);
  const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], ["16vh", "58vh", "30vh", "68vh", "40vh"]);
  const rotate = useTransform(progress, [0, 1], [-8, 14]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.82, 1.05, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.04, 0.94, 1], [0, 0.95, 0.95, 0]);

  // The lid opens and closes repeatedly across the scroll.
  const lidRotate = useTransform(
    progress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [0, -158, -4, -158, -4, -158, -4, -158],
  );

  return (
    <motion.div
      aria-hidden
      style={{ x, y, rotate, scale, opacity }}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden w-[clamp(130px,13vw,210px)] md:block"
    >
      <div className="relative aspect-square [perspective:1000px] [transform-style:preserve-3d]">
        {/* Base — pans visible underneath */}
        <img
          src={kitBase}
          alt=""
          className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(255,45,149,0.4)]"
        />
        {/* Lid — hinges at the top edge */}
        <motion.img
          src={kitLid}
          alt=""
          style={{ rotateX: lidRotate, transformOrigin: "top center" }}
          className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)]"
        />
      </div>
    </motion.div>
  );
}
