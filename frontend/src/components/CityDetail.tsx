import {
  X,
  MapPin,
  Users,
  Shield,
  Music,
  ThermometerSun,
  Bus,
  Moon,
  Home,
  Building,
  TrendingUp,
  Wallet,
} from "lucide-react";
import {
  City,
  formatCurrency,
  formatNumber,
  getAverageMonthlyCost,
} from "@/data/cities";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CityDetailProps {
  city: City;
  onClose: () => void;
}

const CityDetail = ({ city, onClose }: CityDetailProps) => {
  const avgCost = getAverageMonthlyCost(city);

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in shadow-xl">
        <div className="h-40 bg-gradient-hero relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${city.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="absolute bottom-6 left-8">
            <h2 className="text-4xl font-bold text-primary-foreground mb-2">
              {city.name}
            </h2>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Yakın: {city.nearCities.join(", ")}</span>
            </div>
          </div>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-10rem)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-muted rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Nüfus</div>
              <div className="text-lg font-bold text-foreground">
                {formatNumber(city.population)}
              </div>
            </div>
            <div className="bg-muted rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Öğrenci</div>
              <div className="text-lg font-bold text-foreground">
                {city.studentPopulation}
              </div>
            </div>
            <div className="bg-muted rounded-xl p-4 text-center">
              <ThermometerSun className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Hava</div>
              <div className="text-lg font-bold text-foreground">
                {city.weather}
              </div>
            </div>
            <div className="bg-muted rounded-xl p-4 text-center">
              <Bus className="w-6 h-6 text-teal-600 mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Ulaşım</div>
              <div className="text-lg font-bold text-foreground">
                {city.transportation}
              </div>
            </div>
          </div>

          {/* Genel İstatistikler */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Yaşam Kalitesi
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Güvenlik Endeksi
                    </span>
                    <span className="font-semibold">
                      {city.safetyIndex.toFixed(1)}/100
                    </span>
                  </div>
                  <Progress value={city.safetyIndex} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Music className="w-4 h-4" /> Sosyal Yaşam
                    </span>
                    <span className="font-semibold">{city.socialScore}/10</span>
                  </div>
                  <Progress value={city.socialScore * 10} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Moon className="w-4 h-4" /> Gece Hayatı
                    </div>
                    <div className="font-semibold">{city.nightlife}</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground mb-1">
                      Yoğunluk
                    </div>
                    <div className="font-semibold">{city.crowdLevel}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Maliyet Analizi
              </h3>

              <div className="space-y-4">
                <div className="bg-primary/10 rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    Aylık Yaşam Maliyeti
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {formatCurrency(avgCost)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ({formatCurrency(city.monthlyCost.min)} -{" "}
                    {formatCurrency(city.monthlyCost.max)})
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building className="w-4 h-4" /> Yurt (9 ay)
                    </div>
                    <div className="font-bold text-foreground">
                      {formatCurrency(city.dormCost.min)} -{" "}
                      {formatCurrency(city.dormCost.max)}
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Home className="w-4 h-4" /> Kira (aylık)
                    </div>
                    <div className="font-bold text-foreground">
                      {formatCurrency(city.rentCost.min)} -{" "}
                      {formatCurrency(city.rentCost.max)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby cities */}
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Yakın Şehirler
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.nearCities.map((nearCity) => (
                <span
                  key={nearCity}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                >
                  {nearCity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
