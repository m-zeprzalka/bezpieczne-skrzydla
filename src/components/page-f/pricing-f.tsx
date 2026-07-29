import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LABEL_F,
} from "@/components/page-f/frame-f";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fitF } from "@/lib/content-f";

/**
 * Sekcja „Szkolenia dopasowane do Twojej organizacji” — trzy akapity wstępu,
 * trzy progi cenowe i blok „Indywidualne dopasowanie”, wszystko według
 * dokumentu klientki.
 */
export function PricingF() {
  return (
    <SectionF id="cennik" tone="tint">
      <ContainerF>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadF
              index={fitF.index}
              label={fitF.label}
              title="Szkolenia dopasowane do"
              accent="Twojej organizacji"
            />
          </div>
          <div className="flex flex-col gap-5 md:col-span-7 md:pt-20 lg:pl-14">
            {fitF.paragraphs.map((paragraph, i) => (
              <Reveal
                key={paragraph}
                delay={0.08 + i * 0.05}
                className={`${T_BODY_F} text-muted-foreground max-w-[38rem] text-pretty`}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20">
          {fitF.plans.map((plan) => (
            <RevealItem key={plan.name} className="flex">
              <article
                className={cn(
                  "flex w-full flex-col rounded-[1.25rem] p-8 lg:p-9",
                  "featured" in plan && plan.featured
                    ? "bg-brand-950 text-white"
                    : "border-brand-200 border bg-white",
                )}
              >
                <span
                  className={cn(
                    T_LABEL_F,
                    "featured" in plan && plan.featured
                      ? "text-brand-300"
                      : "text-brand-600",
                  )}
                >
                  {plan.name}
                </span>

                <p
                  className={cn(
                    "font-display mt-7 text-[2.4rem] leading-none tracking-tight",
                    "featured" in plan && plan.featured
                      ? "text-white"
                      : "text-brand-950",
                  )}
                >
                  {plan.price}
                </p>
                <p
                  className={cn(
                    "mt-2.5 text-[0.8125rem]",
                    "featured" in plan && plan.featured
                      ? "text-brand-300"
                      : "text-muted-foreground",
                  )}
                >
                  {plan.unit}
                </p>

                <p
                  className={cn(
                    T_BODY_F,
                    "mt-6 flex-1",
                    "featured" in plan && plan.featured
                      ? "text-brand-200/85"
                      : "text-muted-foreground",
                  )}
                >
                  {plan.body}
                </p>

                <Button
                  asChild
                  size="xl"
                  variant={
                    "featured" in plan && plan.featured ? "default" : "brand"
                  }
                  className={cn(
                    "mt-8 w-full rounded-full font-semibold",
                    "featured" in plan &&
                      plan.featured &&
                      "bg-brand-400 text-brand-950 hover:bg-brand-300",
                  )}
                >
                  <Link href="#kontakt">
                    Poproś o wycenę
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* — czwarty element cennika z dokumentu: blok bez ceny — */}
        <Reveal delay={0.1} className="mt-6">
          <div className="border-brand-200 grid grid-cols-1 gap-6 rounded-[1.25rem] border bg-white p-8 md:grid-cols-12 md:items-center lg:p-9">
            <div className="md:col-span-8">
              <h3 className="font-display text-brand-950 text-[1.45rem] tracking-tight">
                {fitF.custom.title}
              </h3>
              <p
                className={`${T_BODY_F} text-muted-foreground mt-3 max-w-[46rem] text-pretty`}
              >
                {fitF.custom.body}
              </p>
            </div>
            <p className="text-brand-800 border-brand-300 border-l-2 pl-5 text-[0.9375rem] leading-[1.65] font-medium md:col-span-4">
              {fitF.custom.closing}
            </p>
          </div>
        </Reveal>
      </ContainerF>
    </SectionF>
  );
}
