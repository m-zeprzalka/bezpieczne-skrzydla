import Image from "next/image";
import Link from "next/link";

import { ContainerD, EyebrowD } from "@/components/page-d/frame";
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
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Model 4R", href: "#model-4r" },
  { label: "Oferta", href: "#oferta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export function FooterD() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-brand-200/70 relative overflow-hidden border-t bg-white">
      <div
        aria-hidden
        className="bg-light-well absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <ContainerD className="relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={110}
                height={110}
                className="ring-brand-200/80 size-12 rounded-full object-cover ring-1"
              />
              <span className="font-lux text-brand-950 text-[1.1rem] font-medium tracking-tight">
                Bezpieczne Skrzydła
              </span>
            </div>

            <p className="text-brand-800/70 mt-6 max-w-sm text-[0.9rem] leading-relaxed">
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
                  className="glass text-brand-700 hover:bg-brand-700 focus-visible:ring-ring/50 grid size-11 place-items-center rounded-full transition-colors outline-none hover:text-white focus-visible:ring-3"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Nawigacja w stopce" className="md:col-span-3">
            <EyebrowD>Strona</EyebrowD>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded text-[0.9rem] transition-colors outline-none focus-visible:ring-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <EyebrowD>Kontakt</EyebrowD>
            <address className="mt-5 flex flex-col gap-3 text-[0.9rem] not-italic">
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

            <dl className="text-brand-700/85 mt-6 flex flex-col gap-1.5 text-[0.8rem]">
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

        <div className="border-brand-200/70 text-brand-700/85 mt-12 flex flex-col gap-4 border-t pt-8 text-[0.78rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.owner}. Wszelkie prawa zastrzeżone.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-brand-800 transition-colors"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link
                href="/regulamin"
                className="hover:text-brand-800 transition-colors"
              >
                Regulamin
              </Link>
            </li>
          </ul>
        </div>
      </ContainerD>
    </footer>
  );
}
