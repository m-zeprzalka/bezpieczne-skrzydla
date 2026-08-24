import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Pill } from "@/components/system/pill";
import { WingArcs } from "@/components/system/wing-arcs";
import type { Post } from "@/content/blog";
import { formatDate, readingLabel } from "@/lib/format";
import { cn } from "@/lib/utils";

const covers: Record<Post["tone"], string> = {
  sky: "from-brand-200 via-brand-100 to-white text-brand-300",
  deep: "from-brand-900 via-brand-800 to-brand-700 text-brand-500",
  sand: "from-sand-200 via-sand-100 to-white text-sand-200",
  foundation: "from-foundation-200 via-foundation-100 to-white text-foundation-300",
};

/**
 * Okładka wpisu generowana w kodzie — na tym etapie nie ma zdjęć.
 * Gradient w tonie wpisu + skrzydło + duży cudzysłów jako sygnatura bloga.
 */
export function PostCover({ post, className, large = false }: { post: Post; className?: string; large?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-card bg-linear-to-br",
        large ? "aspect-16/10 lg:aspect-4/3" : "aspect-16/10",
        covers[post.tone],
        className,
      )}
    >
      <WingArcs
        animate={false}
        tone={post.tone === "deep" ? "dark" : "light"}
        className="absolute -bottom-10 left-1/2 w-[140%] -translate-x-1/2 opacity-50"
        count={8}
      />
      <span
        className={cn(
          "absolute top-4 left-6 font-display leading-none select-none",
          large ? "text-[7rem]" : "text-[5rem]",
        )}
      >
        „
      </span>
      <span
        className={cn(
          "t-label absolute right-5 bottom-5",
          post.tone === "deep" ? "text-brand-300" : "text-brand-700/70",
        )}
      >
        {post.category}
      </span>
    </div>
  );
}

export function PostCard({ post, className, large = false }: { post: Post; className?: string; large?: boolean }) {
  return (
    <article className={cn("group relative flex h-full flex-col", className)}>
      <PostCover post={post} large={large} className="card-lift" />
      <div className={cn("flex flex-1 flex-col", large ? "mt-7" : "mt-5")}>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-caption text-ink-muted">
          {large ? (
            <Pill variant="soft" className="text-[0.75rem]">
              {post.category}
            </Pill>
          ) : null}
          <time dateTime={post.date} className="whitespace-nowrap">{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span className="whitespace-nowrap">{readingLabel(post.readingMinutes)}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-display leading-[1.2] tracking-tight text-balance text-ink transition-colors group-hover:text-brand-700",
            large ? "text-[1.6rem] sm:text-[1.9rem]" : "text-[1.2rem]",
          )}
        >
          <Link href={`/blog/${post.slug}`} className="focus-ring rounded-sm after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h3>
        <p className={cn("mt-3 flex-1 text-pretty text-ink-muted", large ? "text-body" : "text-body-sm")}>{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-brand-800">
          <span className="link-underline">Czytaj dalej</span>
          <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
