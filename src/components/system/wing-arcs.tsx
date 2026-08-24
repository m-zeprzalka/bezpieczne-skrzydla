"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const ORIGIN = { x: 400, y: 372 };

/**
 * Pojedyncze „pióro”: łuk od nasady skrzydła do lotki. Wachlarz rozpina się
 * od pionu (t = 0) do niemal poziomu (t = 1); `side` odbija go względem osi.
 */
function feather(index: number, side: 1 | -1, count: number) {
  const t = count > 1 ? index / (count - 1) : 0;

  const baseDeg = -84 - t * 64;
  const deg = side === -1 ? baseDeg : 180 - baseDeg;
  const rad = (deg * Math.PI) / 180;
  const length = 344 - t * 96;

  const tipX = ORIGIN.x + Math.cos(rad) * length;
  const tipY = ORIGIN.y + Math.sin(rad) * length;

  const midX = (ORIGIN.x + tipX) / 2;
  const midY = (ORIGIN.y + tipY) / 2;
  const bow = 58 + t * 42;
  const perp = rad + (Math.PI / 2) * side;
  const ctrlX = midX + Math.cos(perp) * bow;
  const ctrlY = midY + Math.sin(perp) * bow;

  return `M ${ORIGIN.x} ${ORIGIN.y} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`;
}

type WingArcsProps = {
  className?: string;
  count?: number;
  animate?: boolean;
  tone?: "light" | "dark";
};

/**
 * Abstrakcyjne skrzydło zbudowane z linii — wizualny podpis marki,
 * wyprowadzony z lotek w logo. Używane jako tło, nigdy jako treść.
 */
export function WingArcs({
  className,
  count = 9,
  animate = true,
  tone = "light",
}: WingArcsProps) {
  const id = React.useId();
  const paths = React.useMemo(() => {
    const left = Array.from({ length: count }, (_, i) => feather(i, -1, count));
    const right = Array.from({ length: count }, (_, i) => feather(i, 1, count));
    return [...left, ...right];
  }, [count]);

  return (
    <svg
      viewBox="0 0 800 460"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="0" y2="0">
          {tone === "light" ? (
            <>
              <stop offset="0%" stopColor="var(--brand-600)" stopOpacity="0.55" />
              <stop offset="55%" stopColor="var(--brand-400)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--brand-300)" stopOpacity="0.1" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="var(--brand-300)" stopOpacity="0.5" />
              <stop offset="55%" stopColor="var(--brand-400)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </>
          )}
        </linearGradient>
      </defs>

      <g stroke={`url(#${id})`} strokeLinecap="round" fill="none">
        {paths.map((d, i) =>
          animate ? (
            <motion.path
              key={i}
              d={d}
              strokeWidth={i % 3 === 0 ? 1.6 : 1}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 1.6,
                delay: 0.1 + (i % count) * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ) : (
            <path key={i} d={d} strokeWidth={i % 3 === 0 ? 1.6 : 1} />
          ),
        )}
      </g>
    </svg>
  );
}

/** Wąski, poziomy ornament — rozdziela bloki bez ciężkiej kreski. */
export function WingRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-3", className)}
    >
      <span className="rule-gradient h-px w-16 sm:w-28" />
      <svg viewBox="0 0 24 24" fill="none" className="size-3.5 text-brand-400">
        <path
          d="M12 3.5c-2.6 3.4-5.8 5.3-9 5.9 3.2 2.3 6.4 5.4 9 11.1 2.6-5.7 5.8-8.8 9-11.1-3.2-.6-6.4-2.5-9-5.9Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
      <span className="rule-gradient h-px w-16 sm:w-28" />
    </div>
  );
}
