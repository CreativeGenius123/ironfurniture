import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CollectionSlider } from "@/components/CollectionSlider";
import logo from "@/assets/iron-logo.svg";
import hero from "@/assets/hero.jpg";
import c1a from "@/assets/c1-a.jpg";
import c1b from "@/assets/c1-b.jpg";
import c2a from "@/assets/c2-a.jpg";
import c2b from "@/assets/c2-b.jpg";
import c3a from "@/assets/c3-a.jpg";
import c3b from "@/assets/c3-b.jpg";
import c4a from "@/assets/c4-a.jpg";
import c4b from "@/assets/c4-b.jpg";
import c5a from "@/assets/c5-a.jpg";
import c5b from "@/assets/c5-b.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iron Furniture — Muebles de Autor de Alta Gama" },
      {
        name: "description",
        content:
          "Iron Furniture. Muebles de autor forjados a mano. Cinco colecciones de hierro, mármol y maderas nobles para interiores de excepción.",
      },
      { property: "og:title", content: "Iron Furniture — Muebles de Autor" },
      {
        property: "og:description",
        content: "Piezas únicas en hierro forjado. Colecciones de lujo para interiores y exteriores.",
      },
    ],
  }),
  component: Home,
});

const collections = [
  {
    index: "I",
    title: "Mesa Noir",
    subtitle:
      "Bases de hierro forjado y tapas de mármol calacatta. Mesas que sostienen ceremonias.",
    images: [
      { src: c1a, alt: "Mesa Noir con base de hierro y tapa de mármol" },
      { src: c1b, alt: "Banco de hierro con asiento de cuero" },
    ],
  },
  {
    index: "II",
    title: "Sillón Estructura",
    subtitle:
      "Geometrías escultóricas en hierro negro. Asientos para detenerse y observar.",
    images: [
      { src: c2a, alt: "Sillón escultórico de hierro" },
      { src: c2b, alt: "Par de sillones de hierro con velvet" },
    ],
  },
  {
    index: "III",
    title: "Alcoba",
    subtitle:
      "Camas con dosel y mesas de luz. La intimidad como obra arquitectónica.",
    images: [
      { src: c3a, alt: "Cama con dosel de hierro forjado" },
      { src: c3b, alt: "Mesa de luz con tapa de mármol" },
    ],
  },
  {
    index: "IV",
    title: "Luminaria",
    subtitle:
      "Lámparas y arañas. El hierro como vehículo de la luz.",
    images: [
      { src: c4a, alt: "Lámpara escultórica de hierro" },
      { src: c4b, alt: "Araña de hierro con cristales" },
    ],
  },
  {
    index: "V",
    title: "Jardín",
    subtitle:
      "Piezas de exterior. Hierro tratado para resistir el paso del tiempo.",
    images: [
      { src: c5a, alt: "Banco de jardín de hierro" },
      { src: c5b, alt: "Pérgola de hierro forjado" },
    ],
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Showroom Iron Furniture"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 vignette" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <img
            src={logo}
            alt="Iron Furniture monograma"
            width={140}
            height={140}
            className="invert opacity-95 mb-10 w-24 md:w-32"
          />
          <p className="text-[11px] md:text-xs tracking-luxury uppercase text-gold mb-6">
            Muebles de Autor · Edición Limitada
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-balance leading-[0.95]">
            IRON FURNITURE
          </h1>
          <div className="gold-line w-32 mt-10" />
          <p className="text-muted-foreground mt-8 max-w-2xl text-lg md:text-xl text-balance">
            Iron Furniture nace de la obsesión por crear piezas con alma propia,<br />
            donde el diseño, la materia y la visión de autor se unen para desafiar lo efímero y dejar una huella permanente en cada espacio.
          </p>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-luxury uppercase text-muted-foreground animate-pulse">
            Descubrir ↓
          </div>
        </div>
      </section>

      {/* Collections intro */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-8 text-center">
        <p className="text-[11px] tracking-luxury uppercase text-gold mb-4">
          Cinco Colecciones
        </p>
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto text-balance">
          Una obra dividida en cinco capítulos
        </h2>
      </section>

      {collections.map((c) => (
        <CollectionSlider key={c.index} {...c} />
      ))}

      <SiteFooter />
    </div>
  );
}
