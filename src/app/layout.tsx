import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";

import { MotionProvider } from "@/components/motion-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { site } from "@/lib/content";

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
  description:
    "Szkolenia, warsztaty i praktyczne narzędzia z zakresu przeciwdziałania mobbingowi, dyskryminacji i przemocy psychicznej w pracy. Autorski Model 4R dla pracowników, HR, pracodawców MŚP i komisji antymobbingowych.",
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
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Bezpieczne miejsce pracy zaczyna się od wiedzy i odwagi reagowania. Szkolenia i praktyczne narzędzia dla pracowników, liderów, HR, pracodawców i komisji antymobbingowych.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1B466E",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="bg-background flex min-h-full flex-col">
        <MotionProvider>
          <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </MotionProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
