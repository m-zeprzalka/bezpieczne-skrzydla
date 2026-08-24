import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Pastylka — etykieta, tag lub plakietka. Bez interakcji (interaktywne
 * pastylki to przyciski `Button` albo chipsy formularza).
 */
const pillVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.8rem] leading-snug font-medium whitespace-nowrap [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        outline: "border-brand-200 bg-white text-brand-800",
        soft: "border-transparent bg-brand-100 text-brand-900",
        solid: "border-transparent bg-brand-700 text-white",
        label:
          "t-label border-transparent bg-brand-700 px-3.5 py-1.5 text-white",
        "label-outline": "t-label border-brand-300 bg-white/80 px-3.5 py-1.5 text-brand-800",
        foundation: "border-foundation-200 bg-foundation-50 text-foundation-900",
        sand: "border-sand-200 bg-sand-50 text-sand-700",
        inverse: "border-white/15 bg-white/10 text-brand-100",
      },
    },
    defaultVariants: { variant: "outline" },
  },
);

export function Pill({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof pillVariants>) {
  return <span className={cn(pillVariants({ variant }), className)} {...props} />;
}

export { pillVariants };
