import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Krój Fraunces do obrazu OG pobierany z Google Fonts w czasie budowania.
 * Bez sieci obraz renderuje się w kroju zastępczym — budowanie się nie przerywa.
 */
async function loadFraunces() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400&display=swap",
      // Bez nagłówka User-Agent Google Fonts zwraca TTF — satori nie czyta WOFF2.
      { signal: AbortSignal.timeout(8000) },
    ).then((res) => res.text());
    const url = css.match(/src: url\((https:[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url, { signal: AbortSignal.timeout(8000) }).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

/** Obraz udostępniania: granat marki, sygnet z logo, hasło i podpis autorki. */
export default async function OpenGraphImage() {
  const [logo, fraunces] = await Promise.all([
    readFile(join(process.cwd(), "public/logo-bezpieczne-skrzydla.png")),
    loadFraunces(),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const display = fraunces ? "Fraunces" : "Georgia, serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0B2540 0%, #1B466E 100%)",
          color: "#F7FAFC",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={logoSrc} width={96} height={96} alt="" style={{ borderRadius: 999 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: display, fontSize: 34 }}>{site.name}</span>
            <span style={{ fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#9EC7DA", marginTop: 6 }}>
              {site.owner}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: 18,
              fontFamily: display,
              fontSize: 66,
              lineHeight: 1.06,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            <span>Szkolenia i praktyczne</span>
            <span>narzędzia dla</span>
            <span style={{ color: "#9EC7DA" }}>bezpieczniejszych</span>
            <span>miejsc pracy</span>
          </div>
          <div style={{ fontSize: 24, color: "#DBE8F0" }}>
            Autorski Model 4R z Fundamentem · kursy online z certyfikatem · stacjonarnie na życzenie
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces ? [{ name: "Fraunces", data: fraunces, style: "normal", weight: 400 }] : undefined,
    },
  );
}
