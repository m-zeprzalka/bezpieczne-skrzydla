"use client";

import { motion, useReducedMotion, type MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

const VIEW = { w: 1600, h: 760 };
const CENTER_X = VIEW.w / 2;

type Point = { x: number; y: number };

type LayerSpec = {
  count: number;
  /** Nasada skrzydła: pióra wyrastają wzdłuż tego łuku, nie z jednego punktu. */
  arc: [Point, Point, Point];
  /** Kierunek pióra na początku i na końcu łuku (0° = w prawo, −90° = w górę). */
  dirFrom: number;
  dirTo: number;
  lengthFrom: number;
  lengthTo: number;
  widthFrom: number;
  widthTo: number;
};

/*
 * Kluczowa decyzja: nasady piór rozkładamy wzdłuż krótkiego łuku, a nie
 * w jednym punkcie. Pióra wychodzące z jednego miejsca dają rozbłysk słońca,
 * a nie skrzydło — to właśnie odróżnia tę formę od zwykłego wachlarza.
 *
 * Trzy plany odpowiadają budowie skrzydła: długie lotki z tyłu, krótsze
 * sterówki w środku i gęste pokrywy z przodu.
 */
const LAYERS: LayerSpec[] = [
  {
    count: 11,
    arc: [
      { x: 760, y: 606 },
      { x: 640, y: 652 },
      { x: 520, y: 608 },
    ],
    dirFrom: -84,
    dirTo: -142,
    lengthFrom: 172,
    lengthTo: 468,
    widthFrom: 30,
    widthTo: 50,
  },
  {
    count: 9,
    arc: [
      { x: 748, y: 590 },
      { x: 652, y: 626 },
      { x: 556, y: 596 },
    ],
    dirFrom: -82,
    dirTo: -136,
    lengthFrom: 142,
    lengthTo: 360,
    widthFrom: 27,
    widthTo: 43,
  },
  {
    count: 8,
    arc: [
      { x: 736, y: 576 },
      { x: 664, y: 602 },
      { x: 592, y: 582 },
    ],
    dirFrom: -80,
    dirTo: -126,
    lengthFrom: 102,
    lengthTo: 222,
    widthFrom: 24,
    widthTo: 34,
  },
];

function quadAt([a, b, c]: [Point, Point, Point], u: number): Point {
  const m = 1 - u;
  return {
    x: m * m * a.x + 2 * m * u * b.x + u * u * c.x,
    y: m * m * a.y + 2 * m * u * b.y + u * u * c.y,
  };
}

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;

/** Jedno pióro: kształt lancetowaty spięty w nasadzie i w wierzchołku. */
function featherPath(spec: LayerSpec, index: number): string {
  const u = spec.count > 1 ? index / (spec.count - 1) : 0;

  const base = quadAt(spec.arc, u);
  const rad = (lerp(spec.dirFrom, spec.dirTo, u) * Math.PI) / 180;
  const length = lerp(spec.lengthFrom, spec.lengthTo, u);
  const halfWidth = lerp(spec.widthFrom, spec.widthTo, u);

  const tip = {
    x: base.x + Math.cos(rad) * length,
    y: base.y + Math.sin(rad) * length,
  };

  // Brzuch pióra bliżej nasady — ku wierzchołkowi kształt się zwęża
  const belly = {
    x: base.x + Math.cos(rad) * length * 0.42,
    y: base.y + Math.sin(rad) * length * 0.42,
  };

  const perp = rad - Math.PI / 2;
  const px = Math.cos(perp);
  const py = Math.sin(perp);

  const c1 = { x: belly.x + px * halfWidth, y: belly.y + py * halfWidth };
  const c2 = {
    x: belly.x - px * halfWidth * 0.62,
    y: belly.y - py * halfWidth * 0.62,
  };

  const f = (n: number) => n.toFixed(1);
  return `M ${f(base.x)} ${f(base.y)} Q ${f(c1.x)} ${f(c1.y)} ${f(tip.x)} ${f(tip.y)} Q ${f(c2.x)} ${f(c2.y)} ${f(base.x)} ${f(base.y)} Z`;
}

/** Geometria jest deterministyczna — liczymy ją raz przy wczytaniu modułu. */
const WING = LAYERS.map((spec, layer) =>
  Array.from({ length: spec.count }, (_, i) => ({
    d: featherPath(spec, i),
    layer,
    index: i,
  })),
).flat();

const LAYER_STYLE = [
  { fill: "url(#wing-back)", opacity: 0.52 },
  { fill: "url(#wing-mid)", opacity: 0.64 },
  { fill: "url(#wing-front)", opacity: 0.74 },
];

type LuminousWingProps = {
  className?: string;
  /** Wartości parallaksy przekazane z rodzica (ruch kursora). */
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
};

/**
 * Sygnet marki rozwinięty do skali kadru. Rysujemy jedno skrzydło, drugie
 * powstaje przez odbicie całej grupy — dzięki temu symetria jest dokładna,
 * a kodu o połowę mniej. Element dekoracyjny, stąd `aria-hidden`.
 */
export function LuminousWing({
  className,
  parallaxX,
  parallaxY,
}: LuminousWingProps) {
  const reduce = useReducedMotion();

  const feathers = (
    <>
      {WING.map((f) => (
        <motion.path
          key={`${f.layer}-${f.index}`}
          d={f.d}
          fill={LAYER_STYLE[f.layer].fill}
          initial={reduce ? false : { opacity: 0, scale: 0.7 }}
          animate={{ opacity: LAYER_STYLE[f.layer].opacity, scale: 1 }}
          transition={{
            duration: 1.6,
            delay: 0.2 + f.layer * 0.14 + f.index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: `${CENTER_X}px 620px` }}
        />
      ))}
    </>
  );

  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
      style={reduce ? undefined : { x: parallaxX, y: parallaxY }}
    >
      <svg
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        fill="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="wing-back" x1="0.5" y1="0.85" x2="0.5" y2="0.15">
            <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.9" />
            <stop
              offset="55%"
              stopColor="var(--brand-300)"
              stopOpacity="0.55"
            />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="wing-mid" x1="0.5" y1="0.85" x2="0.5" y2="0.2">
            <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.85" />
            <stop offset="55%" stopColor="var(--brand-400)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="wing-front" x1="0.5" y1="0.85" x2="0.5" y2="0.25">
            <stop offset="0%" stopColor="var(--brand-700)" stopOpacity="0.82" />
            <stop
              offset="50%"
              stopColor="var(--brand-500)"
              stopOpacity="0.45"
            />
            <stop
              offset="100%"
              stopColor="var(--brand-300)"
              stopOpacity="0.1"
            />
          </linearGradient>

          <radialGradient id="wing-glow" cx="0.5" cy="0.82" r="0.5">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* światło u nasady — spina obydwa skrzydła w jedną formę */}
        <ellipse
          cx={CENTER_X}
          cy="600"
          rx="360"
          ry="220"
          fill="url(#wing-glow)"
        />

        <g
          className={reduce ? undefined : "animate-breathe"}
          style={{ transformOrigin: "50% 82%" }}
        >
          <g>{feathers}</g>
          {/* odbicie lustrzane względem osi pionowej kadru */}
          <g transform={`translate(${VIEW.w} 0) scale(-1 1)`}>{feathers}</g>
        </g>
      </svg>
    </motion.div>
  );
}
