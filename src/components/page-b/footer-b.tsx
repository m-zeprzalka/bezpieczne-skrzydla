import Image from "next/image";
import Link from "next/link";

import { ContainerB, LabelB } from "@/components/page-b/frame";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/site/social-icons";
import { site } from "@/lib/content";

const socials = [
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
] as const;

const footerNav = [
  { label: "Sprawdź sytuację", href: "#sprawdz" },
  { label: "Model 4R", href: "#model" },
  { label: "Schemat 24 h — 72 h — 7 dni", href: "#schemat" },
  { label: "Oferta", href: "#oferta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export function FooterB() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-brand-200 border-t bg-white">
      <ContainerB className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={96}
                height={96}
                className="ring-brand-200 size-11 rounded-full object-cover ring-1"
              />
              <span className="font-grotesk text-brand-950 text-[1.05rem] font-semibold tracking-tight">
                Bezpieczne Skrzydła
              </span>
            </div>

            <p className="text-muted-foreground mt-5 max-w-sm text-[0.88rem] leading-relaxed">
              Marka edukacyjno-wspierająca poświęcona przeciwdziałaniu
              mobbingowi, dyskryminacji i przemocy psychicznej w środowisku
              pracy. Szkolenia online i stacjonarne na terenie całej Polski.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${site.name} na ${social.label}`}
                  className="border-brand-200 text-brand-700 hover:border-brand-950 hover:bg-brand-950 focus-visible:ring-ring/50 grid size-9 place-items-center rounded-md border transition-colors outline-none hover:text-white focus-visible:ring-3"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Nawigacja w stopce" className="md:col-span-4">
            <LabelB>Na tej stronie</LabelB>
            <ul className="mt-5 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded text-[0.87rem] transition-colors outline-none focus-visible:ring-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <LabelB>Kontakt</LabelB>
            <address className="mt-5 flex flex-col gap-2.5 text-[0.87rem] not-italic">
              <span className="text-brand-950 font-medium">{site.owner}</span>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded transition-colors outline-none focus-visible:ring-3"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded break-all transition-colors outline-none focus-visible:ring-3"
              >
                {site.email}
              </a>
            </address>

            <dl className="text-muted-foreground mt-5 flex flex-col gap-1 text-[0.78rem]">
              <div className="flex gap-2">
                <dt>NIP</dt>
                <dd>{site.nip}</dd>
              </div>
              <div className="flex gap-2">
                <dt>REGON</dt>
                <dd>{site.regon}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-brand-200 text-muted-foreground mt-12 flex flex-col gap-3 border-t pt-6 text-[0.77rem] sm:flex-row sm:items-center sm:justify-between">
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
      </ContainerB>
    </footer>
  );
}
