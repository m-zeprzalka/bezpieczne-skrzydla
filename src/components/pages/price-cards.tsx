import Link from "next/link";
import { ArrowRight, Award, Check } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { WingArcs } from "@/components/system/wing-arcs";
import { Button } from "@/components/ui/button";
import { pricing } from "@/content/pricing";
import { cn } from "@/lib/utils";

const topicByInterest: Record<string, string> = {
  "bezpieczna-firma": "bezpieczna-firma",
  "kurs-online": "kurs-online",
  "pakiet-firma": "pakiet-firma",
  "msp-bez-chaosu": "msp-bez-chaosu",
  stacjonarne: "stacjonarne",
};

function quoteHref(id: string) {
  return `/kontakt?temat=${topicByInterest[id] ?? id}`;
}

/**
 * Cennik na ciemnym tle: produkt flagowy jako biała karta na pełną szerokość,
 * cztery pozycje w rzędzie. Kwoty bez „netto”. Wszystkie CTA → formularz wyceny.
 */
export function PriceCards({ showIncludes = false, className }: { showIncludes?: boolean; className?: string }) {
  const { flagship, plans } = pricing;

  return (
    <div className={cn("", className)}>
      <Reveal delay={0.08} id={flagship.id} className="scroll-mt-28">
        <article className="relative overflow-hidden rounded-panel bg-white p-8 sm:p-10 lg:p-12">
          <WingArcs animate={false} className="absolute -right-28 -bottom-40 w-[520px] opacity-10" count={9} />
          <div className="relative grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="t-label inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-1.5 text-white">
                <Award className="size-3.5" aria-hidden />
                {flagship.badge}
              </span>
              <h3 className="mt-6 font-display text-[1.7rem] leading-[1.1] tracking-tight text-ink sm:text-[2rem]">
                {flagship.name}
              </h3>
              <p className="mt-5 max-w-[42rem] text-body text-pretty text-ink-muted">{flagship.description}</p>

              {showIncludes ? (
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {flagship.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-small text-brand-900/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:items-end lg:text-right">
              <p className="font-display text-[2.6rem] leading-none tracking-tight text-ink sm:text-[3rem]">
                {flagship.price}
              </p>
              <Button asChild variant="brand" size="xl">
                <Link href={quoteHref(flagship.id)}>
                  {pricing.cta}
                  <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </Reveal>

      {/* cztery pozycje w dwóch kolumnach; wnętrze karty zawsze w jednej kolumnie */}
      <RevealGroup className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <RevealItem key={plan.id} className="flex">
            <article
              id={plan.id}
              className="flex w-full scroll-mt-28 flex-col rounded-card border border-white/10 bg-white/[0.05] p-7 transition-colors duration-300 hover:bg-white/[0.08] lg:p-9"
            >
              <span className="t-label text-brand-300">{plan.name}</span>
              <p className="mt-5 font-display text-[1.75rem] leading-none tracking-tight text-white">{plan.price}</p>
              <p className="mt-2 text-caption text-brand-300/80">{plan.audience}</p>
              <p className="mt-6 max-w-[32rem] flex-1 text-small text-pretty text-brand-100/85">{plan.description}</p>
              <Button asChild variant="inverse" size="lg" className="mt-8 w-full sm:w-auto sm:self-start">
                <Link href={quoteHref(plan.id)}>
                  {pricing.cta}
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
