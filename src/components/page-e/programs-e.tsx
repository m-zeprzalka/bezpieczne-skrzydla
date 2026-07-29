import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import {
  ContainerE,
  SectionE,
  SectionHeadE,
  T_BODY,
  T_H3,
} from "@/components/page-e/frame";
import { programs, workshop } from "@/lib/content";
import { programsE } from "@/lib/content-e";

export function ProgramsE() {
  return (
    <SectionE id="szkolenia" className="bg-brand-50/70">
      <ContainerE>
        <SectionHeadE
          label={programsE.label}
          before={programsE.titleBefore}
          marked={programsE.titleMarked}
          lead={programsE.lead}
        />

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {programs.map((program) => (
            <li key={program.number} className="flex">
              <article className="border-brand-200 flex w-full flex-col rounded-[1.25rem] border bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-brand-50 text-brand-700 rounded-full px-3 py-1.5 text-[0.75rem] font-semibold">
                    {program.audience}
                  </span>
                  <span className="text-brand-300 text-[1.5rem] leading-none font-bold">
                    {program.number}
                  </span>
                </div>

                <h3 className={`${T_H3} text-brand-950 mt-6 font-semibold`}>
                  {program.title}
                </h3>

                <p className={`${T_BODY} text-muted-foreground mt-4`}>
                  {program.summary}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {program.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-brand-800 flex gap-3 text-[0.875rem] leading-[1.55]"
                    >
                      <Check
                        className="text-brand-600 mt-0.5 size-4 shrink-0"
                        aria-hidden
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#kontakt"
                  className="text-brand-600 hover:text-brand-700 focus-visible:ring-ring/50 border-brand-100 mt-8 inline-flex items-center gap-2 rounded border-t pt-6 text-[0.875rem] font-semibold outline-none focus-visible:ring-3"
                >
                  Zapytaj o ten program
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            </li>
          ))}

          {/* — warsztat: ta sama siatka, odwrócona kolorystyka — */}
          <li className="flex">
            <article className="bg-brand-950 flex w-full flex-col rounded-[1.25rem] p-8 text-white">
              <div className="flex items-start justify-between gap-4">
                <span className="bg-brand-800 text-brand-200 rounded-full px-3 py-1.5 text-[0.75rem] font-semibold">
                  {workshop.badge}
                </span>
                <span className="text-brand-700 text-[1.5rem] leading-none font-bold">
                  06
                </span>
              </div>

              <h3 className={`${T_H3} mt-6 font-semibold text-white`}>
                {workshop.title}
              </h3>

              <p className="text-brand-200/85 mt-4 text-[0.9375rem] leading-[1.7]">
                {workshop.subtitle}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {workshop.points.map((point) => (
                  <li
                    key={point}
                    className="text-brand-100 flex gap-3 text-[0.875rem] leading-[1.55]"
                  >
                    <Check
                      className="text-brand-400 mt-0.5 size-4 shrink-0"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="#kontakt"
                className="text-brand-300 hover:text-white focus-visible:ring-brand-400/50 border-brand-800 mt-8 inline-flex items-center gap-2 rounded border-t pt-6 text-[0.875rem] font-semibold outline-none focus-visible:ring-3"
              >
                Zapytaj o najbliższy termin
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          </li>
        </ul>

        <p className="text-muted-foreground mx-auto mt-10 max-w-[46rem] text-center text-[0.875rem] leading-[1.7]">
          {workshop.disclaimer}
        </p>
      </ContainerE>
    </SectionE>
  );
}
