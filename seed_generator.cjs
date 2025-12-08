const fs = require('fs');
const crypto = require('crypto');

const cities = [
    {
        name: "Isparta",
        population: 450400,
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
        name: "Eskişehir",
        population: 921630,
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
        name: "Konya",
        population: 2330024,
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
        name: "Edirne",
        population: 417800,
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
        name: "Bursa",
        population: 3238618,
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
        name: "Sakarya",
        population: 1110735,
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
        name: "Samsun",
        population: 1377942,
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
        name: "Artvin",
        population: 169673,
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
        name: "Gaziantep",
        population: 2193363,
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

const parseRangeAvg = (str) => {
    // "70.000 - 120.000" or simple number?
    // Remove dots
    const cleaned = str.replace(/\./g, '');
    const parts = cleaned.split('-').map(s => parseFloat(s.trim()));
    if (parts.length === 2) return (parts[0] + parts[1]) / 2;
    return parts[0] || 0;
};

const getAvg = (cost) => (cost.min + cost.max) / 2;

const sqlStatements = cities.map(city => {
    const id = crypto.randomUUID();
    const cName = city.name;
    const gPopulation = city.population;
    const sPopulation = parseRangeAvg(city.studentPopulation);
    const monthCost = getAvg(city.monthlyCost);
    const dormitoryPrices = getAvg(city.dormCost);
    const rentPrices = getAvg(city.rentCost);
    const securityIndexs = city.safetyIndex;
    const offenceInddex = city.crimeIndex;
    const nearCity = city.nearCities.join(", ");
    const socialScore = city.socialScore;
    const nightlife = city.nightlife;
    const timeParts = city.nightlife.split('-');
    const nigtLifeStart = timeParts[0] ? timeParts[0].trim() : "00:00";
    const nightLifeEnd = timeParts[1] ? timeParts[1].trim() : "00:00";
    const weaather = city.weather;
    const density = city.crowdLevel;
    const transpor = city.transportation;

    return `INSERT INTO Cities (id, cName, gPopulation, sPopulation, monthCost, dormitoryPrices, rentPrices, securityIndexs, offenceInddex, nearCity, socialScore, nightLife, nigtLifeStart, nightLifeEnd, weaather, density, transpor) VALUES ('${id}', N'${cName}', ${gPopulation}, ${sPopulation}, ${monthCost}, ${dormitoryPrices}, ${rentPrices}, ${securityIndexs}, ${offenceInddex}, N'${nearCity}', ${socialScore}, N'${nightlife}', '${nigtLifeStart}', '${nightLifeEnd}', N'${weaather}', N'${density}', N'${transpor}');`;
});

console.log(sqlStatements.join('\n'));
