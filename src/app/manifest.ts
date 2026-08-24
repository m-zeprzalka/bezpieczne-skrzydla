import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1B466E",
    lang: "pl",
    icons: [{ src: "/logo-bezpieczne-skrzydla.png", sizes: "1181x1181", type: "image/png" }],
  };
}
