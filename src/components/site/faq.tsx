import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Container, Section } from "@/components/site/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faq" tone="muted">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal className="text-brand-600 flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
                <span aria-hidden className="bg-brand-300 h-px w-6" />
                Pytania i odpowiedzi
              </Reveal>

              <Reveal delay={0.06} as="div">
                <h2 className="font-display text-brand-900 mt-4 text-[clamp(1.85rem,3.4vw,2.5rem)] leading-[1.12] tracking-[-0.02em] text-balance">
                  Pytania, które słyszę najczęściej
                </h2>
              </Reveal>

              <Reveal
                delay={0.12}
                className="text-muted-foreground text-balance-pretty mt-5 leading-relaxed"
              >
                A jeśli nie ma, napisz śmiało. Odpowiadam na konkretne pytania
                konkretnie — bez ofert-widmo i bez namawiania na zakres, którego
                nie potrzebujesz.
              </Reveal>

              <Reveal delay={0.16} className="mt-8">
                <Button asChild variant="brand" size="xl">
                  <Link href="#kontakt">
                    <MessageCircleQuestion data-icon="inline-start" />
                    Zadaj własne pytanie
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <Accordion
                type="single"
                collapsible
                defaultValue="faq-0"
                className="border-brand-200/70 w-full overflow-hidden rounded-3xl border bg-white"
              >
                {faq.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`faq-${i}`}
                    className="border-brand-200/70 px-6 last:border-b-0 sm:px-8"
                  >
                    <AccordionTrigger className="font-display text-brand-900 gap-6 py-6 text-left text-[1.05rem] leading-snug hover:no-underline sm:text-[1.12rem]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-balance-pretty pr-4 pb-6 text-[0.92rem] leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
