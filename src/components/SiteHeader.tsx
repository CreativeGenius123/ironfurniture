import { Link } from "@tanstack/react-router";
import logo from "@/assets/iron-logo.svg";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Iron Furniture"
            width={36}
            height={36}
            className="invert opacity-90 group-hover:opacity-100 transition"
          />
          <span className="font-display text-sm tracking-luxury uppercase hidden sm:block">
            IRON FURNITURE
          </span>
        </Link>
        <nav className="flex items-center gap-8 text-[11px] tracking-luxury uppercase">
          <Link
            to="/"
            className="text-muted-foreground hover:text-gold transition-colors"
            activeProps={{ className: "text-gold" }}
            activeOptions={{ exact: true }}
          >
            Colecciones
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-gold transition-colors"
            activeProps={{ className: "text-gold" }}
          >
            Atelier
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-gold transition-colors"
            activeProps={{ className: "text-gold" }}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
