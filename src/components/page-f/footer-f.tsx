import Image from "next/image";
import Link from "next/link";

import { CONTAINER_F, T_LABEL_F } from "@/components/page-f/frame-f";
import { WingRule } from "@/components/site/wing-arcs";
import { site } from "@/lib/content";
import { navF } from "@/lib/content-f";

export function FooterF() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-brand-100 border-t bg-white">
      <div className={`${CONTAINER_F} py-16 md:py-20`}>
        <WingRule className="mb-14" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={96}
                height={96}
                className="ring-brand-100 size-11 rounded-full object-cover ring-1"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-brand-950 text-[1.05rem] font-medium tracking-tight">
                  Bezpieczne Skrzydła
                </span>
                <span className="text-brand-600 mt-1 text-[0.66rem] font-semibold tracking-[0.18em] uppercase">
                  {site.owner}
                </span>
              </span>
            </div>

            <p className="text-muted-foreground mt-6 max-w-[26rem] text-[0.9375rem] leading-[1.7]">
              Marka edukacyjno-wspierająca poświęcona przeciwdziałaniu
              mobbingowi, dyskryminacji i przemocy psychicznej w środowisku
              pracy. Szkolenia online i stacjonarne na terenie całej Polski.
            </p>
          </div>

          <nav aria-label="Nawigacja w stopce" className="md:col-span-3">
            <p className={`${T_LABEL_F} text-brand-600`}>Strona</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navF.map((item) => (
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

          <div className="md:col-span-3">
            <p className={`${T_LABEL_F} text-brand-600`}>Kontakt</p>
            <address className="mt-5 flex flex-col gap-3 text-[0.9375rem] not-italic">
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

            <dl className="text-muted-foreground mt-5 flex flex-col gap-1 text-[0.8125rem]">
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

        <div className="border-brand-100 text-muted-foreground mt-14 flex flex-col gap-4 border-t pt-8 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </footer>
  );
}
