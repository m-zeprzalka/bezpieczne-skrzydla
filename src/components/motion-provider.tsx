"use client";

import { MotionConfig } from "motion/react";

/**
 * `reducedMotion="user"` sprawia, że biblioteka sama pomija animacje
 * przekształceń i układu u osób z włączonym `prefers-reduced-motion`,
 * zostawiając wyłącznie zmiany krycia. To zabezpieczenie na poziomie systemu,
 * niezależne od tego, co pojedynczy komponent poda w propsach.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
