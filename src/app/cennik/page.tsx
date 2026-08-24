import { Check } from "lucide-react";

import { FaqList } from "@/components/pages/faq-list";
import { PriceCards } from "@/components/pages/price-cards";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { PageHero } from "@/components/system/page-hero";
import { Reveal } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { faqFor } from "@/content/faq";
import { pricing, pricingFit } from "@/content/pricing";
import { breadcrumbJsonLd, faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cennik",
  description:
    "Kurs online od 299 zł, pakiet dla firmy od 2 390 zł, wdrożenie „MŚP bez chaosu” od 2 900 zł, szkolenie stacjonarne od 6 900 zł i pakiet „Bezpieczna Firma” 10 900 zł. Podana kwota jest kwotą do zapłaty.",
  path: "/cennik",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Cennik", path: "/cennik" },
          ]),
          faqJsonLd(faqFor("pricing")),
        ]}
      />

      <PageHero
        compact
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "Cennik" }]}
        label={pricing.label}
        title="Cennik —"
        accent="celowo prosty"
        lead={pricing.lead}
      />

      <Section id="pakiety" tone="deep" size="compact" className="overflow-hidden">
        <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-40" />
        <Container className="relative">
          <PriceCards showIncludes />
          <Reveal delay={0.1} className="mt-16 flex flex-col items-center text-center">
            <p className="max-w-[40rem] font-display text-[1.35rem] leading-[1.35] text-balance text-white sm:text-[1.6rem]">
              {pricing.emphasis}
            </p>
            <p className="mt-4 max-w-[36rem] text-body-sm text-brand-200/85">{pricing.emphasisNote}</p>
          </Reveal>
        </Container>
      </Section>

      <Section id="dopasowanie">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead label="Dopasowanie" title="Szkolenia dopasowane" accent="do Twojej organizacji" />
              <div className="mt-10 flex flex-col gap-6">
                {pricingFit.paragraphs.map((paragraph) => (
                  <Reveal key={paragraph} as="p" className="max-w-[36rem] text-body text-pretty text-ink-muted">
                    {paragraph}
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-6">
              <Reveal delay={0.1} className="rounded-panel border border-brand-200/80 bg-brand-50/70 p-8 sm:p-10">
                <h3 className="font-display text-[1.3rem] tracking-tight text-ink">{pricingFit.custom.title}</h3>
                <p className="mt-4 text-small text-pretty text-brand-900/85">{pricingFit.custom.body}</p>
                <ul className="mt-7 flex flex-col gap-3.5 border-t border-brand-200/80 pt-7">
                  {pricingFit.reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-[0.9375rem] text-brand-900/90">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                        <Check className="size-3" aria-hidden />
                      </span>
                      {reason}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 font-display text-[1.02rem] leading-[1.55] text-brand-800">{pricingFit.custom.closing}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq" tone="tint">
        <Container>
          <SectionHead label="Pytania o cennik" title="Zanim zapytasz —" accent="odpowiadam" align="center" />
          <FaqList items={faqFor("pricing")} className="mx-auto mt-16 max-w-[44rem] lg:mt-20" />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
