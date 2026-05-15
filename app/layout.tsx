import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Aura — Reserva una experiencia memorable",
  description:
    "Espacios, servicios y momentos diseñados para sentirse especiales desde el primer contacto. Reserva por WhatsApp o agenda tu visita.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="bg-neutral text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
