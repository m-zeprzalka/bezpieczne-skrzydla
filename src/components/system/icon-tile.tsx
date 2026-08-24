import * as React from "react";

import { cn } from "@/lib/utils";

/** Kafelek z ikoną — stały rozmiar i ton, żeby ikony nie „pływały”. */
export function IconTile({
  children,
  className,
  tone = "tint",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "tint" | "outline" | "solid" | "inverse" | "foundation" | "sand";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-xl [&_svg]:shrink-0",
        size === "sm" && "size-9 rounded-lg [&_svg]:size-4",
        size === "md" && "size-10 [&_svg]:size-[1.1rem]",
        size === "lg" && "size-12 rounded-xl [&_svg]:size-5",
        tone === "tint" && "bg-brand-50 text-brand-700",
        tone === "outline" && "border border-brand-200 bg-white text-brand-700",
        tone === "solid" && "bg-brand-700 text-white",
        tone === "inverse" && "bg-white/10 text-brand-200",
        tone === "foundation" && "bg-foundation-100 text-foundation-700",
        tone === "sand" && "bg-sand-100 text-sand-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
