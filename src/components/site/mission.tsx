import Image from "next/image";
import { Quote } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, Section } from "@/components/site/section";
import { WingArcs } from "@/components/site/wing-arcs";
import { mission, site } from "@/lib/content";

export function Mission() {
  return (
    <Section id="o-mnie" tone="deep">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-10 opacity-60"
      />
      <WingArcs
        className="absolute -bottom-40 left-1/2 -z-10 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.16]"
        count={10}
      />

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* — miejsce na portret autorki — */}
          <Reveal className="lg:col-span-5">
            <figure className="relative">
              <div className="border-brand-400/25 from-brand-800 via-brand-800/60 to-brand-900 relative aspect-4/5 overflow-hidden rounded-3xl border bg-gradient-to-br">
                <WingArcs
                  animate={false}
                  className="absolute -bottom-16 left-1/2 w-[560px] max-w-none -translate-x-1/2 opacity-30"
                  count={9}
                />

                <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <Image
                    src="/logo-bezpieczne-skrzydla.png"
                    alt=""
                    width={320}
                    height={320}
                    className="ring-brand-400/25 size-40 rounded-full object-cover opacity-95 shadow-2xl ring-1 sm:size-48"
                  />
                  <figcaption className="flex flex-col gap-1.5">
                    <span className="font-display text-xl text-white">
                      {site.owner}
                    </span>
                    <span className="text-brand-300/80 text-[0.72rem] font-medium tracking-[0.18em] uppercase">
                      Autorka szkoleń i Modelu 4R
                    </span>
                  </figcaption>
                </div>
              </div>

              {/* podpis „odręczny" pod kadrem */}
              <div className="border-brand-400/20 bg-brand-800/80 absolute -right-3 -bottom-5 rounded-2xl border px-5 py-3 backdrop-blur-md sm:-right-6">
                <span className="font-display text-brand-200 text-sm italic">
                  „Nie musisz zostać z tym sama”
                </span>
              </div>
            </figure>
          </Reveal>

          {/* — treść misji — */}
          <div className="lg:col-span-7">
            <Reveal className="text-brand-300 flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              <span aria-hidden className="bg-brand-400/60 h-px w-6" />
              Moja misja
            </Reveal>

            <Reveal delay={0.06} className="relative mt-6">
              <Quote
                aria-hidden
                className="text-brand-400/30 absolute -top-4 -left-1 size-10"
              />
              <blockquote className="font-display relative text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.15] tracking-[-0.015em] text-white">
                {mission.quote}
              </blockquote>
            </Reveal>

            <RevealGroup className="mt-9 flex max-w-2xl flex-col gap-5">
              {mission.paragraphs.map((paragraph) => (
                <RevealItem
                  key={paragraph}
                  as="span"
                  className="text-brand-200/85 text-balance-pretty block text-[0.97rem] leading-relaxed"
                >
                  {paragraph}
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal
              delay={0.1}
              className="border-brand-400/70 bg-brand-800/40 mt-10 max-w-2xl rounded-r-2xl border-l-2 py-5 pr-6 pl-6"
            >
              <p className="font-display text-[1.15rem] leading-snug text-white sm:text-[1.3rem]">
                {mission.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
