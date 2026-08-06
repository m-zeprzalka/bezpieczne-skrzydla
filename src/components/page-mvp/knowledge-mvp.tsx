import { FileDown } from "lucide-react";

import {
  ContainerMvp,
  SectionHeadMvp,
  SectionMvp,
  T_LABEL_MVP,
} from "@/components/page-mvp/frame-mvp";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { resources } from "@/lib/content";
import { knowledgeF } from "@/lib/content-f";

/** Baza wiedzy — jak w F/G, z nagłówkiem bez kursywy. */
export function KnowledgeMvp() {
  return (
    <SectionMvp id="baza-wiedzy">
      <ContainerMvp>
        <SectionHeadMvp
          index="11"
          label={knowledgeF.label}
          title="Artykuły, opinie i"
          accent="bezpłatne materiały"
          lead={knowledgeF.lead}
          align="center"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {resources.map((item) => (
            <RevealItem key={item.title} className="flex">
              <article className="border-brand-200 flex w-full flex-col rounded-2xl border bg-white p-7">
                <span className="border-brand-200 text-brand-700 grid size-11 place-items-center rounded-xl border">
                  <FileDown className="size-5" aria-hidden />
                </span>

                <span className={`${T_LABEL_MVP} text-brand-600 mt-6`}>
                  {item.type}
                </span>

                <h3 className="font-display text-brand-950 mt-2.5 text-[1.15rem] leading-[1.3] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mt-3 flex-1 text-[0.875rem] leading-[1.65]">
                  {item.description}
                </p>

                <p className="text-brand-600 border-brand-100 mt-6 border-t pt-4 text-[0.8125rem] font-semibold">
                  Dostępne po zapisie
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerMvp>
    </SectionMvp>
  );
}
