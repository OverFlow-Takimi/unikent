using System;
using System.Collections.Generic;

namespace Unikent.API.Models
{
    public class City
    {
        public Guid Id { get; set; }
        public string CName { get; set; }
        public float GPopulation { get; set; }
        public int SPopulationMax { get; set; }
        public int SPopulationMin { get; set; }
        public int MonthCost { get; set; }
        public int MonthCoastMax { get; set; }
        public int MonthCoastMin { get; set; }
        public int DormitoryPrices { get; set; }
        public int DormitoryPricesMax { get; set; }
        public int DormitoryPricesMin { get; set; }

        public int RentPricesMax { get; set; }
        public int RentPricesMin { get; set; }
        public float SecurityIndexs { get; set; }
        public float OffenceInddex { get; set; }
        public string [] NearCity { get; set; }
        public float SocialScore { get; set; }
        public String NightLife { get; set; }
        public TimeSpan NigtLifeStart { get; set; }
        public TimeSpan NightLifeEnd { get; set; }
        public int WeaatherMax { get; set; }
        public int WeatherMin { get; set; }
        public string Density { get; set; }
        public string Transpor { get; set; }

    }
} 