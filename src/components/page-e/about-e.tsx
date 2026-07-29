import Image from "next/image";

import {
  ContainerE,
  GRID_12,
  LabelE,
  MarkedTitle,
  SectionE,
  T_BODY,
} from "@/components/page-e/frame";
import { site } from "@/lib/content";
import { aboutE } from "@/lib/content-e";

export function AboutE() {
  return (
    <SectionE id="o-mnie" className="bg-brand-50/70">
      <ContainerE>
        <div className={`${GRID_12} items-start`}>
          {/* — miejsce na zdjęcie autorki — */}
          <div className="md:col-span-5">
            <div className="relative mx-auto flex aspect-4/5 w-full max-w-[26rem] flex-col items-center justify-center gap-6 overflow-hidden rounded-[1.25rem] bg-white p-8">
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={320}
                height={320}
                className="size-40 rounded-full object-cover sm:size-48"
              />
              <p className="text-brand-600 text-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase">
                miejsce na zdjęcie autorki
              </p>
            </div>

            <div className="border-brand-200 mt-6 border-t pt-6">
              <p className="text-brand-950 text-[1.0625rem] font-bold">
                {site.owner}
              </p>
              <p className="text-muted-foreground mt-1.5 text-[0.875rem]">
                Autorka szkoleń i Modelu 4R
              </p>
            </div>
          </div>

          {/* — narracja — */}
          <div className="md:col-span-7 md:pl-4 lg:pl-10">
            <LabelE>{aboutE.label}</LabelE>
            <MarkedTitle
              before={aboutE.titleBefore}
              marked={aboutE.titleMarked}
              className="mt-4"
            />

            <div className="mt-7 flex flex-col gap-5">
              {aboutE.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`${T_BODY} text-muted-foreground max-w-[38rem] text-[1rem]`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="border-brand-400 text-brand-950 mt-9 max-w-[36rem] border-l-2 pl-6 text-[1.125rem] leading-[1.5] font-semibold">
              {aboutE.quote}
            </blockquote>

            <dl className="border-brand-200 mt-10 grid grid-cols-3 gap-6 border-t pt-8">
              {aboutE.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-2">
                  <dt className="text-brand-950 text-[1.375rem] leading-none font-bold tracking-[-0.02em]">
                    {fact.value}
                  </dt>
                  <dd className="text-muted-foreground text-[0.8125rem] leading-[1.45]">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </ContainerE>
    </SectionE>
  );
}
