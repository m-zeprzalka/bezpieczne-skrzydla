"use client";

import * as React from "react";
import {
  Check,
  Compass,
  FileText,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { ContainerD, HeadingD } from "@/components/page-d/frame";
import { useMediaQuery } from "@/components/page-d/use-media-query";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { model4r } from "@/lib/content";
import { sectionsD } from "@/lib/content-d";

const icons = [Compass, HeartHandshake, FileText, ShieldCheck] as const;

/*
 * Geometria toru poziomego (w jednostkach vw, bez pomiarów w JS — dzięki temu
 * nie ma skoku układu przy pierwszym renderze):
 *   panel 62vw · odstęp 4vw · marginesy 19vw z obu stron
 *   szerokość zawartości = 19 + 4×62 + 3×4 + 19 = 298vw
 *   przesunięcie = 298 − 100 = 198vw  → pierwszy i ostatni panel wypadają centralnie
 */
const TRACK_SHIFT = "-198vw";

export function ModelScroll() {
  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 1024px)");
  const horizontal = wide && !reduce;

  return (
    <section id="model-4r" className="relative scroll-mt-24 bg-white">
      <ContainerD className="pt-24 sm:pt-28 lg:pt-36">
        <HeadingD
          eyebrow={sectionsD.model.eyebrow}
          title={sectionsD.model.title}
          description={sectionsD.model.description}
        />
      </ContainerD>

      {horizontal ? <HorizontalTrack /> : <StackedSteps />}
    </section>
  );
}

function HorizontalTrack() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0008,
  });
  const x = useTransform(smooth, [0, 1], ["0vw", TRACK_SHIFT]);
  const progress = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.ol
          style={{ x }}
          className="flex items-stretch gap-[4vw] pl-[19vw]"
        >
          {model4r.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.key} className="w-[62vw] shrink-0">
                <StepCard step={step} Icon={Icon} />
              </li>
            );
          })}
          <li aria-hidden className="w-[19vw] shrink-0" />
        </motion.ol>

        {/* — pasek postępu przejścia — */}
        <div className="mx-auto mt-12 w-[62vw]">
          <div className="bg-brand-200 relative h-px w-full">
            <motion.span
              style={{ width: progress }}
              className="bg-brand-700 absolute inset-y-0 left-0 block"
            />
          </div>
          <div className="mt-4 flex justify-between">
            {model4r.steps.map((step) => (
              <span
                key={step.key}
                className="text-brand-600 text-[0.68rem] tracking-[0.18em] uppercase"
              >
                {step.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedSteps() {
  return (
    <ContainerD className="pt-14 pb-24 sm:pb-28">
      <RevealGroup as="ol" className="flex flex-col gap-6">
        {model4r.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <RevealItem as="li" key={step.key}>
              <StepCard step={step} Icon={Icon} />
            </RevealItem>
          );
        })}
      </RevealGroup>
    </ContainerD>
  );
}

function StepCard({
  step,
  Icon,
}: {
  step: (typeof model4r.steps)[number];
  Icon: (typeof icons)[number];
}) {
  return (
    <article
      className={cn(
        "glass shadow-lux relative h-full overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12",
      )}
    >
      <span
        aria-hidden
        className="from-brand-200/60 pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-gradient-to-br to-transparent blur-2xl"
      />

      <div className="relative flex items-start justify-between gap-6">
        <span className="border-brand-200 text-brand-700 grid size-14 place-items-center rounded-2xl border bg-white/70">
          <Icon className="size-6" aria-hidden />
        </span>
        <span className="font-lux text-brand-200 text-[3.5rem] leading-none font-extralight lg:text-[5rem]">
          {step.index}
        </span>
      </div>

      <h3 className="font-lux text-brand-950 mt-8 text-[2rem] leading-none font-light tracking-[-0.03em] lg:text-[2.6rem]">
        {step.title}
      </h3>

      <p className="text-brand-700 mt-4 text-[1.05rem] leading-snug lg:text-[1.2rem]">
        {step.claim}
      </p>

      <p className="text-brand-800/70 mt-5 max-w-2xl leading-relaxed">
        {step.description}
      </p>

      <ul className="border-brand-200/70 mt-8 flex flex-col gap-3 border-t pt-6 lg:flex-row lg:gap-8">
        {step.points.map((point) => (
          <li
            key={point}
            className="text-brand-800 flex items-start gap-2.5 text-[0.9rem] leading-snug lg:flex-1"
          >
            <span className="bg-brand-100 text-brand-700 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
              <Check className="size-3" aria-hidden />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
