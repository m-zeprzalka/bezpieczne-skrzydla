"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ContainerC, EyebrowC } from "@/components/page-c/frame";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { heroC } from "@/lib/content-c";

export function HeroC() {
  const reduce = useReducedMotion();

  return (
    <header id="start" className="relative scroll-mt-24">
      <ContainerC className="pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-28">
        {/* — sygnatura zamiast paska nawigacji — */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/page-c"
            className="focus-visible:ring-ring/50 flex items-center gap-3 rounded outline-none focus-visible:ring-3"
          >
            <Image
              src="/logo-bezpieczne-skrzydla.png"
              alt=""
              width={80}
              height={80}
              priority
              className="ring-brand-200 size-10 rounded-full object-cover ring-1"
            />
            <span className="text-brand-950 text-[1.02rem] leading-none">
              Bezpieczne&nbsp;Skrzydła
            </span>
          </Link>

          <div className="flex items-center gap-5 font-sans text-[0.82rem]">
            <a
              href={`tel:${site.phoneHref}`}
              className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 rounded underline-offset-4 transition-colors outline-none hover:underline focus-visible:ring-3"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 hidden rounded underline-offset-4 transition-colors outline-none hover:underline focus-visible:ring-3 sm:inline"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* — otwarcie rozmowy — */}
        <div className="mt-20 sm:mt-28 lg:mt-32">
          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EyebrowC>{heroC.kicker}</EyebrowC>
          </motion.div>

          <motion.p
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-700 measure-tight mt-8 text-[1.15rem] italic sm:text-[1.3rem]"
          >
            {heroC.opening}
          </motion.p>

          <motion.h1
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-950 mt-5 max-w-4xl text-[clamp(2rem,4.9vw,3.55rem)] leading-[1.08] font-normal tracking-[-0.018em]"
          >
            {heroC.statement}
          </motion.h1>

          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-brand-200 mt-12 flex flex-col gap-5 border-t pt-8"
          >
            {heroC.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-brand-900/85 measure text-[1.06rem] leading-[1.72] sm:text-[1.12rem]"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button asChild variant="brand" size="xl" className="rounded-lg">
                <Link href={heroC.primaryCta.href}>
                  {heroC.primaryCta.label}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>

              <Link
                href={heroC.secondaryCta.href}
                className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 rounded text-[1.02rem] underline decoration-1 underline-offset-[6px] transition-colors outline-none focus-visible:ring-3"
              >
                {heroC.secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </ContainerC>
    </header>
  );
}
