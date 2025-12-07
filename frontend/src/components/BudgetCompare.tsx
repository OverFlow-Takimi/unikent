import { useState, useMemo } from "react";
import {
  Wallet,
  Home,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
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
import CityCard from "./CityCard";

interface BudgetCompareProps {
  onCitySelect: (city: City) => void;
}

type LivingType = "dorm" | "rent";

interface Preferences {
  socialImportant: boolean;
  safetyImportant: boolean;
  transportImportant: boolean;
  quietPlace: boolean;
}

const BudgetCompare = ({ onCitySelect }: BudgetCompareProps) => {
  const [budget, setBudget] = useState<string>("");
  const [livingType, setLivingType] = useState<LivingType>("dorm");
  const [preferences, setPreferences] = useState<Preferences>({
    socialImportant: false,
    safetyImportant: false,
    transportImportant: false,
    quietPlace: false,
  });
  const [showResults, setShowResults] = useState(false);

  const matchedCities = useMemo(() => {
    if (!budget) return [];

    const budgetNum = parseInt(budget);

    // Calculate score for each city
    const scoredCities = cities.map((city) => {
      let score = 0;
      const avgCost = getAverageMonthlyCost(city);

      // Check if budget fits
      const housingCost =
        livingType === "dorm"
          ? (city.dormCost.min + city.dormCost.max) / 2 / 9 // 9 month dorm spread to monthly
          : (city.rentCost.min + city.rentCost.max) / 2;

      const totalMonthlyCost = avgCost + housingCost * 0.3; // approximate total

      if (budgetNum >= city.monthlyCost.min) {
        score += 30;
        if (budgetNum >= avgCost) score += 20;
        if (budgetNum >= city.monthlyCost.max) score += 10;
      }

      // Preference bonuses
      if (preferences.socialImportant && city.socialScore >= 7) score += 15;
      if (preferences.safetyImportant && city.safetyIndex >= 65) score += 15;
      if (preferences.transportImportant && city.transportation !== "Düşük")
        score += 10;
      if (
        preferences.quietPlace &&
        (city.crowdLevel === "Sakin" || city.crowdLevel === "Orta")
      )
        score += 15;

      // Cost efficiency bonus
      const costEfficiency = budgetNum / avgCost;
      if (costEfficiency > 1.2) score += 10;

      return { city, score, fits: budgetNum >= city.monthlyCost.min };
    });

    return scoredCities
      .filter((sc) => sc.fits)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((sc, index) => ({ ...sc, rank: index + 1 }));
  }, [budget, livingType, preferences]);

  const handleAnalyze = () => {
    if (budget && parseInt(budget) > 0) {
      setShowResults(true);
    }
  };

  const togglePreference = (key: keyof Preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setShowResults(false);
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
            Aylık bütçeni ve tercihlerini gir, sana en uygun 3 şehri önerelim.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card mb-12">
          <div className="space-y-8">
            {/* Budget input */}
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
                className="h-14 text-lg bg-background"
              />
            </div>

            {/* Living type */}
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
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    livingType === "dorm"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value="dorm" id="dorm" />
                  <Building className="w-5 h-5 text-primary" />
                  <span className="font-medium">Yurt</span>
                </Label>
                <Label
                  htmlFor="rent"
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    livingType === "rent"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value="rent" id="rent" />
                  <Home className="w-5 h-5 text-accent" />
                  <span className="font-medium">Ev/Oda</span>
                </Label>
              </RadioGroup>
            </div>

            {/* Preferences */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Tercihlerim
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    key: "socialImportant" as const,
                    label: "Sosyal hayat önemli",
                    icon: "🎉",
                  },
                  {
                    key: "safetyImportant" as const,
                    label: "Güvenlik öncelikli",
                    icon: "🛡️",
                  },
                  {
                    key: "transportImportant" as const,
                    label: "Ulaşım gelişmiş olsun",
                    icon: "🚄",
                  },
                  {
                    key: "quietPlace" as const,
                    label: "Sakin bir yer istiyorum",
                    icon: "🌿",
                  },
                ].map((pref) => (
                  <button
                    key={pref.key}
                    onClick={() => togglePreference(pref.key)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      preferences[pref.key]
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <span className="text-xl">{pref.icon}</span>
                    <span className="font-medium text-sm">{pref.label}</span>
                    {preferences[pref.key] ? (
                      <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-muted-foreground/30 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleAnalyze}
              disabled={!budget || parseInt(budget) <= 0}
            >
              Şehirleri Analiz Et
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="animate-slide-up">
            {matchedCities.length > 0 ? (
              <>
                <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                  🎯 Sana En Uygun {matchedCities.length} Şehir
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {matchedCities.map(({ city, rank }) => (
                    <CityCard
                      key={city.id}
                      city={city}
                      onSelect={onCitySelect}
                      rank={rank}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-card rounded-2xl border border-border max-w-md mx-auto">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Üzgünüz, uygun şehir bulunamadı
                </h3>
                <p className="text-muted-foreground">
                  Bütçenizi artırmayı veya tercihlerinizi değiştirmeyi deneyin.
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
