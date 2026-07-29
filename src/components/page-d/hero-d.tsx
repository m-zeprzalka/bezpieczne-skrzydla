"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { CountUp } from "@/components/page-d/count-up";
import { ContainerD, EyebrowD } from "@/components/page-d/frame";
import { LuminousWing } from "@/components/page-d/luminous-wing";
import { Button } from "@/components/ui/button";
import { heroD } from "@/lib/content-d";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroD() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);

  // Parallaksa kursora — osobne amplitudy dla skrzydła i dla typografii
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 70, damping: 22, mass: 0.7 });
  const sy = useSpring(py, { stiffness: 70, damping: 22, mass: 0.7 });

  const wingX = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const wingY = useTransform(sy, [-0.5, 0.5], [18, -18]);
  const textX = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  // Skrzydło odpływa przy przewijaniu, tekst zostaje chwilę dłużej
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const wingScroll = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const wingFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  function handlePointer(event: React.PointerEvent<HTMLElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onPointerMove={handlePointer}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-white"
    >
      {/* — światło — */}
      <div aria-hidden className="bg-light-well absolute inset-0 -z-20" />
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-20 opacity-[0.35] [mask-image:radial-gradient(75%_60%_at_50%_35%,black,transparent)]"
      />

      {/* — sygnet marki w skali kadru — */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: wingScroll, opacity: wingFade }}
        className="absolute inset-x-0 bottom-0 -z-10 flex justify-center"
      >
        <LuminousWing
          parallaxX={wingX}
          parallaxY={wingY}
          className="h-auto w-[248vw] translate-y-[10%] [mask-image:linear-gradient(to_bottom,black_78%,transparent)] sm:w-[min(1780px,178vw)] sm:translate-y-[7%]"
        />
      </motion.div>

      <ContainerD className="relative flex flex-1 flex-col justify-center py-24 sm:py-28">
        <motion.div
          style={reduce ? undefined : { x: textX }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <EyebrowD className="glass rounded-full px-4 py-2 text-[0.68rem] tracking-[0.16em]">
              <span className="relative flex size-1.5">
                <span className="bg-brand-400 absolute inline-flex size-full animate-ping rounded-full opacity-70" />
                <span className="bg-brand-600 relative inline-flex size-1.5 rounded-full" />
              </span>
              {heroD.badge}
            </EyebrowD>
          </motion.div>

          <h1 className="font-lux text-brand-950 mt-9 text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.98] font-extralight tracking-[-0.045em]">
            {[heroD.titleTop, heroD.titleAccent, heroD.titleBottom].map(
              (line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    data-reveal=""
                    className="block"
                    initial={reduce ? false : { y: "104%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.05,
                      delay: 0.18 + i * 0.11,
                      ease: EASE,
                    }}
                  >
                    {i === 1 ? (
                      <span className="from-brand-700 via-brand-600 to-brand-700 bg-gradient-to-r bg-clip-text text-transparent">
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ),
            )}
          </h1>

          <motion.p
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="text-brand-800/80 text-balance-pretty mt-8 max-w-2xl text-[1.05rem] leading-relaxed sm:text-[1.12rem]"
          >
            {heroD.lead}
          </motion.p>

          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.66, ease: EASE }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              variant="brand"
              size="xl"
              className="rounded-full px-8"
            >
              <Link href={heroD.primaryCta.href}>
                {heroD.primaryCta.label}
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="xl"
              className="glass text-brand-800 hover:text-brand-950 rounded-full border-0 px-8"
            >
              <Link href={heroD.secondaryCta.href}>
                {heroD.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* — liczby na szkle — */}
        <motion.dl
          data-reveal=""
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="glass shadow-lux mx-auto mt-16 grid w-full max-w-2xl grid-cols-3 rounded-2xl px-2 py-6 sm:mt-20"
        >
          {heroD.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={
                i > 0
                  ? "border-brand-200/70 flex flex-col items-center gap-2 border-l px-2 text-center sm:px-4"
                  : "flex flex-col items-center gap-2 px-2 text-center sm:px-4"
              }
            >
              <dt className="font-lux text-brand-900 text-[1.15rem] leading-none font-light tracking-tight whitespace-nowrap sm:text-[2rem]">
                <CountUp
                  value={fact.value}
                  prefix={"prefix" in fact ? fact.prefix : ""}
                  suffix={fact.suffix}
                />
              </dt>
              <dd className="text-brand-700/75 text-[0.7rem] leading-snug sm:text-[0.76rem]">
                {fact.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </ContainerD>

      {/* — zachęta do przewinięcia — */}
      <motion.div
        data-reveal=""
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="text-brand-600 relative flex items-center justify-center gap-2 pb-8 text-[0.68rem] tracking-[0.22em] uppercase"
      >
        {heroD.scrollHint}
        <motion.span
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-3.5" />
        </motion.span>
      </motion.div>
    </section>
  );
}
