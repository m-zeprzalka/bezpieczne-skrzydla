import { VariantSwitch } from "@/components/page-b/variant-switch";
import { ContactMvp } from "@/components/page-mvp/contact-mvp";
import { FaqMvp } from "@/components/page-mvp/faq-mvp";
import { FooterMvp } from "@/components/page-mvp/footer-mvp";
import { HeaderMvp } from "@/components/page-mvp/header-mvp";
import { HeroMvp } from "@/components/page-mvp/hero-mvp";
import { KnowledgeMvp } from "@/components/page-mvp/knowledge-mvp";
import { ModelMvp } from "@/components/page-mvp/model-mvp";
import { PricingMvp } from "@/components/page-mvp/pricing-mvp";
import {
  AboutMvp,
  MissionMvp,
  StrengthsMvp,
  WhyMvp,
} from "@/components/page-mvp/story-mvp";
import { TrainingsMvp } from "@/components/page-mvp/trainings-mvp";
import { VoicesMvp } from "@/components/page-mvp/voices-mvp";
import { WorkshopMvp } from "@/components/page-mvp/workshop-mvp";
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
 */
export default function PageMvp() {
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

      <HeaderMvp />

      <main id="tresc" className="flex-1">
        <HeroMvp />
        <ModelMvp />
        <TrainingsMvp />
        <WorkshopMvp />
        <VoicesMvp />
        <PricingMvp />
        <MissionMvp />
        <AboutMvp />
        <StrengthsMvp />
        <WhyMvp />
        <FaqMvp />
        <KnowledgeMvp />
        <ContactMvp />
      </main>

      <FooterMvp />
      <VariantSwitch active="mvp" />
    </>
  );
}
