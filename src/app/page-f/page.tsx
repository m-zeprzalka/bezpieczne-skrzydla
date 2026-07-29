import { AboutF, StrengthsF, WhyF } from "@/components/page-f/about-f";
import { ContactF } from "@/components/page-f/contact-f";
import { FooterF } from "@/components/page-f/footer-f";
import { HeaderF } from "@/components/page-f/header-f";
import { HeroF } from "@/components/page-f/hero-f";
import { KnowledgeF } from "@/components/page-f/knowledge-f";
import { MissionF } from "@/components/page-f/mission-f";
import { ModelF } from "@/components/page-f/model-f";
import { OfferF } from "@/components/page-f/offer-f";
import { PricingF } from "@/components/page-f/pricing-f";
import { WorkshopF } from "@/components/page-f/workshop-f";
import { VariantSwitch } from "@/components/page-b/variant-switch";
import { faq, pricing, site } from "@/lib/content";
import { trainingsF } from "@/lib/content-f";

/** Dane strukturalne — Google pokazuje dzięki nim dane firmy i katalog szkoleń. */
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
 * Kolejność sekcji odpowiada kolejności treści w dokumencie klientki:
 * hero → podejście i Model 4R → szkolenia → dopasowanie i cennik → warsztat
 * → misja → o Bezpiecznych Skrzydłach → mocne strony → dlaczego warto
 * → baza wiedzy → kontakt.
 */
export default function PageF() {
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

      <HeaderF />

      <main id="tresc" className="flex-1">
        <HeroF />
        <ModelF />
        <OfferF />
        <PricingF />
        <WorkshopF />
        <MissionF />
        <AboutF />
        <StrengthsF />
        <WhyF />
        <KnowledgeF />
        <ContactF />
      </main>

      <FooterF />
      <VariantSwitch active="f" />
    </>
  );
}
