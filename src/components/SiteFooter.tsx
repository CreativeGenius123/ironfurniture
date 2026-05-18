import logo from "@/assets/iron-logo.svg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-12 items-start">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={32} height={32} className="invert opacity-80" loading="lazy" />
          <div>
            <p className="font-display tracking-luxury uppercase text-sm">IRON FURNITURE</p>
            <p className="text-xs text-muted-foreground mt-1">Muebles de autor · Forjados a mano</p>
          </div>
        </div>
        <div className="text-xs tracking-luxury uppercase text-muted-foreground md:text-center">
          Atelier · Buenos Aires
        </div>
        <div className="text-xs tracking-luxury uppercase text-muted-foreground md:text-right">
          © {new Date().getFullYear()} IRON FURNITURE
        </div>
      </div>
    </footer>
  );
}
