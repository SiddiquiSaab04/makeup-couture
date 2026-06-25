import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";

import img1 from "@/assets/Brynleigh De La Pointe.jpg";
import img2 from "@/assets/aynur-aydin-KIBfEAXNT6k-unsplash.jpg";
import img3 from "@/assets/chalo-garcia-kwoAigKnlfo-unsplash.jpg";
import img4 from "@/assets/creativefred-cmaG89fZ-wE-unsplash.jpg";
import img5 from "@/assets/download.jpg";
import img6 from "@/assets/049c77417678390aa81c3f962cb8e135.jpg";
import img7 from "@/assets/a67ce7ed433c6b0bb95175ec9b4452b6.jpg";
import img8 from "@/assets/d463071e4a9c7f3a7449562e43166fa3.jpg"

type Model = {
  name: string;
  role: string;
  img: string;
};

const models: Model[] = [
  { name: "Aria", role: "The Muse", img: img1 },
  { name: "Noor", role: "Neon Editorial", img: img2 },
  { name: "Lena", role: "Velvet Glow", img: img3 },
  { name: "Mara", role: "Charcoal Bloom", img: img4 },
  { name: "Sade", role: "Liquid Light", img: img5 },
  { name: "Yumi", role: "Spotlight Face", img: img6 },
  {name:"Elsa", role:"Charming Face", img:img7}
];

function ModelCard({
  model,
  index,
}: {
  model: Model;
  index: number;
}) {
  return (
    <article className="group relative h-full w-full shrink-0">
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-primary group-hover:shadow-[var(--glow-neon)]">
        <img
          src={model.img}
          alt={`VELOUR muse ${model.name}`}
          loading="lazy"
          className="h-full w-full scale-105 object-cover grayscale-[0.35] transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:grayscale-0"
        />

        {/* neon duotone wash, intensifies on hover */}
        <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-neon)] opacity-25 mix-blend-color transition-opacity duration-500 group-hover:opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

        {/* big index */}
        <span className="absolute right-4 top-3 font-display text-5xl font-extrabold text-foreground/20 transition-colors duration-500 group-hover:text-primary/60">
          0{index + 1}
        </span>

        {/* caption slides up on hover */}
        <div className="absolute inset-x-5 bottom-5">
          <p className="translate-y-2 text-[10px] uppercase tracking-[0.35em] text-secondary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 font-accent">
            {model.role}
          </p>
          <h3 className="font-display text-3xl font-extrabold leading-none text-foreground">
            {model.name}
          </h3>
          <span className="mt-3 inline-block h-px w-0 bg-primary transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
    </article>
  );
}

export function ModelGallery() {
  const ringRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = ringRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(el, {
        rotateY: -360,
        repeat: -1,
        ease: "none",
        duration: 35, // Base smooth speed
      });
    });

    let lastScrollY = window.scrollY;
    let targetTimeScale = 1;
    let currentTimeScale = 1;
    let rafId: number;

    const update = () => {
      const scrollY = window.scrollY;
      const delta = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;

      // Calculate target speed based on how fast we are scrolling.
      targetTimeScale = 1 + delta * 0.15;
      
      // Cap the maximum speed boost to prevent it from looking chaotic
      if (targetTimeScale > 4.5) targetTimeScale = 4.5;

      // Use a faster lerp when accelerating, and a slower lerp when decelerating
      const lerpFactor = targetTimeScale > currentTimeScale ? 0.15 : 0.05;
      currentTimeScale += (targetTimeScale - currentTimeScale) * lerpFactor;

      if (tweenRef.current) {
        tweenRef.current.timeScale(currentTimeScale);
      }

      rafId = requestAnimationFrame(update);
    };

    update();

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section aria-label="VELOUR faces" className="relative mt-24 mb-12 overflow-hidden md:mt-36 md:mb-16">
      {/* heading */}
      <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary font-accent">
              Our Faces
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.04] md:text-6xl">
              Worn on the
              <span className="neon-gradient-text"> front row.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
            Six muses, one house. An endless cast of colour reading from the close-up to the curtain call.
          </p>
        </div>
      </div>

      {/* 3D Curved Gallery Stage */}
      <div className="relative flex h-[500px] w-full items-center justify-center py-10 md:h-[600px] [perspective:1400px]">
        {/* oversized drifting word behind the cast */}
        <div className="pointer-events-none absolute left-0 top-1/2 -z-10 -translate-y-1/2 select-none overflow-hidden whitespace-nowrap w-full">
          <span className="font-display text-[26vw] font-extrabold leading-none text-foreground/[0.04]">
            VELOUR FACES — VELOUR FACES — VELOUR FACES
          </span>
        </div>

        {/* The rotating 3D Ring */}
        <div 
          ref={ringRef} 
          // Slightly smaller image sizes as requested
          className="relative h-[300px] w-[210px] md:h-[400px] md:w-[280px] [transform-style:preserve-3d]"
        >
          {models.map((model, i) => {
            const angle = (360 / models.length) * i;
            return (
              <div
                key={model.name}
                className="absolute inset-0"
                style={{
                  // Position each card in a perfect 3D circle (curve shape)
                  // Smaller translateZ means the radius is smaller, which reduces the gap between cards.
                  transform: `rotateY(${angle}deg) translateZ(clamp(250px, 35vw, 400px))`,
                }}
              >
                <ModelCard model={model} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
