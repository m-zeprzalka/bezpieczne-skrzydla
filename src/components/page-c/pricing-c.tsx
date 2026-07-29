import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { pricing } from "@/lib/content";
import { pricingC } from "@/lib/content-c";

export function PricingC() {
  return (
    <SectionC id="ile" className="bg-paper-deep">
      <ContainerC>
        <Reveal>
          <EyebrowC>{pricingC.eyebrow}</EyebrowC>
        </Reveal>

        <HeadingC className="mt-6">{pricingC.title}</HeadingC>

        <Reveal delay={0.1} className="mt-6">
          <ProseC>{pricingC.intro}</ProseC>
        </Reveal>

        {/* Cennik jako tabela do przeczytania, nie trzy karty do porównania */}
        <RevealGroup className="border-brand-300 mt-14 border-t">
          {pricing.map((plan) => (
            <RevealItem
              key={plan.name}
              className="border-brand-300 grid grid-cols-1 gap-4 border-b py-8 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-4">
                <h3 className="text-brand-950 text-[1.2rem] leading-snug">
                  {plan.name}
                </h3>
                <p className="text-brand-700 mt-2 text-[0.95rem] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="sm:col-span-4">
                <ul className="text-brand-800 flex flex-col gap-1.5 text-[0.95rem]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="bg-brand-400 mt-[0.62rem] size-1 shrink-0 rounded-full"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-4 sm:text-right">
                <p className="text-brand-950 text-[1.75rem] leading-none">
                  {plan.price}
                </p>
                <p className="text-brand-600 mt-2 font-sans text-[0.76rem]">
                  {plan.unit}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.06} className="mt-10">
          <ProseC className="text-[0.98rem]">{pricingC.note}</ProseC>

          <Link
            href="#napisz"
            className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 mt-6 inline-flex items-center gap-2 rounded font-sans text-[0.9rem] underline decoration-1 underline-offset-[6px] transition-colors outline-none focus-visible:ring-3"
          >
            Poproś o wycenę dla swojego zespołu
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Reveal>
      </ContainerC>
    </SectionC>
  );
}
