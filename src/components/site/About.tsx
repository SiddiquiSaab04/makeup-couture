import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

import { ModelGallery } from "./ModelGallery";
import aboutImg from "@/assets/about.jpg";

const stats = [
  { value: "112", label: "Pigment shades" },
  { value: "0%", label: "Cruelty, ever" },
  { value: "24h", label: "Cinematic wear" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section id="about" ref={ref} className="relative w-full overflow-hidden pt-28 pb-0 md:pt-40 md:pb-0">
      {/* oversized parallax word behind text */}
      <motion.span
        style={{ x: wordX }}
        aria-hidden
        className="pointer-events-none absolute left-0 top-10 select-none whitespace-nowrap font-display text-[22vw] font-extrabold leading-none text-foreground/[0.035]"
      >
        VELOUR HOUSE
      </motion.span>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        {/* Left — text on a plain themed panel */}
        <motion.div style={{ y: textY }} className="relative">
          <div className="relative rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-md md:p-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-10%" }}
              className="mb-5 text-xs uppercase tracking-[0.35em] text-secondary"
            >
              The House
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="font-display text-4xl font-extrabold leading-[1.05] md:text-5xl"
            >
              Beauty built like
              <span className="neon-gradient-text"> a film set.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, margin: "-10%" }}
              className="mt-6 text-base leading-relaxed text-muted-foreground"
            >
              VELOUR began in a Melbourne studio where light, motion and pigment met.
              Every compact is engineered like a prop — weighted, reflective, made to be
              held under the spotlight. The colour does the acting.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, margin: "-10%" }}
              className="mt-4 text-base leading-relaxed text-muted-foreground"
            >
              We blend high-impact neon with charcoal restraint, so your look reads from
              the front row and the close-up alike.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, margin: "-10%" }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold neon-gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right — parallax image */}
        <div className="relative h-[440px] overflow-hidden rounded-3xl md:h-[620px]">
          <motion.img
            style={{ y: imageY, scale: 1.2 }}
            src={aboutImg}
            alt="VELOUR cosmetics arranged on a charcoal surface"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1536}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
        </div>
      </div>

      {/* Horizontal-scrolling cast of muses */}
      <ModelGallery />
    </section>
  );
}
