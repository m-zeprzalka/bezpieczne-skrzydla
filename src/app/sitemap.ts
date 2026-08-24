import type { MetadataRoute } from "next";

import { sortedPosts } from "@/content/blog";
import { site } from "@/content/site";
import { trainings } from "@/content/trainings";

const LAST_BUILD = new Date("2026-08-24T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;

  return [
    { url: url("/"), lastModified: LAST_BUILD, changeFrequency: "weekly", priority: 1 },
    { url: url("/szkolenia"), lastModified: LAST_BUILD, changeFrequency: "monthly", priority: 0.9 },
    ...trainings.map((training) => ({
      url: url(`/szkolenia/${training.slug}`),
      lastModified: LAST_BUILD,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: url("/warsztat"), lastModified: LAST_BUILD, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/cennik"), lastModified: LAST_BUILD, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/model-4r"), lastModified: LAST_BUILD, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/o-nas"), lastModified: LAST_BUILD, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/blog"), lastModified: LAST_BUILD, changeFrequency: "weekly", priority: 0.7 },
    ...sortedPosts().map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: url("/kontakt"), lastModified: LAST_BUILD, changeFrequency: "yearly", priority: 0.8 },
  ];
}
