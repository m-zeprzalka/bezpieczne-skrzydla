import { VariantSwitch } from "@/components/page-b/variant-switch";
import { ContactMvpB } from "@/components/page-mvp-b/contact-mvp-b";
import { FaqMvpB } from "@/components/page-mvp-b/faq-mvp-b";
import { FooterMvpB } from "@/components/page-mvp-b/footer-mvp-b";
import { HeaderMvpB } from "@/components/page-mvp-b/header-mvp-b";
import { HeroMvpB } from "@/components/page-mvp-b/hero-mvp-b";
import { KnowledgeMvpB } from "@/components/page-mvp-b/knowledge-mvp-b";
import { ModelMvpB } from "@/components/page-mvp-b/model-mvp-b";
import { PricingMvpB } from "@/components/page-mvp-b/pricing-mvp-b";
import {
  AboutMvpB,
  MissionMvpB,
  StrengthsMvpB,
  WhyMvpB,
} from "@/components/page-mvp-b/story-mvp-b";
import { TrainingsMvpB } from "@/components/page-mvp-b/trainings-mvp-b";
import { VoicesMvpB } from "@/components/page-mvp-b/voices-mvp-b";
import { WorkshopMvpB } from "@/components/page-mvp-b/workshop-mvp-b";
import { site } from "@/lib/content";
import { trainingsF, workshopF } from "@/lib/content-f";
import { faqMvp, pricingMvp } from "@/lib/content-mvp";

/** Dane strukturalne — katalog pięciu szkoleń, warsztat i nowy cennik. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organizacja`,
      name: site.name,
      founder: { "@type": "Person", name: site.owner },
      description:
        "Nagrane kursy online i praktyczne narzędzia z zakresu przeciwdziałania mobbingowi, dyskryminacji i przemocy psychicznej w środowisku pracy. Szkolenia stacjonarne na życzenie klienta.",
      url: site.url,
      telephone: site.phoneHref,
      email: site.email,
      areaServed: { "@type": "Country", name: "Polska" },
      sameAs: Object.values(site.socials),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Szkolenia i warsztat",
        itemListElement: [
          ...trainingsF.map((training) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: training.title,
              description: training.paragraphs[0],
              provider: { "@type": "Organization", name: site.name },
            },
          })),
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Event",
              name: workshopF.title,
              description: workshopF.paragraphs[0],
            },
          },
        ],
      },
      makesOffer: [pricingMvp.flagship, ...pricingMvp.plans].map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        priceCurrency: "PLN",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "PLN",
          minPrice: Number(plan.price.replace(/\D/g, "")),
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqMvp.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

/**
 * Kolejność sekcji według maila klientki: Model 4R z Fundamentem zajmuje
 * drugi blok strony (tuż po sekcji powitalnej). Dalej pięć szkoleń, osobno
 * warsztat, blok „Co słyszę najczęściej” z C, nowy cennik i formularz wyceny.
 * Wersja B różni się od MVP wyłącznie kompozycją — więcej światła, mniej ramek.
 */
export default function PageMvpB() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href="#tresc"
        className="bg-brand-700 text-brand-50 focus:ring-brand-300 sr-only rounded-full px-5 py-2.5 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <HeaderMvpB />

      <main id="tresc" className="flex-1">
        <HeroMvpB />
        <ModelMvpB />
        <TrainingsMvpB />
        <WorkshopMvpB />
        <VoicesMvpB />
        <PricingMvpB />
        <MissionMvpB />
        <AboutMvpB />
        <StrengthsMvpB />
        <WhyMvpB />
        <FaqMvpB />
        <KnowledgeMvpB />
        <ContactMvpB />
      </main>

      <FooterMvpB />
      <VariantSwitch active="mvp-b" />
    </>
  );
}
