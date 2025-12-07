import { Heart, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Üniversite Şehri <span className="text-gradient">Rehberi</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              UniKent - Şehirlerin Geleceği
            </p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span className="text-sm">by</span>
            <span className="text-sm font-semibold text-foreground">
              OverFlow Team
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/about-us" className="hover:text-primary transition-colors">Hakkımızda</a>
            <a href="/contact" className="hover:text-primary transition-colors">İletişim</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/OverFlow-Takimi/unikent"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 UniKent. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
