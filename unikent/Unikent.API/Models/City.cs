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
        public int MonthCostMax { get; set; }
        public int MonthCostMin { get; set; }
        public int DormCost { get; set; }
        public int DormCostMax { get; set; }
        public int DormCostMin { get; set; }
        public string ImageUrl { get; set; }

        public int RentCostMax { get; set; }
        public int RentCostMin { get; set; }
        public float SecurityIndex { get; set; }
        public float CrimeIndex { get; set; }
        public string [] NearCities { get; set; }
        public float SocialScore { get; set; }
        public String NightLife { get; set; }
        public TimeSpan NightLifeStart { get; set; }
        public TimeSpan NightLifeEnd { get; set; }
        public int WeatherMax { get; set; }
        public int WeatherMin { get; set; }
        public string Density { get; set; }
        public string Transportation { get; set; }

    }
} 