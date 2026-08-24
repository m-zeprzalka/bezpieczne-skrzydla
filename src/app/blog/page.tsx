import { FileDown } from "lucide-react";

import { NewsletterForm } from "@/components/forms/newsletter-form";
import { PostList } from "@/components/pages/post-list";
import { Container } from "@/components/system/container";
import { IconTile } from "@/components/system/icon-tile";
import { PageHero } from "@/components/system/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { sortedPosts } from "@/content/blog";
import { knowledge, resources } from "@/content/knowledge";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Baza wiedzy",
  description:
    "Artykuły o mobbingu, przemocy psychicznej i odpowiedzialnym reagowaniu w pracy, opinie uczestników oraz bezpłatne checklisty i workbooki.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Baza wiedzy", path: "/blog" },
          ]),
        ]}
      />

      <PageHero
        compact
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "Baza wiedzy" }]}
        label={knowledge.label}
        title="Artykuły, opinie i"
        accent="bezpłatne materiały"
        lead={knowledge.lead}
      />

      <Section id="wpisy" size="compact">
        <Container>
          <PostList posts={sortedPosts()} />
        </Container>
      </Section>

      <Section id="materialy" tone="tint">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead label="Bezpłatne materiały" title="Pierwsze materiały" accent="udostępniam po zapisie" lead={knowledge.signup.text} />
              <Reveal delay={0.1} className="mt-10 max-w-[32rem]">
                <NewsletterForm />
              </Reveal>
            </div>
            <RevealGroup as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {resources.map((item) => (
                <RevealItem as="li" key={item.id} className="flex flex-col rounded-card border border-brand-200/80 bg-white p-7">
                  <IconTile tone="outline">
                    <FileDown aria-hidden />
                  </IconTile>
                  <span className="t-label mt-5 text-brand-600">
                    {item.type} · {item.forWhom}
                  </span>
                  <h3 className="mt-2.5 font-display text-[1.1rem] leading-[1.3] tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-2.5 flex-1 text-small text-ink-muted">{item.description}</p>
                  <p className="mt-5 border-t border-brand-100 pt-4 text-caption font-semibold text-brand-600">Dostępne po zapisie</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>
    </>
  );
}
