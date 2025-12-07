import { Search, MapPin, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onExplore: () => void;
  onCompare: () => void;
}

const Hero = ({ onExplore, onCompare }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-hero opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            UniKent
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
          <span className="block text-foreground">Üniversite Şehri</span>
          <span className="text-gradient">Rehberin</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Üniversite tercihinde en doğru şehir kararını vermek için ihtiyacın
          olan
          <span className="text-foreground font-semibold">
            {" "}
            tüm veriler tek bir yerde
          </span>
          . Yaşam maliyeti, sosyal hayat, güvenlik ve daha fazlası.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button variant="hero" size="xl" onClick={onExplore}>
            <Search className="w-5 h-5" />
            Şehirleri Keşfet
          </Button>
          <Button variant="glass" size="xl" onClick={onCompare}>
            <TrendingUp className="w-5 h-5" />
            Bütçene Göre Karşılaştır
          </Button>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { icon: MapPin, value: "9", label: "Şehir" },
            { icon: GraduationCap, value: "700K+", label: "Öğrenci Verisi" },
            { icon: Search, value: "15+", label: "Kriter" },
            { icon: TrendingUp, value: "%100", label: "Güncel Veri" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
