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
        <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-50" />
        <div aria-hidden className="bg-grid-dark mask-radial absolute inset-0 opacity-60" />
        <Container className="relative">
          <PriceCards showIncludes />
          <Reveal delay={0.1} className="mt-14 flex flex-col items-center text-center">
            <p className="max-w-[44rem] font-display text-[1.5rem] leading-[1.3] text-balance text-white sm:text-[1.85rem]">
              {pricing.emphasis}
            </p>
            <p className="mt-4 max-w-[36rem] text-body-sm text-brand-200/85">{pricing.emphasisNote}</p>
          </Reveal>
        </Container>
      </Section>

      <Section id="dopasowanie">
        <Container>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead label="Dopasowanie" title="Szkolenia dopasowane" accent="do Twojej organizacji" />
              <div className="mt-8 flex flex-col gap-5">
                {pricingFit.paragraphs.map((paragraph) => (
                  <Reveal key={paragraph} as="p" className="measure text-body text-pretty text-ink-muted">
                    {paragraph}
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-6">
              <Reveal delay={0.1} className="rounded-panel border border-brand-200/80 bg-brand-50/70 p-7 sm:p-9">
                <h3 className="font-display text-[1.45rem] tracking-tight text-ink">{pricingFit.custom.title}</h3>
                <p className="mt-4 text-body-sm text-pretty text-brand-900/85">{pricingFit.custom.body}</p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-brand-200 pt-6">
                  {pricingFit.reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-[0.9375rem] text-brand-900/90">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                        <Check className="size-3" aria-hidden />
                      </span>
                      {reason}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-[1.05rem] leading-[1.55] text-brand-800">{pricingFit.custom.closing}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq" tone="tint">
        <Container>
          <SectionHead label="Pytania o cennik" title="Zanim zapytasz —" accent="odpowiadam" align="center" />
          <FaqList items={faqFor("pricing")} className="mx-auto mt-14 max-w-[46rem]" />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
