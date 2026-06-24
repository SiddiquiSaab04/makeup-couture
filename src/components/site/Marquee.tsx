import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const words = [
  "NEON PIGMENT",
  "CINEMATIC WEAR",
  "CRUELTY-FREE",
  "MADE TO MOVE",
  "HIGH SHINE",
  "STUDIO GRADE",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 22,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-card/40 py-8 backdrop-blur-sm md:py-12">
      <div ref={trackRef} className="flex w-max whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-4xl font-extrabold uppercase tracking-tight text-foreground/90 md:text-6xl">
              {w}
            </span>
            <span className="text-3xl text-primary md:text-5xl">✶</span>
          </span>
        ))}
      </div>
    </section>
  );
}
