import { FileDown } from "lucide-react";

import { NewsletterForm } from "@/components/forms/newsletter-form";
import { PostCard } from "@/components/pages/post-card";
import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { WingArcs } from "@/components/system/wing-arcs";
import { sortedPosts } from "@/content/blog";
import { knowledge, resources } from "@/content/knowledge";

/** Baza wiedzy: trzy najnowsze wpisy + zapis na bezpłatne materiały. */
export function KnowledgeHome() {
  const latest = sortedPosts().slice(0, 3);

  return (
    <Section id="baza-wiedzy">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead index="07" label={knowledge.label} title="Artykuły, opinie i" accent="bezpłatne materiały" lead={knowledge.lead} />
          <Reveal className="shrink-0 lg:pb-2">
            <ArrowLink href="/blog">Cała baza wiedzy</ArrowLink>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-16">
          {latest.map((post) => (
            <RevealItem key={post.slug} className="flex">
              <PostCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-panel bg-surface-deep p-7 text-brand-100 sm:p-10 lg:p-12">
            <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-60" />
            <WingArcs tone="dark" animate={false} className="absolute -right-32 -bottom-40 w-[640px] opacity-20" count={9} />
            <div className="relative grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="t-label text-brand-300">{knowledge.signup.title}</p>
                <h3 className="mt-4 font-display text-[1.75rem] leading-[1.15] tracking-tight text-balance text-white sm:text-[2.1rem]">
                  Pierwsze materiały udostępniam po zapisie.
                </h3>
                <p className="mt-5 max-w-[30rem] text-body-sm text-pretty text-brand-200/85">{knowledge.signup.text}</p>
                <NewsletterForm tone="dark" className="mt-8 max-w-[34rem]" />
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-6">
                {resources.map((item) => (
                  <li key={item.id} className="flex gap-3.5 rounded-card border border-white/10 bg-white/[0.06] p-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-brand-200">
                      <FileDown className="size-4" aria-hidden />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="t-label text-[0.6rem] text-brand-300">{item.type}</span>
                      <span className="mt-1 text-[0.9rem] leading-snug font-medium text-white">{item.title}</span>
                      <span className="mt-1 text-caption text-brand-200/70">{item.forWhom}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
