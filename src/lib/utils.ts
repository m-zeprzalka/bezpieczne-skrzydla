import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * `tailwind-merge` musi znać własne klasy skali typograficznej (`text-h2`,
 * `text-lead`…), inaczej traktuje je jak kolory tekstu i usuwa przy łączeniu
 * z `text-ink`. Lista odpowiada tokenom `--text-*` z `globals.css`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "h1",
            "h2",
            "h3",
            "h4",
            "lead",
            "body",
            "body-sm",
            "small",
            "caption",
            "label",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
