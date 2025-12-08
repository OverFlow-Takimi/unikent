import { useState, useMemo } from "react";
import {
  Wallet,
  Home,
  Building,
  ArrowRight,
  Shield,
  Music,
  Bus,
  Users,
} from "lucide-react";
import {
  cities,
  City,
  formatCurrency,
  getAverageMonthlyCost,
} from "@/data/cities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CityCard from "./CityCard";

interface BudgetCompareProps {
  onCitySelect: (city: City) => void;
}

type LivingType = "dorm" | "rent";

interface Preferences {
  minSocialScore: number;
  minSafetyIndex: number;
  transportation: string;
  crowdLevel: string;
}

const BudgetCompare = ({ onCitySelect }: BudgetCompareProps) => {
  const [budget, setBudget] = useState<string>("");
  const [livingType, setLivingType] = useState<LivingType>("dorm");
  const [preferences, setPreferences] = useState<Preferences>({
    minSocialScore: 0,
    minSafetyIndex: 0,
    transportation: "Fark etmez",
    crowdLevel: "Fark etmez",
  });
  const [showResults, setShowResults] = useState(false);

  const matchedCities = useMemo(() => {
    if (!budget) return [];

    const budgetNum = parseInt(budget);

    const scoredCities = cities.map((city) => {
      let score = 0;
      const avgCost = getAverageMonthlyCost(city);

      const housingCost =
        livingType === "dorm"
          ? (city.dormCost.min + city.dormCost.max) / 2 / 9
          : (city.rentCost.min + city.rentCost.max) / 2;

      if (budgetNum >= city.monthlyCost.min) {
        score += 30;

        const surplus =
          (budgetNum - city.monthlyCost.min) / city.monthlyCost.min;
        score += Math.min(surplus * 100, 20);
      } else {
        score -= 100;
      }

      if (preferences.minSafetyIndex > 0) {
        if (city.safetyIndex >= preferences.minSafetyIndex) {
          score += 25;
          score += (city.safetyIndex - preferences.minSafetyIndex) * 0.5;
        } else {
          score -= preferences.minSafetyIndex - city.safetyIndex;
        }
      } else {
        score += city.safetyIndex * 0.1;
      }

      if (preferences.minSocialScore > 0) {
        if (city.socialScore >= preferences.minSocialScore) {
          score += 25;
          score += (city.socialScore - preferences.minSocialScore) * 2;
        } else {
          score -= (preferences.minSocialScore - city.socialScore) * 5;
        }
      } else {
        score += city.socialScore;
      }

      if (preferences.transportation !== "Fark etmez") {
        const levels = ["Düşük", "Orta", "Gelişmiş", "Çok Gelişmiş"];
        const cityLevelIdx = levels.indexOf(city.transportation);
        const prefLevelIdx = levels.indexOf(preferences.transportation);

        if (cityLevelIdx >= prefLevelIdx) {
          score += 15;
          score += (cityLevelIdx - prefLevelIdx) * 5;
        } else {
          score -= (prefLevelIdx - cityLevelIdx) * 10;
        }
      }
      if (preferences.crowdLevel !== "Fark etmez") {
        if (city.crowdLevel === preferences.crowdLevel) {
          score += 15;
        } else {
          //şimdilik mvp modeli için yeterli
          score -= 5;
        }
      }

      return { city, score, fits: budgetNum >= city.monthlyCost.min };
    });

    return scoredCities
      .filter((sc) => sc.score > 0) // Only show positive matches
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((sc, index) => ({ ...sc, rank: index + 1 }));
  }, [budget, livingType, preferences]);

  const handleAnalyze = () => {
    if (budget && parseInt(budget) > 0) {
      setShowResults(true);
    }
  };

  return (
    <section id="compare" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bütçene Göre <span className="text-gradient">Karşılaştır</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aylık bütçeni ve detaylı tercihlerini gir, sana en uygun 3 şehri
            puanlayıp önerelim.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Budget & Living */}
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-primary" />
                  Aylık Bütçen (₺)
                </Label>
                <Input
                  type="number"
                  placeholder="Örn: 15000"
                  value={budget}
                  onChange={(e) => {
                    setBudget(e.target.value);
                    setShowResults(false);
                  }}
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  Konaklama Tercihi
                </Label>
                <RadioGroup
                  value={livingType}
                  onValueChange={(v) => {
                    setLivingType(v as LivingType);
                    setShowResults(false);
                  }}
                  className="grid grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="dorm"
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      livingType === "dorm"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value="dorm" id="dorm" />
                    <Building className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Yurt</span>
                  </Label>
                  <Label
                    htmlFor="rent"
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      livingType === "rent"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value="rent" id="rent" />
                    <Home className="w-4 h-4 text-accent" />
                    <span className="font-medium text-sm">Ev/Oda</span>
                  </Label>
                </RadioGroup>
              </div>
            </div>

            {/* Right Column: Detailed Preferences */}
            <div className="space-y-6">
              {/* Social & Safety */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-semibold">
                    <Shield className="w-4 h-4 text-primary" />
                    Güvenlik
                  </Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0-100"
                    value={preferences.minSafetyIndex || ""}
                    onChange={(e) => {
                      setPreferences((p) => ({
                        ...p,
                        minSafetyIndex: parseInt(e.target.value) || 0,
                      }));
                      setShowResults(false);
                    }}
                  />
                  <span className="text-xs text-muted-foreground">Örn: 70</span>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-semibold">
                    <Music className="w-4 h-4 text-accent" />
                    Sosyal
                  </Label>
                  <Input
                    type="number"
                    min="0"
                    max="10"
                    placeholder="0-10"
                    value={preferences.minSocialScore || ""}
                    onChange={(e) => {
                      setPreferences((p) => ({
                        ...p,
                        minSocialScore: parseInt(e.target.value) || 0,
                      }));
                      setShowResults(false);
                    }}
                  />
                  <span className="text-xs text-muted-foreground">Örn: 7</span>
                </div>
              </div>

              {/* Transport & Crowd */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-semibold">
                    <Bus className="w-4 h-4 text-teal-600" />
                    Ulaşım
                  </Label>
                  <Select
                    value={preferences.transportation}
                    onValueChange={(v) => {
                      setPreferences((p) => ({ ...p, transportation: v }));
                      setShowResults(false);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fark etmez">Fark etmez</SelectItem>
                      <SelectItem value="Orta">Orta</SelectItem>
                      <SelectItem value="Gelişmiş">Gelişmiş</SelectItem>
                      <SelectItem value="Çok Gelişmiş">Çok Gelişmiş</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-semibold">
                    <Users className="w-4 h-4 text-orange-500" />
                    Yoğunluk
                  </Label>
                  <Select
                    value={preferences.crowdLevel}
                    onValueChange={(v) => {
                      setPreferences((p) => ({ ...p, crowdLevel: v }));
                      setShowResults(false);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fark etmez">Fark etmez</SelectItem>
                      <SelectItem value="Sakin">Sakin</SelectItem>
                      <SelectItem value="Orta">Orta</SelectItem>
                      <SelectItem value="Yoğun">Yoğun</SelectItem>
                      <SelectItem value="Çok Yoğun">Çok Yoğun</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleAnalyze}
              disabled={!budget || parseInt(budget) <= 0}
            >
              Şehirleri Analiz Et
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="animate-slide-up">
            {matchedCities.length > 0 ? (
              <>
                <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                  🎯 Puanına Göre En Uygun Şehirler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {matchedCities.map(({ city, rank, score }) => (
                    <div key={city.id} className="relative">
                      <div className="absolute -top-3 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        Uygunluk: %{Math.min(Math.round(score), 100)}
                      </div>
                      <CityCard
                        city={city}
                        onSelect={onCitySelect}
                        rank={rank}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-card rounded-2xl border border-border max-w-md mx-auto">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Kriterlere uygun şehir bulunamadı
                </h3>
                <p className="text-muted-foreground">
                  Lütfen bütçenizi artırın veya kriterlerinizi (özellikle
                  güvenlik/sosyal puanları) biraz düşürün.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BudgetCompare;
