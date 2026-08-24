import { ContactHome } from "@/components/home/contact";
import { FaqHome } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { KnowledgeHome } from "@/components/home/knowledge";
import { ModelTeaser } from "@/components/home/model-teaser";
import { PricingHome } from "@/components/home/pricing";
import { TrainingsGrid } from "@/components/home/trainings";
import { Voices } from "@/components/home/voices";
import { WhyHome } from "@/components/home/why";
import { Marquee } from "@/components/system/marquee";
import { faqFor } from "@/content/faq";
import { marquee } from "@/content/home";
import { pricing } from "@/content/pricing";
import { site } from "@/content/site";
import { trainings } from "@/content/trainings";
import { workshop } from "@/content/workshop";
import { absolute, faqJsonLd, JsonLd } from "@/lib/seo";

/** Dane strukturalne strony głównej: katalog ofert, cennik, FAQ. */
const offerCatalog = {
  "@type": "OfferCatalog",
  "@id": `${site.url}/#oferta`,
  name: "Szkolenia i warsztat",
  itemListElement: [
    ...trainings.map((training) => ({
      "@type": "Offer",
      url: absolute(`/szkolenia/${training.slug}`),
      itemOffered: {
        "@type": "Course",
        name: training.title,
        description: training.summary,
        provider: { "@type": "Organization", name: site.name },
      },
    })),
    {
      "@type": "Offer",
      url: absolute("/warsztat"),
      itemOffered: { "@type": "Event", name: workshop.title, description: workshop.subtitle },
    },
  ],
};

const offers = [pricing.flagship, ...pricing.plans].map((plan) => ({
  "@type": "Offer",
  name: plan.name,
  description: plan.description,
  priceCurrency: "PLN",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "PLN",
    minPrice: Number(plan.price.replace(/\D/g, "")),
  },
}));

/**
 * Strona główna — sprzedażowa, w kolejności ustalonej z klientką:
 * Model 4R z Fundamentem tuż po sekcji powitalnej, dalej pięć szkoleń
 * i warsztat, „Co słyszę najczęściej”, cennik, mocne strony, FAQ,
 * baza wiedzy i formularz wyceny. Pełne treści żyją na podstronach.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd graph={[offerCatalog, ...offers, faqJsonLd(faqFor("home"))]} />
      <Hero />
      <Marquee items={marquee} />
      <ModelTeaser />
      <TrainingsGrid />
      <Voices />
      <PricingHome />
      <WhyHome />
      <FaqHome />
      <KnowledgeHome />
      <ContactHome />
    </>
  );
}
