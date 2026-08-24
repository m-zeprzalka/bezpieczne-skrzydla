import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/content/site";
import { JsonLd, organizationJsonLd } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "szkolenia antymobbingowe",
    "mobbing w pracy",
    "procedura antymobbingowa",
    "komisja antymobbingowa",
    "szkolenia HR",
    "przemoc psychiczna w pracy",
    "Model 4R",
    "Bezpieczne Skrzydła",
  ],
  authors: [{ name: site.owner }],
  creator: site.owner,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1B466E",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <JsonLd graph={[organizationJsonLd]} />
        <MotionProvider>
          <SkipLink />
          <SiteHeader />
          <main id="tresc" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
