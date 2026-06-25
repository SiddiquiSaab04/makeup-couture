import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { t as gsapWithCSS } from "../_libs/gsap.mjs";
import { i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfS5XXpD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			touchMultiplier: 1.6
		});
		const updateLenis = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(updateLenis);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			gsapWithCSS.ticker.remove(updateLenis);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var model_pink_bg_default = "/assets/model_pink_bg-DYRtz8m3.png";
/**
* A single shared backdrop that persists behind every section.
* It subtly parallaxes and brightens on scroll so moving between
* sections feels like moving deeper into one continuous space.
*/
function FixedBackground() {
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [
		0,
		.15,
		.6,
		1
	], [
		.2,
		.4,
		.6,
		.4
	]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.4]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					opacity,
					scale
				},
				className: "absolute inset-0 bg-cover bg-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: model_pink_bg_default,
					alt: "",
					className: "h-full w-full object-cover blur-[1px] brightness-110 contrast-125",
					width: 1536,
					height: 1024
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: [
						1,
						1.2,
						1
					],
					opacity: [
						.3,
						.5,
						.3
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute -left-40 top-1/4 h-[50rem] w-[50rem] rounded-full bg-primary/30 blur-[150px] mix-blend-screen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: [
						1,
						1.3,
						1
					],
					opacity: [
						.2,
						.4,
						.2
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2
				},
				className: "absolute -right-40 top-2/3 h-[45rem] w-[45rem] rounded-full bg-secondary/30 blur-[150px] mix-blend-screen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" })
		]
	});
}
var links = [
	{
		label: "Story",
		href: "#about"
	},
	{
		label: "Products",
		href: "#products"
	},
	{
		label: "The Ritual",
		href: "#ritual"
	},
	{
		label: "Voices",
		href: "#voices"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: .1
		},
		className: "fixed inset-x-0 top-0 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${scrolled ? "my-3 rounded-full border border-border bg-background/70 py-3 backdrop-blur-xl" : "py-6"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "font-display text-xl font-extrabold tracking-[0.2em] text-foreground",
					children: ["VEL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gradient-text",
						children: "OUR"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "story-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#products",
					className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm border transition-transform duration-300 hover:scale-[1.04]",
					children: "Shop"
				})
			]
		})
	});
}
function useIsMounted() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return mounted;
}
function NeonCursor() {
	const [isHovering, setIsHovering] = (0, import_react.useState)(false);
	const mounted = useIsMounted();
	const mouseX = useMotionValue(-1e3);
	const mouseY = useMotionValue(-1e3);
	const springConfig = {
		damping: 40,
		stiffness: 150,
		mass: .8
	};
	const auraX = useSpring(mouseX, springConfig);
	const auraY = useSpring(mouseY, springConfig);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(hover: none)").matches) return;
		const handleMouseMove = (e) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
			if (e.target.closest("a, button, [role=\"button\"], img")) setIsHovering(true);
			else setIsHovering(false);
		};
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none hidden md:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed left-0 top-0 z-40 mix-blend-screen",
			style: {
				x: auraX,
				y: auraY,
				translateX: "-50%",
				translateY: "-50%"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: isHovering ? 1.4 : 1,
					opacity: isHovering ? .9 : .6
				},
				transition: {
					duration: .4,
					ease: "easeOut"
				},
				className: "h-[300px] w-[300px] rounded-full bg-primary blur-[80px]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed left-0 top-0 z-[100]",
			style: {
				x: mouseX,
				y: mouseY,
				translateX: "-50%",
				translateY: "-50%"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: isHovering ? .2 : 1,
					opacity: isHovering ? 0 : .9
				},
				transition: { duration: .15 },
				className: "h-[10px] w-[10px] rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
			})
		})]
	});
}
var pop_pink_hero_default = "/assets/pop_pink_hero-CfXSwlDC.png";
var ease = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-[100svh] flex-col justify-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: pop_pink_hero_default,
					alt: "VELOUR neon compact powder and brushes",
					className: "h-full w-full object-cover",
					width: 1536,
					height: 1024
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/30" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							ease,
							delay: 3
						},
						className: "mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-secondary font-accent font-extrabold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-secondary/60" }), "Luxury Beauty Collection"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[clamp(4rem,12vw,14rem)] font-extrabold leading-[0.8] tracking-tight flex flex-col md:flex-row md:items-baseline md:gap-6",
						children: [["Beauty,", "Redefined"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-visible pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: { y: "110%" },
								animate: { y: 0 },
								transition: {
									duration: 1,
									ease,
									delay: 3.1 + i * .12
								},
								className: i === 1 ? "inline-block font-accent font-normal text-[clamp(4.5rem,14vw,16rem)] text-primary drop-shadow-[0_0_35px_rgba(255,45,149,0.9)]  pl-4 md:pl-0" : "inline-block text-foreground drop-shadow-2xl",
								children: [line, " "]
							})
						}, line)), " "]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							ease,
							delay: 3.5
						},
						className: "mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-muted-foreground",
							children: "Discover premium makeup essentials crafted to enhance your natural beauty. From flawless foundations to vibrant lip colors, every product is designed for confidence, elegance, and long-lasting performance."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#products",
								className: "group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-neon)] transition-transform duration-300 hover:scale-[1.03]",
								children: ["Shop Makeup", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform duration-300 group-hover:translate-x-1",
									children: "→"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								className: "inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-secondary hover:text-secondary",
								children: "Our story"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 4,
					duration: 1
				},
				className: "absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex",
				children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-px animate-pulse bg-gradient-to-b from-secondary to-transparent" })]
			})
		]
	});
}
var models = [
	{
		name: "Aria",
		role: "The Muse",
		img: "/assets/Brynleigh%20De%20La%20Pointe-C0r2PWiX.jpg"
	},
	{
		name: "Noor",
		role: "Neon Editorial",
		img: "/assets/aynur-aydin-KIBfEAXNT6k-unsplash-CYna8SXQ.jpg"
	},
	{
		name: "Lena",
		role: "Velvet Glow",
		img: "/assets/chalo-garcia-kwoAigKnlfo-unsplash-Cu79-MO8.jpg"
	},
	{
		name: "Mara",
		role: "Charcoal Bloom",
		img: "/assets/creativefred-cmaG89fZ-wE-unsplash-CjpK1Gpd.jpg"
	},
	{
		name: "Sade",
		role: "Liquid Light",
		img: "/assets/download-CLfcpcYc.jpg"
	},
	{
		name: "Yumi",
		role: "Spotlight Face",
		img: "/assets/049c77417678390aa81c3f962cb8e135-Co3U3E8w.jpg"
	},
	{
		name: "Elsa",
		role: "Charming Face",
		img: "/assets/a67ce7ed433c6b0bb95175ec9b4452b6-DFrKMlbs.jpg"
	}
];
function ModelCard({ model, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "group relative h-full w-full shrink-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-primary group-hover:shadow-[var(--glow-neon)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: model.img,
					alt: `VELOUR muse ${model.name}`,
					loading: "lazy",
					className: "h-full w-full scale-105 object-cover grayscale-[0.35] transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:grayscale-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[var(--gradient-neon)] opacity-25 mix-blend-color transition-opacity duration-500 group-hover:opacity-50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-4 top-3 font-display text-5xl font-extrabold text-foreground/20 transition-colors duration-500 group-hover:text-primary/60",
					children: ["0", index + 1]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-5 bottom-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "translate-y-2 text-[10px] uppercase tracking-[0.35em] text-secondary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 font-accent",
							children: model.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-extrabold leading-none text-foreground",
							children: model.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 inline-block h-px w-0 bg-primary transition-all duration-500 group-hover:w-16" })
					]
				})
			]
		})
	});
}
function ModelGallery() {
	const ringRef = (0, import_react.useRef)(null);
	const tweenRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ringRef.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			tweenRef.current = gsapWithCSS.to(el, {
				rotateY: -360,
				repeat: -1,
				ease: "none",
				duration: 35
			});
		});
		let lastScrollY = window.scrollY;
		let targetTimeScale = 1;
		let currentTimeScale = 1;
		let rafId;
		const update = () => {
			const scrollY = window.scrollY;
			const delta = Math.abs(scrollY - lastScrollY);
			lastScrollY = scrollY;
			targetTimeScale = 1 + delta * .04;
			if (targetTimeScale > 2.5) targetTimeScale = 2.5;
			const lerpFactor = targetTimeScale > currentTimeScale ? .05 : .02;
			currentTimeScale += (targetTimeScale - currentTimeScale) * lerpFactor;
			if (tweenRef.current) tweenRef.current.timeScale(currentTimeScale);
			rafId = requestAnimationFrame(update);
		};
		update();
		return () => {
			ctx.revert();
			cancelAnimationFrame(rafId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "VELOUR faces",
		className: "relative mt-24 mb-12 overflow-hidden md:mt-36 md:mb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mb-10 max-w-7xl px-6 md:mb-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs uppercase tracking-[0.35em] text-secondary font-accent",
					children: "Our Faces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-extrabold leading-[1.04] md:text-6xl",
					children: ["Worn on the", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gradient-text",
						children: " front row."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block",
					children: "Six muses, one house. An endless cast of colour reading from the close-up to the curtain call."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-[500px] w-full items-center justify-center py-10 md:h-[600px] [perspective:1400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-0 top-1/2 -z-10 -translate-y-1/2 select-none overflow-hidden whitespace-nowrap w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[26vw] font-extrabold leading-none text-foreground/[0.04]",
					children: "VELOUR FACES — VELOUR FACES — VELOUR FACES"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: ringRef,
				className: "relative h-[300px] w-[210px] md:h-[400px] md:w-[280px] [transform-style:preserve-3d] will-change-transform",
				children: models.map((model, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { transform: `rotateY(${360 / models.length * i}deg) translateZ(clamp(250px, 35vw, 400px))` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelCard, {
							model,
							index: i
						})
					}, model.name);
				})
			})]
		})]
	});
}
var blushandhighlighter_default = "/assets/blushandhighlighter-CO-Jt4In.jpg";
var stats = [
	{
		value: "112",
		label: "Pigment shades"
	},
	{
		value: "0%",
		label: "Cruelty, ever"
	},
	{
		value: "24h",
		label: "Cinematic wear"
	}
];
function About() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
	const wordX = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		ref,
		className: "relative w-full overflow-hidden pt-28 pb-0 md:pt-40 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				style: { x: wordX },
				"aria-hidden": true,
				className: "pointer-events-none absolute left-0 top-10 select-none whitespace-nowrap font-display text-[22vw] font-extrabold leading-none text-foreground/[0.035]",
				children: "VELOUR HOUSE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: textY },
					className: "relative flex w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex w-full flex-col justify-center py-8 md:py-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .7 },
								viewport: {
									once: true,
									margin: "-10%"
								},
								className: "mb-5 text-xs uppercase tracking-[0.35em] text-secondary font-accent",
								children: "The House"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .1
								},
								viewport: {
									once: true,
									margin: "-10%"
								},
								className: "font-display text-4xl font-extrabold leading-[1.05] md:text-5xl",
								children: ["Sculpted with", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "neon-gradient-text",
									children: [" ", "pure light."]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .2
								},
								viewport: {
									once: true,
									margin: "-10%"
								},
								className: "mt-6 text-base leading-relaxed text-muted-foreground",
								children: "Our signature blush and highlighter duo is crafted to catch every angle. Finely milled pigments melt seamlessly into the skin, delivering a radiant, lit-from-within glow that lasts from dawn to dusk."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .3
								},
								viewport: {
									once: true,
									margin: "-10%"
								},
								className: "mt-4 text-base leading-relaxed text-muted-foreground",
								children: "Whether you're aiming for a soft, natural flush or a high-impact cinematic strobe, these versatile formulas build effortlessly for a flawless finish."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .4
								},
								viewport: {
									once: true,
									margin: "-10%"
								},
								className: "mt-10 grid grid-cols-3 gap-4",
								children: [stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-accent text-3xl font-extrabold neon-gradient-text",
									children: [s.value, " "]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
									children: [s.label, " "]
								})] }, s.label)), " "]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						ease: "easeOut"
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "relative h-[440px] overflow-hidden rounded-3xl md:h-[620px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							style: {
								y: imageY,
								scale: 1.2
							},
							src: blushandhighlighter_default,
							alt: "VELOUR cosmetics arranged on a charcoal surface",
							className: "h-full w-full object-contain",
							loading: "lazy",
							width: 1024,
							height: 1536
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelGallery, {})
		]
	});
}
var rows = [
	{
		eyebrow: "New — High Shine",
		title: "Liquid Gloss, 01",
		copy: "A mirror-finish lip lacquer suspended in neon. Non-sticky, weightless and built to catch the light from every angle of the set.",
		tag: "Shop gloss",
		image: "/assets/neon_lipgloss-WwNPo-Yi.png"
	},
	{
		eyebrow: "Bloom Palette",
		title: "Blush, in chorus",
		copy: "Twelve buildable pigments that move from a whisper to a statement. Pressed for slip, finished with a velvet-soft diffusion.",
		tag: "Shop blush",
		image: "/assets/neon_blush_palette-DOKqPe_Y.png"
	},
	{
		eyebrow: "Signature Compact",
		title: "The weighted compact",
		copy: "Sculptural, reflective and made to be held. Refillable pans click home with a satisfying, prop-grade snap.",
		tag: "Shop compact",
		image: "/assets/neon_compact-CusGTz7F.png"
	}
];
function StackCard({ row, index, total, progress }) {
	const start = index / total;
	const end = (index + 1) / total;
	const y = useTransform(progress, [start - 1 / total, start], ["100%", "0%"]);
	const coveredScale = useTransform(progress, [start, end], [1, .92]);
	const coveredOpacity = useTransform(progress, [start, end], [1, .4]);
	const isFirst = index === 0;
	const reverse = index % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			y: isFirst ? "0%" : y,
			scale: index === total - 1 ? 1 : coveredScale,
			opacity: index === total - 1 ? 1 : coveredOpacity,
			zIndex: index
		},
		className: "absolute inset-0 flex items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `grid w-full min-w-6xl items-center gap-8 rounded-[2rem] border border-border bg-card/80 p-6 backdrop-blur-xl md:grid-cols-2 md:gap-14 md:p-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-background/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-60 [background:var(--gradient-radial-glow)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[var(--gradient-neon)] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: row.image,
						alt: row.title,
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "absolute inset-0 h-full w-full rounded-xl scale-[1.02] object-cover p-5  drop-shadow-[0_30px_60px_oklch(0.68_0.27_356/0.45)] transition-transform duration-700 ease-out group-hover:scale-[1.12] group-hover:-rotate-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-5 left-5 z-20 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-primary px-6 py-2.5 text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--glow-neon)]",
							children: [row.tag, " →"]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: reverse ? "md:pr-4" : "md:pl-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs uppercase font-accent tracking-[0.35em] text-secondary",
						children: row.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl font-extrabold leading-[1.05] md:text-5xl",
						children: row.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground",
						children: row.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#products",
						className: "story-link mt-7 inline-flex text-sm font-semibold uppercase tracking-widest text-foreground font-accent",
						children: row.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 font-display text-7xl font-extrabold text-foreground/[0.05]",
						children: ["0", index + 1]
					})
				]
			})]
		})
	});
}
function Spotlight() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "spotlight",
		className: "relative w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 pt-24 md:pt-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl md:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-xs uppercase tracking-[0.35em] text-secondary font-accent",
					children: "The Collection"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-extrabold leading-[1.04] md:text-6xl",
					children: ["Colour you can", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gradient-text",
						children: " almost touch."
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "relative",
			style: { height: `${rows.length * 100}vh` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 h-screen overflow-hidden",
				children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackCard, {
					row,
					index: i,
					total: rows.length,
					progress: scrollYProgress
				}, row.title))
			})
		})]
	});
}
var products = [
	{
		id: "01",
		name: "Halo Compact Powder",
		category: "Complexion",
		price: "$48",
		img: "/assets/compact-Do8y7n8l.png"
	},
	{
		id: "02",
		name: "Bloom Blush Palette",
		category: "Cheeks",
		price: "$62",
		img: "/assets/palette-Crz4OW0p.png"
	},
	{
		id: "03",
		name: "Neon Velvet Lipstick",
		category: "Lips",
		price: "$34",
		img: "/assets/lipstick-oe5WH_0K.png"
	},
	{
		id: "04",
		name: "Liquid Light Serum",
		category: "Skin",
		price: "$58",
		img: "/assets/serum-D1M7nBlY.png"
	},
	{
		id: "05",
		name: "Studio Brush Trio",
		category: "Tools",
		price: "$74",
		img: "/assets/brushes-5KweztTW.png"
	}
];
function Products() {
	const [active, setActive] = (0, import_react.useState)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const x = useSpring(mx, {
		stiffness: 180,
		damping: 22,
		mass: .4
	});
	const y = useSpring(my, {
		stiffness: 180,
		damping: 22,
		mass: .4
	});
	const onMove = (e) => {
		const rect = wrapRef.current?.getBoundingClientRect();
		if (!rect) return;
		mx.set(e.clientX - rect.left);
		my.set(e.clientY - rect.top);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "relative w-full py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "mb-4 text-xs uppercase tracking-[0.35em] text-secondary font-accent",
					children: "The Collection"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .1
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "font-display text-4xl font-extrabold leading-[1.02] md:text-6xl",
					children: ["Hover to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gradient-text",
						children: "reveal."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .2
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "max-w-sm text-sm text-muted-foreground",
					children: "No grids, no clutter. Just colour, lifted off the page — move your cursor across the line to meet each piece."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: wrapRef,
				onMouseMove: onMove,
				onMouseLeave: () => setActive(null),
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: {
						x,
						y
					},
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .8
					},
					transition: {
						duration: .3,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "pointer-events-none absolute left-0 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.img,
						alt: "",
						className: "h-64 w-64 object-contain drop-shadow-[0_40px_80px_rgba(255,45,149,0.5)]"
					})
				}, active.id) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "relative z-10 border-t border-border",
					children: products.map((p, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .5,
							delay: index * .1
						},
						viewport: {
							once: true,
							margin: "-10%"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#products",
							onMouseEnter: () => setActive(p),
							className: "group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-7 transition-colors md:gap-8 md:py-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm text-muted-foreground transition-colors group-hover:text-primary",
									children: p.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-wrap items-baseline gap-x-4 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl font-bold transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary md:text-4xl",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-widest text-secondary font-accent font-bold",
										children: p.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.name,
										loading: "lazy",
										className: "h-12 w-12 object-contain lg:hidden"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg font-bold text-neon-primary md:text-xl font-accent",
										children: p.price
									})]
								})
							]
						})
					}, p.id))
				})]
			})]
		})
	});
}
var lipsiticks_default = "/assets/lipsiticks-DvmD16SB.jpg";
function Ritual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ritual",
		className: "relative w-full overflow-hidden py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				viewport: {
					once: true,
					margin: "-10%"
				},
				className: "relative h-[360px] md:h-[560px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-primary/10 blur-[100px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "h-full w-full rounded-xl object-cover",
					src: lipsiticks_default,
					alt: "Velour Lipsticks"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .7 },
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "mb-4 text-xs uppercase tracking-[0.35em] text-secondary font-accent",
					children: "The Ritual"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .1
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "font-display text-4xl font-extrabold leading-[1.04] md:text-6xl",
					children: [
						"Bold colour.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-gradient-text",
							children: "Velvet touch."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .2
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
					children: "Our signature lipstick collection is designed to make a statement. Experience a highly pigmented, creamy formula that glides on effortlessly, leaving a stunning velvet-matte finish that commands attention."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .3
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "mt-8 space-y-4",
					children: [[
						"Intensely pigmented, one-swipe color",
						"Comfortable, long-lasting velvet matte finish",
						"Hydrating formula that never dries your lips"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-sm text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shadow-[var(--glow-neon)]" }),
							" ",
							item,
							" "
						]
					}, item)), " "]
				})
			] })]
		})
	});
}
var words = [
	"NEON PIGMENT",
	"CINEMATIC WEAR",
	"CRUELTY-FREE",
	"MADE TO MOVE",
	"HIGH SHINE",
	"STUDIO GRADE"
];
function Marquee() {
	const trackRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = trackRef.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(el, {
				xPercent: -50,
				repeat: -1,
				ease: "none",
				duration: 22
			});
		});
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative w-full overflow-hidden border-y border-border bg-card/40 py-8 backdrop-blur-sm md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: trackRef,
			className: "flex w-max whitespace-nowrap",
			children: [...words, ...words].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-8 font-display text-4xl font-extrabold uppercase tracking-tight text-foreground/90 md:text-6xl",
					children: w
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-3xl text-primary md:text-5xl",
					children: "✶"
				})]
			}, i))
		})
	});
}
var voices = [
	{
		"quote": "The sculptural brushes feel like an extension of my hand. The precision and softness are unmatched in the industry.",
		"name": "Elena Rostova",
		"role": "Celebrity Makeup Artist",
		"initials": "ER"
	},
	{
		"quote": "Every drop of the Liquid Light Serum makes my skin glow from within. It's the ultimate prep step before a red carpet look.",
		"name": "Marcus Chen",
		"role": "Skin Specialist",
		"initials": "MC"
	},
	{
		"quote": "Velour has redefined luxury. The packaging is pure art, and the formulas actually live up to the visual aesthetic.",
		"name": "Jada Williams",
		"role": "Vogue Contributor",
		"initials": "JW"
	},
	{
		"quote": "I've swapped out my entire daily routine. This brand isn't just about makeup, it's about embracing cinematic moments every day.",
		"name": "Chloe Vance",
		"role": "Content Creator",
		"initials": "CV"
	}
];
function Testimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const next = (0, import_react.useCallback)(() => setIndex((i) => (i + 1) % voices.length), []);
	(0, import_react.useEffect)(() => {
		const id = setInterval(next, 5500);
		return () => clearInterval(id);
	}, [next]);
	const active = voices[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "voices",
		className: "relative w-full py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "mb-4 text-xs uppercase tracking-[0.35em] text-secondary font-accent",
					children: "Voices"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						scale: .9,
						filter: "blur(4px)"
					},
					whileInView: {
						opacity: 1,
						scale: 1,
						filter: "blur(0px)"
					},
					transition: {
						duration: .8,
						delay: .1,
						ease: "easeOut"
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					className: "mb-16 font-display text-4xl font-extrabold md:text-6xl",
					children: ["Worn by the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gradient-text",
						children: "front row."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[230px] md:min-h-[200px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 30,
								filter: "blur(8px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							exit: {
								opacity: 0,
								y: -30,
								filter: "blur(8px)"
							},
							transition: {
								duration: .6,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "font-display text-2xl font-bold leading-snug text-foreground md:text-4xl md:leading-tight",
							children: [
								"“",
								active.quote,
								"”"
							]
						}, index)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .4 },
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: active.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: active.role
						})]
					}, `name-${index}`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex items-center justify-center gap-4",
					children: voices.map((v, i) => {
						const isActive = i === index;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIndex(i),
							"aria-label": `Show review from ${v.name}`,
							className: `relative flex h-14 w-14 items-center justify-center rounded-full border font-display text-sm font-bold transition-all duration-500 ${isActive ? "scale-110 border-transparent bg-primary text-primary-foreground shadow-[var(--glow-neon)]" : "border-border bg-card/50 text-muted-foreground hover:border-secondary hover:text-foreground"}`,
							children: [v.initials, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "voice-ring",
								className: "absolute inset-0 rounded-full ring-2 ring-secondary/60"
							})]
						}, v.initials);
					})
				})
			]
		})
	});
}
var _12642435_1920_1080_50fps_default = "/assets/12642435_1920_1080_50fps-BoUsV4Qr.mp4";
function Showreel() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative w-full px-6 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto h-[70vh] max-w-7xl overflow-hidden rounded-[2rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.video, {
					style: {
						scale,
						y
					},
					src: _12642435_1920_1080_50fps_default,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex h-full flex-col items-center justify-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .1
						},
						viewport: {
							once: true,
							margin: "-10%"
						},
						className: "mt-8 font-display text-3xl font-extrabold md:text-5xl",
						children: ["Watch the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-gradient-text",
							children: "campaign film"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .2
						},
						viewport: {
							once: true,
							margin: "-10%"
						},
						className: "mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground",
						children: "SS25 — Colour, in motion"
					})]
				})
			]
		})
	});
}
var columns = [
	{
		title: "Shop",
		links: [
			"Complexion",
			"Cheeks",
			"Lips",
			"Skin",
			"Tools"
		]
	},
	{
		title: "House",
		links: [
			"Our story",
			"Sustainability",
			"Stockists",
			"Careers"
		]
	},
	{
		title: "Care",
		links: [
			"Contact",
			"Shipping",
			"Returns",
			"FAQ"
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative w-full border-t border-border pt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "font-display text-3xl font-extrabold tracking-[0.15em]",
						children: ["VEL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-gradient-text",
							children: "OUR"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
						children: "A cinematic beauty house. Neon-charged colour, sculptural compacts and brushes — crafted to move with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "mt-8 flex max-w-sm items-center gap-2 rounded-full border border-border bg-card/50 p-1.5 pl-5 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Join the list",
							className: "flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]",
							children: "Subscribe"
						})]
					})
				] }), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-5 text-xs uppercase tracking-[0.3em] text-secondary font-accent font-extrabold",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#products",
						className: "story-link text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: link
					}) }, link))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" VELOUR Beauty. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							className: "hover:text-foreground",
							children: "Instagram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							className: "hover:text-foreground",
							children: "TikTok"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							className: "hover:text-foreground",
							children: "Privacy"
						})
					]
				})]
			})]
		})
	});
}
function IntroScreen() {
	const [show, setShow] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, 2800);
		return () => clearTimeout(timer);
	}, []);
	const text = "VELOUR".split("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [
		" ",
		show && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			exit: {
				opacity: 0,
				y: "-100%"
			},
			transition: {
				duration: .9,
				ease: [
					.76,
					0,
					.24,
					1
				]
			},
			className: "fixed inset-0 z-[999999] flex items-center justify-center bg-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[var(--gradient-neon)] opacity-60 mix-blend-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex font-display text-[20vh] font-extrabold tracking-[0.2em] text-transparent md:text-[35vh] lg:text-[40vh]",
				children: [text.map((char, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
					initial: {
						y: "80%",
						opacity: 0,
						rotateZ: 8,
						scale: .8,
						filter: "blur(12px)"
					},
					animate: {
						y: "0%",
						opacity: 1,
						rotateZ: 0,
						scale: 1,
						filter: "blur(0px)"
					},
					transition: {
						duration: 1.4,
						ease: [
							.19,
							1,
							.22,
							1
						],
						delay: .15 + i * .08
					},
					style: {
						WebkitTextStroke: "min(3px, 0.4vw) rgba(255, 255, 255, 0.9)",
						display: "inline-block"
					},
					children: [char, " "]
				}, i)), " "]
			})]
		}, "intro-screen"),
		" "
	] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FixedBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeonCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spotlight, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Products, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ritual, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showreel, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) });
}
//#endregion
export { Index as component };
