"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import {
  Check,
  Compass,
  FileText,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Reveal } from "@/components/site/reveal";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { WingArcs } from "@/components/site/wing-arcs";
import { cn } from "@/lib/utils";
import { model4r } from "@/lib/content";

const icons = [Compass, HeartHandshake, FileText, ShieldCheck] as const;

export function Model4R() {
  const [value, setValue] = React.useState<string>(model4r.steps[0].key);
  const reduce = useReducedMotion();
  const activeIndex = model4r.steps.findIndex((s) => s.key === value);
  const active = model4r.steps[activeIndex] ?? model4r.steps[0];

  return (
    <Section id="model-4r">
      <div
        aria-hidden
        className="bg-aurora absolute -right-40 -bottom-60 -z-10 h-[600px] w-[900px] opacity-40 blur-2xl"
      />
      <WingArcs
        animate={false}
        className="absolute -top-24 -left-56 -z-10 w-[760px] rotate-12 opacity-[0.13]"
        count={8}
      />

      <Container>
        <SectionHeading
          eyebrow={model4r.eyebrow}
          title={model4r.title}
          description={model4r.description}
        />

        <TabsPrimitive.Root
          value={value}
          onValueChange={setValue}
          orientation="vertical"
          className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-14"
        >
          {/* — lista kroków — */}
          <TabsPrimitive.List
            aria-label="Etapy Modelu 4R"
            className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:col-span-5 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {model4r.steps.map((step, i) => {
              const Icon = icons[i];
              const isActive = step.key === value;

              return (
                <TabsPrimitive.Trigger
                  key={step.key}
                  value={step.key}
                  className={cn(
                    "group focus-visible:ring-ring/50 relative w-[78vw] shrink-0 snap-start rounded-2xl p-5 text-left transition-colors duration-300 outline-none focus-visible:ring-3 sm:w-[62vw] lg:w-full lg:p-6",
                    isActive
                      ? "bg-white"
                      : "hover:bg-brand-50/70 bg-transparent",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      data-reveal=""
                      layoutId={reduce ? undefined : "step-surface"}
                      aria-hidden
                      className="border-brand-200/80 shadow-lift absolute inset-0 -z-10 rounded-2xl border bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 34,
                      }}
                    />
                  ) : null}

                  <span className="flex items-start gap-4">
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                        isActive
                          ? "border-brand-700 bg-brand-700 text-brand-50"
                          : "border-brand-200 text-brand-500 group-hover:border-brand-300 bg-white",
                      )}
                    >
                      <Icon className="size-[1.15rem]" aria-hidden />
                    </span>

                    <span className="flex min-w-0 flex-col gap-1.5">
                      <span className="flex items-baseline gap-2.5">
                        <span
                          className={cn(
                            "font-mono text-[0.7rem] transition-colors",
                            isActive ? "text-brand-600" : "text-brand-500",
                          )}
                        >
                          {step.index}
                        </span>
                        <span
                          className={cn(
                            "font-display text-[1.15rem] transition-colors",
                            isActive ? "text-brand-900" : "text-brand-700/80",
                          )}
                        >
                          {step.title}
                        </span>
                      </span>
                      <span className="text-muted-foreground text-[0.85rem] leading-snug">
                        {step.claim}
                      </span>
                    </span>
                  </span>
                </TabsPrimitive.Trigger>
              );
            })}
          </TabsPrimitive.List>

          {/* — panel szczegółów — */}
          <div className="lg:col-span-7">
            <div className="border-brand-200/70 from-brand-50 relative overflow-hidden rounded-3xl border bg-gradient-to-br to-white p-7 sm:p-10">
              <span
                aria-hidden
                className="font-display text-brand-200/50 pointer-events-none absolute -top-5 -right-1 text-[6.5rem] leading-none font-medium select-none sm:-top-8 sm:-right-2 sm:text-[11rem] lg:text-[14rem]"
              >
                {active.index}
              </span>

              {/* Radix odmontowuje nieaktywne panele, więc wejście odtwarza się
                  przy każdej zmianie kroku — bez AnimatePresence. */}
              {model4r.steps.map((step, i) => {
                const Icon = icons[i];
                return (
                  <TabsPrimitive.Content
                    key={step.key}
                    value={step.key}
                    className="relative outline-none"
                  >
                    <motion.div
                      data-reveal=""
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="border-brand-200 text-brand-700 mb-6 grid size-12 place-items-center rounded-2xl border bg-white">
                        <Icon className="size-5" aria-hidden />
                      </span>

                      <h3 className="font-display text-brand-900 text-[1.75rem] leading-tight sm:text-[2.1rem]">
                        {step.title}
                      </h3>

                      <p className="font-display text-brand-700 mt-3 text-lg italic">
                        {step.claim}
                      </p>

                      <p className="text-muted-foreground text-balance-pretty mt-5 max-w-xl leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="mt-8 flex flex-col gap-3">
                        {step.points.map((point, pointIndex) => (
                          <motion.li
                            data-reveal=""
                            key={point}
                            initial={reduce ? false : { opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.12 + pointIndex * 0.07,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-brand-800 flex items-start gap-3 text-[0.92rem]"
                          >
                            <span className="bg-brand-100 text-brand-700 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                              <Check className="size-3" aria-hidden />
                            </span>
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </TabsPrimitive.Content>
                );
              })}
            </div>

            <Reveal
              delay={0.1}
              className="text-muted-foreground mt-6 flex items-center gap-3 text-[0.82rem]"
            >
              <span aria-hidden className="rule-gradient h-px w-10" />
              Każdy program szkoleniowy opieram na tym samym schemacie — dzięki
              temu wiedza z różnych szkoleń układa się w jedną całość.
            </Reveal>
          </div>
        </TabsPrimitive.Root>
      </Container>
    </Section>
  );
}
