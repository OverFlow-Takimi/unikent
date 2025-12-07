import { useState, useRef } from "react";
import { City } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CityGrid from "@/components/CityGrid";
import BudgetCompare from "@/components/BudgetCompare";
import CityDetail from "@/components/CityDetail";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onExplore={() => scrollToSection(citiesRef)}
        onCompare={() => scrollToSection(compareRef)}
      />

      <Hero
        onExplore={() => scrollToSection(citiesRef)}
        onCompare={() => scrollToSection(compareRef)}
      />

      <div ref={citiesRef}>
        <CityGrid onCitySelect={setSelectedCity} />
      </div>

      <div ref={compareRef}>
        <BudgetCompare onCitySelect={setSelectedCity} />
      </div>

      <Footer />

      {selectedCity && (
        <CityDetail city={selectedCity} onClose={() => setSelectedCity(null)} />
      )}
    </div>
  );
};

export default Index;
