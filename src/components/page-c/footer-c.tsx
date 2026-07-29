import Link from "next/link";

import { ContainerC, EyebrowC } from "@/components/page-c/frame";
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

export function FooterC() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-brand-200 bg-paper-deep border-t pb-24 sm:pb-20">
      <ContainerC className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-brand-950 measure text-[1.15rem] leading-[1.5] italic">
              „Bezpieczna praca nie powinna być luksusem ani pustym hasłem
              zapisanym w procedurze”.
            </p>
            <p className="text-brand-600 mt-4 font-sans text-[0.78rem]">
              {site.owner} · {site.name}
            </p>
          </div>

          <div className="md:col-span-3">
            <EyebrowC>Kontakt</EyebrowC>
            <address className="mt-4 flex flex-col gap-2 text-[0.98rem] not-italic">
              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-900 hover:text-brand-600 focus-visible:ring-ring/50 rounded transition-colors outline-none focus-visible:ring-3"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-900 hover:text-brand-600 focus-visible:ring-ring/50 rounded break-all transition-colors outline-none focus-visible:ring-3"
              >
                {site.email}
              </a>
            </address>

            <dl className="text-brand-600 mt-5 flex flex-col gap-1 font-sans text-[0.75rem]">
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

          <div className="md:col-span-3">
            <EyebrowC>Gdzie jeszcze piszę</EyebrowC>
            <div className="mt-4 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${site.name} na ${social.label}`}
                  className="border-brand-300 text-brand-800 hover:border-brand-700 hover:bg-brand-700 hover:text-paper focus-visible:ring-ring/50 grid size-10 place-items-center rounded-lg border transition-colors outline-none focus-visible:ring-3"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-brand-200 text-brand-600 mt-12 flex flex-col gap-3 border-t pt-6 font-sans text-[0.75rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Wszelkie prawa zastrzeżone.
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
      </ContainerC>
    </footer>
  );
}
