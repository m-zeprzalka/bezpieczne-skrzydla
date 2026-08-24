import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { WingArcs } from "@/components/system/wing-arcs";
import { Button } from "@/components/ui/button";
import { mission, strengths, why } from "@/content/about";

/**
 * „Dlaczego Bezpieczne Skrzydła”: cztery mocne strony + historia autorki
 * w skrócie. Pełne wersje mieszkają na /o-nas.
 */
export function WhyHome() {
  const featured = strengths.items.slice(0, 4);

  return (
    <Section id="dlaczego">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead index="05" label={strengths.label} title="Co wyróżnia" accent="Bezpieczne Skrzydła" />

            <RevealGroup as="ol" className="mt-12 border-t border-brand-200">
              {featured.map((item, i) => (
                <RevealItem
                  as="li"
                  key={item.title}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 border-b border-brand-200 py-7"
                >
                  <span aria-hidden className="t-outline text-[1.7rem] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.3rem] leading-[1.25] tracking-tight text-ink sm:text-[1.4rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-[36rem] text-body-sm text-pretty text-ink-muted">{item.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-8">
              <ArrowLink href="/o-nas#mocne-strony">Wszystkie mocne strony i „dlaczego warto”</ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-panel bg-surface-deep p-7 text-brand-100 sm:p-9">
                <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-60" />
                <WingArcs tone="dark" animate={false} className="absolute -right-24 -bottom-24 w-[420px] opacity-25" count={8} />
                <div className="relative">
                  <p className="t-label text-brand-300">{mission.label}</p>
                  <blockquote className="mt-5 font-display text-[1.75rem] leading-[1.15] tracking-tight text-balance text-white sm:text-[2.1rem]">
                    „{mission.quote}”
                  </blockquote>
                  <p className="mt-6 max-w-[26rem] text-body-sm text-pretty text-brand-200/85">{mission.paragraphs[1]}</p>
                  <p className="mt-6 max-w-[28rem] border-l-2 border-brand-400/60 pl-5 font-display text-[1.1rem] leading-[1.5] text-brand-100">
                    {mission.closing}
                  </p>
                  <Button asChild variant="inverse" size="lg" className="mt-8">
                    <Link href="/o-nas">
                      Poznaj moją historię
                      <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-panel bg-brand-700 p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <WingArcs animate={false} tone="dark" className="absolute -right-24 -bottom-28 w-[380px] opacity-25" count={7} />
            <p className="relative max-w-[36rem] font-display text-[1.5rem] leading-[1.3] text-balance sm:text-[1.8rem]">
              {why.pull}
            </p>
            <Button asChild variant="inverse" size="xl" className="relative shrink-0">
              <Link href="/kontakt">
                Poproś o wycenę
                <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
