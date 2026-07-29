import { ContainerB, SectionB, SectionHeadB } from "@/components/page-b/frame";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/content";

export function FaqB() {
  return (
    <SectionB id="faq" tone="tint">
      <ContainerB>
        <SectionHeadB
          index="08"
          eyebrow="Pytania i odpowiedzi"
          title="Zanim napiszesz"
          description="Odpowiadam na konkretne pytania konkretnie — bez ofert-widmo i bez namawiania na zakres, którego nie potrzebujesz."
        />

        <div className="pt-12 pb-16 sm:pb-20 lg:pt-14 lg:pb-24">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              className="border-brand-300 w-full border-t"
            >
              {faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-b-${i}`}
                  className="border-brand-300"
                >
                  <AccordionTrigger className="font-grotesk text-brand-950 gap-8 py-6 text-left text-[1.05rem] leading-snug font-medium hover:no-underline sm:text-[1.15rem]">
                    <span className="flex gap-5">
                      <span
                        aria-hidden
                        className="text-brand-600 shrink-0 font-mono text-[0.7rem] leading-7"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-balance-pretty pb-7 pl-10 text-[0.92rem] leading-relaxed sm:max-w-3xl">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </ContainerB>
    </SectionB>
  );
}
