import { FileDown } from "lucide-react";

import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
  T_LABEL_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { resources } from "@/lib/content";
import { knowledgeF } from "@/lib/content-f";

/**
 * Baza wiedzy — treści jak w F/G. Wersja B bez kart: cztery kolumny
 * nad włoskowatymi liniami, dużo światła między materiałami.
 */
export function KnowledgeMvpB() {
  return (
    <SectionMvpB id="baza-wiedzy">
      <ContainerMvpB>
        <SectionHeadMvpB
          index="11"
          label={knowledgeF.label}
          title="Artykuły, opinie i"
          accent="bezpłatne materiały"
          lead={knowledgeF.lead}
          align="center"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {resources.map((item) => (
            <RevealItem
              key={item.title}
              className="border-brand-300/70 flex flex-col border-t pt-6"
            >
              <span className={`${T_LABEL_MVPB} text-brand-600`}>
                {item.type}
              </span>

              <h3 className="font-display text-brand-950 mt-3.5 text-[1.15rem] leading-[1.35] tracking-tight">
                {item.title}
              </h3>

              <p className="text-muted-foreground mt-3.5 flex-1 text-[0.875rem] leading-[1.7]">
                {item.description}
              </p>

              <p className="text-brand-600 mt-7 flex items-center gap-2 text-[0.8125rem] font-semibold">
                <FileDown className="size-4" aria-hidden />
                Dostępne po zapisie
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerMvpB>
    </SectionMvpB>
  );
}
