import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqMvp } from "@/lib/content-mvp";

/**
 * FAQ z korektami z maila: „szkolenie online” to nagrany kurs e-learningowy,
 * nie zajęcia na żywo; test 10–20 pytań i imienny certyfikat; warsztat
 * nie jest ani szkoleniem, ani terapią.
 *
 * Wersja B: akordeon bez pudełka — pytania rozdzielają wyłącznie
 * włoskowate linie, z szerszym oddechem wierszy.
 */
export function FaqMvpB() {
  return (
    <SectionMvpB id="faq" tone="tint">
      <ContainerMvpB>
        <SectionHeadMvpB
          index="10"
          label="Pytania i odpowiedzi"
          title="Zanim zapytasz —"
          accent="odpowiadam"
          align="center"
        />

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-[46rem] lg:mt-20">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-mvp-b-0"
            className="border-brand-200 w-full border-t"
          >
            {faqMvp.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-mvp-b-${i}`}
                className="border-brand-200"
              >
                <AccordionTrigger className="font-display text-brand-950 gap-6 py-7 text-left text-[1.05rem] leading-snug font-medium hover:no-underline sm:text-[1.15rem]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground max-w-[42rem] pr-4 pb-8 text-[0.9375rem] leading-[1.8] text-pretty">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </ContainerMvpB>
    </SectionMvpB>
  );
}
