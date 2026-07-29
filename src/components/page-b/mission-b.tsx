import Image from "next/image";

import { ContainerB, LabelB, SectionB } from "@/components/page-b/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { mission, site } from "@/lib/content";
import { proofB } from "@/lib/content-b";

export function MissionB() {
  return (
    <SectionB id="o-mnie" tone="plain">
      <ContainerB>
        <div className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
          <Reveal className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.18em] text-brand-600 uppercase">
            <span>07</span>
            <span aria-hidden className="bg-brand-300 h-px w-8" />
            <span>Kto za tym stoi</span>
          </Reveal>

          {/* Cytat jako główny element sekcji — bez ozdobników, sam ciężar słowa */}
          <Reveal delay={0.05} as="div" className="mt-10 lg:mt-14">
            <blockquote className="font-grotesk text-brand-950 max-w-5xl text-[clamp(2rem,5.2vw,4.2rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
              <span className="text-brand-400">„</span>
              {mission.quote}
              <span className="text-brand-400">”</span>
            </blockquote>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-12">
            {/* — kadr na zdjęcie autorki — */}
            <Reveal className="lg:col-span-4">
              <figure className="flex flex-col">
                <div className="border-brand-200 bg-brand-50 relative aspect-4/5 overflow-hidden rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
                    <Image
                      src="/logo-bezpieczne-skrzydla.png"
                      alt=""
                      width={280}
                      height={280}
                      className="ring-brand-200 size-36 rounded-full object-cover ring-1"
                    />
                    <LabelB>miejsce na zdjęcie autorki</LabelB>
                  </div>
                </div>

                <figcaption className="border-brand-200 mt-4 flex flex-col gap-1 border-t pt-4">
                  <span className="font-grotesk text-brand-950 text-[1.05rem] font-semibold tracking-tight">
                    {site.owner}
                  </span>
                  <span className="text-muted-foreground text-[0.8rem]">
                    Autorka szkoleń i Modelu 4R
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            {/* — narracja — */}
            <div className="lg:col-span-8 lg:pl-8">
              <RevealGroup className="flex max-w-2xl flex-col gap-5">
                {mission.paragraphs.map((paragraph) => (
                  <RevealItem
                    as="span"
                    key={paragraph}
                    className="text-muted-foreground text-balance-pretty block text-[0.97rem] leading-relaxed"
                  >
                    {paragraph}
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal
                delay={0.1}
                className="border-brand-950 mt-9 max-w-2xl border-l-2 pl-6"
              >
                <p className="font-grotesk text-brand-950 text-[1.2rem] leading-snug font-medium sm:text-[1.4rem]">
                  {mission.closing}
                </p>
              </Reveal>

              <RevealGroup className="border-brand-200 mt-12 grid grid-cols-1 gap-px border-t sm:grid-cols-2">
                {proofB.map((item, i) => (
                  <RevealItem
                    key={item}
                    className="border-brand-200 flex gap-4 border-b py-5 pr-6 sm:even:pl-6 sm:[&:nth-child(odd)]:border-r"
                  >
                    <span className="text-brand-600 font-mono text-[0.7rem] leading-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-brand-800 text-[0.88rem] leading-snug">
                      {item}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </ContainerB>
    </SectionB>
  );
}
