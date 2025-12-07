namespace Unikent.API.DTOs
{
    public interface CityDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public float SecurityScore { get; set; }    
        public float SocialScore { get; set; }     

        public decimal AvgMonthlyCost { get; set; }  
        public decimal MinMonthlyCost { get; set; }  
        public decimal MaxMonthlyCost { get; set; }  

        public string NightLifeLevel { get; set; }   
        public string Climate { get; set; }          
    }
}
