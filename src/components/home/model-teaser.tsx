import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { ModelDiagram } from "@/components/pages/model-diagram";
import { Reveal } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { approach, model4r } from "@/content/model-4r";

/** Model 4R z Fundamentem — drugi blok strony, zgodnie ze schematem klientki. */
export function ModelTeaser() {
  return (
    <Section id="model-4r" tone="tint" className="overflow-hidden">
      <div aria-hidden className="bg-grid mask-radial absolute inset-0 -z-0 opacity-40" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHead
              index="01"
              label="Moje podejście · Model 4R"
              title="Autorski"
              accent="Model 4R"
              after="z Fundamentem"
            />

            {/* sygnatura: cztery R i fundament pod nimi */}
            <Reveal delay={0.2} className="mt-9 inline-flex flex-col gap-2.5">
              <span className="flex items-center gap-2.5">
                {model4r.steps.map((step, i) => (
                  <span key={step.key} className="flex items-center gap-2.5">
                    <span
                      className="grid size-10 place-items-center rounded-full border border-brand-300 bg-white font-display text-[1rem] text-brand-700"
                      title={step.title}
                    >
                      R
                    </span>
                    {i < model4r.steps.length - 1 ? <span aria-hidden className="h-px w-4 bg-brand-300" /> : null}
                  </span>
                ))}
              </span>
              <span
                aria-hidden
                className="t-label grid h-7 place-items-center rounded-lg border border-foundation-200 bg-foundation-50 text-foundation-900"
              >
                Fundament
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5 md:col-span-7 md:pt-20 lg:pl-14">
            {approach.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={0.1 + i * 0.05} as="p" className="text-lead max-w-[36rem] text-pretty text-ink-muted">
                {paragraph}
              </Reveal>
            ))}
            <Reveal
              delay={0.2}
              as="p"
              className="max-w-[36rem] border-l-2 border-foundation-300 pl-5 text-body text-pretty text-brand-900/90"
            >
              {approach.foundationIntro}
            </Reveal>
          </div>
        </div>

        <ModelDiagram compact className="mt-16 lg:mt-20" />

        <Reveal className="mt-10 flex justify-center">
          <ArrowLink href="/model-4r">Poznaj cały Model 4R</ArrowLink>
        </Reveal>
      </Container>
    </Section>
  );
}
