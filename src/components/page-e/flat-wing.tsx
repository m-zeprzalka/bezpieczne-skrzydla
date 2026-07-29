import { cn } from "@/lib/utils";

/*
 * Płaska wersja sygnetu: sześć piór na skrzydło, jednolite wypełnienia,
 * zero gradientów i zero ruchu. Kształt jest ten sam co w wariancie D, ale
 * uproszczony do trzech tonów — w minimalizmie liczy się sylwetka, nie faktura.
 */

const VIEW = { w: 640, h: 360 };
const CENTER_X = VIEW.w / 2;

type Point = { x: number; y: number };

type Row = {
  count: number;
  arc: [Point, Point, Point];
  dirFrom: number;
  dirTo: number;
  lengthFrom: number;
  lengthTo: number;
  widthFrom: number;
  widthTo: number;
  tone: 0 | 1 | 2;
};

const ROWS: Row[] = [
  {
    count: 5,
    arc: [
      { x: 300, y: 300 },
      { x: 252, y: 320 },
      { x: 204, y: 300 },
    ],
    dirFrom: -88,
    dirTo: -144,
    lengthFrom: 100,
    lengthTo: 198,
    widthFrom: 27,
    widthTo: 39,
    tone: 0,
  },
  {
    count: 4,
    arc: [
      { x: 294, y: 288 },
      { x: 254, y: 306 },
      { x: 214, y: 290 },
    ],
    dirFrom: -86,
    dirTo: -136,
    lengthFrom: 78,
    lengthTo: 150,
    widthFrom: 23,
    widthTo: 33,
    tone: 1,
  },
  {
    count: 3,
    arc: [
      { x: 288, y: 278 },
      { x: 258, y: 292 },
      { x: 228, y: 280 },
    ],
    dirFrom: -84,
    dirTo: -126,
    lengthFrom: 54,
    lengthTo: 98,
    widthFrom: 19,
    widthTo: 26,
    tone: 2,
  },
];

const TONES = ["var(--brand-300)", "var(--brand-500)", "var(--brand-700)"];

function quadAt([a, b, c]: [Point, Point, Point], u: number): Point {
  const m = 1 - u;
  return {
    x: m * m * a.x + 2 * m * u * b.x + u * u * c.x,
    y: m * m * a.y + 2 * m * u * b.y + u * u * c.y,
  };
}

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;

function featherPath(row: Row, index: number): string {
  const u = row.count > 1 ? index / (row.count - 1) : 0;

  const base = quadAt(row.arc, u);
  const rad = (lerp(row.dirFrom, row.dirTo, u) * Math.PI) / 180;
  const length = lerp(row.lengthFrom, row.lengthTo, u);
  const halfWidth = lerp(row.widthFrom, row.widthTo, u);

  const tip = {
    x: base.x + Math.cos(rad) * length,
    y: base.y + Math.sin(rad) * length,
  };
  const belly = {
    x: base.x + Math.cos(rad) * length * 0.42,
    y: base.y + Math.sin(rad) * length * 0.42,
  };

  const perp = rad - Math.PI / 2;
  const px = Math.cos(perp);
  const py = Math.sin(perp);

  const c1 = { x: belly.x + px * halfWidth, y: belly.y + py * halfWidth };
  const c2 = {
    x: belly.x - px * halfWidth * 0.6,
    y: belly.y - py * halfWidth * 0.6,
  };

  const f = (n: number) => n.toFixed(1);
  return `M ${f(base.x)} ${f(base.y)} Q ${f(c1.x)} ${f(c1.y)} ${f(tip.x)} ${f(tip.y)} Q ${f(c2.x)} ${f(c2.y)} ${f(base.x)} ${f(base.y)} Z`;
}

const FEATHERS = ROWS.flatMap((row, r) =>
  Array.from({ length: row.count }, (_, i) => ({
    d: featherPath(row, i),
    tone: row.tone,
    key: `${r}-${i}`,
  })),
);

export function FlatWing({ className }: { className?: string }) {
  const wing = FEATHERS.map((f) => (
    <path key={f.key} d={f.d} fill={TONES[f.tone]} />
  ));

  return (
    <svg
      viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <g>{wing}</g>
      {/* drugie skrzydło jako odbicie — symetria bez duplikowania geometrii */}
      <g transform={`translate(${VIEW.w} 0) scale(-1 1)`}>{wing}</g>
      <circle cx={CENTER_X} cy="286" r="16" fill="var(--brand-700)" />
    </svg>
  );
}
