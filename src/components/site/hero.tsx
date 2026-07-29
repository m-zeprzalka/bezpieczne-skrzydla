"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Compass,
  FileText,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import { RevealWords } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { hero, model4r } from "@/lib/content";

const stepIcons = [Compass, HeartHandshake, FileText, ShieldCheck] as const;

export function Hero() {
  const reduce = useReducedMotion();

  // Parallaks sterowany kursorem — bardzo mały zakres, ma być wyczuwalny, nie efekciarski.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 90, damping: 20, mass: 0.6 });

  const cardX = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const cardY = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const chipX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const chipY = useTransform(sy, [-0.5, 0.5], [-18, 18]);

  function handlePointer(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="relative isolate overflow-hidden pt-30 pb-20 sm:pt-36 lg:pt-40 lg:pb-28"
      onPointerMove={handlePointer}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      {/* — warstwy tła — */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-white" />
      <div
        aria-hidden
        className="bg-aurora animate-drift absolute inset-x-0 -top-40 -z-20 h-[820px] opacity-70 blur-[2px]"
      />
      <div
        aria-hidden
        className="bg-grid mask-fade-b absolute inset-0 -z-10 opacity-[0.55]"
      />
      <WingArcs
        className="absolute top-6 left-1/2 -z-10 w-[1200px] max-w-none -translate-x-1/2 opacity-[0.18] lg:left-[68%] lg:w-[1000px] lg:opacity-25"
        count={11}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* — kolumna tekstowa — */}
        <div className="lg:col-span-7">
          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-brand-200 bg-white/70 text-brand-700 inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-2 text-[0.76rem] font-medium tracking-wide backdrop-blur-sm"
          >
            <span className="relative flex size-2">
              <span className="bg-brand-400 absolute inline-flex size-full animate-ping rounded-full opacity-60" />
              <span className="bg-brand-600 relative inline-flex size-2 rounded-full" />
            </span>
            {hero.eyebrow}
          </motion.div>

          {/* Łamanie wierszy jest zadane ręcznie: `text-wrap: balance` nie
              działa na animowane słowa (każde jest osobnym inline-blockiem),
              a łamanie zachłanne zostawiało sieroty w drugim wierszu. */}
          <h1 className="font-display text-brand-900 mt-7 text-[clamp(2.05rem,3.6vw,2.8rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <span className="lg:block">
              <RevealWords text="Szkolenia i praktyczne narzędzia" />
            </span>{" "}
            <span className="lg:block">
              <RevealWords text="dla" delay={0.22} />{" "}
              <RevealWords
                text="bezpieczniejszych"
                delay={0.27}
                className="text-brand-600"
              />{" "}
              <RevealWords text="miejsc pracy" delay={0.34} />
            </span>
          </h1>

          <motion.p
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-brand-700 mt-7 max-w-xl text-[1.2rem] leading-snug italic sm:text-[1.35rem]"
          >
            {hero.lead}
          </motion.p>

          <motion.p
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-balance-pretty mt-5 max-w-xl text-[0.98rem] leading-relaxed"
          >
            {hero.body}
          </motion.p>

          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.94, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="brand" size="xl">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-brand-200 text-brand-800 hover:bg-brand-100/70 bg-white/70 backdrop-blur-sm"
            >
              <Link href={hero.secondaryCta.href}>
                <Compass data-icon="inline-start" />
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>

          {/* — trzy twarde fakty zamiast wymyślonych statystyk — */}
          <motion.dl
            data-reveal=""
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="border-brand-200/70 mt-12 grid max-w-lg grid-cols-3 gap-6 border-t pt-6"
          >
            {hero.proof.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="font-display text-brand-800 text-[1.3rem] leading-none font-medium whitespace-nowrap sm:text-[1.75rem]">
                  {item.value}
                </dt>
                <dd className="text-muted-foreground text-[0.76rem] leading-snug">
                  {item.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* — kolumna wizualna — */}
        <div className="relative lg:col-span-5">
          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={reduce ? undefined : { x: cardX, y: cardY }}
            className="relative mx-auto max-w-md"
          >
            <div className="border-brand-200/80 shadow-lift-lg relative rounded-3xl border bg-white/85 p-6 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-brand-600 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
                    Autorski model
                  </span>
                  <span className="font-display text-brand-900 text-xl">
                    Mapa działania 4R
                  </span>
                </div>
                <span className="bg-brand-100 text-brand-700 font-display grid size-11 shrink-0 place-items-center rounded-2xl text-base font-semibold">
                  4R
                </span>
              </div>

              <ol className="relative mt-6 flex flex-col gap-1">
                {/* pionowa oś łącząca kroki */}
                <span
                  aria-hidden
                  className="via-brand-300 absolute top-5 bottom-5 left-[1.4rem] w-px bg-gradient-to-b from-transparent to-transparent"
                />
                {model4r.steps.map((step, i) => {
                  const Icon = stepIcons[i];
                  return (
                    <motion.li
                      data-reveal=""
                      key={step.key}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.75 + i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="hover:bg-brand-50/80 relative flex items-start gap-3.5 rounded-xl p-2 transition-colors"
                    >
                      <span className="border-brand-200 text-brand-600 relative z-10 grid size-9 shrink-0 place-items-center rounded-full border bg-white">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="flex min-w-0 flex-col gap-0.5 pt-1">
                        <span className="flex items-baseline gap-2">
                          <span className="text-brand-600 font-mono text-[0.68rem]">
                            {step.index}
                          </span>
                          <span className="text-brand-900 text-[0.92rem] font-semibold">
                            {step.title}
                          </span>
                        </span>
                        <span className="text-muted-foreground text-[0.78rem] leading-snug">
                          {step.claim}
                        </span>
                      </span>
                    </motion.li>
                  );
                })}
              </ol>
            </div>

            {/* — pływające artefakty: pokazują, co realnie dostaje klient — */}
            <FloatingChip
              className="-top-5 -right-3 sm:-right-8"
              delay={1.3}
              parallaxX={chipX}
              parallaxY={chipY}
              icon={ClipboardList}
              title="Checklista"
              subtitle="Konflikt czy mobbing?"
            />
            <FloatingChip
              className="-bottom-6 -left-3 sm:-left-10"
              delay={1.5}
              parallaxX={chipX}
              parallaxY={chipY}
              icon={FileText}
              title="Schemat"
              subtitle="24 h — 72 h — 7 dni"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  className,
  delay,
  parallaxX,
  parallaxY,
  icon: Icon,
  title,
  subtitle,
}: {
  className?: string;
  delay: number;
  parallaxX: ReturnType<typeof useTransform<number, number>>;
  parallaxY: ReturnType<typeof useTransform<number, number>>;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-reveal=""
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={reduce ? undefined : { x: parallaxX, y: parallaxY }}
      className={`border-brand-200/80 shadow-lift absolute flex items-center gap-2.5 rounded-2xl border bg-white/90 py-2.5 pr-4 pl-3 backdrop-blur-md ${className}`}
    >
      <span className="bg-brand-100 text-brand-700 grid size-8 place-items-center rounded-xl">
        <Icon className="size-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-brand-600 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
          {title}
        </span>
        <span className="text-brand-900 text-[0.78rem] font-medium">
          {subtitle}
        </span>
      </span>
    </motion.div>
  );
}
