import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

import lipglossImg from "@/assets/neon_lipgloss.png";
import paletteImg from "@/assets/neon_blush_palette.png";
import compactImg from "@/assets/neon_compact.png";

const rows = [
  {
    eyebrow: "New — High Shine",
    title: "Liquid Gloss, 01",
    copy: "A mirror-finish lip lacquer suspended in neon. Non-sticky, weightless and built to catch the light from every angle of the set.",
    tag: "Shop gloss",
    image: lipglossImg,
  },
  {
    eyebrow: "Bloom Palette",
    title: "Blush, in chorus",
    copy: "Twelve buildable pigments that move from a whisper to a statement. Pressed for slip, finished with a velvet-soft diffusion.",
    tag: "Shop blush",
    image: paletteImg,
  },
  {
    eyebrow: "Signature Compact",
    title: "The weighted compact",
    copy: "Sculptural, reflective and made to be held. Refillable pans click home with a satisfying, prop-grade snap.",
    tag: "Shop compact",
    image: compactImg,
  },
];

function StackCard({
  row,
  index,
  total,
  progress,
}: {
  row: (typeof rows)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card owns a slice of the scroll. Later cards slide up and over the
  // previous one; the one beneath dims and scales down slightly as it is covered.
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(progress, [start - 1 / total, start], ["100%", "0%"]);
  const coveredScale = useTransform(progress, [start, end], [1, 0.92]);
  const coveredOpacity = useTransform(progress, [start, end], [1, 0.4]);

  const isFirst = index === 0;
  const reverse = index % 2 === 1;

  return (
    <motion.div
      style={{
        y: isFirst ? "0%" : y,
        scale: index === total - 1 ? 1 : coveredScale,
        opacity: index === total - 1 ? 1 : coveredOpacity,
        zIndex: index,
      }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div
        className={`grid w-full min-w-6xl items-center gap-8 rounded-[2rem] border border-border bg-card/80 p-6 backdrop-blur-xl md:grid-cols-2 md:gap-14 md:p-12 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="group relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-background/40">
          <div className="absolute inset-0 opacity-60 [background:var(--gradient-radial-glow)]" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-[var(--gradient-neon)] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40" />
          <img
            src={row.image}
            alt={row.title}
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full rounded-xl scale-[1.02] object-cover p-5  drop-shadow-[0_30px_60px_oklch(0.68_0.27_356/0.45)] transition-transform duration-700 ease-out group-hover:scale-[1.12] group-hover:-rotate-3"
          />
          <div className="absolute bottom-5 left-5 z-20 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--glow-neon)]">
              {row.tag} →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={reverse ? "md:pr-4" : "md:pl-4"}>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary">
            {row.eyebrow}
          </p>
          <h3 className="font-display text-3xl font-extrabold leading-[1.05] md:text-5xl">
            {row.title}
          </h3>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {row.copy}
          </p>
          <a
            href="#products"
            className="story-link mt-7 inline-flex text-sm font-semibold uppercase tracking-widest text-foreground"
          >
            {row.tag}
          </a>
          <div className="mt-6 font-display text-7xl font-extrabold text-foreground/[0.05]">
            0{index + 1}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="spotlight" className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-36">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-secondary">
            The Collection
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.04] md:text-6xl">
            Colour you can
            <span className="neon-gradient-text"> almost touch.</span>
          </h2>
        </div>
      </div>

      {/* Tall track that drives the pinned, overlapping stack */}
      <div ref={ref} className="relative" style={{ height: `${rows.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {rows.map((row, i) => (
            <StackCard
              key={row.title}
              row={row}
              index={i}
              total={rows.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
