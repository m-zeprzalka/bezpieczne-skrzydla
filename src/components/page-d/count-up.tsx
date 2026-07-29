"use client";

import * as React from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  motion,
} from "motion/react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Liczba dobiegająca do wartości docelowej po wejściu w kadr.
 * Pełna wartość zostaje w `aria-label`, żeby czytnik ekranu nie odczytywał
 * kolejnych klatek animacji.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const progress = useMotionValue(reduce ? value : 0);
  const display = useTransform(progress, (v) =>
    Math.round(v).toLocaleString("pl-PL"),
  );

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      progress.set(value);
      return;
    }
    const controls = animate(progress, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, progress, value]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${value.toLocaleString("pl-PL")}${suffix}`}
    >
      <span aria-hidden>
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </span>
    </span>
  );
}
