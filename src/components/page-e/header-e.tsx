"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { CONTAINER } from "@/components/page-e/frame";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/content";
import { navE } from "@/lib/content-e";

/**
 * Nagłówek przyklejony do góry, ale bez reakcji na przewijanie: stałe białe
 * tło i stała włoskowa linia. Brak przełączania stanu to jeden powód mniej,
 * żeby strona „chodziła topornie”.
 */
export function HeaderE() {
  return (
    <header className="border-brand-200 sticky top-0 z-50 border-b bg-white">
      <div
        className={`${CONTAINER} flex h-20 items-center justify-between gap-8`}
      >
        <Link
          href="/page-e"
          className="focus-visible:ring-ring/50 flex shrink-0 items-center gap-2.5 rounded outline-none focus-visible:ring-3"
        >
          <Image
            src="/logo-bezpieczne-skrzydla.png"
            alt=""
            width={80}
            height={80}
            priority
            className="size-9 rounded-full object-cover"
          />
          <span className="text-brand-950 text-[0.9375rem] leading-none font-bold tracking-[-0.01em]">
            Bezpieczne Skrzydła
          </span>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navE.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded text-[0.875rem] font-medium outline-none focus-visible:ring-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 hidden items-center gap-2 rounded text-[0.875rem] font-medium outline-none focus-visible:ring-3 xl:flex"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-brand-600 text-brand-600 hover:bg-brand-600 hidden h-11 rounded-full px-6 text-[0.875rem] font-semibold hover:text-white sm:inline-flex"
          >
            <Link href="#kontakt">Umów rozmowę</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="Otwórz menu"
                className="border-brand-200 h-11 w-11 rounded-xl lg:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="border-b">
                <SheetTitle className="text-brand-950 font-bold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Nawigacja mobilna" className="flex flex-col p-4">
                {navE.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-brand-900 hover:bg-brand-50 focus-visible:ring-ring/50 border-brand-100 border-b px-2 py-4 text-base font-medium outline-none last:border-b-0 focus-visible:ring-3"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 p-4">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="accent"
                    size="xl"
                    className="rounded-xl"
                  >
                    <Link href="#kontakt">Umów rozmowę</Link>
                  </Button>
                </SheetClose>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-xl"
                >
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
