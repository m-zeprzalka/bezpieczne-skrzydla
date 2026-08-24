import Link from "next/link";
import { ArrowRight, Check, Coffee, Info } from "lucide-react";

import { FaqList } from "@/components/pages/faq-list";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { PageHero } from "@/components/system/page-hero";
import { Pill } from "@/components/system/pill";
import { Reveal } from "@/components/system/reveal";
import { Section } from "@/components/system/section";
import { Button } from "@/components/ui/button";
import { faqFor } from "@/content/faq";
import { workshop } from "@/content/workshop";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: workshop.title,
  description: `${workshop.subtitle}. ${workshop.disclaimer}`,
  path: "/warsztat",
});

export default function WorkshopPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: workshop.title, path: "/warsztat" },
          ]),
        ]}
      />

      <PageHero
        tone="warm"
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "Warsztat wspierający" }]}
        label={workshop.label}
        title="Bezpieczne Skrzydła"
        accent="przy kawie"
        lead={workshop.subtitle}
        aside={
          <Reveal delay={0.2} className="lg:pl-6">
            <div className="rounded-panel border border-sand-200 bg-white p-7 sm:p-8">
              <h2 className="t-label flex items-center gap-2.5 text-sand-700">
                <Coffee className="size-4" aria-hidden />
                {workshop.wantsLabel}
              </h2>
              <ul className="mt-6 flex flex-col gap-3.5">
                {workshop.wants.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] leading-[1.55] text-brand-900/90">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                      <Check className="size-3" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="brand" size="xl" className="mt-8 w-full">
                <Link href={workshop.cta.href}>
                  {workshop.cta.label}
                  <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        }
      >
        <Reveal delay={0.2} className="mt-10">
          <Pill variant="label-outline" className="border-sand-200 text-sand-700">
            <Coffee />
            {workshop.badge}
          </Pill>
        </Reveal>
      </PageHero>

      <Section id="o-warsztacie" size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-7">
                {workshop.paragraphs.map((paragraph, i) => (
                  <Reveal
                    key={paragraph}
                    as="p"
                    className={
                      i === 0
                        ? "max-w-[38rem] font-display text-[1.2rem] leading-[1.5] text-ink sm:text-[1.3rem]"
                        : "max-w-[38rem] text-body text-brand-900/85"
                    }
                  >
                    {paragraph}
                  </Reveal>
                ))}
                <Reveal as="p" className="max-w-[38rem] text-body text-brand-900/85">
                  {workshop.format}
                </Reveal>
              </div>

              <Reveal className="mt-12 flex gap-4 rounded-panel border border-sand-200 bg-sand-50 p-7 sm:p-8">
                <Info className="mt-0.5 size-5 shrink-0 text-sand-700" aria-hidden />
                <div>
                  <p className="text-[0.9375rem] font-semibold text-ink">Czym ten warsztat nie jest</p>
                  <p className="mt-2 text-body-sm text-pretty text-brand-900/85">{workshop.disclaimer}</p>
                  <p className="mt-3 text-body-sm text-pretty text-ink-muted">{workshop.distinction}</p>
                </div>
              </Reveal>

              <Reveal as="p" className="mt-14 max-w-[36rem] border-l-2 border-sand-200 pl-6 font-display text-[1.2rem] leading-[1.5] text-brand-800 sm:text-[1.35rem]">
                {workshop.closing}
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.1} className="lg:sticky lg:top-28">
                <FaqList items={faqFor("workshop")} defaultOpen />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Zapytaj o najbliższy termin spotkania."
        text="Napisz, że interesuje Cię warsztat „przy kawie” — odpiszę z informacją o terminie, miejscu i tym, jak wygląda spotkanie."
        cta={{ label: workshop.cta.label, href: workshop.cta.href }}
      />
    </>
  );
}
