import { useMemo } from "react";

type Variant = "embers" | "water" | "snow" | "embers+snow" | "embers+water";

/** Lightweight CSS-only atmospheric layer. Sits behind content, pointer-events-none. */
export function AmbientFX({ variant = "embers", intensity = 1 }: { variant?: Variant; intensity?: number }) {
  const layers = useMemo(() => {
    const has = (k: string) => variant.includes(k);
    return {
      embers: has("embers") ? Array.from({ length: Math.round(22 * intensity) }) : [],
      ripples: has("water") ? Array.from({ length: Math.round(6 * intensity) }) : [],
      snow: has("snow") ? Array.from({ length: Math.round(28 * intensity) }) : [],
    };
  }, [variant, intensity]);

  // Deterministic pseudo-random based on index — no hydration mismatch
  const rand = (i: number, salt = 0) => {
    const x = Math.sin(i * 9301 + salt * 49297) * 233280;
    return x - Math.floor(x);
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft brand glow blobs */}
      {variant.includes("embers") && (
        <div
          className="flame-breathe absolute -bottom-32 -left-24 w-[42rem] h-[42rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.22 40 / 0.35), transparent 65%)" }}
        />
      )}
      {variant.includes("water") && (
        <div
          className="ice-shimmer absolute -top-32 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.16 235 / 0.32), transparent 65%)" }}
        />
      )}
      {variant.includes("snow") && (
        <div
          className="ice-shimmer absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.9 0.05 230 / 0.18), transparent 65%)" }}
        />
      )}

      {/* Embers */}
      {layers.embers.map((_, i) => {
        const left = rand(i, 1) * 100;
        const drift = (rand(i, 2) - 0.5) * 120;
        const dur = 9 + rand(i, 3) * 10;
        const delay = -rand(i, 4) * dur;
        const size = 2 + rand(i, 5) * 4;
        return (
          <span
            key={`e${i}`}
            className="ember"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              ["--drift" as string]: `${drift}px`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Water ripples */}
      {layers.ripples.map((_, i) => {
        const top = rand(i, 11) * 90;
        const left = rand(i, 12) * 90;
        const dur = 6 + rand(i, 13) * 6;
        const delay = -rand(i, 14) * dur;
        const size = 140 + rand(i, 15) * 220;
        return (
          <span
            key={`r${i}`}
            className="ripple"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Snow */}
      {layers.snow.map((_, i) => {
        const left = rand(i, 21) * 100;
        const sway = (rand(i, 22) - 0.5) * 200;
        const dur = 12 + rand(i, 23) * 14;
        const delay = -rand(i, 24) * dur;
        const size = 2 + rand(i, 25) * 3;
        return (
          <span
            key={`s${i}`}
            className="snow"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              ["--sway" as string]: `${sway}px`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
