import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Lightbulb } from "lucide-react";

import { PostCard, PostCover } from "@/components/pages/post-card";
import { Breadcrumbs } from "@/components/system/breadcrumbs";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { Pill } from "@/components/system/pill";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { Button } from "@/components/ui/button";
import { getPost, posts, sortedPosts, type PostBlock } from "@/content/blog";
import { site } from "@/content/site";
import { getTraining } from "@/content/trainings";
import { formatDate, readingLabel } from "@/lib/format";
import { absolute, breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const base = pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: post.date, authors: [site.owner] },
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 className="font-display">{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="my-12 border-l-2 border-brand-400 pl-6 font-display text-[1.2rem] leading-[1.5] text-ink sm:text-[1.35rem]">
          {block.text}
        </blockquote>
      );
    case "note":
      return (
        <aside className="my-12 flex gap-4 rounded-panel border border-brand-200/80 bg-brand-50/70 p-7 sm:p-8">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
          <div>
            <p className="text-[0.95rem] font-semibold text-ink">{block.title}</p>
            <p className="mt-2 text-body-sm text-brand-900/85">{block.text}</p>
          </div>
        </aside>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const training = post.training ? getTraining(post.training) ?? undefined : undefined;
  const related = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Baza wiedzy", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: site.owner },
            publisher: { "@type": "Organization", name: site.name, url: site.url },
            mainEntityOfPage: absolute(`/blog/${post.slug}`),
            articleSection: post.category,
          },
        ]}
      />

      <article>
        <header className="relative overflow-hidden bg-white">
          <div aria-hidden className="bg-aurora absolute inset-x-0 top-0 -z-0 h-[480px] opacity-30" />
          <Container className="relative pt-12 pb-12 sm:pt-16">
            <Reveal>
              <Breadcrumbs
                items={[
                  { label: "Strona główna", href: "/" },
                  { label: "Baza wiedzy", href: "/blog" },
                  { label: post.category },
                ]}
              />
            </Reveal>
            <div className="mx-auto mt-12 max-w-[46rem] text-center">
              <Reveal delay={0.04} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-caption text-ink-muted">
                <Pill variant="soft">{post.category}</Pill>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{readingLabel(post.readingMinutes)}</span>
              </Reveal>
              <Reveal delay={0.08} as="div" className="mt-6">
                <h1 className="text-h1 text-balance text-ink">{post.title}</h1>
              </Reveal>
              <Reveal delay={0.14} as="p" className="text-lead mx-auto mt-6 max-w-[36rem] text-pretty text-ink-muted">
                {post.excerpt}
              </Reveal>
              <Reveal delay={0.18} className="mt-8 flex items-center justify-center gap-3 text-small text-brand-900/85">
                <span className="grid size-9 place-items-center rounded-full bg-brand-100 font-display text-[0.9rem] text-brand-800">
                  {site.owner.split(" ").map((part) => part[0]).join("")}
                </span>
                <span>
                  <span className="font-semibold text-ink">{site.owner}</span> · {site.ownerRole}
                </span>
              </Reveal>
            </div>
            <Reveal delay={0.22} className="mx-auto mt-14 max-w-[60rem]">
              <PostCover post={post} large className="aspect-21/9 lg:aspect-21/9" />
            </Reveal>
          </Container>
        </header>

        <Section size="compact">
          <Container>
            <div className="prose-bs mx-auto max-w-prose">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-prose">
              <div className="flex flex-col gap-6 rounded-panel border border-brand-200/80 bg-brand-50/70 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                <div>
                  <p className="t-label text-brand-600">{training ? `Rozwijam to w szkoleniu ${training.number}` : "Chcesz więcej?"}</p>
                  <p className="mt-2 font-display text-[1.1rem] leading-[1.35] text-ink">
                    {training ? training.title : "Wszystkie szkolenia i warsztat w jednym miejscu."}
                  </p>
                </div>
                <Button asChild variant="brand" size="lg" className="shrink-0">
                  <Link href={training ? `/szkolenia/${training.slug}` : "/szkolenia"}>
                    {training ? "Zobacz program" : "Zobacz szkolenia"}
                    <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </article>

      <Section tone="tint">
        <Container>
          <SectionHead label="Czytaj dalej" title="Podobne wpisy" align="center" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-20">
            {related.map((item) => (
              <RevealItem key={item.slug} className="flex">
                <PostCard post={item} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
