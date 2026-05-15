"use client";

import Image from "next/image";
import { Leaf, UserRound, CalendarCheck } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const VALUES = [
  {
    icon: Leaf,
    title: "Ambiente cuidado",
    body: "Espacios diseñados para inspirar tranquilidad, conexión y bienestar.",
  },
  {
    icon: UserRound,
    title: "Atencion personal",
    body: "Te acompañamos en cada paso para que tu visita sea como en casa.",
  },
  {
    icon: CalendarCheck,
    title: "Reserva simple",
    body: "Un proceso agil y claro para que reservar tan facil como llegar.",
  },
];

export function Experience() {
  return (
    <section className="section-y bg-neutral relative">
      <div className="mx-auto max-w-page page-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Left copy */}
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">Lo que nos hace especiales</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-[40px] md:text-[52px] leading-[1.05] text-primary text-balance">
              Diseñado para<br />sentirse especial
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-on-surface-muted text-[15.5px] leading-relaxed max-w-sm">
              Cada detalle acompaña la experiencia: el ambiente, la atención y la facilidad de reservar.
            </p>
          </Reveal>
        </div>

        {/* Center image */}
        <Reveal delay={0.15} className="md:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-muted">
            <Image
              src={IMG.experience}
              alt="Interior cuidado"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Right values */}
        <div className="md:col-span-4 relative">
          <div className="absolute left-0 top-2 bottom-2 w-px hairline hidden md:block" />
          <ul className="space-y-9 md:pl-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.2 + i * 0.08} as="li">
                <div className="flex items-start gap-4">
                  <div className="mt-1 grid h-9 w-9 place-items-center rounded-full border border-outline text-olive-soft">
                    <v.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[22px] text-primary">{v.title}</h3>
                    <p className="mt-1.5 text-[14.5px] text-on-surface-muted leading-relaxed max-w-[260px]">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
