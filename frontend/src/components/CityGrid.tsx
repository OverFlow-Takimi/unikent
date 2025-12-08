import { useState } from "react";
import { Search, SlidersHorizontal, Loader2, AlertCircle } from "lucide-react";
import { City } from "@/data/cities";
import { useCities } from "@/hooks/useCities";
import CityCard from "./CityCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CityGridProps {
  onCitySelect: (city: City) => void;
}

type SortOption = "name" | "cost-asc" | "cost-desc" | "safety" | "social";

const CityGrid = ({ onCitySelect }: CityGridProps) => {
  const { cities, loading, error } = useCities();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const filteredCities = cities
    .filter(
      (city) =>
        (city.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.nearCities.some((nc) =>
          nc.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "cost-asc":
          return (
            (a.monthlyCost.min + a.monthlyCost.max) / 2 -
            (b.monthlyCost.min + b.monthlyCost.max) / 2
          );
        case "cost-desc":
          return (
            (b.monthlyCost.min + b.monthlyCost.max) / 2 -
            (a.monthlyCost.min + a.monthlyCost.max) / 2
          );
        case "safety":
          return b.safetyIndex - a.safetyIndex;
        case "social":
          return b.socialScore - a.socialScore;
        default:
          return a.name.localeCompare(b.name, "tr");
      }
    });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2 text-lg text-muted-foreground">Şehirler yükleniyor...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-20 text-red-500">
        <AlertCircle className="w-10 h-10 mb-2" />
        <p className="text-lg font-medium">{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
          Tekrar Dene
        </Button>
      </div>
    );
  }

  return (
    <section id="cities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Şehirleri <span className="text-gradient">Keşfet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Birbirinden farklı şehirlerin detaylı analizini incele, karşılaştır
            ve senin için en uygun olanı bul.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Şehir ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-card border-border"
            />
          </div>
          <Select
            value={sortBy}
            onValueChange={(v) => setSortBy(v as SortOption)}
          >
            <SelectTrigger className="w-full sm:w-48 h-12 bg-card border-border">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sırala" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">İsme Göre</SelectItem>
              <SelectItem value="cost-asc">Maliyet (Düşük → Yüksek)</SelectItem>
              <SelectItem value="cost-desc">
                Maliyet (Yüksek → Düşük)
              </SelectItem>
              <SelectItem value="safety">Güvenlik Endeksi</SelectItem>
              <SelectItem value="social">Sosyal Puan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city, index) => (
            <div
              key={city.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CityCard city={city} onSelect={onCitySelect} />
            </div>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Sonuç bulunamadı
            </h3>
            <p className="text-muted-foreground">
              Farklı bir arama terimi deneyin.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CityGrid;
