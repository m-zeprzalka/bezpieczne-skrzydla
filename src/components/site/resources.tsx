import Link from "next/link";
import { ArrowRight, Download, FileDown } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/content";

export function Resources() {
  return (
    <Section id="baza-wiedzy">
      <Container>
        <SectionHeading
          eyebrow="Baza wiedzy"
          title="Narzędzia, które zostają z Tobą po szkoleniu"
          description="Checklisty, karty pracy i schematy działania przygotowane prostym językiem. Część udostępniam bezpłatnie — żeby wiedza docierała wcześniej, zanim problem zamieni się w kryzys."
          action={
            <Button asChild variant="outline" size="xl">
              <Link href="#kontakt">
                Poproś o dostęp do materiałów
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          }
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {resources.map((item) => (
            <RevealItem key={item.title}>
              <article className="group border-brand-200/70 hover:border-brand-300 relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(11,37,64,0.4)] sm:p-7">
                <span
                  aria-hidden
                  className="from-brand-50 absolute inset-0 -z-10 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="border-brand-200 text-brand-700 group-hover:bg-brand-700 group-hover:text-brand-50 group-hover:border-brand-700 grid size-12 shrink-0 place-items-center rounded-2xl border bg-white transition-colors duration-400">
                  <FileDown className="size-5" aria-hidden />
                </span>

                <div className="flex min-w-0 flex-col gap-2">
                  <Badge
                    variant="outline"
                    className="border-brand-200 text-brand-600 h-auto w-fit rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium tracking-[0.1em] uppercase"
                  >
                    {item.type}
                  </Badge>

                  <h3 className="font-display text-brand-900 text-[1.1rem] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-balance-pretty text-[0.87rem] leading-relaxed">
                    {item.description}
                  </p>

                  <span className="text-brand-600 mt-1 inline-flex items-center gap-1.5 text-[0.8rem] font-medium">
                    <Download className="size-3.5" aria-hidden />
                    Dostępne po zapisie
                  </span>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
