namespace Unikent.API.DTOs
{
    public class CityResponseDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } 
        public float Population { get; set; } 
        public string Image { get; set; } 
        public string StudentPopulation { get; set; }
        
        public CostRange MonthlyCost { get; set; }
        public CostRange DormCost { get; set; }
        public CostRange RentCost { get; set; }
        
        public float SafetyIndex { get; set; } 
        public float CrimeIndex { get; set; } 
        public string[] NearCities { get; set; }
        public float SocialScore { get; set; }
        public string Nightlife { get; set; }
        public string Weather { get; set; } 
        public string CrowdLevel { get; set; } 
        public string Transportation { get; set; }
    }

    public class CostRange 
    { 
        public int Min { get; set; } 
        public int Max { get; set; } 
    }
}
