"use client";

import Image from "next/image";
import { MessageCircle, Instagram, Facebook, Phone } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="cta" className="relative w-full overflow-hidden">
      <div className="relative min-h-[640px] md:min-h-[760px] w-full">
        <Image
          src={IMG.finalCta}
          alt="Atardecer Casa Aura"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" />

        <div className="relative z-10 mx-auto max-w-page page-x py-24 md:py-32 flex flex-col justify-center min-h-[640px] md:min-h-[760px]">
          <Reveal>
            <p className="eyebrow text-brass-soft">Casa Aura</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-on-primary text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] tracking-tight max-w-3xl text-balance">
              Tu proxima<br />experiencia<br />empieza aqui
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-md text-on-primary/80 text-[15px] leading-relaxed">
              Escribenos por WhatsApp y recibe disponibilidad, paquetes y una recomendación personalizada.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/50255551234"
                className="group inline-flex h-12 items-center gap-2 rounded-md bg-olive-soft px-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-on-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
              <a
                href="#"
                className="group inline-flex h-12 items-center gap-2 rounded-md border border-on-primary/55 px-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-on-primary hover:text-primary"
              >
                Reservar ahora
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer band */}
      <footer className="relative bg-inverse text-on-primary">
        <div className="mx-auto max-w-page page-x py-8 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-serif italic text-[20px] tracking-tight">Casa Aura</div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[13px] text-on-primary/80">
            <a href="#experiencias" className="hover:text-on-primary transition">Experiencias</a>
            <a href="#galeria" className="hover:text-on-primary transition">Galeria</a>
            <a href="#ubicacion" className="hover:text-on-primary transition">Ubicacion</a>
            <a href="#faq" className="hover:text-on-primary transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-5 text-on-primary/80">
            <a href="tel:+50255551234" className="inline-flex items-center gap-2 text-[13px] hover:text-on-primary transition">
              <Phone className="h-4 w-4" />
              +502 5555 1234
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-on-primary transition">
              <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-on-primary transition">
              <Facebook className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
