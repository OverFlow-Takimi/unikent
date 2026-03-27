import {
  MapPin,
  Users,
  Shield,
  Music,
  ThermometerSun,
  Bus,
  Moon,
} from "lucide-react";
import {
  City,
  formatCurrency,
  formatNumber,
  getAverageMonthlyCost,
} from "@/data/cities";
import { Button } from "@/components/ui/button";

interface CityCardProps {
  city: City;
  onSelect: (city: City) => void;
  rank?: number;
}

const CityCard = ({ city, onSelect, rank }: CityCardProps) => {
  const avgCost = getAverageMonthlyCost(city);

  const getSafetyColor = (index: number) => {
    if (index >= 70) return "text-green-600 bg-green-100";
    if (index >= 55) return "text-yellow-600 bg-yellow-100";
    return "text-orange-600 bg-orange-100";
  };

  const getSocialColor = (score: number) => {
    if (score >= 8) return "text-purple-600 bg-purple-100";
    if (score >= 6) return "text-blue-600 bg-blue-100";
    return "text-muted-foreground bg-muted";
  };

  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-card transition-all duration-500">
      {rank && (
        <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
          #{rank}
        </div>
      )}

      <div className="h-32 bg-gradient-hero relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${city.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />

        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-2xl font-bold text-primary-foreground drop-shadow-lg">
            {city.name}
          </h3>
          <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>{city.nearCities.slice(0, 2).join(", ")}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className={`rounded-xl p-3 ${getSafetyColor(city.safetyIndex)}`}>
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-medium">Güvenlik</span>
            </div>
            <div className="text-xl font-bold">
              {city.safetyIndex.toFixed(0)}
            </div>
          </div>

          <div className={`rounded-xl p-3 ${getSocialColor(city.socialScore)}`}>
            <div className="flex items-center gap-2 mb-1">
              <Music className="w-4 h-4" />
              <span className="text-xs font-medium">Sosyal</span>
            </div>
            <div className="text-xl font-bold">{city.socialScore}/10</div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">
            Aylık Ortalama Maliyet
          </div>
          <div className="text-2xl font-bold text-foreground">
            {formatCurrency(avgCost)}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {formatCurrency(city.monthlyCost.min)} -{" "}
            {formatCurrency(city.monthlyCost.max)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{city.studentPopulation}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ThermometerSun className="w-4 h-4 text-orange-500" />
            <span>{city.weather}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Moon className="w-4 h-4 text-accent" />
            <span>{city.nightlife}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bus className="w-4 h-4 text-teal-600" />
            <span>{city.transportation}</span>
          </div>
        </div>

        <Button
          variant="default"
          className="w-full"
          onClick={() => onSelect(city)}
        >
          Detayları Gör
        </Button>
      </div>
    </div>
  );
};

export default CityCard;
