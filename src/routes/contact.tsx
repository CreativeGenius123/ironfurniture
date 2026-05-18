import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Iron Furniture" },
      {
        name: "description",
        content:
          "Contacte con Iron Furniture por Instagram, WhatsApp o suscríbase al newsletter para acceso anticipado a nuevas colecciones.",
      },
      { property: "og:title", content: "Contacto — Iron Furniture" },
      {
        property: "og:description",
        content: "Instagram, WhatsApp y newsletter de Iron Furniture.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setSent(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full flex-1">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">Contacto</p>
          <h1 className="font-display text-5xl md:text-7xl text-balance">
            Para encargos y consultas
          </h1>
          <div className="gold-line w-24 mx-auto mt-8" />
          <p className="text-muted-foreground mt-8 max-w-xl mx-auto">
            Cada pieza se proyecta en diálogo con su cliente. Le acompañamos desde el
            primer boceto hasta la entrega.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border mb-px">
          <a
            href="https://instagram.com/ironfurniture"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background p-10 md:p-14 hover:bg-card transition-colors"
          >
            <p className="text-[11px] tracking-luxury uppercase text-gold mb-6">01 · Instagram</p>
            <h3 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-gold transition-colors">
              @ironfurniture
            </h3>
            <p className="text-muted-foreground text-sm">
              Archivo visual y piezas disponibles. Mensajes directos respondidos en 24 hs.
            </p>
            <span className="inline-block mt-8 text-[11px] tracking-luxury uppercase text-foreground/70 group-hover:text-gold">
              Seguir →
            </span>
          </a>

          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background p-10 md:p-14 hover:bg-card transition-colors"
          >
            <p className="text-[11px] tracking-luxury uppercase text-gold mb-6">02 · WhatsApp</p>
            <h3 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-gold transition-colors">
              +54 9 11 0000 0000
            </h3>
            <p className="text-muted-foreground text-sm">
              Atención personalizada para encargos, presupuestos y visitas al atelier.
            </p>
            <span className="inline-block mt-8 text-[11px] tracking-luxury uppercase text-foreground/70 group-hover:text-gold">
              Escribir →
            </span>
          </a>
        </div>

        {/* Newsletter */}
        <div className="mt-24 max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">03 · Newsletter</p>
          <h2 className="font-display text-3xl md:text-5xl text-balance">
            Acceso anticipado a nuevas colecciones
          </h2>
          <p className="text-muted-foreground mt-6 mb-10">
            Tres envíos por año. Sin ruido. Solo piezas, procesos y atelier.
          </p>

          {sent ? (
            <p className="text-gold tracking-luxury uppercase text-sm">
              Gracias. Le hemos añadido a nuestra lista.
            </p>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-px bg-border max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Su correo electrónico"
                className="flex-1 bg-background px-5 py-4 text-sm outline-none focus:bg-card placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="bg-gold text-primary-foreground px-8 py-4 text-[11px] tracking-luxury uppercase hover:bg-foreground transition-colors"
              >
                Suscribir
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
