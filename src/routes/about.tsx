import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import founder from "@/assets/founder.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "El Atelier — Iron Furniture" },
      {
        name: "description",
        content:
          "Conozca a ERIC ARRIOLA, fundador de Iron Furniture, y la visión que transformó acero y aluminio en diseño de autor.",
      },
      { property: "og:title", content: "El Atelier — Iron Furniture" },
      {
        property: "og:description",
        content: "La historia del fundador y la filosofía detrás de Iron Furniture.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">El Atelier</p>
          <h1 className="font-display text-5xl md:text-7xl text-balance">
            La visión detrás del diseño
          </h1>
          <div className="gold-line w-24 mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-card">
              <img
                src={founder}
                alt="ERIC ARRIOLA, fundador de Iron Furniture"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mt-4">
              ERIC ARRIOLA · Fundador & Diseñador
            </p>
          </div>

          <div className="space-y-8 lg:pt-10">
            <p className="text-[11px] tracking-luxury uppercase text-gold">
              Acero, aluminio y creatividad
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              "La materia prima se convierte en identidad."
            </h2>
            <div className="gold-line w-16" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Desde humildes comienzos en 2019, ERIC ARRIOLA transformó una visión nacida entre
                acero, aluminio y creatividad en Iron Furniture, una firma de diseño de
                autor donde la materia prima se convierte en identidad.
              </p>
              <p>
                Emprendedor por naturaleza, innovador incansable y pionero en el desarrollo
                de mobiliario de exterior, construyó un camino propio fusionando ingeniería,
                estética y carácter. Cada línea, cada estructura y cada creación reflejan
                una filosofía orientada a la permanencia, la funcionalidad y la elegancia
                contemporánea.
              </p>
              <p>
                Con más de medio centenar de modelos registrados y desarrollos patentados,
                su trayectoria representa la convicción de que las grandes industrias también
                pueden nacer desde un taller, una idea y la determinación de alguien dispuesto
                a desafiar los límites del diseño.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                ["2019", "Fundación"],
                ["50+", "Modelos registrados"],
                ["1/1", "Piezas unicas"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl md:text-4xl text-gold">{n}</dt>
                  <dd className="text-[11px] tracking-luxury uppercase text-muted-foreground mt-2">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
