"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { IMG } from "./images";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] md:min-h-[680px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={IMG.hero}
          alt="Interior Casa Aura"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient — left for legibility, bottom for grounding */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/55 to-transparent" />

      <div className="relative z-10 mx-auto max-w-page page-x h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-[640px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-serif text-on-primary text-[40px] xs:text-[44px] sm:text-[60px] md:text-[76px] leading-[0.98] tracking-tight text-balance"
          >
            Reserva una<br />experiencia<br />memorable
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            style={{ transformOrigin: "left" }}
            className="mt-7 h-px w-16 bg-brass-soft"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="mt-5 max-w-md text-on-primary/85 text-[15px] md:text-[16px] leading-relaxed"
          >
            Espacios, servicios y momentos diseñados<br className="hidden md:block" />
            para sentirse especiales desde el primer contacto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-olive-soft px-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-primary"
            >
              Reservar ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#cta"
              className="group inline-flex h-12 items-center gap-2 rounded-md border border-on-primary/50 bg-transparent px-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-on-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll affordance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-9 w-px bg-on-primary/60 mx-auto" />
      </motion.div>
    </section>
  );
}
