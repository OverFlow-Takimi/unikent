import CityCard from "@/components/CityCard";
import { City } from "@/types/city";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const featuredCities: City[] = [
  {
    name: "Eskişehir, Türkiye",
    description:
      "Türkiye'nin öğrenci başkenti Eskişehir; Anadolu, ESOGÜ ve ESTÜ olmak üzere üç büyük devlet üniversitesine ev sahipliği yapar. Şehrin güney tepelerinde yer alan köklü Osmangazi Üniversitesi ve teknik altyapısıyla öne çıkan ESTÜ, öğrencilere eşsiz bir kampüs hayatı sunar.",
    imageUrl: "/images/eskisehir.jpeg",
    imageAlt: "Eskişehir - Odunpazarı Evleri ve Masal Şatosu",
  },
  {
    name: "Isparta, Türkiye",
    description:
      "Güller diyarı Isparta; köklü Süleyman Demirel Üniversitesi (SDÜ) ve Uygulamalı Bilimler Üniversitesi'ne (ISUBÜ) ev sahipliği yapar. Şehrin girişinde yer alan ve 'Doğu-Batı' olarak ikiye ayrılan devasa kampüsüyle SDÜ, kompakt şehir yapısı ve uygun yaşam maliyetleriyle öğrenci dostu bir ortam sunar.",
    imageUrl: "/images/isparta.jpeg",
    imageAlt: "Isparta - Süleyman Demirel Üniversitesi Kampüsü",
  },
  {
    name: "Ankara, Türkiye",
    description:
      "Türkiye'nin başkenti Ankara; ODTÜ, Hacettepe ve Ankara Üniversitesi gibi ülkenin en prestijli kurumlarını barındırır. Şehrin batı aksındaki ormanlık kampüsleriyle ODTÜ ve Beytepe (Hacettepe), kurumsal bir eğitim ve doğa içinde bir yaşam vaat eder.",
    imageUrl: "/images/ankara.jpeg",
    imageAlt: "Ankara - Anıtkabir ve Şehir Manzarası",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className="mt-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-primary">
          Öne Çıkan Şehirler
        </h2>

        <Link
          href="/ozel-ayarlar"
          className="md:hidden flex items-center bg-accent text-gray-900 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-accent-dark transition-colors"
        >
          <Sparkles className="w-5 h-5 mr-1" />
          Bana Özel Ayarla
        </Link>
      </div>

      <div className="grid gap-6">
        {featuredCities.map((city) => (
          <CityCard key={city.name} city={city} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
