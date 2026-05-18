import { useState } from "react";

interface Props {
  index: string;
  title: string;
  subtitle: string;
  images: { src: string; alt: string }[];
}

export function CollectionSlider({ index, title, subtitle, images }: Props) {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % images.length);
  const prev = () => setI((i - 1 + images.length) % images.length);

  return (
    <section className="relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-8 pt-20 flex items-end justify-between gap-8">
        <div>
          <p className="text-[11px] tracking-luxury uppercase text-gold mb-3">
            Colección · {index}
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl">{title}</h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm md:text-base">
            {subtitle}
          </p>
        </div>
        <div className="hidden md:flex gap-2 shrink-0">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="h-12 w-12 border border-border hover:border-gold hover:text-gold transition flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="h-12 w-12 border border-border hover:border-gold hover:text-gold transition flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-[21/9] overflow-hidden bg-card">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            width={1920}
            height={1080}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 vignette pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Ir a imagen ${idx + 1}`}
                className={`h-[2px] transition-all ${
                  idx === i ? "w-12 bg-gold" : "w-6 bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] tracking-luxury uppercase text-foreground/70">
            {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
