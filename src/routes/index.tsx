import { createFileRoute } from "@tanstack/react-router";

import { SmoothScroll } from "@/components/site/SmoothScroll";
import { FixedBackground } from "@/components/site/FixedBackground";
import { Navbar } from "@/components/site/Navbar";
import { NeonCursor } from "@/components/site/NeonCursor";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Spotlight } from "@/components/site/Spotlight";
import { Products } from "@/components/site/Products";
import { Ritual } from "@/components/site/Ritual";
import { Marquee } from "@/components/site/Marquee";
import { Testimonials } from "@/components/site/Testimonials";
import { Showreel } from "@/components/site/Showreel";
import { Footer } from "@/components/site/Footer";
import { IntroScreen } from "@/components/site/IntroScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELOUR Makeup" },
      {
        name: "description",
        content:
          "A cinematic beauty house. Neon-charged colour, sculptural compacts and brushes, crafted to move with you.",
      },
      { property: "og:title", content: "VELOUR Makeup" },
      {
        property: "og:description",
        content: "A cinematic beauty house. Neon-charged colour crafted to move with you.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-foreground">
        <IntroScreen />
        <FixedBackground />
        <Navbar />
        <NeonCursor />

        <main>
          <Hero />
          <About />
          <Spotlight />
          <Products />
          <Ritual />
          <Marquee />
          <Testimonials />
          <Showreel />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
