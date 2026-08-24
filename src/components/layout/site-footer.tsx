import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { BrandMark } from "@/components/system/brand-mark";
import { Container } from "@/components/system/container";
import { SocialLinks } from "@/components/system/social-icons";
import { footer, site } from "@/content/site";

/** Stopka: marka, kolumny odnośników, kontakt, dane rejestrowe i dokumenty. Bez ornamentów. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-surface-tint">
      <Container className="py-20 md:py-24">

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="focus-ring inline-block rounded-full" aria-label={`${site.name} — strona główna`}>
              <BrandMark size={44} />
            </Link>
            <p className="mt-6 max-w-[26rem] text-body-sm text-ink-muted">{footer.description}</p>
            <SocialLinks className="mt-7" />
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="md:col-span-2">
              <p className="t-label text-brand-600">{column.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring link-underline rounded-sm text-[0.9375rem] text-brand-900/85 transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-4 lg:pl-6">
            <p className="t-label text-brand-600">Kontakt</p>
            <address className="mt-5 flex flex-col gap-3 text-[0.9375rem] not-italic">
              <a
                href={`tel:${site.phoneHref}`}
                className="focus-ring flex items-center gap-2.5 rounded-sm font-medium text-brand-900 transition-colors hover:text-brand-600"
              >
                <Phone className="size-4 text-brand-500" aria-hidden />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="focus-ring flex items-center gap-2.5 rounded-sm font-medium break-all text-brand-900 transition-colors hover:text-brand-600"
              >
                <Mail className="size-4 shrink-0 text-brand-500" aria-hidden />
                {site.email}
              </a>
            </address>
            <dl className="mt-6 flex flex-col gap-1 text-caption text-ink-muted">
              <div className="flex gap-2">
                <dt className="font-semibold">NIP</dt>
                <dd>{site.nip}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">REGON</dt>
                <dd>{site.regon}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-brand-200/70 pt-8 text-caption text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.owner}. Wszelkie prawa zastrzeżone.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded-sm transition-colors hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
