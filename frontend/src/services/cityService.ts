import api from "@/lib/api";
import { City } from "@/data/cities";
import { BackendCity } from "@/types/backend";

const adaptCity = (backendCity: BackendCity): City => {
    const imageName = backendCity.cName ? backendCity.cName.toLowerCase() : "default";

    return {
        id: backendCity.id,
        name: backendCity.cName || "Unknown",
        population: backendCity.gPopulation,
        image: `/cities/${imageName}.png`,
        studentPopulation: `${backendCity.sPopulation}`,

        monthlyCost: {
            min: backendCity.monthCost || 0,
            max: (backendCity.monthCost || 0) * 1.5
        },
        dormCost: {
            min: backendCity.dormitoryPrices || 0,
            max: (backendCity.dormitoryPrices || 0) * 1.2
        },
        rentCost: {
            min: backendCity.rentPrices || 0,
            max: (backendCity.rentPrices || 0) * 1.2
        },
        safetyIndex: backendCity.securityIndexs,
        crimeIndex: backendCity.offenceInddex,
        nearCities: backendCity.nearCity ? backendCity.nearCity.split(",").map(s => s.trim()) : [],
        socialScore: backendCity.socialScore,
        nightlife: backendCity.nightLife || "Unknown",
        weather: backendCity.weaather || "Unknown",
        crowdLevel: backendCity.density || "Unknown",
        transportation: backendCity.transpor || "Unknown"
    };
};

export const cityService = {
    getCities: async (): Promise<City[]> => {
        const response = await api.get<BackendCity[]>("/Cities");
        return response.data.map(adaptCity);
    },

};
