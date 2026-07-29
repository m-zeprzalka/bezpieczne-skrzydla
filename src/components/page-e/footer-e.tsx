import Image from "next/image";
import Link from "next/link";

import { ContainerE, LabelE, RuleE } from "@/components/page-e/frame";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/site/social-icons";
import { site } from "@/lib/content";
import { navE } from "@/lib/content-e";

const socials = [
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
] as const;

export function FooterE() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-brand-200 border-t bg-white">
      <ContainerE className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={90}
                height={90}
                className="size-10 rounded-full object-cover"
              />
              <span className="text-brand-950 text-[0.9375rem] leading-none font-bold tracking-[-0.01em]">
                Bezpieczne Skrzydła
              </span>
            </div>

            <p className="text-muted-foreground mt-6 max-w-[24rem] text-[0.9375rem] leading-[1.7]">
              Szkolenia, warsztaty i praktyczne narzędzia z zakresu
              przeciwdziałania mobbingowi, dyskryminacji i przemocy psychicznej
              w środowisku pracy. Cała Polska.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${site.name} na ${social.label}`}
                  className="border-brand-200 text-brand-700 hover:border-brand-600 hover:bg-brand-600 focus-visible:ring-ring/50 grid size-10 place-items-center rounded-xl border outline-none hover:text-white focus-visible:ring-3"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Nawigacja w stopce" className="md:col-span-3">
            <LabelE>Strona</LabelE>
            <ul className="mt-5 flex flex-col gap-3">
              {navE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded text-[0.9375rem] outline-none focus-visible:ring-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <LabelE>Kontakt</LabelE>
            <address className="mt-5 flex flex-col gap-3 text-[0.9375rem] not-italic">
              <span className="text-brand-950 font-semibold">{site.owner}</span>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded outline-none focus-visible:ring-3"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded break-all outline-none focus-visible:ring-3"
              >
                {site.email}
              </a>
            </address>

            <dl className="text-muted-foreground mt-6 flex flex-col gap-1.5 text-[0.8125rem]">
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

        <RuleE className="mt-14" />

        <div className="text-muted-foreground flex flex-col gap-4 pt-8 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.owner}. Wszelkie prawa zastrzeżone.
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <li>
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-brand-700"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="/regulamin" className="hover:text-brand-700">
                Regulamin
              </Link>
            </li>
          </ul>
        </div>
      </ContainerE>
    </footer>
  );
}
