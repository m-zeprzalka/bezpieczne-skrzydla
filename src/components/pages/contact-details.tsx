import { Check, Globe, Mail, Phone } from "lucide-react";

import { SocialLinks } from "@/components/system/social-icons";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Dane kontaktowe z dokumentu klientki + trzy powody, żeby napisać. */
export function ContactDetails({ className, reasons = true }: { className?: string; reasons?: boolean }) {
  return (
    <div className={cn("", className)}>
      {reasons ? (
        <ul className="flex flex-col gap-3">
          {contact.reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3 text-[0.9375rem] text-brand-900/90">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                <Check className="size-3" aria-hidden />
              </span>
              {reason}
            </li>
          ))}
        </ul>
      ) : null}

      <address className={cn("flex flex-col gap-4 not-italic", reasons && "mt-10")}>
        <p className="font-display text-[1.3rem] text-ink">{site.owner}</p>
        <a
          href={`tel:${site.phoneHref}`}
          className="focus-ring flex items-center gap-3 rounded-sm text-[1.0625rem] font-semibold text-brand-900 transition-colors hover:text-brand-600"
        >
          <Phone className="size-4 text-brand-500" aria-hidden />
          {site.phone}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="focus-ring flex items-center gap-3 rounded-sm text-[1.0625rem] font-semibold break-all text-brand-900 transition-colors hover:text-brand-600"
        >
          <Mail className="size-4 shrink-0 text-brand-500" aria-hidden />
          {site.email}
        </a>
        <p className="flex items-center gap-3 text-[0.9375rem] text-brand-800">
          <Globe className="size-4 text-brand-500" aria-hidden />
          {site.domainLabel}
        </p>
      </address>

      <dl className="mt-6 flex flex-col gap-1.5 text-caption text-ink-muted">
        <div className="flex gap-2">
          <dt className="font-semibold">NIP</dt>
          <dd>{site.nip}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold">REGON</dt>
          <dd>{site.regon}</dd>
        </div>
      </dl>

      <div className="mt-8 border-t border-brand-100 pt-7">
        <p className="t-label text-brand-600">Media społecznościowe</p>
        <SocialLinks className="mt-4" />
      </div>
    </div>
  );
}
