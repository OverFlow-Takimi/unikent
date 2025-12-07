export interface BackendCity {
    id: string;
    cName: string | null;
    gPopulation: number;
    sPopulation: number;
    monthCost: number;
    dormitoryPrices: number;
    rentPrices: number;
    securityIndexs: number;
    offenceInddex: number;
    nearCity: string | null;
    socialScore: number;
    nightLife: string | null;
    nigtLifeStart: string | null;
    nightLifeEnd: string | null;
    weaather: string | null;
    density: string | null;
    transpor: string | null;
}

export interface RegisterDto {
    name?: string | null;
    surname?: string | null;
    nickname?: string | null;
    password?: string | null;
    email?: string | null;
}

export interface RequestDto {
    rId?: string;
    mId?: string;
    gPopulation?: number;
    sPopulation?: number;
    monthlyIncome?: number;
    importanceCost?: number;
    importanceSafety?: number;
    importanceSocial?: number;
    wantsNightLife?: boolean;
    prefersHotClimate?: boolean;
    wantsNatureLifestyle?: boolean;
}

export interface ResultDto {
    resultId?: string;
    cName?: string | null;
    score?: number;
    city?: BackendCity;
}
