import { ContainerD, HeadingD, SectionD } from "@/components/page-d/frame";
import { Reveal } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/content";
import { sectionsD } from "@/lib/content-d";

export function FaqD() {
  return (
    <SectionD id="faq" className="bg-brand-50/60 overflow-hidden">
      <ContainerD>
        <HeadingD
          eyebrow={sectionsD.faq.eyebrow}
          title={sectionsD.faq.title}
          description={sectionsD.faq.description}
        />

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-d-0"
            className="glass shadow-lux w-full overflow-hidden rounded-3xl"
          >
            {faq.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-d-${i}`}
                className="border-brand-200/70 px-6 last:border-b-0 sm:px-8"
              >
                <AccordionTrigger className="font-lux text-brand-950 gap-6 py-6 text-left text-[1.05rem] leading-snug font-light hover:no-underline sm:text-[1.15rem]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-brand-800/75 text-balance-pretty pr-4 pb-6 text-[0.92rem] leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </ContainerD>
    </SectionD>
  );
}
