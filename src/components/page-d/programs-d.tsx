import Link from "next/link";
import { ArrowUpRight, Check, Coffee } from "lucide-react";

import {
  ContainerD,
  EyebrowD,
  HeadingD,
  SectionD,
} from "@/components/page-d/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { cn, pluralPl } from "@/lib/utils";
import { programs, workshop } from "@/lib/content";
import { sectionsD } from "@/lib/content-d";

/** Rytm 2 + 3 zamiast równej siatki — układ oddycha i nie wygląda jak tabela. */
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
] as const;

export function ProgramsD() {
  return (
    <SectionD id="oferta" className="bg-brand-50/60 overflow-hidden">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <ContainerD>
        <HeadingD
          eyebrow={sectionsD.programs.eyebrow}
          title={sectionsD.programs.title}
          description={sectionsD.programs.description}
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {programs.map((program, i) => (
            <RevealItem key={program.number} className={cn(spans[i], "flex")}>
              <article className="glass shadow-lux hover:shadow-lux-hover group relative flex w-full flex-col overflow-hidden rounded-3xl p-7 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 sm:p-8">
                <span
                  aria-hidden
                  className="from-brand-200/70 pointer-events-none absolute -top-20 -right-14 size-52 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="text-brand-700/80 rounded-full bg-white/70 px-3 py-1 text-[0.68rem] leading-tight">
                    {program.audience}
                  </span>
                  <span className="font-lux text-brand-200 text-[1.5rem] leading-none font-extralight">
                    {program.number}
                  </span>
                </div>

                <h3 className="font-lux text-brand-950 relative mt-6 text-[1.35rem] leading-[1.2] font-light tracking-tight">
                  {program.title}
                </h3>

                <p className="text-brand-800/75 relative mt-3 text-[0.92rem] leading-relaxed">
                  {program.summary}
                </p>

                <ul className="relative mt-6 flex flex-1 flex-col gap-2.5">
                  {program.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-brand-800 flex items-start gap-2.5 text-[0.86rem] leading-snug"
                    >
                      <span className="bg-brand-100 text-brand-700 mt-px grid size-4.5 shrink-0 place-items-center rounded-full">
                        <Check className="size-2.5" aria-hidden />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="border-brand-200/70 relative mt-7 flex items-center justify-between gap-3 border-t pt-5">
                  <span className="text-brand-700/85 text-[0.76rem]">
                    {program.materials.length}{" "}
                    {pluralPl(
                      program.materials.length,
                      "materiał dodatkowy",
                      "materiały dodatkowe",
                      "materiałów dodatkowych",
                    )}
                  </span>

                  <Link
                    href="#kontakt"
                    className="text-brand-800 hover:text-brand-950 focus-visible:ring-ring/50 inline-flex items-center gap-1.5 rounded-full text-[0.82rem] font-medium transition-colors outline-none focus-visible:ring-3"
                  >
                    Zapytaj
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* — warsztat wspierający — */}
        <Reveal className="mt-6">
          <div className="glass shadow-lux relative grid grid-cols-1 gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-12 lg:gap-14">
            <span
              aria-hidden
              className="from-sand/80 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent"
            />

            <div className="relative lg:col-span-7">
              <EyebrowD>
                <Coffee className="size-3.5" aria-hidden />
                {workshop.badge}
              </EyebrowD>

              <h3 className="font-lux text-brand-950 mt-5 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight font-light tracking-[-0.03em]">
                {workshop.title}
              </h3>

              <p className="text-brand-700 mt-3 text-[1.05rem]">
                {workshop.subtitle}
              </p>

              <p className="text-brand-800/75 mt-5 max-w-xl leading-relaxed">
                {workshop.body}
              </p>

              <p className="border-brand-300 text-brand-700/80 mt-6 max-w-xl border-l-2 pl-4 text-[0.85rem] leading-relaxed">
                {workshop.disclaimer}
              </p>
            </div>

            <div className="relative lg:col-span-5">
              <ul className="flex flex-col gap-3.5">
                {workshop.points.map((point) => (
                  <li
                    key={point}
                    className="text-brand-800 flex items-start gap-3 text-[0.92rem] leading-snug"
                  >
                    <span className="bg-brand-700 grid size-5 shrink-0 place-items-center rounded-full text-white">
                      <Check className="size-3" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="brand"
                size="xl"
                className="mt-8 w-full rounded-full"
              >
                <Link href="#kontakt">Zapytaj o najbliższy termin</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </ContainerD>
    </SectionD>
  );
}
