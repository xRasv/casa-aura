"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Ritual de bienestar",
    price: "Desde Q450",
    meta: "Reserva previa",
    img: IMG.feat1,
  },
  {
    title: "Cena privada",
    price: "Desde Q1,250",
    meta: "2-8 personas",
    img: IMG.feat2,
  },
  {
    title: "Salon premium",
    price: "Desde Q2,200",
    meta: "Reserva previa",
    img: IMG.feat3,
  },
  {
    title: "Evento intimo",
    price: "Paquetes privados",
    meta: "2-22 personas",
    img: IMG.feat4,
  },
];

export function Featured() {
  return (
    <section id="experiencias" className="section-y bg-primary text-on-primary relative overflow-hidden">
      <div className="mx-auto max-w-page page-x">
        <Reveal>
          <p className="eyebrow text-brass-soft text-center">Casa Aura</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-serif text-[40px] md:text-[56px] leading-tight text-on-primary text-center">
            Experiencias destacadas
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 mx-auto max-w-xl text-center text-on-primary/70 text-[15px]">
            Elige un servicio, paquete o momento especial y reserva con acompañamiento personalizado.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={0.15 + i * 0.08}>
              <article className="group relative aspect-[4/5] sm:aspect-[3/4.4] overflow-hidden rounded-lg">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-[22px] md:text-[24px] text-on-primary leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-on-primary/85">{it.price}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brass-soft">
                    {it.meta}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <a
              href="#cta"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-on-primary px-6 text-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-brass-soft hover:text-primary"
            >
              Ver experiencias
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
