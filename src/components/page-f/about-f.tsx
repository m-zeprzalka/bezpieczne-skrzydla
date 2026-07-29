import { Check } from "lucide-react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LEAD_F,
} from "@/components/page-f/frame-f";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { aboutF, strengthsF, whyF } from "@/lib/content-f";

/** „Kilka słów o Bezpiecznych Skrzydłach” — cztery akapity plus zamknięcie. */
export function AboutF() {
  return (
    <SectionF id="o-nas">
      <ContainerF>
        <SectionHeadF
          index={aboutF.index}
          label="O Bezpiecznych Skrzydłach"
          title="Kilka słów o"
          accent="Bezpiecznych Skrzydłach"
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-[62rem] grid-cols-1 gap-x-14 gap-y-6 md:grid-cols-2">
          {aboutF.paragraphs.map((paragraph, i) => (
            <Reveal
              key={paragraph}
              delay={0.06 + i * 0.04}
              className={`${T_BODY_F} text-muted-foreground text-pretty`}
            >
              {paragraph}
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.16}
          className="mx-auto mt-14 max-w-[42rem] text-center"
        >
          <p className="font-display text-brand-800 text-[1.3rem] leading-[1.45] italic sm:text-[1.5rem]">
            {aboutF.closing}
          </p>
        </Reveal>
      </ContainerF>
    </SectionF>
  );
}

/** Siedem mocnych stron — pełne opisy w edytorialnych wierszach. */
export function StrengthsF() {
  return (
    <SectionF id="mocne-strony" tone="tint">
      <ContainerF>
        <SectionHeadF
          index={strengthsF.index}
          label={strengthsF.label}
          title="Co wyróżnia"
          accent="Bezpieczne Skrzydła"
        />

        <RevealGroup
          as="ol"
          className="border-brand-200 mt-14 border-t lg:mt-16"
        >
          {strengthsF.items.map((item, i) => (
            <RevealItem
              as="li"
              key={item.title}
              className="border-brand-200 grid grid-cols-1 gap-x-8 gap-y-3 border-b py-8 md:grid-cols-12 lg:py-9"
            >
              <div className="flex items-baseline gap-5 md:col-span-5">
                <span
                  aria-hidden
                  className="text-outline-f font-display shrink-0 text-[1.7rem] leading-none font-medium select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-brand-950 text-[1.3rem] leading-[1.25] tracking-tight sm:text-[1.45rem]">
                  {item.title}
                </h3>
              </div>
              <p
                className={`${T_BODY_F} text-muted-foreground text-pretty md:col-span-7 md:pl-4 lg:pl-8`}
              >
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerF>
    </SectionF>
  );
}

/** „Dlaczego warto” — wstęp, siedem punktów i zamknięcie z dokumentu. */
export function WhyF() {
  return (
    <SectionF id="dlaczego">
      <ContainerF>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadF
              index={whyF.index}
              label={whyF.label}
              title="Więcej niż prezentacja"
              accent="pełna definicji"
            />

            <Reveal
              delay={0.1}
              className={`${T_LEAD_F} text-muted-foreground mt-7 max-w-[30rem] text-pretty`}
            >
              {whyF.intro}
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-20 lg:pl-14">
            <RevealGroup as="ul" className="flex flex-col">
              {whyF.points.map((point) => (
                <RevealItem
                  as="li"
                  key={point}
                  className="border-brand-100 text-brand-900 flex gap-4 border-b py-4 text-[1rem] leading-[1.6] first:border-t sm:text-[1.0625rem]"
                >
                  <Check
                    className="text-brand-500 mt-1 size-5 shrink-0"
                    aria-hidden
                  />
                  {point}
                </RevealItem>
              ))}
            </RevealGroup>

            {whyF.closing.map((paragraph) => (
              <Reveal
                key={paragraph}
                delay={0.08}
                className={`${T_BODY_F} text-muted-foreground mt-8 max-w-[36rem] text-pretty`}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 text-center lg:mt-24">
          <p className="font-display text-brand-950 mx-auto max-w-[52rem] text-[1.7rem] leading-[1.25] tracking-[-0.015em] text-balance italic sm:text-[2.2rem]">
            {whyF.pull}
          </p>
        </Reveal>
      </ContainerF>
    </SectionF>
  );
}
