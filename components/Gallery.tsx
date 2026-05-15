"use client";

import Image from "next/image";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const TILES = [
  { src: IMG.gal1, label: "Interior" },
  { src: IMG.gal2, label: "Detalle" },
  { src: IMG.gal3, label: "Mesa privada" },
  { src: IMG.gal4, label: "Bienestar" },
  { src: IMG.gal5, label: "Celebracion" },
  { src: IMG.gal6, label: "Atmosfera" },
];

// Desktop placement — asymmetric 12-col, 3 rows. No empty gaps.
// Row 1: A(5x2) | B(7x1)
// Row 2: A(cont) | C(4x1) | D(3x1)
// Row 3: E(5x1) | F(7x1)
const PLACEMENT = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-5",
  "md:col-span-7",
];

export function Gallery() {
  return (
    <section id="galeria" className="section-y bg-neutral">
      <div className="mx-auto max-w-page page-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Left: title column */}
          <div className="md:col-span-4 md:sticky md:top-28">
            <Reveal>
              <p className="eyebrow">Galeria</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-[40px] md:text-[52px] leading-[1.05] text-primary text-balance">
                Momentos que<br />se sienten distintos
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-on-surface-muted text-[15px] leading-relaxed max-w-sm">
                Una mirada al ambiente, los detalles y la sensación de estar aquí.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 h-px w-12 bg-brass-soft" />
            </Reveal>
          </div>

          {/* Right: editorial mosaic */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {TILES.map((t, i) => (
              <Reveal
                key={t.label}
                delay={0.08 + i * 0.06}
                className={`group relative overflow-hidden rounded-lg bg-surface-muted ${PLACEMENT[i]}`}
              >
                <Image
                  src={t.src}
                  alt={t.label}
                  fill
                  sizes="(min-width: 768px) 40vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-on-primary/95">
                    {t.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
