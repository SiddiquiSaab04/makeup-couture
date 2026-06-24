import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function NeonCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mounted = useIsMounted();

  // useMotionValue bypasses React state for 60fps+ extreme smoothness
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring specifically for the trailing aura
  const springConfig = { damping: 40, stiffness: 150, mass: 0.8 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values instantly
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Check if hovering over clickable elements to grow the aura
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], img')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none hidden md:block">
      {/* Massive soft trailing aura */}
      <motion.div
        className="fixed left-0 top-0 z-40 mix-blend-screen"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.4 : 1,
            opacity: isHovering ? 0.9 : 0.6,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          // More reasonably sized vibrant neon pink aura
          className="h-[300px] w-[300px] rounded-full bg-primary blur-[80px]"
        />
      </motion.div>
      
      {/* Sharp central dot tracking perfectly without spring delay */}
      <motion.div
        className="fixed left-0 top-0 z-[100]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0.2 : 1,
            opacity: isHovering ? 0 : 0.9,
          }}
          transition={{ duration: 0.15 }}
          className="h-[10px] w-[10px] rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
        />
      </motion.div>
    </div>
  );
}
