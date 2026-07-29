import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import {
  ContainerB,
  LabelB,
  SectionB,
  SectionHeadB,
} from "@/components/page-b/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricing } from "@/lib/content";

export function PricingB() {
  return (
    <SectionB id="cennik" tone="tint">
      <ContainerB>
        <SectionHeadB
          index="06"
          eyebrow="Cennik"
          title="Widełki podaję od razu. Wycenę — po rozmowie."
          description="Podstawową formą są szkolenia online, dzięki czemu oferta pozostaje dostępna także dla mikro i małych firm. Nie płacisz za elementy, których nie potrzebujesz."
        />

        <div className="pt-12 pb-16 sm:pb-20 lg:pt-14 lg:pb-24">
          <RevealGroup className="border-brand-300 grid grid-cols-1 border-t lg:grid-cols-3">
            {pricing.map((plan) => (
              <RevealItem
                key={plan.name}
                className={cn(
                  "border-brand-300 relative flex flex-col border-b p-7 lg:border-r lg:border-b-0 lg:last:border-r-0 lg:p-8",
                  plan.featured ? "bg-white" : "bg-transparent",
                )}
              >
                {plan.featured ? (
                  <span
                    aria-hidden
                    className="bg-brand-600 absolute inset-x-0 top-0 h-0.5"
                  />
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <LabelB>{plan.name}</LabelB>
                  {plan.featured ? (
                    <span className="bg-brand-950 rounded-sm px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.14em] text-white uppercase">
                      najczęściej
                    </span>
                  ) : null}
                </div>

                <p className="font-grotesk text-brand-950 mt-6 text-[2.1rem] leading-none font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className="text-muted-foreground mt-2 text-[0.8rem]">
                  {plan.unit}
                </p>

                <p className="text-muted-foreground mt-5 text-[0.88rem] leading-relaxed">
                  {plan.description}
                </p>

                <ul className="border-brand-200 mt-6 flex flex-1 flex-col gap-2.5 border-t pt-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-brand-800 flex gap-2.5 text-[0.85rem] leading-snug"
                    >
                      <Check
                        className="text-brand-600 mt-0.5 size-3.5 shrink-0"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.featured ? "brand" : "outline"}
                  size="lg"
                  className="mt-7 w-full rounded-md bg-white data-[variant=brand]:bg-[var(--brand-700)]"
                >
                  <Link href="#kontakt">
                    {plan.cta}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal
            delay={0.08}
            className="border-brand-300 text-muted-foreground mt-8 max-w-3xl border-t pt-6 text-[0.85rem] leading-relaxed"
          >
            Do szkolenia stacjonarnego mogą zostać doliczone wcześniej
            uzgodnione koszty dojazdu, noclegu, wynajęcia sali i organizacji
            spotkania. Wszystko ustalam przed podpisaniem umowy — bez ukrytych
            pozycji.
          </Reveal>
        </div>
      </ContainerB>
    </SectionB>
  );
}
