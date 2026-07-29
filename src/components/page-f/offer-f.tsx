import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LABEL_F,
} from "@/components/page-f/frame-f";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trainingsF, type TrainingF } from "@/lib/content-f";

/**
 * Pięć szkoleń z kompletem treści z dokumentu klientki: pełne akapity,
 * pełna lista „pokazuję” i pełna lista materiałów. Rozwijane wiersze
 * utrzymują stronę w ryzach, nie skracając ani zdania.
 */
export function OfferF() {
  return (
    <SectionF id="oferta">
      <ContainerF>
        <SectionHeadF
          index="02"
          label="Oferta · Szkolenia"
          title="Pięć szkoleń, każde dla innej"
          accent="roli w organizacji"
          lead="Rozwiń program, aby przeczytać pełny opis — dokładnie w takim kształcie, w jakim trafi na stronę. Zakres i materiały dopasowuję po rozmowie."
          align="center"
        />

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <Accordion
            type="single"
            collapsible
            defaultValue="training-01"
            className="border-brand-200 w-full border-t"
          >
            {trainingsF.map((training) => (
              <TrainingRow key={training.number} training={training} />
            ))}
          </Accordion>
        </Reveal>
      </ContainerF>
    </SectionF>
  );
}

function TrainingRow({ training }: { training: TrainingF }) {
  return (
    <AccordionItem
      value={`training-${training.number}`}
      className="border-brand-200"
    >
      <AccordionTrigger className="group items-center gap-6 rounded-none px-1 py-7 hover:no-underline sm:py-9 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-[var(--brand-500)]">
        <span className="flex min-w-0 items-baseline gap-5 text-left sm:gap-8">
          <span
            aria-hidden
            className="text-outline-f font-display shrink-0 text-[2rem] leading-none font-medium select-none sm:text-[2.6rem]"
          >
            {training.number}
          </span>
          <span className="flex min-w-0 flex-col gap-2">
            <span className="font-display text-brand-950 group-hover:text-brand-700 text-[1.35rem] leading-[1.2] font-normal tracking-tight transition-colors sm:text-[1.7rem]">
              {training.title}
            </span>
            <span className="text-brand-600 text-[0.8125rem] font-medium tracking-wide">
              {training.audience}
            </span>
          </span>
        </span>
      </AccordionTrigger>

      <AccordionContent className="px-1 pb-12 sm:pb-14">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-2 md:grid-cols-12 lg:pl-[5.6rem]">
          {/* — pełny opis — */}
          <div className="md:col-span-6">
            <div className="flex max-w-[36rem] flex-col gap-5">
              {training.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`${T_BODY_F} text-muted-foreground text-pretty`}
                >
                  {paragraph}
                </p>
              ))}

              {training.closing?.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`${T_BODY_F} text-brand-800 border-brand-300 border-l-2 pl-5 text-pretty`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* — listy: zakres i materiały — */}
          <div className="flex flex-col gap-10 md:col-span-6 md:pl-4 lg:pl-8">
            <div>
              <h4 className={`${T_LABEL_F} text-brand-600`}>
                {training.showsLabel}
              </h4>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {training.shows.map((item) => (
                  <li
                    key={item}
                    className="text-brand-800 flex gap-2.5 text-[0.875rem] leading-[1.55]"
                  >
                    <Check
                      className="text-brand-500 mt-0.5 size-4 shrink-0"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {training.extra4R ? (
              <div className="border-brand-200 rounded-2xl border bg-white p-6">
                <p className="text-brand-800 text-[0.875rem] font-medium">
                  {training.extra4R.intro}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {training.extra4R.items.map((item) => (
                    <li
                      key={item.key}
                      className="text-muted-foreground text-[0.875rem] leading-[1.55]"
                    >
                      <strong className="text-brand-700 font-semibold">
                        {item.key}
                      </strong>{" "}
                      — {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {training.materials ? (
              <div>
                <h4 className={`${T_LABEL_F} text-brand-600`}>
                  Materiały dodatkowe
                </h4>
                <p className="text-muted-foreground mt-2 text-[0.8125rem]">
                  {training.materialsLabel}:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {training.materials.map((material) => (
                    <li
                      key={material}
                      className="border-brand-200 text-brand-800 rounded-full border bg-white px-3.5 py-1.5 text-[0.78rem] leading-snug"
                    >
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <Link
              href="#kontakt"
              className="text-brand-700 hover:text-brand-600 focus-visible:ring-ring/50 inline-flex items-center gap-2 self-start rounded text-[0.875rem] font-semibold outline-none focus-visible:ring-3"
            >
              Zapytaj o to szkolenie
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
