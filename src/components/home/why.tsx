import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { HEAD_GAP, Section, SectionHead } from "@/components/system/section";
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
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead index="05" label={strengths.label} title="Co wyróżnia" accent="Bezpieczne Skrzydła" />

            <RevealGroup as="ol" className={`${HEAD_GAP} border-t border-brand-200/80`}>
              {featured.map((item, i) => (
                <RevealItem as="li" key={item.title} className="flex flex-col border-b border-brand-200/80 py-8">
                  <span aria-hidden className="t-outline text-[1.25rem] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.2rem] leading-[1.3] tracking-tight text-ink sm:text-[1.3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-small text-pretty text-ink-muted">{item.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-8">
              <ArrowLink href="/o-nas#mocne-strony">Wszystkie mocne strony i „dlaczego warto”</ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="rounded-panel border border-brand-200/80 bg-surface-tint p-8 sm:p-10">
                <p className="t-label text-brand-600">{mission.label}</p>
                <blockquote className="mt-6 font-display text-[1.5rem] leading-[1.2] tracking-tight text-balance text-ink sm:text-[1.8rem]">
                  „{mission.quote}”
                </blockquote>
                <p className="mt-6 max-w-[26rem] text-small text-pretty text-ink-muted">{mission.paragraphs[1]}</p>
                <p className="mt-6 max-w-[26rem] border-l-2 border-brand-400 pl-5 font-display text-[1.05rem] leading-[1.5] text-brand-900">
                  {mission.closing}
                </p>
                <Button asChild variant="outline-brand" size="lg" className="mt-8">
                  <Link href="/o-nas">
                    Poznaj moją historię
                    <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-24">
          <div className="flex flex-col items-start gap-8 rounded-panel bg-brand-700 p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <p className="max-w-[32rem] font-display text-[1.4rem] leading-[1.3] text-balance sm:text-[1.6rem]">
              {why.pull}
            </p>
            <Button asChild variant="inverse" size="xl" className="shrink-0">
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
