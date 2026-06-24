import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";

import compact from "@/assets/compact.png";
import palette from "@/assets/palette.png";
import lipstick from "@/assets/lipstick.png";
import serum from "@/assets/serum.png";
import brushes from "@/assets/brushes.png";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  img: string;
};

const products: Product[] = [
  { id: "01", name: "Halo Compact Powder", category: "Complexion", price: "$48", img: compact },
  { id: "02", name: "Bloom Blush Palette", category: "Cheeks", price: "$62", img: palette },
  { id: "03", name: "Neon Velvet Lipstick", category: "Lips", price: "$34", img: lipstick },
  { id: "04", name: "Liquid Light Serum", category: "Skin", price: "$58", img: serum },
  { id: "05", name: "Studio Brush Trio", category: "Tools", price: "$74", img: brushes },
];

export function Products() {
  const [active, setActive] = useState<Product | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="products" className="relative w-full py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10%" }}
              className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary"
            >
              The Collection
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="font-display text-4xl font-extrabold leading-[1.02] md:text-6xl"
            >
              Hover to <span className="neon-gradient-text">reveal.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="max-w-sm text-sm text-muted-foreground"
          >
            No grids, no clutter. Just colour, lifted off the page — move your cursor
            across the line to meet each piece.
          </motion.p>
        </div>

        <div
          ref={wrapRef}
          onMouseMove={onMove}
          onMouseLeave={() => setActive(null)}
          className="relative"
        >
          {/* Floating product preview (desktop) */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.id}
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
              >
                <img
                  src={active.img}
                  alt=""
                  className="h-64 w-64 object-contain drop-shadow-[0_40px_80px_rgba(255,45,149,0.5)]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="relative z-10 border-t border-border">
            {products.map((p, index) => (
              <motion.li 
                key={p.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <a
                  href="#products"
                  onMouseEnter={() => setActive(p)}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-7 transition-colors md:gap-8 md:py-10"
                >
                  <span className="font-display text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    {p.id}
                  </span>

                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-2xl font-bold transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary md:text-4xl">
                      {p.name}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {p.category}
                    </span>
                  </span>

                  <span className="flex items-center gap-5">
                    {/* inline thumb for mobile/tablet */}
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-12 w-12 object-contain lg:hidden"
                    />
                    <span className="font-display text-lg font-bold text-foreground md:text-xl">
                      {p.price}
                    </span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
