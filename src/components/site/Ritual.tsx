import {motion} from "motion/react";
import lipsiticks from "@/assets/lipsiticks.jpg";

export function Ritual() {
    return (
        <section id="ritual" className="relative w-full overflow-hidden py-24 md:py-36">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
                <div className="relative h-[360px] md:h-[560px]">
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]"/>
                    <img className="h-full w-full rounded-xl object-cover"
                        src={lipsiticks}
                        alt="Velour Lipsticks"/>
                </div>

                <div>
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
                        className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary font-accent">
                        The Ritual
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
                            className="font-display text-4xl font-extrabold leading-[1.04] md:text-6xl">
                            Bold colour.
                            <br/>
                            <span className="neon-gradient-text">Velvet touch.</span>
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
                            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                            Our signature lipstick collection is designed to make a statement. Experience a highly pigmented, creamy formula that glides on effortlessly, leaving a stunning velvet-matte finish that commands attention.
                        </motion.p>

                    <motion.ul initial={
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
                        className="mt-8 space-y-4">
                        {
                        ["Intensely pigmented, one-swipe color", "Comfortable, long-lasting velvet matte finish", "Hydrating formula that never dries your lips",].map((item) => (
                            <li key={item}
                                className="flex items-center gap-3 text-sm text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[var(--glow-neon)]"/> {item} </li>
                        ))
                    } </motion.ul>
                </div>
            </div>
        </section>
    );
}
