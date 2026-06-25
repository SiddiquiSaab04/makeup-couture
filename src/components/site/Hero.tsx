import { motion } from "motion/react";
import heroImg from "@/assets/pop_pink_hero.png";
import { RippleImage } from "@/components/site/RippleImage";
import { Magnetic } from "@/components/site/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Hero background image / WebGL canvas */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="VELOUR neon compact powder and brushes"
          className="h-full w-full object-cover"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 z-10 hidden md:block">
          <RippleImage src={heroImg} />
        </div>
        <div className="absolute inset-0 z-20 bg-background/30 pointer-events-none" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 3.0 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-secondary font-accent font-extrabold"
        >
          <span className="h-px w-10 bg-secondary/60" />
          Luxury Beauty Collection
        </motion.p>

        <h1 className="font-display text-[clamp(4rem,12vw,14rem)] font-extrabold leading-[0.8] tracking-tight flex flex-col md:flex-row md:items-baseline md:gap-6">
          {["Beauty,", "Redefined"].map((line, i) => (
            <span key={line} className="block overflow-visible pb-4">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 3.1 + i * 0.12 }}
                className={
                  i === 1
                    ? "inline-block font-accent font-normal text-[clamp(4.5rem,14vw,16rem)] text-primary drop-shadow-[0_0_35px_rgba(255,45,149,0.9)] pl-4 md:pl-0"
                    : "inline-block text-foreground drop-shadow-2xl"
                }
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 3.5 }}
          className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Discover premium makeup essentials crafted to enhance your natural beauty.
            From flawless foundations to vibrant lip colors, every product is designed
            for confidence, elegance, and long-lasting performance.
          </p>

          <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
            <Magnetic range={80} strength={0.35}>
              <a
                href="#products"
                data-cursor-magnetic
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-neon)] transition-transform duration-300 hover:scale-[1.03]"
              >
                Shop Makeup
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <Magnetic range={60} strength={0.3}>
              <a
                href="#about"
                data-cursor-magnetic
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-secondary hover:text-secondary"
              >
                Our story
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.0, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        Scroll
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
