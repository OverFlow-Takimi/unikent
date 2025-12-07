export interface City {
  id: string;
  name: string;
  population: number;
  image: string;
  studentPopulation: string;
  monthlyCost: { min: number; max: number };
  dormCost: { min: number; max: number };
  rentCost: { min: number; max: number };
  safetyIndex: number;
  crimeIndex: number;
  nearCities: string[];
  socialScore: number;
  nightlife: string;
  weather: string;
  crowdLevel: string;
  transportation: string;
}

export const cities: City[] = [
  {
    id: "isparta",
    name: "Isparta",
    population: 450400,
    image: "/cities/isparta.png",
    studentPopulation: "70.000 - 120.000",
    monthlyCost: { min: 11000, max: 17000 },
    dormCost: { min: 55000, max: 110000 },
    rentCost: { min: 6500, max: 10000 },
    safetyIndex: 77.31,
    crimeIndex: 22.69,
    nearCities: ["Antalya", "Pamukkale"],
    socialScore: 5.5,
    nightlife: "23:00-00:00",
    weather: "6°C / 11°C",
    crowdLevel: "Orta",
    transportation: "Orta",
  },
  {
    id: "eskisehir",
    name: "Eskişehir",
    population: 921630,
    image: "/cities/eskisehir.png",
    studentPopulation: "65.000 - 66.000",
    monthlyCost: { min: 14000, max: 22000 },
    dormCost: { min: 75000, max: 150000 },
    rentCost: { min: 8000, max: 12000 },
    safetyIndex: 75.12,
    crimeIndex: 24.88,
    nearCities: ["Kütahya", "Afyon"],
    socialScore: 9.5,
    nightlife: "02:00-04:00",
    weather: "5°C / 9°C",
    crowdLevel: "Yoğun",
    transportation: "Çok Gelişmiş",
  },
  {
    id: "konya",
    name: "Konya",
    population: 2330024,
    image: "/cities/konya.png",
    studentPopulation: "140.000 - 160.000",
    monthlyCost: { min: 14500, max: 22500 },
    dormCost: { min: 70000, max: 145000 },
    rentCost: { min: 7000, max: 10500 },
    safetyIndex: 64.71,
    crimeIndex: 35.29,
    nearCities: ["Kapadokya", "Karaman"],
    socialScore: 7,
    nightlife: "23:00-01:00",
    weather: "5°C / 10°C",
    crowdLevel: "Çok Yoğun",
    transportation: "Çok Gelişmiş",
  },
  {
    id: "edirne",
    name: "Edirne",
    population: 417800,
    image: "/cities/edirne.png",
    studentPopulation: "40.000 - 43.000",
    monthlyCost: { min: 13500, max: 20000 },
    dormCost: { min: 65000, max: 125000 },
    rentCost: { min: 7500, max: 12000 },
    safetyIndex: 64.73,
    crimeIndex: 35.27,
    nearCities: ["Tekirdağ", "Kırklareli", "Çanakkale"],
    socialScore: 6,
    nightlife: "00:00-01:00",
    weather: "6°C / 10°C",
    crowdLevel: "Orta",
    transportation: "Düşük",
  },
  {
    id: "bursa",
    name: "Bursa",
    population: 3238618,
    image: "/cities/bursa.png",
    studentPopulation: "80.000 - 83.000",
    monthlyCost: { min: 15000, max: 24000 },
    dormCost: { min: 90000, max: 180000 },
    rentCost: { min: 9000, max: 15000 },
    safetyIndex: 53.76,
    crimeIndex: 46.24,
    nearCities: ["İstanbul", "Balıkesir", "Çanakkale"],
    socialScore: 8,
    nightlife: "01:00-03:00",
    weather: "10°C / 13°C",
    crowdLevel: "Çok Yoğun",
    transportation: "Çok Gelişmiş",
  },
  {
    id: "sakarya",
    name: "Sakarya",
    population: 1110735,
    image: "/cities/sakarya.png",
    studentPopulation: "75.000 - 85.000",
    monthlyCost: { min: 14000, max: 21000 },
    dormCost: { min: 65000, max: 130000 },
    rentCost: { min: 7500, max: 11500 },
    safetyIndex: 56.57,
    crimeIndex: 43.43,
    nearCities: ["İstanbul", "Kocaeli", "Düzce", "Bolu"],
    socialScore: 6,
    nightlife: "00:00-01:00",
    weather: "8°C / 12°C",
    crowdLevel: "Yoğun",
    transportation: "Orta",
  },
  {
    id: "samsun",
    name: "Samsun",
    population: 1377942,
    image: "/cities/samsun.png",
    studentPopulation: "60.000 - 65.000",
    monthlyCost: { min: 13500, max: 21000 },
    dormCost: { min: 60000, max: 120000 },
    rentCost: { min: 7000, max: 10500 },
    safetyIndex: 53.03,
    crimeIndex: 46.97,
    nearCities: ["Ordu", "Amasya", "Tokat"],
    socialScore: 6.5,
    nightlife: "00:00-02:00",
    weather: "10°C / 14°C",
    crowdLevel: "Yoğun",
    transportation: "Gelişmiş",
  },
  {
    id: "artvin",
    name: "Artvin",
    population: 169673,
    image: "/cities/artvin.png",
    studentPopulation: "10.000 - 11.500",
    monthlyCost: { min: 10500, max: 15500 },
    dormCost: { min: 40000, max: 85000 },
    rentCost: { min: 5500, max: 8500 },
    safetyIndex: 79.91,
    crimeIndex: 20.09,
    nearCities: ["Rize", "Batum"],
    socialScore: 3,
    nightlife: "22:00-23:00",
    weather: "4°C / 8°C",
    crowdLevel: "Sakin",
    transportation: "Düşük",
  },
  {
    id: "gaziantep",
    name: "Gaziantep",
    population: 2193363,
    image: "/cities/gaziantep.png",
    studentPopulation: "70.000 - 78.000",
    monthlyCost: { min: 14500, max: 23500 },
    dormCost: { min: 85000, max: 165000 },
    rentCost: { min: 8500, max: 13000 },
    safetyIndex: 52.22,
    crimeIndex: 47.78,
    nearCities: ["Urfa", "Adıyaman", "Maraş"],
    socialScore: 7,
    nightlife: "00:00-02:00",
    weather: "8°C / 13°C",
    crowdLevel: "Çok Yoğun",
    transportation: "Gelişmiş",
  },
];

export const getAverageMonthlyCost = (city: City): number => {
  return (city.monthlyCost.min + city.monthlyCost.max) / 2;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("tr-TR").format(num);
};
