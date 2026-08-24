import type { Metadata } from "next";

import { site } from "@/content/site";

/** Skrót do spójnych metadanych podstron (tytuł, opis, kanoniczny adres, OG). */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url: path,
      type: "website",
    },
  };
}

export function absolute(path: string) {
  return new URL(path, site.url).toString();
}

export const organizationJsonLd = {
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organizacja`,
  name: site.name,
  founder: { "@type": "Person", name: site.owner },
  description: site.description,
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
    "Model 4R",
  ],
} as const;

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Renderuje `<script type="application/ld+json">` z grafem schema.org. */
export function JsonLd({ graph }: { graph: unknown[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
