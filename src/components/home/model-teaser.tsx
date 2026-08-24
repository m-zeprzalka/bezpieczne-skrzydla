import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { ModelDiagram } from "@/components/pages/model-diagram";
import { Reveal } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { approach } from "@/content/model-4r";

/** Model 4R z Fundamentem — drugi blok strony, zgodnie ze schematem klientki. */
export function ModelTeaser() {
  return (
    <Section id="model-4r" tone="tint">
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHead
              index="01"
              label="Moje podejście · Model 4R"
              title="Autorski"
              accent="Model 4R"
              after="z Fundamentem"
            />
          </div>

          <div className="flex flex-col gap-6 md:col-span-7 md:pt-12 lg:pl-8">
            {approach.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={0.1 + i * 0.05} as="p" className="max-w-[34rem] text-body text-pretty text-ink-muted">
                {paragraph}
              </Reveal>
            ))}
            <Reveal
              delay={0.2}
              as="p"
              className="max-w-[34rem] border-l-2 border-brand-300 pl-5 text-small text-pretty text-brand-900/90"
            >
              {approach.foundationIntro}
            </Reveal>
          </div>
        </div>

        <ModelDiagram compact className="mt-20 lg:mt-24" />

        <Reveal className="mt-12 flex justify-center">
          <ArrowLink href="/model-4r">Poznaj cały Model 4R</ArrowLink>
        </Reveal>
      </Container>
    </Section>
  );
}
