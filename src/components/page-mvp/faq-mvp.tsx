import {
  ContainerMvp,
  SectionHeadMvp,
  SectionMvp,
} from "@/components/page-mvp/frame-mvp";
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
 */
export function FaqMvp() {
  return (
    <SectionMvp id="faq" tone="tint">
      <ContainerMvp>
        <SectionHeadMvp
          index="10"
          label="Pytania i odpowiedzi"
          title="Zanim zapytasz —"
          accent="odpowiadam"
          align="center"
        />

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-[46rem]">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-mvp-0"
            className="border-brand-200 shadow-lift w-full overflow-hidden rounded-[1.25rem] border bg-white"
          >
            {faqMvp.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-mvp-${i}`}
                className="border-brand-100 px-6 last:border-b-0 sm:px-8"
              >
                <AccordionTrigger className="font-display text-brand-950 gap-6 py-6 text-left text-[1.05rem] leading-snug font-medium hover:no-underline sm:text-[1.15rem]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pr-4 pb-6 text-[0.9375rem] leading-[1.75] text-pretty">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </ContainerMvp>
    </SectionMvp>
  );
}
