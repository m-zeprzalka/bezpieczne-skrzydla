import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { programs, workshop } from "@/lib/content";
import { programsC } from "@/lib/content-c";

export function ProgramsC() {
  return (
    <SectionC id="programy">
      <ContainerC>
        <Reveal>
          <EyebrowC>{programsC.eyebrow}</EyebrowC>
        </Reveal>

        <HeadingC className="measure-tight mt-6">{programsC.title}</HeadingC>

        <Reveal delay={0.1} className="mt-6">
          <ProseC>{programsC.intro}</ProseC>
        </Reveal>

        <RevealGroup as="ol" className="border-brand-200 mt-16 border-t">
          {programs.map((program) => (
            <RevealItem
              as="li"
              key={program.number}
              className="border-brand-200 group border-b py-9"
            >
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10">
                <div className="flex items-baseline gap-5 lg:col-span-5">
                  <span className="text-brand-400 font-sans text-[0.78rem] tracking-widest tabular-nums">
                    {program.number}
                  </span>
                  <div>
                    <h3 className="text-brand-950 group-hover:text-brand-700 text-[1.28rem] leading-[1.25] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-brand-600 mt-2 font-sans text-[0.78rem] tracking-wide">
                      {program.audience}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-brand-900/85 text-[1.02rem] leading-[1.65]">
                    {program.summary}
                  </p>
                  <ul className="text-brand-700 mt-3 flex flex-col gap-1.5 text-[0.92rem] leading-snug">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span
                          aria-hidden
                          className="bg-brand-400 mt-[0.55rem] size-1 shrink-0 rounded-full"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <Link
                    href="#napisz"
                    className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded font-sans text-[0.85rem] underline decoration-1 underline-offset-[6px] transition-colors outline-none focus-visible:ring-3"
                  >
                    Zapytaj
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* — warsztat: inny ton, więc wyraźnie oddzielony — */}
        <Reveal className="mt-16">
          <div className="border-brand-300 bg-paper-deep rounded-lg border p-8 sm:p-10">
            <EyebrowC>{workshop.badge}</EyebrowC>

            <h3 className="text-brand-950 mt-5 text-[clamp(1.5rem,2.6vw,2.05rem)] leading-tight">
              {workshop.title}
            </h3>

            <p className="text-brand-700 mt-2 text-[1.1rem] italic">
              {workshop.subtitle}
            </p>

            <ProseC className="mt-6">{workshop.body}</ProseC>

            <p className="border-brand-300 text-brand-700 measure mt-6 border-l-2 pl-5 text-[0.92rem] leading-relaxed italic">
              {workshop.disclaimer}
            </p>

            <Link
              href="#napisz"
              className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 mt-7 inline-flex items-center gap-2 rounded font-sans text-[0.9rem] underline decoration-1 underline-offset-[6px] transition-colors outline-none focus-visible:ring-3"
            >
              Zapytaj o najbliższy termin
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </ContainerC>
    </SectionC>
  );
}
