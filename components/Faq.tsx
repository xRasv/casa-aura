"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Como reservo?",
    a: "Puedes reservar escribiendonos por WhatsApp, eligiendo la experiencia o fecha que prefieras. Te confirmamos disponibilidad, detalles y los siguientes pasos para asegurar tu lugar.",
  },
  { q: "Puedo cotizar un evento privado?", a: "Si. Diseñamos paquetes privados según ocasión, número de invitados y momento del dia. Comparte tu idea y te enviamos opciones a la medida." },
  { q: "Que incluye cada experiencia?", a: "Cada experiencia detalla el espacio, duracion, servicios incluidos y opciones premium. Recibiras un resumen claro antes de confirmar." },
  { q: "Se requiere anticipo?", a: "Para asegurar la fecha solicitamos un anticipo simbolico, que se aplica al total final. Te indicamos el monto y metodos al momento de reservar." },
];

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="bg-neutral">
      <div className="mx-auto max-w-page page-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14 items-stretch">
          {/* LEFT: content panel */}
          <div className="section-y md:pr-6">
            <Reveal>
              <p className="eyebrow">Casa Aura</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-[40px] md:text-[48px] leading-[1.05] text-primary">
                Antes de reservar
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-on-surface-muted text-[14.5px] leading-relaxed max-w-[420px]">
                Resuelve las dudas principales antes de escribirnos o confirmar tu fecha.
              </p>
            </Reveal>

            <div className="mt-9 border-t hairline">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={0.04 + i * 0.04}>
                    <div className="border-b hairline">
                      <button
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between gap-6 py-4 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-[15px] md:text-[15.5px] transition-colors ${
                            isOpen ? "text-primary font-medium" : "text-on-surface"
                          }`}
                        >
                          {f.q}
                        </span>
                        <span className="text-tertiary group-hover:text-primary transition-colors shrink-0">
                          {isOpen ? (
                            <Minus className="h-[14px] w-[14px]" strokeWidth={1.6} />
                          ) : (
                            <Plus className="h-[14px] w-[14px]" strokeWidth={1.6} />
                          )}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pr-8 text-[13.5px] text-on-surface-muted leading-[1.65] max-w-[480px]">
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <a
                href="#cta"
                className="mt-9 group inline-flex h-11 items-center gap-2 rounded-md bg-primary pl-2 pr-5 text-on-primary text-[13px] font-semibold tracking-wide transition-colors hover:bg-inverse"
              >
                <span className="grid place-items-center h-7 w-7 rounded-full bg-on-primary/15">
                  <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
                Hablar por WhatsApp
              </a>
            </Reveal>
          </div>

          {/* RIGHT: flush full-height image */}
          <Reveal delay={0.15} className="relative w-full min-h-[420px] md:min-h-0">
            <div className="absolute inset-0 overflow-hidden rounded-lg md:rounded-none">
              <Image
                src={IMG.faq}
                alt="Detalle material"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
