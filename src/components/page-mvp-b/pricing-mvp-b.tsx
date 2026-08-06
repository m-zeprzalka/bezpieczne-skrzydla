import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
  T_LABEL_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { WingArcs, WingRule } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { pricingMvp } from "@/lib/content-mvp";

/**
 * Cennik z maila klientki — celowo prosty. Pakiet „Bezpieczna Firma”
 * jako produkt flagowy: karta na pełną szerokość, nad pozostałymi.
 * Kwoty bez słowa „netto” — podana kwota jest kwotą do zapłaty.
 * Każdy przycisk prowadzi do formularza „Poproś o wycenę”, nie do koszyka.
 *
 * Wersja B odwraca kontrast MVP: sekcja jest jasna, a granatowa zostaje
 * wyłącznie karta flagowa — dzięki temu wyróżnia się jeszcze mocniej,
 * a pozostałe pozycje w luźnej siatce 2×2 mają szerokie, jasne karty.
 */
/* Tytuł mówi już „celowo prosty” — lead nie powtarza tego po raz drugi. */
const PRICING_LEAD_B =
  "Podana kwota jest kwotą do zapłaty — nie doliczam VAT i nie piszę gwiazdek.";

export function PricingMvpB() {
  return (
    <SectionMvpB id="cennik" tone="tint" className="overflow-hidden">
      <ContainerMvpB>
        <SectionHeadMvpB
          index={pricingMvp.index}
          label={pricingMvp.label}
          title="Cennik —"
          accent="celowo prosty"
          lead={PRICING_LEAD_B}
          align="center"
        />

        {/* — produkt flagowy: pełna szerokość, nad pozostałymi — */}
        <Reveal delay={0.08} className="mt-16 lg:mt-24">
          <article className="bg-brand-950 relative overflow-hidden rounded-[1.75rem] p-8 text-white sm:p-12 lg:p-14">
            <div
              aria-hidden
              className="bg-aurora-deep absolute inset-0 opacity-45"
            />
            <WingArcs
              animate={false}
              className="absolute -right-28 -bottom-40 w-[520px] opacity-10"
              count={9}
            />

            <div className="relative grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="bg-brand-400 text-brand-950 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase">
                  <Sparkles className="size-3.5" aria-hidden />
                  {pricingMvp.flagship.badge}
                </span>

                <h3 className="font-display mt-6 text-[1.9rem] leading-[1.1] tracking-tight text-white sm:text-[2.3rem]">
                  {pricingMvp.flagship.name}
                </h3>

                <p className="text-brand-200/90 mt-6 max-w-[42rem] text-[0.9375rem] leading-[1.8] text-pretty sm:text-[1rem]">
                  {pricingMvp.flagship.description}
                </p>
              </div>

              <div className="flex flex-col items-start gap-7 lg:col-span-4 lg:items-end lg:text-right">
                <p className="font-display text-[3rem] leading-none tracking-tight text-white sm:text-[3.4rem]">
                  {pricingMvp.flagship.price}
                </p>
                <Button
                  asChild
                  size="xl"
                  className="bg-brand-400 text-brand-950 hover:bg-brand-300 rounded-full px-8 font-semibold"
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

        {/* — pozostałe cztery pozycje: przestronna siatka 2×2 — */}
        <RevealGroup className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
          {pricingMvp.plans.map((plan) => (
            <RevealItem key={plan.name} className="flex">
              <article className="border-brand-200/70 flex w-full flex-col rounded-[1.5rem] border bg-white p-8 sm:p-9">
                <h3 className={`${T_LABEL_MVPB} text-brand-600`}>
                  {plan.name}
                </h3>

                <p className="font-display text-brand-950 mt-6 text-[2.1rem] leading-none tracking-tight">
                  {plan.price}
                </p>

                <p className="text-muted-foreground mt-5 flex-1 text-[0.9rem] leading-[1.8] text-pretty">
                  {plan.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="border-brand-300 text-brand-800 hover:bg-brand-50 mt-8 w-full rounded-full font-semibold"
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
        <Reveal delay={0.1} className="mt-20 text-center lg:mt-24">
          <WingRule className="mb-10" />
          <p className="font-display text-brand-950 mx-auto max-w-[44rem] text-[1.5rem] leading-[1.4] sm:text-[1.85rem]">
            {pricingMvp.emphasis}
          </p>
          <p className="text-muted-foreground mx-auto mt-5 max-w-[36rem] text-[0.9375rem] leading-[1.8]">
            {pricingMvp.emphasisNote}
          </p>
        </Reveal>
      </ContainerMvpB>
    </SectionMvpB>
  );
}
