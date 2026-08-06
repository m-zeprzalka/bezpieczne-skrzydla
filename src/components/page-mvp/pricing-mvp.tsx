import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import {
  ContainerMvp,
  SectionHeadMvp,
  SectionMvp,
  T_BODY_MVP,
  T_LABEL_MVP,
} from "@/components/page-mvp/frame-mvp";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { pricingMvp } from "@/lib/content-mvp";

/**
 * Cennik z maila klientki — celowo prosty. Pakiet „Bezpieczna Firma”
 * jako produkt flagowy: karta na pełną szerokość, nad pozostałymi.
 * Kwoty bez słowa „netto” — podana kwota jest kwotą do zapłaty.
 * Każdy przycisk prowadzi do formularza „Poproś o wycenę”, nie do koszyka.
 */
export function PricingMvp() {
  return (
    <SectionMvp id="cennik" tone="deep" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-0 opacity-50"
      />

      <ContainerMvp className="relative">
        <SectionHeadMvp
          index={pricingMvp.index}
          label={pricingMvp.label}
          title="Cennik —"
          accent="celowo prosty"
          lead={pricingMvp.lead}
          tone="dark"
          align="center"
        />

        {/* — produkt flagowy: pełna szerokość, nad pozostałymi — */}
        <Reveal delay={0.08} className="mt-16 lg:mt-20">
          <article className="border-brand-300/40 relative overflow-hidden rounded-[1.5rem] border bg-white p-8 sm:p-10 lg:p-12">
            <WingArcs
              animate={false}
              className="absolute -right-28 -bottom-40 w-[520px] opacity-15"
              count={9}
            />

            <div className="relative grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="bg-brand-700 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase">
                  <Sparkles className="size-3.5" aria-hidden />
                  {pricingMvp.flagship.badge}
                </span>

                <h3 className="font-display text-brand-950 mt-5 text-[1.8rem] leading-[1.1] tracking-tight sm:text-[2.2rem]">
                  {pricingMvp.flagship.name}
                </h3>

                <p
                  className={`${T_BODY_MVP} text-muted-foreground mt-5 max-w-[42rem] text-pretty`}
                >
                  {pricingMvp.flagship.description}
                </p>
              </div>

              <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:items-end lg:text-right">
                <p className="font-display text-brand-950 text-[3rem] leading-none tracking-tight sm:text-[3.4rem]">
                  {pricingMvp.flagship.price}
                </p>
                <Button
                  asChild
                  variant="brand"
                  size="xl"
                  className="rounded-full px-8 font-semibold"
                >
                  <Link href="#wycena">
                    {pricingMvp.cta}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </Reveal>

        {/* — pozostałe cztery pozycje — */}
        <RevealGroup className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingMvp.plans.map((plan) => (
            <RevealItem key={plan.name} className="flex">
              <article className="border-brand-800 bg-brand-900/60 flex w-full flex-col rounded-[1.25rem] border p-7 backdrop-blur-sm lg:p-8">
                <span className={`${T_LABEL_MVP} text-brand-300`}>
                  {plan.name}
                </span>

                <p className="font-display mt-6 text-[2rem] leading-none tracking-tight text-white">
                  {plan.price}
                </p>

                <p className="text-brand-200/85 mt-5 flex-1 text-[0.875rem] leading-[1.7] text-pretty">
                  {plan.description}
                </p>

                <Button
                  asChild
                  size="xl"
                  className="bg-brand-400 text-brand-950 hover:bg-brand-300 mt-7 w-full rounded-full font-semibold"
                >
                  <Link href="#wycena">
                    {pricingMvp.cta}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* — zdanie, które ma być uwidocznione pod cennikiem — */}
        <Reveal delay={0.1} className="mt-14 text-center lg:mt-16">
          <p className="font-display mx-auto max-w-[44rem] text-[1.5rem] leading-[1.35] text-white sm:text-[1.8rem]">
            {pricingMvp.emphasis}
          </p>
          <p className="text-brand-200/85 mx-auto mt-4 max-w-[36rem] text-[0.9375rem] leading-[1.7]">
            {pricingMvp.emphasisNote}
          </p>
        </Reveal>
      </ContainerMvp>
    </SectionMvp>
  );
}
