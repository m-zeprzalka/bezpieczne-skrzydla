import type { SVGProps } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.92 3.77-3.92 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export const socials = [
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
] as const;

/** Rząd ikon społecznościowych — wspólny dla stopki i strony kontaktu. */
export function SocialLinks({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${site.name} na ${label}`}
            className={cn(
              "grid size-11 place-items-center rounded-full border transition-colors duration-300",
              tone === "light"
                ? "focus-ring border-brand-200 text-brand-700 hover:border-brand-700 hover:bg-brand-700 hover:text-white"
                : "focus-ring-dark border-white/15 text-brand-200 hover:border-brand-300 hover:bg-brand-300 hover:text-brand-950",
            )}
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
