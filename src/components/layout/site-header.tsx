"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";

import { BrandMark } from "@/components/system/brand-mark";
import { CONTAINER } from "@/components/system/container";
import { SocialLinks } from "@/components/system/social-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { primaryCta, primaryNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Nagłówek witryny.
 *
 * Zachowanie: przy przewijaniu w dół chowa się (więcej miejsca na treść na
 * telefonie), przy przewijaniu w górę wraca; po 24 px zyskuje tło i cień.
 * Aktywna pozycja menu wynika ze ścieżki (`usePathname`).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Chowamy dopiero po przewinięciu poza nagłówek i tylko przy ruchu w dół.
      if (y > 160 && y > last + 6) setHidden(true);
      else if (y < last - 6 || y < 160) setHidden(false);
      last = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      data-scrolled={scrolled || undefined}
      className={cn(
        "sticky top-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-out-expo",
        scrolled
          ? "border-b border-brand-100/80 bg-white/85 shadow-[0_8px_32px_-24px_rgba(11,37,64,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
          : "border-b border-transparent bg-white/0",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div
        className={cn(
          CONTAINER,
          "flex items-center justify-between gap-6 transition-[height] duration-500 ease-out-expo",
          scrolled ? "h-16" : "h-[4.5rem]",
        )}
      >
        <Link href="/" aria-label={`${site.name} — strona główna`} className="focus-ring shrink-0 rounded-full">
          <BrandMark preload />
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "focus-ring relative flex h-10 items-center rounded-full px-3 text-[0.85rem] font-medium whitespace-nowrap transition-colors duration-300",
                      active ? "text-brand-700" : "text-brand-900/80 hover:bg-brand-50 hover:text-brand-900",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-600 transition-[opacity,transform] duration-300",
                        active ? "scale-100 opacity-100" : "scale-0 opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="focus-ring hidden h-10 items-center gap-2 rounded-full px-3 text-[0.875rem] font-medium text-brand-900/80 transition-colors hover:text-brand-700 2xl:flex"
          >
            <Phone className="size-4 text-brand-500" aria-hidden />
            {site.phone}
          </a>

          <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="outline-brand"
              size="icon-lg"
              aria-label="Otwórz menu"
              aria-expanded={open}
              className="xl:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </Button>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-full gap-0 border-l-0 bg-white p-0 sm:max-w-md"
            >
              <div className="flex h-20 items-center justify-between border-b border-brand-100 px-5 sm:px-8">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Nawigacja witryny {site.name}
                </SheetDescription>
                <BrandMark />
                <SheetClose asChild>
                  <Button variant="outline-brand" size="icon-lg" aria-label="Zamknij menu">
                    <X className="size-5" />
                  </Button>
                </SheetClose>
              </div>

              <nav aria-label="Nawigacja mobilna" className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
                <ul className="flex flex-col">
                  {primaryNav.map((item, i) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.href} className="border-b border-brand-100 last:border-b-0">
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            style={{ transitionDelay: `${60 + i * 40}ms` }}
                            className={cn(
                              "focus-ring group flex items-center justify-between gap-4 rounded-md py-4 font-display text-[1.55rem] leading-tight tracking-tight transition-colors",
                              active ? "text-brand-600" : "text-ink hover:text-brand-700",
                            )}
                          >
                            <span>{item.label}</span>
                            <ArrowRight
                              aria-hidden
                              className={cn(
                                "size-5 transition-[transform,color] duration-300",
                                active ? "text-brand-600" : "text-brand-300 group-hover:translate-x-1 group-hover:text-brand-600",
                              )}
                            />
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex flex-col gap-4 border-t border-brand-100 bg-brand-50/60 px-5 py-6 sm:px-8">
                <SheetClose asChild>
                  <Button asChild variant="brand" size="xl" className="w-full">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </SheetClose>
                <Button asChild variant="outline-brand" size="xl" className="w-full">
                  <a href={`tel:${site.phoneHref}`}>
                    <Phone data-icon="inline-start" />
                    {site.phone}
                  </a>
                </Button>
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="focus-ring rounded-sm text-[0.875rem] font-medium text-brand-800 hover:text-brand-600"
                  >
                    {site.email}
                  </a>
                  <SocialLinks className="gap-2 [&_a]:size-10" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
