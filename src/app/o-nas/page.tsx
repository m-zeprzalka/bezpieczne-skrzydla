import { BookOpen, Feather, MessagesSquare, Route } from "lucide-react";

import { AuthorPortrait } from "@/components/system/author-portrait";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { IconTile } from "@/components/system/icon-tile";
import { PageHero } from "@/components/system/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { WingArcs } from "@/components/system/wing-arcs";
import { about, mission, strengths, why } from "@/content/about";
import { site } from "@/content/site";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "O Bezpiecznych Skrzydłach",
  description:
    "Bezpieczne Skrzydła nie powstały wyłącznie z pomysłu na firmę — powstały z doświadczenia. Misja, mocne strony i to, dlaczego warto: pełna historia Małgorzaty Just.",
  path: "/o-nas",
});

const aboutIcons = { feather: Feather, book: BookOpen, messages: MessagesSquare, route: Route } as const;

export default function AboutPage() {
  const pulled = mission.paragraphs[mission.pulledIndex];

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "O Bezpiecznych Skrzydłach", path: "/o-nas" },
          ]),
          { "@type": "Person", name: site.owner, jobTitle: site.ownerRole, worksFor: { "@type": "Organization", name: site.name } },
        ]}
      />

      <PageHero
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "O Bezpiecznych Skrzydłach" }]}
        label={mission.label}
        title={`„${mission.quote}”`}
        lead={mission.paragraphs[0]}
        aside={
          <Reveal delay={0.2} className="mx-auto max-w-[22rem] lg:ml-auto lg:max-w-[24rem]">
            <AuthorPortrait preload />
          </Reveal>
        }
      />

      {/* — misja: pełna historia — */}
      <Section id="misja" size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal className="lg:sticky lg:top-28">
                <p className="t-label text-brand-600">Historia</p>
                <p className="mt-3 font-display text-[1.2rem] leading-[1.4] text-brand-800">
                  {site.owner}, {site.ownerRole.toLowerCase()}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="flex flex-col gap-6">
                {mission.paragraphs.slice(1).map((paragraph) =>
                  paragraph === pulled ? (
                    <Reveal
                      key={paragraph}
                      as="p"
                      className="my-4 border-l-2 border-brand-400 py-1 pl-6 font-display text-[1.45rem] leading-[1.4] text-ink sm:text-[1.7rem]"
                    >
                      {paragraph}
                    </Reveal>
                  ) : (
                    <Reveal key={paragraph} as="p" className="measure text-[1.0625rem] leading-[1.75] text-brand-900/85">
                      {paragraph}
                    </Reveal>
                  ),
                )}
              </div>

              <Reveal className="relative mt-12 overflow-hidden rounded-panel bg-surface-deep p-8 text-brand-100 sm:p-10">
                <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-60" />
                <WingArcs tone="dark" className="absolute -right-24 -bottom-32 w-[520px] opacity-25" count={9} />
                <div className="relative">
                  <p className="font-display text-[1.45rem] leading-[1.35] text-balance text-white sm:text-[1.75rem]">
                    {mission.closing}
                  </p>
                  <p className="mt-5 max-w-[36rem] text-body-sm text-brand-200/85">{mission.foundation}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* — kilka słów o marce — */}
      <Section id="o-marce" tone="tint">
        <Container>
          <SectionHead label={about.label} title="Kilka słów o" accent="Bezpiecznych Skrzydłach" align="center" />
          <RevealGroup className="mx-auto mt-14 grid max-w-[62rem] grid-cols-1 gap-5 sm:grid-cols-2">
            {about.cards.map((card) => {
              const Icon = aboutIcons[card.icon];
              return (
                <RevealItem key={card.title} className="card-lift flex flex-col rounded-card border border-brand-200/80 bg-white p-7">
                  <IconTile size="lg" tone="tint">
                    <Icon aria-hidden />
                  </IconTile>
                  <h3 className="mt-5 font-display text-[1.2rem] tracking-tight text-ink">{card.title}</h3>
                  <p className="mt-3 text-body-sm text-pretty text-ink-muted">{card.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
          <Reveal delay={0.14} className="mx-auto mt-12 max-w-[42rem] text-center">
            <p className="font-display text-[1.3rem] leading-[1.45] text-balance text-brand-800 sm:text-[1.5rem]">{about.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* — mocne strony — */}
      <Section id="mocne-strony">
        <Container>
          <SectionHead label={strengths.label} title="Co wyróżnia" accent="Bezpieczne Skrzydła" />
          <RevealGroup as="ol" className="mt-14 border-t border-brand-200 lg:mt-16">
            {strengths.items.map((item, i) => (
              <RevealItem
                as="li"
                key={item.title}
                className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-brand-200 py-8 md:grid-cols-12 lg:py-9"
              >
                <div className="flex items-baseline gap-5 md:col-span-5">
                  <span aria-hidden className="t-outline shrink-0 text-[1.7rem] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.3rem] leading-[1.25] tracking-tight text-ink sm:text-[1.45rem]">{item.title}</h3>
                </div>
                <p className="text-body text-pretty text-ink-muted md:col-span-7 md:pl-4 lg:pl-8">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* — dlaczego warto — */}
      <Section id="dlaczego-warto" tone="tint">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHead label={why.label} title="Więcej niż prezentacja" accent="pełna definicji" />
              <Reveal delay={0.1} as="p" className="text-lead mt-7 max-w-[28rem] text-pretty text-ink-muted">
                {why.intro}
              </Reveal>
              <Reveal delay={0.14} as="p" className="mt-6 max-w-[28rem] text-body text-pretty text-ink-muted">
                {why.closing}
              </Reveal>
            </div>

            <div className="md:col-span-7 md:pt-16 lg:pl-12">
              <RevealGroup as="ol" className="flex flex-col gap-3">
                {why.points.map((point, i) => (
                  <RevealItem
                    as="li"
                    key={point}
                    className="flex items-center gap-4 rounded-card border border-brand-200/80 bg-white px-5 py-4 transition-colors hover:border-brand-300"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-[0.85rem] text-brand-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.9375rem] leading-[1.55] text-brand-900 sm:text-[1rem]">{point}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title={why.pull} />
    </>
  );
}
