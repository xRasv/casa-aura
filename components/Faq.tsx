"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Como reservo?",
    a: "Puedes reservar escribiendonos por WhatsApp, eligiendo la experiencia o fecha que prefieras. Te confirmamos disponibilidad, detalles y los siguientes pasos para asegurar tu lugar.",
  },
  {
    q: "Puedo cotizar un evento privado?",
    a: "Diseñamos paquetes privados según ocasión, número de invitados y momento del día. Comparte tu idea y te enviamos opciones a la medida con tiempos y servicios incluidos.",
  },
  {
    q: "Que incluye cada experiencia?",
    a: "Cada experiencia detalla el espacio, duración, servicios incluidos y opciones premium. Recibirás un resumen claro antes de confirmar para que no haya sorpresas.",
  },
  {
    q: "Se requiere anticipo?",
    a: "Para asegurar la fecha solicitamos un anticipo simbólico que se aplica al total final. Te indicamos el monto y métodos al momento de reservar.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="bg-neutral relative overflow-hidden">
      <div className="mx-auto max-w-page page-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start py-24 md:py-32">
          {/* LEFT — content */}
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Antes de reservar</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-[40px] md:text-[56px] leading-[1.02] text-primary tracking-tight">
                Preguntas frecuentes
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-on-surface-muted text-[15px] leading-relaxed max-w-md">
                Resuelve las dudas principales antes de escribirnos o confirmar tu fecha.
              </p>
            </Reveal>

            {/* Accordion */}
            <div className="mt-12 md:mt-14">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <Reveal key={f.q} delay={0.04 + i * 0.04}>
                    <div
                      className={`relative border-t border-outline/60 ${
                        i === FAQS.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:py-7 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`font-serif italic text-[14px] transition-colors ${
                            isOpen ? "text-secondary" : "text-tertiary"
                          }`}
                        >
                          {num}
                        </span>
                        <span
                          className={`text-[17px] md:text-[19px] font-medium tracking-tight transition-colors leading-snug ${
                            isOpen ? "text-primary" : "text-on-surface group-hover:text-primary"
                          }`}
                        >
                          {f.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className={`grid place-items-center h-9 w-9 rounded-full border transition-colors ${
                            isOpen
                              ? "bg-primary border-primary text-on-primary"
                              : "border-outline text-tertiary group-hover:border-primary group-hover:text-primary"
                          }`}
                        >
                          <Plus className="h-4 w-4" strokeWidth={1.5} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-[auto_1fr_auto] gap-5 pb-7 md:pb-8">
                              <span className="w-[14px]" />
                              <p className="text-[15px] text-on-surface-muted leading-[1.7] max-w-[560px]">
                                {f.a}
                              </p>
                              <span className="w-9" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="https://wa.me/50255551234"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-md bg-primary px-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-inverse"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                  Hablar por WhatsApp
                </a>
                <a
                  href="#cta"
                  className="text-[13px] font-semibold text-primary tracking-wide hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                >
                  Ver todas las preguntas
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — image card */}
          <Reveal delay={0.2} className="md:col-span-5 md:sticky md:top-28">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-muted">
                <Image
                  src={IMG.faq}
                  alt="Detalle material"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>

              {/* Floating info chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-surface border border-outline/60 rounded-lg p-5 max-w-[260px] shadow-[0_30px_60px_-20px_rgba(30,27,23,0.18)]"
              >
                <p className="font-serif text-[18px] text-primary leading-snug">
                  ¿Necesitas algo más específico?
                </p>
                <p className="mt-2 text-[13px] text-on-surface-muted leading-relaxed">
                  Escribenos directo y te respondemos en minutos.
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
