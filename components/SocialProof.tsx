"use client";

import Image from "next/image";
import { MessageCircle, Repeat } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

export function SocialProof() {
  return (
    <section className="section-y bg-surface-muted/70">
      <div className="mx-auto max-w-page page-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">Casa Aura</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-[36px] md:text-[44px] leading-[1.1] text-primary text-balance">
              Confianza que se<br />nota antes de llegar
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="mt-10">
              <span className="font-serif text-secondary text-[44px] leading-none">“</span>
              <blockquote className="font-serif text-primary text-[26px] md:text-[30px] leading-[1.25] -mt-3">
                Desde el primer mensaje se sintio cuidado, facil y especial.
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-[13px] text-on-surface-muted">
                <span className="h-px w-7 bg-brass-soft" />
                Mariana G.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2.5 rounded-md bg-surface px-3 py-3 border border-outline/60">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-olive-soft text-on-primary text-[13px] font-semibold">
                  4.9
                </span>
                <span className="text-[12.5px] text-on-surface leading-tight">4.9 promedio</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-md bg-surface px-3 py-3 border border-outline/60">
                <Repeat className="h-4 w-4 text-olive-soft" />
                <span className="text-[12.5px] text-on-surface leading-tight">Clientes recurrentes</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-md bg-surface px-3 py-3 border border-outline/60">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <span className="text-[12.5px] text-on-surface leading-tight">Reservas por WhatsApp</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-7">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg bg-surface-muted">
            <Image
              src={IMG.testimonial}
              alt="Atmósfera Casa Aura"
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
