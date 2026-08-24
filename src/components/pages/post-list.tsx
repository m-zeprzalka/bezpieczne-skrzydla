"use client";

import * as React from "react";

import { PostCard } from "@/components/pages/post-card";
import { categories, type Post, type PostCategory } from "@/content/blog";
import { cn } from "@/lib/utils";

/**
 * Lista wpisów z filtrem kategorii. Dane są statyczne, więc filtrowanie
 * odbywa się w przeglądarce; pierwszy wpis w widoku dostaje duży format.
 */
export function PostList({ posts }: { posts: Post[] }) {
  const [active, setActive] = React.useState<PostCategory | "all">("all");
  const visible = active === "all" ? posts : posts.filter((post) => post.category === active);
  const [featured, ...rest] = visible;

  return (
    <div>
      <div role="tablist" aria-label="Kategorie" className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
        {(["all", ...categories] as const).map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={cn(
                "focus-ring inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-[0.85rem] font-medium transition-[background-color,border-color,color] duration-300",
                selected
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-brand-200 bg-white text-brand-800 hover:border-brand-400",
              )}
            >
              {category === "all" ? "Wszystkie" : category}
            </button>
          );
        })}
      </div>

      {featured ? (
        <div className="mt-14" key={active}>
          <PostCard post={featured} large className="lg:grid lg:grid-cols-12 lg:gap-10 [&>div:first-child]:lg:col-span-7 [&>div:last-child]:lg:col-span-5 [&>div:last-child]:lg:mt-0 [&>div:last-child]:lg:justify-center" />
          {rest.length > 0 ? (
            <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-14 border-t border-brand-200/80 pt-16 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-12 text-body text-ink-muted">Brak wpisów w tej kategorii.</p>
      )}
    </div>
  );
}
