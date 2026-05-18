import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CollectionSlider } from "@/components/CollectionSlider";
import logo from "@/assets/iron-logo.svg";
import hero from "@/assets/hero.png";

import maldivasSet from "@/assets/maldivas/sofa set.png";
import maldivasSide from "@/assets/maldivas/sofa costado.png";
import maldivasBack from "@/assets/maldivas/sofa costado atras.png";
import maldivasAngle from "@/assets/maldivas/sofa costadoatras 2.png";

import marsellaPortada from "@/assets/marsella/portada.png";
import marsellaSceneOne from "@/assets/marsella/AnyConv.com__1.png";
import marsellaSceneTwo from "@/assets/marsella/AnyConv.com__2.png";
import marsellaDetail from "@/assets/marsella/AnyConv.com__3.png";

import pierrePortada from "@/assets/pierre/portada.jpg";
import pierreSofaDetail from "@/assets/pierre/dna-2-seat-sofa-detail.jpg";
import pierreSectional from "@/assets/pierre/dna-sectional-1-product-header-4.jpg";
import pierreGallery from "@/assets/pierre/dna-3-seat-sofa-product-header-2.jpg";

import belleyPortada from "@/assets/Belleydoux/portada.jpg";
import belleyLounge from "@/assets/Belleydoux/Roshults_Outdoor-Furniture_6049-LowRes_page-0001.jpg";
import belleyPavilion from "@/assets/Belleydoux/Roshults_Outdoor-Furniture_8301-LorRes_page-0001.jpg";
import belleyNight from "@/assets/Belleydoux/Untitled design (13).png";

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
    title: "Maldivas",
    subtitle: "Livings modulares en aluminio anodizado con tapizado náutico resistente al sol.",
    images: [
      { src: maldivasSet, alt: "Set Maldivas en composición" },
      { src: maldivasSide, alt: "Vista lateral del módulo Maldivas" },
      { src: maldivasBack, alt: "Respaldo escultórico Maldivas" },
      { src: maldivasAngle, alt: "Detalles curvos Maldivas" },
    ],
  },
  {
    index: "II",
    title: "Marsella",
    subtitle: "Comedores mediterráneos en aluminio cepillado con tapizados náuticos hidrófugos.",
    images: [
      { src: marsellaPortada, alt: "Ambiente principal colección Marsella" },
      { src: marsellaSceneOne, alt: "Detalle de mesa Marsella" },
      { src: marsellaSceneTwo, alt: "Vista lateral Marsella" },
      { src: marsellaDetail, alt: "Acabados Marsella" },
    ],
  },
  {
    index: "III",
    title: "Pierre",
    subtitle: "Sofás ADN en aluminio grafito combinados con textiles náuticos de alto desempeño.",
    images: [
      { src: pierrePortada, alt: "Portada colección Pierre" },
      { src: pierreSofaDetail, alt: "Detalle tapicería Pierre" },
      { src: pierreSectional, alt: "Seccional Pierre" },
      { src: pierreGallery, alt: "Variaciones Pierre" },
    ],
  },
  {
    index: "IV",
    title: "Belleydoux",
    subtitle: "Exterior gastronómico totalmente en aluminio marino y tapicería náutica antimanchas.",
    images: [
      { src: belleyPortada, alt: "Portada colección Belleydoux" },
      { src: belleyLounge, alt: "Lounge Belleydoux" },
      { src: belleyPavilion, alt: "Pabellón Belleydoux" },
      { src: belleyNight, alt: "Set nocturno Belleydoux" },
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
        <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-background" />
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
          Una obra, varios capítulos
        </h2>
      </section>

      {collections.map((c) => (
        <CollectionSlider key={c.index} {...c} />
      ))}

      <SiteFooter />
    </div>
  );
}
