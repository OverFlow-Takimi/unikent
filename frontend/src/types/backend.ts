export interface BackendCity {
    id: string;
    cName: string;
    imageUrl: string;
    gPopulation: number;
    monthCost: number;
    securityIndexs: number;
    socialScore: number;
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
