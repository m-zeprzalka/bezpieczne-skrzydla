import { ContactF } from "@/components/page-f/contact-f";
import { FooterF } from "@/components/page-f/footer-f";
import { KnowledgeF } from "@/components/page-f/knowledge-f";
import { PricingF } from "@/components/page-f/pricing-f";
import { HeaderG } from "@/components/page-g/header-g";
import { HeroG } from "@/components/page-g/hero-g";
import { ModelG } from "@/components/page-g/model-g";
import {
  AboutG,
  MissionG,
  StrengthsG,
  WhyG,
  WorkshopG,
} from "@/components/page-g/story-g";
import { TrainingsG } from "@/components/page-g/trainings-g";
import { VariantSwitch } from "@/components/page-b/variant-switch";
import { faq, pricing, site } from "@/lib/content";
import { trainingsF } from "@/lib/content-f";

/** Dane strukturalne — identyczny katalog jak w F. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organizacja`,
      name: site.name,
      founder: { "@type": "Person", name: site.owner },
      description:
        "Szkolenia, warsztaty i praktyczne narzędzia z zakresu przeciwdziałania mobbingowi, dyskryminacji i przemocy psychicznej w środowisku pracy.",
      url: site.url,
      telephone: site.phoneHref,
      email: site.email,
      areaServed: { "@type": "Country", name: "Polska" },
      sameAs: Object.values(site.socials),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Szkolenia i warsztaty",
        itemListElement: trainingsF.map((training) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: training.title,
            description: training.paragraphs[0],
            provider: { "@type": "Organization", name: site.name },
          },
        })),
      },
      makesOffer: pricing.map((plan) => ({
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
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

/**
 * Kolejność sekcji jak w dokumencie klientki (i w wariancie F) — zmienia się
 * wyłącznie opracowanie graficzne każdej z nich.
 */
export default function PageG() {
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

      <HeaderG />

      <main id="tresc" className="flex-1">
        <HeroG />
        <ModelG />
        <TrainingsG />
        <PricingF />
        <WorkshopG />
        <MissionG />
        <AboutG />
        <StrengthsG />
        <WhyG />
        <KnowledgeF />
        <ContactF />
      </main>

      <FooterF />
      <VariantSwitch active="g" />
    </>
  );
}
