import Link from "next/link";

import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { Section } from "@/components/system/section";
import { trainings } from "@/content/trainings";
import { voices } from "@/content/voices";

/**
 * „Co słyszę najczęściej” — blok z wariantu C zaakceptowany przez klientkę.
 * Lewa kolumna zostaje przyklejona podczas czytania pięciu odpowiedzi.
 */
export function Voices() {
  return (
    <Section id="slysze" tone="tint">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal className="flex items-baseline gap-3.5">
                <span aria-hidden className="t-outline text-[2.25rem] leading-none select-none">
                  03
                </span>
                <span className="t-label text-brand-600">{voices.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.06} as="div" className="mt-6">
                <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.2rem)] leading-[1.2] tracking-[-0.015em] text-balance text-ink">{voices.intro}</h2>
              </Reveal>
              <Reveal delay={0.12} className="mt-8 hidden lg:block">
                <p className="max-w-[24rem] font-display text-[1.1rem] leading-[1.55] text-brand-800">{voices.outro.text}</p>
                <ArrowLink href={voices.outro.cta.href} className="mt-4">
                  {voices.outro.cta.label}
                </ArrowLink>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col divide-y divide-brand-200/80">
              {voices.items.map((item) => {
                const training = trainings.find((t) => t.number === item.training);
                return (
                  <Reveal
                    key={item.id}
                    as="article"
                    delay={0.04}
                    className="grid grid-cols-1 gap-4 py-10 first:pt-0 last:pb-0 md:grid-cols-[8.5rem_1fr] md:gap-8 lg:py-12"
                  >
                    <div className="md:pt-2 md:pr-3">
                      <p className="t-label text-brand-600">{item.who}</p>
                      <span aria-hidden className="mt-3 hidden h-px w-10 bg-brand-300 md:block" />
                    </div>

                    <div>
                      <blockquote className="border-l-2 border-brand-400 pl-6 font-display text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.25] text-ink">
                        „{item.quote}”
                      </blockquote>
                      <div className="mt-6 flex flex-col gap-4 pl-6">
                        {item.answer.map((paragraph) => (
                          <p key={paragraph} className="measure text-[1.03rem] leading-[1.7] text-brand-900/85">
                            {paragraph}
                          </p>
                        ))}
                        {training ? (
                          <p className="mt-1 text-small text-brand-700">
                            Rozwijam to w szkoleniu{" "}
                            <Link
                              href={`/szkolenia/${training.slug}`}
                              className="focus-ring rounded-sm font-medium text-brand-800 underline decoration-brand-300 decoration-1 underline-offset-4 transition-colors hover:text-brand-600 hover:decoration-brand-500"
                            >
                              „{training.title}”
                            </Link>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-12 border-t border-brand-200 pt-8 lg:hidden">
              <p className="font-display text-[1.1rem] leading-[1.55] text-brand-800">{voices.outro.text}</p>
              <ArrowLink href={voices.outro.cta.href} className="mt-4">
                {voices.outro.cta.label}
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
