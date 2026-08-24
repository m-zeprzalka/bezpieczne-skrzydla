import { BookOpen, Feather, MessagesSquare, Route } from "lucide-react";

import { AuthorPortrait } from "@/components/system/author-portrait";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { IconTile } from "@/components/system/icon-tile";
import { PageHero } from "@/components/system/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { HEAD_GAP, Section, SectionHead } from "@/components/system/section";
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
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal className="lg:sticky lg:top-28">
                <p className="t-label text-brand-600">Historia</p>
                <p className="mt-3 font-display text-[1.2rem] leading-[1.4] text-brand-800">
                  {site.owner}, {site.ownerRole.toLowerCase()}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="flex flex-col gap-7">
                {mission.paragraphs.slice(1).map((paragraph) =>
                  paragraph === pulled ? (
                    <Reveal
                      key={paragraph}
                      as="p"
                      className="my-4 border-l-2 border-brand-400 py-1 pl-6 font-display text-[1.3rem] leading-[1.45] text-ink sm:text-[1.5rem]"
                    >
                      {paragraph}
                    </Reveal>
                  ) : (
                    <Reveal key={paragraph} as="p" className="max-w-[38rem] text-body text-brand-900/85">
                      {paragraph}
                    </Reveal>
                  ),
                )}
              </div>

              <Reveal className="relative mt-16 overflow-hidden rounded-panel bg-surface-deep p-8 text-brand-100 sm:p-10 lg:p-12">
                <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-40" />
                <WingArcs tone="dark" className="absolute -right-24 -bottom-32 w-[520px] opacity-[0.15]" count={9} />
                <div className="relative">
                  <p className="font-display text-[1.3rem] leading-[1.4] text-balance text-white sm:text-[1.55rem]">
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
          <RevealGroup className={`${HEAD_GAP} mx-auto grid max-w-[60rem] grid-cols-1 gap-6 sm:grid-cols-2`}>
            {about.cards.map((card) => {
              const Icon = aboutIcons[card.icon];
              return (
                <RevealItem key={card.title} className="flex flex-col rounded-card border border-brand-200/80 bg-white p-8">
                  <IconTile size="lg" tone="tint">
                    <Icon aria-hidden />
                  </IconTile>
                  <h3 className="mt-6 font-display text-[1.15rem] tracking-tight text-ink">{card.title}</h3>
                  <p className="mt-3 text-small text-pretty text-ink-muted">{card.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
          <Reveal delay={0.14} className="mx-auto mt-16 max-w-[38rem] text-center">
            <p className="font-display text-[1.2rem] leading-[1.5] text-balance text-brand-800 sm:text-[1.35rem]">{about.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* — mocne strony — */}
      <Section id="mocne-strony">
        <Container>
          <SectionHead label={strengths.label} title="Co wyróżnia" accent="Bezpieczne Skrzydła" />
          <RevealGroup as="ol" className={`${HEAD_GAP} border-t border-brand-200/80`}>
            {strengths.items.map((item, i) => (
              <RevealItem
                as="li"
                key={item.title}
                className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-brand-200/80 py-9 md:grid-cols-12 lg:py-10"
              >
                <div className="flex flex-col gap-3 md:col-span-5">
                  <span aria-hidden className="t-outline text-[1.25rem] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.2rem] leading-[1.3] tracking-tight text-ink sm:text-[1.3rem]">{item.title}</h3>
                </div>
                <p className="max-w-[36rem] text-small text-pretty text-ink-muted md:col-span-7 md:pl-4 lg:pl-8">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* — dlaczego warto — */}
      <Section id="dlaczego-warto" tone="tint">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHead label={why.label} title="Więcej niż prezentacja" accent="pełna definicji" />
              <Reveal delay={0.1} as="p" className="mt-8 max-w-[26rem] text-body text-pretty text-ink-muted">
                {why.intro}
              </Reveal>
              <Reveal delay={0.14} as="p" className="mt-6 max-w-[26rem] text-small text-pretty text-ink-muted">
                {why.closing}
              </Reveal>
            </div>

            <div className="md:col-span-7 md:pt-14 lg:pl-8">
              <RevealGroup as="ol" className="flex flex-col gap-3">
                {why.points.map((point, i) => (
                  <RevealItem
                    as="li"
                    key={point}
                    className="flex items-center gap-4 rounded-card border border-brand-200/80 bg-white px-6 py-5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-[0.85rem] text-brand-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.9375rem] leading-[1.55] text-brand-900">{point}</p>
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
