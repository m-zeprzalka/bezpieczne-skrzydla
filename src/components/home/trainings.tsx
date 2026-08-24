import { Award, Clock, Play, Users } from "lucide-react";

import { CourseFormat } from "@/components/pages/course-format";
import { TrainingCard, WorkshopCard } from "@/components/pages/training-card";
import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { HEAD_GAP, Section, SectionHead } from "@/components/system/section";
import { trainings, trainingsIntro } from "@/content/trainings";

/**
 * Pięć szkoleń i jeden warsztat w sześciu polach siatki — warsztat w innym
 * tonie i z plakietką, żeby nikt nie policzył go jako szóstego szkolenia.
 */
export function TrainingsGrid() {
  return (
    <Section id="szkolenia">
      <Container>
        <SectionHead
          index="02"
          label={trainingsIntro.label}
          title="Pięć szkoleń, każde dla innej"
          accent="roli w organizacji"
          lead={trainingsIntro.lead}
          align="center"
        />

        <RevealGroup className={`${HEAD_GAP} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {trainings.map((training) => (
            <RevealItem key={training.slug} className="flex">
              <TrainingCard training={training} />
            </RevealItem>
          ))}
          <RevealItem className="flex">
            <WorkshopCard />
          </RevealItem>
        </RevealGroup>

        <Reveal className="mt-14 flex flex-col items-center gap-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.85rem] font-medium text-brand-900/80">
            {[
              { Icon: Play, text: "nagrane lekcje wideo" },
              { Icon: Clock, text: "dostęp 60 dni" },
              { Icon: Award, text: "test i imienny certyfikat" },
              { Icon: Users, text: "stacjonarnie na życzenie" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="size-4 text-brand-500" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
          <ArrowLink href="/szkolenia">Wszystkie szkolenia i format kursu</ArrowLink>
        </Reveal>
      </Container>
    </Section>
  );
}

export { CourseFormat };
