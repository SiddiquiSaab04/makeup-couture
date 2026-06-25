import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Distance in pixels within which mouse attracts the element
  strength?: number; // Multiplier for target displacement (0.1 to 0.5 is ideal)
}

export function Magnetic({ children, range = 70, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Absolute mouse offset targets relative to button center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring config for luxury elastic rebound physics
  const springConfig = { damping: 18, stiffness: 120, mass: 0.8 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate button center coordinates
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Delta relative to center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < range) {
      setIsHovered(true);
      // Smoothly attract button towards pointer
      x.set(deltaX * strength);
      y.set(deltaY * strength);
    } else {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
