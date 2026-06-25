import {useRef} from "react";
import {useScroll, useTransform, motion} from "motion/react";

import {ModelGallery} from "./ModelGallery";
import {Palette3D} from "./Palette3D";
import aboutImg from "@/assets/blushandhighlighter.jpg";

const stats = [
    {
        value: "112",
        label: "Pigment shades"
    }, {
        value: "0%",
        label: "Cruelty, ever"
    }, {
        value: "24h",
        label: "Cinematic wear"
    },
];

export function About() {
    const ref = useRef < HTMLDivElement > (null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [
        0, 1
    ], ["-12%", "12%"]);
    const textY = useTransform(scrollYProgress, [
        0, 1
    ], ["8%", "-8%"]);
    const wordX = useTransform(scrollYProgress, [
        0, 1
    ], ["6%", "-6%"]);

    return (
        <section id="about"
            ref={ref}
            className="relative w-full overflow-hidden pt-28 pb-0 md:pt-40 md:pb-0">
            {/* oversized parallax word behind text */}
            <motion.span style={
                    {x: wordX}
                }
                aria-hidden
                className="pointer-events-none absolute left-0 top-10 select-none whitespace-nowrap font-display text-[22vw] font-extrabold leading-none text-foreground/[0.035]">
                VELOUR HOUSE
            </motion.span>

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
                {/* Left — text on a plain themed panel */}
                <motion.div style={{ y: textY }} className="relative flex w-full">
                    <div className="relative flex w-full flex-col justify-center py-8 md:py-0">
                        <motion.p initial={
                                {
                                    opacity: 0,
                                    y: 20
                                }
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    y: 0
                                }
                            }
                            transition={
                                {duration: 0.7}
                            }
                            viewport={
                                {
                                    once: true,
                                    margin: "-10%"
                                }
                            }
                            className="mb-5 text-xs uppercase tracking-[0.35em] text-secondary font-accent">
                            The House
                        </motion.p>
                        <motion.h2 initial={
                                {
                                    opacity: 0,
                                    y: 30
                                }
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    y: 0
                                }
                            }
                            transition={
                                {
                                    duration: 0.7,
                                    delay: 0.1
                                }
                            }
                            viewport={
                                {
                                    once: true,
                                    margin: "-10%"
                                }
                            }
                            className="font-display text-4xl font-extrabold leading-[1.05] md:text-5xl">
                            Sculpted with
                            <span className="neon-gradient-text">
                                {" "}pure light.</span>
                        </motion.h2>
                        <motion.p initial={
                                {
                                    opacity: 0,
                                    y: 30
                                }
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    y: 0
                                }
                            }
                            transition={
                                {
                                    duration: 0.7,
                                    delay: 0.2
                                }
                            }
                            viewport={
                                {
                                    once: true,
                                    margin: "-10%"
                                }
                            }
                            className="mt-6 text-base leading-relaxed text-muted-foreground">
                            Our signature blush and highlighter duo is crafted to catch every angle. Finely milled pigments melt seamlessly into the skin, delivering a radiant, lit-from-within glow that lasts from dawn to dusk.
                        </motion.p>
                        <motion.p initial={
                                {
                                    opacity: 0,
                                    y: 30
                                }
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    y: 0
                                }
                            }
                            transition={
                                {
                                    duration: 0.7,
                                    delay: 0.3
                                }
                            }
                            viewport={
                                {
                                    once: true,
                                    margin: "-10%"
                                }
                            }
                            className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Whether you're aiming for a soft, natural flush or a high-impact cinematic strobe, these versatile formulas build effortlessly for a flawless finish.
                        </motion.p>

                        <motion.div initial={
                                {
                                    opacity: 0,
                                    y: 30
                                }
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    y: 0
                                }
                            }
                            transition={
                                {
                                    duration: 0.7,
                                    delay: 0.4
                                }
                            }
                            viewport={
                                {
                                    once: true,
                                    margin: "-10%"
                                }
                            }
                            className="mt-10 grid grid-cols-3 gap-4">
                            {
                            stats.map((s) => (
                                <div key={
                                    s.label
                                }>
                                    <div className="font-accent text-3xl font-extrabold neon-gradient-text">
                                        {
                                        s.value
                                    } </div>
                                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                                        {
                                        s.label
                                    } </div>
                                </div>
                            ))
                        } </motion.div>
                    </div>
                </motion.div>

                {/* Right — 3D Palette canvas */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="relative h-[440px] overflow-hidden rounded-3xl md:h-[620px] bg-card/10 border border-border/40"
                >
                    <div className="absolute inset-0 z-0 bg-[var(--gradient-radial-glow)] opacity-30" />
                    <Palette3D />
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/40 to-transparent"/>
                    <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-border/50"/>
                </motion.div>
            </div>

            {/* Horizontal-scrolling cast of muses */}
            <ModelGallery/>
        </section>
    );
}
