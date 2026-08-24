import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Kontener witryny: 1216 px, marginesy boczne 20 / 32 / 40 px.
 * Wszystkie sekcje układają treść w tej samej szpalcie.
 */
export const CONTAINER = "mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(CONTAINER, className)} {...props} />;
}

/** Wąska szpalta czytelnicza — artykuły, dokumenty. */
export function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-prose px-5 sm:px-8", className)}
      {...props}
    />
  );
}
