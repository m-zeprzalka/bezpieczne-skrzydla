import Link from "next/link";
import { Check } from "lucide-react";

import {
  ContainerE,
  SectionE,
  SectionHeadE,
  T_BODY,
} from "@/components/page-e/frame";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricing } from "@/lib/content";
import { pricingE } from "@/lib/content-e";

export function PricingE() {
  return (
    <SectionE id="cennik">
      <ContainerE>
        <SectionHeadE
          label={pricingE.label}
          before={pricingE.titleBefore}
          marked={pricingE.titleMarked}
          lead={pricingE.lead}
        />

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20">
          {pricing.map((plan) => (
            <li key={plan.name} className="flex">
              <article
                className={cn(
                  "flex w-full flex-col rounded-[1.25rem] p-8 lg:p-9",
                  plan.featured
                    ? "bg-brand-950 text-white"
                    : "border-brand-200 border bg-white",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "text-[0.75rem] font-semibold tracking-[0.14em] uppercase",
                      plan.featured ? "text-brand-300" : "text-brand-600",
                    )}
                  >
                    {plan.name}
                  </span>
                  {plan.featured ? (
                    <span className="bg-brand-800 text-brand-100 rounded-full px-3 py-1 text-[0.6875rem] font-semibold">
                      Najczęściej wybierane
                    </span>
                  ) : null}
                </div>

                <p
                  className={cn(
                    "mt-7 text-[2.25rem] leading-none font-bold tracking-[-0.025em]",
                    plan.featured ? "text-white" : "text-brand-950",
                  )}
                >
                  {plan.price}
                </p>
                <p
                  className={cn(
                    "mt-2 text-[0.8125rem]",
                    plan.featured ? "text-brand-300" : "text-muted-foreground",
                  )}
                >
                  {plan.unit}
                </p>

                <p
                  className={cn(
                    T_BODY,
                    "mt-5",
                    plan.featured
                      ? "text-brand-200/85"
                      : "text-muted-foreground",
                  )}
                >
                  {plan.description}
                </p>

                <ul
                  className={cn(
                    "mt-7 flex flex-1 flex-col gap-3 border-t pt-6",
                    plan.featured ? "border-brand-800" : "border-brand-100",
                  )}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex gap-3 text-[0.875rem] leading-[1.55]",
                        plan.featured ? "text-brand-100" : "text-brand-800",
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          plan.featured ? "text-brand-400" : "text-brand-600",
                        )}
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="xl"
                  variant={plan.featured ? "default" : "accent"}
                  className={cn(
                    "mt-8 w-full rounded-xl font-semibold",
                    plan.featured &&
                      "bg-white text-brand-950 hover:bg-brand-100",
                  )}
                >
                  <Link href="#kontakt">{plan.cta}</Link>
                </Button>
              </article>
            </li>
          ))}
        </ul>

        <p
          className={`${T_BODY} text-muted-foreground mx-auto mt-10 max-w-[46rem] text-center`}
        >
          {pricingE.note}
        </p>
      </ContainerE>
    </SectionE>
  );
}
