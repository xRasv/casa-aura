"use client";

import Image from "next/image";
import { MapPin, Clock, CalendarCheck, ArrowRight } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="ubicacion" className="section-y bg-neutral">
      <div className="mx-auto max-w-page page-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">Casa Aura</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-[40px] md:text-[52px] leading-[1.05] text-primary">
              Ubicacion y horarios
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-9 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-9 w-9 rounded-full border border-outline text-olive-soft shrink-0">
                  <MapPin className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="text-[15.5px] text-on-surface leading-snug pt-1.5">
                  Zona Viva, Ciudad de Guatemala
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-9 w-9 rounded-full border border-outline text-olive-soft shrink-0">
                  <Clock className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div className="text-[15.5px] text-on-surface leading-snug pt-1">
                  <div>Mar–Sab 10:00–20:00</div>
                  <div>Dom 10:00–16:00</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-9 w-9 rounded-full border border-outline text-olive-soft shrink-0">
                  <CalendarCheck className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <span className="text-[15.5px] text-on-surface leading-snug pt-1.5">
                  Reserva recomendada<br />para fines de semana
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="#"
              className="mt-9 group inline-flex h-12 items-center gap-2 rounded-md bg-olive-soft px-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-primary"
            >
              Abrir mapa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 relative h-[160px] w-full overflow-hidden rounded-lg bg-surface-muted">
              {/* Stylized map: SVG line-art, no logos */}
              <svg
                viewBox="0 0 600 160"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.6" fill="#CDBEAE" />
                  </pattern>
                </defs>
                <rect width="600" height="160" fill="url(#dots)" />
                <path d="M0 110 L240 110 L240 60 L420 60 L420 130 L600 130" fill="none" stroke="#B08A55" strokeWidth="1.2" />
                <path d="M120 0 L120 60 L300 60 L300 160" fill="none" stroke="#CDBEAE" strokeWidth="1" />
                <path d="M0 40 L180 40" fill="none" stroke="#CDBEAE" strokeWidth="1" />
                <circle cx="300" cy="80" r="8" fill="#26352C" />
                <circle cx="300" cy="80" r="3" fill="#F7F0E6" />
              </svg>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-7">
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden rounded-lg bg-surface-muted">
            <Image
              src={IMG.location}
              alt="Entrada Casa Aura"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
