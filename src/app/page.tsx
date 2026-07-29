import { Bricolage_Grotesque, Geist } from "next/font/google";

import { ContactB } from "@/components/page-b/contact-b";
import { FaqB } from "@/components/page-b/faq-b";
import { FooterB } from "@/components/page-b/footer-b";
import { HeaderB } from "@/components/page-b/header-b";
import { HeroB } from "@/components/page-b/hero-b";
import { MissionB } from "@/components/page-b/mission-b";
import { ModelMap } from "@/components/page-b/model-map";
import { OfferB } from "@/components/page-b/offer-b";
import { PricingB } from "@/components/page-b/pricing-b";
import { SelfCheck } from "@/components/page-b/self-check";
import { TimelineB } from "@/components/page-b/timeline-b";
import { VariantSwitch } from "@/components/page-b/variant-switch";
import { faq, pricing, programs, site } from "@/lib/content";

/**
 * Strona główna prezentuje koncepcję B — decyzją z przeglądu wariantów.
 * Fonty wariantu ładują się tutaj (wcześniej w layoucie trasy /page-b),
 * więc pozostałe trasy nadal ich nie pobierają.
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-b",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Dane strukturalne — Google pokazuje dzięki nim rozwijane FAQ i dane firmy. */
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
      knowsAbout: [
        "mobbing w miejscu pracy",
        "procedura antymobbingowa",
        "komisja antymobbingowa",
        "przemoc psychiczna w pracy",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Szkolenia i warsztaty",
        itemListElement: programs.map((program) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: program.title,
            description: program.summary,
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

export default function Home() {
  return (
    <div
      className={`${bricolage.variable} ${geist.variable} theme-b font-body-b bg-background flex min-h-full flex-1 flex-col`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href="#tresc"
        className="bg-brand-950 focus:ring-brand-300 sr-only rounded-md px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <HeaderB />

      <main id="tresc" className="flex-1">
        <HeroB />
        <SelfCheck />
        <ModelMap />
        <TimelineB />
        <OfferB />
        <PricingB />
        <MissionB />
        <FaqB />
        <ContactB />
      </main>

      <FooterB />
      <VariantSwitch active="b" />
    </div>
  );
}
