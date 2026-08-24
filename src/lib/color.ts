/**
 * Konwersja OKLCH → sRGB i kontrast WCAG — do tabel w /design-system.
 * Liczone raz na serwerze; dokładność wystarczająca do audytu (±1 w kanale).
 */

export type Oklch = { l: number; c: number; h: number };

export function oklchToRgb({ l, c, h }: Oklch): [number, number, number] {
  const hr = (h * Math.PI) / 180;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  const L = l_ ** 3;
  const M = m_ ** 3;
  const S = s_ ** 3;

  const r = +4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S;
  const g = -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S;
  const bl = -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S;

  const gamma = (x: number) => {
    const v = Math.max(0, Math.min(1, x));
    return v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
  };

  return [gamma(r), gamma(g), gamma(bl)].map((v) => Math.round(v * 255)) as [number, number, number];
}

export function toHex([r, g, b]: [number, number, number]) {
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

function luminance([r, g, b]: [number, number, number]) {
  const lin = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrast(a: Oklch, b: Oklch) {
  const la = luminance(oklchToRgb(a));
  const lb = luminance(oklchToRgb(b));
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

export function wcagLevel(ratio: number, large = false) {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return large ? "AA (duży tekst)" : "AA — tylko duży tekst / UI";
  return "poniżej progu";
}
