import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { BrandMark } from "@/components/site/brand-mark";
import { Container } from "@/components/site/section";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/site/social-icons";
import { WingRule } from "@/components/site/wing-arcs";
import { Separator } from "@/components/ui/separator";
import { nav, site } from "@/lib/content";

const socials = [
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-50 border-brand-200/70 relative overflow-hidden border-t">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
      />

      <Container className="relative py-16 sm:py-20">
        <WingRule className="mb-14" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandMark size={52} />

            <p className="text-muted-foreground text-balance-pretty mt-6 max-w-sm text-[0.9rem] leading-relaxed">
              Marka edukacyjno-wspierająca poświęcona przeciwdziałaniu
              mobbingowi, dyskryminacji i przemocy psychicznej w środowisku
              pracy. Szkolenia online i stacjonarne na terenie całej Polski.
            </p>

            <div className="mt-7 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${site.name} na ${social.label}`}
                  className="border-brand-200 text-brand-700 hover:border-brand-700 hover:bg-brand-700 hover:text-brand-50 focus-visible:ring-ring/50 grid size-10 place-items-center rounded-xl border bg-white transition-colors outline-none focus-visible:ring-3"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Nawigacja w stopce" className="md:col-span-3">
            <h2 className="text-brand-600 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
              Strona
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded text-[0.88rem] transition-colors outline-none focus-visible:ring-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-brand-600 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
              Kontakt
            </h2>

            <address className="mt-5 flex flex-col gap-3 text-[0.88rem] not-italic">
              <span className="text-brand-900 font-medium">{site.owner}</span>

              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-2.5 rounded transition-colors outline-none focus-visible:ring-3"
              >
                <Phone className="text-brand-500 size-3.5" aria-hidden />
                {site.phone}
              </a>

              <a
                href={`mailto:${site.email}`}
                className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-2.5 rounded transition-colors outline-none focus-visible:ring-3"
              >
                <Mail className="text-brand-500 size-3.5" aria-hidden />
                {site.email}
              </a>
            </address>

            <dl className="text-muted-foreground mt-6 flex flex-col gap-1.5 text-[0.8rem]">
              <div className="flex gap-2">
                <dt className="font-medium">NIP</dt>
                <dd>{site.nip}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium">REGON</dt>
                <dd>{site.regon}</dd>
              </div>
            </dl>
          </div>
        </div>

        <Separator className="bg-brand-200/70 my-10" />

        <div className="text-muted-foreground flex flex-col gap-4 text-[0.78rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.owner}. Wszelkie prawa zastrzeżone.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-brand-700 transition-colors"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link
                href="/regulamin"
                className="hover:text-brand-700 transition-colors"
              >
                Regulamin
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
