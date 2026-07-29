import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import {
  ContainerE,
  SectionE,
  SectionHeadE,
  T_BODY,
  T_H3,
} from "@/components/page-e/frame";
import { servicesE } from "@/lib/content-e";

export function ServicesE() {
  return (
    <SectionE id="uslugi" className="bg-brand-50/70">
      <ContainerE>
        <SectionHeadE
          label="Współpraca"
          before={servicesE.titleBefore}
          marked={servicesE.titleMarked}
          lead={servicesE.lead}
        />

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20">
          {servicesE.items.map((item) => (
            <li key={item.number} className="flex">
              <article className="border-brand-200 flex w-full flex-col rounded-[1.25rem] border bg-white p-8 lg:p-9">
                <span className="text-brand-600 text-[0.8125rem] font-bold tracking-[0.08em]">
                  {item.number}
                </span>

                <h3 className={`${T_H3} text-brand-950 mt-5 font-semibold`}>
                  {item.title}
                </h3>

                <p className={`${T_BODY} text-muted-foreground mt-4`}>
                  {item.body}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-brand-800 flex gap-3 text-[0.875rem] leading-[1.55]"
                    >
                      <Check
                        className="text-brand-600 mt-0.5 size-4 shrink-0"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.cta.href}
                  className="text-brand-600 hover:text-brand-700 focus-visible:ring-ring/50 border-brand-100 mt-8 inline-flex items-center gap-2 rounded border-t pt-6 text-[0.875rem] font-semibold outline-none focus-visible:ring-3"
                >
                  {item.cta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </ContainerE>
    </SectionE>
  );
}
