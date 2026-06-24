import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Story", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "The Ritual", href: "#ritual" },
  { label: "Voices", href: "#voices" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "my-3 rounded-full border border-border bg-background/70 py-3 backdrop-blur-xl"
            : "py-6"
        }`}
      >
        <a
          href="#home"
          className="font-display text-xl font-extrabold tracking-[0.2em] text-foreground"
        >
          VEL<span className="neon-gradient-text">OUR</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform duration-300 hover:scale-[1.04]"
        >
          Shop
        </a>
      </div>
    </motion.header>
  );
}
