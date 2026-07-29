import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { ContainerD, HeadingD, SectionD } from "@/components/page-d/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricing } from "@/lib/content";
import { sectionsD } from "@/lib/content-d";

export function PricingD() {
  return (
    <SectionD id="cennik" className="overflow-hidden bg-white">
      <div
        aria-hidden
        className="bg-light-well absolute inset-x-0 top-0 -z-10 h-[600px] opacity-50"
      />

      <ContainerD>
        <HeadingD
          eyebrow={sectionsD.pricing.eyebrow}
          title={sectionsD.pricing.title}
          description={sectionsD.pricing.description}
        />

        <RevealGroup className="mt-16 grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <RevealItem key={plan.name} className="flex h-full">
              <div
                className={cn(
                  "shadow-lux relative flex w-full flex-col overflow-hidden rounded-3xl p-8 transition-[transform,box-shadow] duration-500 sm:p-9",
                  plan.featured
                    ? "bg-brand-950 text-brand-100 lg:-translate-y-4"
                    : "glass hover:shadow-lux-hover hover:-translate-y-1.5",
                )}
              >
                {plan.featured ? (
                  <span
                    aria-hidden
                    className="bg-aurora-deep pointer-events-none absolute inset-0 opacity-70"
                  />
                ) : null}

                <div className="relative flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "text-[0.72rem] font-medium tracking-[0.2em] uppercase",
                      plan.featured ? "text-brand-300" : "text-brand-600",
                    )}
                  >
                    {plan.name}
                  </span>
                  {plan.featured ? (
                    <span className="bg-brand-400 text-brand-950 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.66rem] font-semibold">
                      <Sparkles className="size-3" aria-hidden />
                      Najczęściej
                    </span>
                  ) : null}
                </div>

                <p
                  className={cn(
                    "font-lux relative mt-7 text-[2.4rem] leading-none font-extralight tracking-[-0.03em]",
                    plan.featured ? "text-white" : "text-brand-950",
                  )}
                >
                  {plan.price}
                </p>
                <p
                  className={cn(
                    "relative mt-2 text-[0.82rem]",
                    plan.featured ? "text-brand-300/85" : "text-brand-700/85",
                  )}
                >
                  {plan.unit}
                </p>

                <p
                  className={cn(
                    "relative mt-5 text-[0.92rem] leading-relaxed",
                    plan.featured ? "text-brand-200/85" : "text-brand-800/75",
                  )}
                >
                  {plan.description}
                </p>

                <ul
                  className={cn(
                    "relative mt-7 flex flex-1 flex-col gap-3 border-t pt-6",
                    plan.featured ? "border-brand-800" : "border-brand-200/70",
                  )}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-3 text-[0.88rem] leading-snug",
                        plan.featured ? "text-brand-100" : "text-brand-800",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-px grid size-4.5 shrink-0 place-items-center rounded-full",
                          plan.featured
                            ? "bg-brand-400 text-brand-950"
                            : "bg-brand-100 text-brand-700",
                        )}
                      >
                        <Check className="size-2.5" aria-hidden />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="xl"
                  variant={plan.featured ? "default" : "brand"}
                  className={cn(
                    "relative mt-8 w-full rounded-full",
                    plan.featured &&
                      "bg-brand-400 text-brand-950 hover:bg-brand-300",
                  )}
                >
                  <Link href="#kontakt">
                    {plan.cta}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal
          delay={0.08}
          className="glass mx-auto mt-10 max-w-3xl rounded-2xl px-7 py-6 text-center"
        >
          <p className="text-brand-800/75 text-balance-pretty text-[0.9rem] leading-relaxed">
            Do szkolenia stacjonarnego mogą zostać doliczone wcześniej
            uzgodnione koszty dojazdu, noclegu, wynajęcia sali i organizacji
            spotkania. Wszystko ustalam przed podpisaniem umowy — bez ukrytych
            pozycji.
          </p>
        </Reveal>
      </ContainerD>
    </SectionD>
  );
}
