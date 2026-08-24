import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Przycisk — jeden komponent dla całej witryny.
 *
 * Warianty marki (`brand`, `brand-soft`, `inverse`, `outline-brand`,
 * `ghost-brand`) mają zawsze kształt pastylki; warianty shadcn zostają dla
 * elementów pomocniczych (arkusze, okna dialogowe). Rozmiary `lg` i `xl`
 * spełniają minimalny cel dotyku 44 px.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out-expo outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",

        /* — warianty marki — */
        brand:
          "rounded-full bg-brand-700 font-semibold text-brand-50 shadow-lift hover:bg-brand-800 hover:shadow-lift-lg",
        "brand-soft":
          "rounded-full bg-brand-100 font-semibold text-brand-900 hover:bg-brand-200",
        inverse:
          "rounded-full bg-brand-400 font-semibold text-brand-950 hover:bg-brand-300 focus-visible:ring-brand-300/50 focus-visible:ring-offset-brand-950",
        "outline-brand":
          "rounded-full border-brand-300 bg-white font-semibold text-brand-900 hover:border-brand-500 hover:bg-brand-50",
        "outline-inverse":
          "rounded-full border-white/25 bg-transparent font-semibold text-white hover:border-white/50 hover:bg-white/10 focus-visible:ring-brand-300/50 focus-visible:ring-offset-brand-950",
        "ghost-brand":
          "rounded-full font-semibold text-brand-800 hover:bg-brand-50 hover:text-brand-900",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-10 gap-2 px-4 text-[0.875rem] has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        lg: "h-11 gap-2 px-5 text-[0.9rem] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xl: "h-[3.25rem] gap-2.5 px-7 text-[0.95rem] has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6 [&_svg:not([class*='size-'])]:size-[1.05rem]",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)]",
        "icon-lg": "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
