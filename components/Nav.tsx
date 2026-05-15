"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#experiencias", label: "Experiencias" },
  { href: "#galeria", label: "Galeria" },
  { href: "#ubicacion", label: "Ubicacion" },
  { href: "#faq", label: "FAQ" },
];

export function Nav({ overlay = true }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const dark = overlay && !scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-neutral/90 backdrop-blur-md border-b border-outline/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-page page-x flex h-16 md:h-20 items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`font-serif italic text-[22px] md:text-[26px] tracking-tight transition-colors duration-500 ${
              dark ? "text-on-primary" : "text-primary"
            }`}
          >
            Casa Aura
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] tracking-wide transition-colors duration-500 hover:opacity-70 ${
                  dark ? "text-on-primary/90" : "text-on-surface"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className={`text-[13px] font-semibold tracking-wide px-4 h-10 inline-flex items-center rounded-md border transition-all duration-500 ${
                dark
                  ? "border-on-primary/60 text-on-primary hover:bg-on-primary hover:text-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-on-primary"
              }`}
            >
              Reservar ahora
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden grid place-items-center h-10 w-10 rounded-md transition-colors ${
              dark ? "text-on-primary" : "text-primary"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-neutral pt-20"
          >
            <motion.nav
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-page page-x flex flex-col gap-1 pt-8"
            >
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  className="font-serif text-[34px] text-primary py-3 border-b border-outline/50"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary text-on-primary text-[13px] font-semibold tracking-wide"
              >
                Reservar ahora
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
