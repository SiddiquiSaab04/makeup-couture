import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useIsMounted } from "@/hooks/use-is-mounted";

interface CursorState {
  label: string | null;
  isHovering: boolean;
  isMagnetic: boolean;
  magneticRect: {
    x: number;
    y: number;
    width: number;
    height: number;
    borderRadius: string;
  } | null;
}

export function NeonCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    label: null,
    isHovering: false,
    isMagnetic: false,
    magneticRect: null,
  });

  const mounted = useIsMounted();

  // Pointer position motion values for maximum smoothness
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Soft spring config for lazy organic background aura
  const auraSpringConfig = { damping: 45, stiffness: 120, mass: 1.0 };
  const auraX = useSpring(mouseX, auraSpringConfig);
  const auraY = useSpring(mouseY, auraSpringConfig);

  // Responsive spring config for the sharp interactive outer ring
  const ringSpringConfig = { damping: 24, stiffness: 180, mass: 0.6 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Scan for magnetic attraction anchor
      const magneticTarget = target.closest("[data-cursor-magnetic]") as HTMLElement | null;
      
      // Scan for cursor label overlays
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const label = cursorTarget ? cursorTarget.getAttribute("data-cursor") : null;

      // Scan for general interactable elements
      const isClickable = !!target.closest('a, button, [role="button"], img, input, select, textarea, [onclick]');

      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const computedStyle = window.getComputedStyle(magneticTarget);
        const borderRadius = computedStyle.borderRadius || "9999px";

        setCursorState({
          label,
          isHovering: true,
          isMagnetic: true,
          magneticRect: {
            x: centerX,
            y: centerY,
            width: rect.width,
            height: rect.height,
            borderRadius,
          },
        });

        // Magnetically lock the coordinate values to the center of the button
        mouseX.set(centerX);
        mouseY.set(centerY);
      } else {
        setCursorState({
          label,
          isHovering: isClickable,
          isMagnetic: false,
          magneticRect: null,
        });

        // Track raw screen pointer position
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  const { label, isHovering, isMagnetic, magneticRect } = cursorState;

  // Compute interactive ring width/height and rounding
  const ringWidth = isMagnetic && magneticRect ? magneticRect.width + 16 : (label ? 80 : (isHovering ? 48 : 32));
  const ringHeight = isMagnetic && magneticRect ? magneticRect.height + 16 : (label ? 80 : (isHovering ? 48 : 32));
  const ringBorderRadius = isMagnetic && magneticRect ? magneticRect.borderRadius : "50%";

  return (
    <div className="pointer-events-none hidden md:block">
      {/* 1. Background glow aura */}
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
            scale: isHovering ? 1.3 : 1.0,
            opacity: isHovering ? 0.8 : 0.5,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-[250px] w-[250px] rounded-full bg-primary/25 blur-[75px]"
        />
      </motion.div>

      {/* 2. Interactive Outer Ring */}
      <motion.div
        className="fixed left-0 top-0 z-50 mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: ringWidth,
            height: ringHeight,
            borderRadius: ringBorderRadius,
            borderColor: isMagnetic 
              ? "rgba(186, 104, 200, 0.85)" 
              : (label ? "rgba(255, 45, 149, 0.9)" : "rgba(255, 255, 255, 0.4)"),
            backgroundColor: isMagnetic 
              ? "rgba(186, 104, 200, 0.08)" 
              : (label ? "rgba(255, 45, 149, 0.15)" : "rgba(0, 0, 0, 0)"),
          }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 220,
            mass: 0.4
          }}
          className="relative flex items-center justify-center border shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white"
        >
          <AnimatePresence mode="wait">
            {label && (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="font-accent text-[9px] font-black uppercase tracking-[0.25em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* 3. Central responsive pointer dot */}
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
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 0.95,
          }}
          transition={{ duration: 0.2 }}
          className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
        />
      </motion.div>
    </div>
  );
}
