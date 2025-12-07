import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onExplore: () => void;
  onCompare: () => void;
}

const Navbar = ({ onExplore, onCompare }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo gelcek buraya */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Şehir Rehberi
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={onExplore}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Şehirler
            </button>
            <button
              onClick={onCompare}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Karşılaştır
            </button>
            <Button variant="default" onClick={onCompare}>
              Bütçe Hesapla
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobil için entegrasyon adımları */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => {
                onExplore();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-foreground font-medium py-2"
            >
              Şehirler
            </button>
            <button
              onClick={() => {
                onCompare();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-foreground font-medium py-2"
            >
              Karşılaştır
            </button>
            <Button
              variant="default"
              className="w-full"
              onClick={() => {
                onCompare();
                setIsMobileMenuOpen(false);
              }}
            >
              Bütçe Hesapla
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
