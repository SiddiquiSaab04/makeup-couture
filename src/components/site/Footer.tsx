const columns = [
  {
    title: "Shop",
    links: ["Complexion", "Cheeks", "Lips", "Skin", "Tools"],
  },
  {
    title: "House",
    links: ["Our story", "Sustainability", "Stockists", "Careers"],
  },
  {
    title: "Care",
    links: ["Contact", "Shipping", "Returns", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#home"
              className="font-display text-3xl font-extrabold tracking-[0.15em]"
            >
              VEL<span className="neon-gradient-text">OUR</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A cinematic beauty house. Neon-charged colour, sculptural compacts and
              brushes — crafted to move with you.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-border bg-card/50 p-1.5 pl-5 backdrop-blur-sm"
            >
              <input
                type="email"
                required
                placeholder="Join the list"
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-secondary font-accent font-extrabold">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#products"
                      className="story-link text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} VELOUR Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-foreground">
              Instagram
            </a>
            <a href="#home" className="hover:text-foreground">
              TikTok
            </a>
            <a href="#home" className="hover:text-foreground">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
