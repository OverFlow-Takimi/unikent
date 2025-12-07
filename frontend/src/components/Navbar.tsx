import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onExplore?: () => void;
  onCompare?: () => void;
}

const Navbar = ({ onExplore, onCompare }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (action: () => void) => {
    if (!isHomePage) {
      navigate("/");
      // Small timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        action();
      }, 100);
    } else {
      action();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || !isHomePage
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Şehir Rehberi
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {onExplore && (
              <button
                onClick={() => handleNavigation(onExplore)}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                Şehirler
              </button>
            )}
            {onCompare && (
              <button
                onClick={() => handleNavigation(onCompare)}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                Karşılaştır
              </button>
            )}
            {onCompare && (
              <Button variant="ghost" onClick={() => handleNavigation(onCompare)}>
                Bütçe Hesapla
              </Button>
            )}

            <div className="h-6 w-px bg-border mx-2" />

            <Link to="/login">
              <Button variant="ghost" className="font-medium">
                <LogIn className="w-4 h-4 mr-2" />
                Giriş Yap
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default" className="font-medium">
                <UserPlus className="w-4 h-4 mr-2" />
                Kayıt Ol
              </Button>
            </Link>
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

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {onExplore && (
              <button
                onClick={() => {
                  handleNavigation(onExplore);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-foreground font-medium py-2"
              >
                Şehirler
              </button>
            )}
            {onCompare && (
              <button
                onClick={() => {
                  handleNavigation(onCompare);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-foreground font-medium py-2"
              >
                Karşılaştır
              </button>
            )}

            <hr className="my-2 border-border" />

            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <LogIn className="w-4 h-4 mr-2" />
                Giriş Yap
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" className="w-full justify-start">
                <UserPlus className="w-4 h-4 mr-2" />
                Kayıt Ol
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
