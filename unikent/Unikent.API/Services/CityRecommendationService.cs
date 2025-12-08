using Unikent.API.DbContext;
using Unikent.API.Models;

namespace Unikent.API.Services
{
    public class CityRecommendationService : ICityRecommendationsService
    {
        private readonly AppDbContext _context;

        public CityRecommendationService(AppDbContext context)
        {
            _context = context;
        }
        public List<Result> GetTopCities(Request request, int topN = 3)
        {
            var cities = _context.Cities.ToList();
            var results = new List<Result>();


            foreach (var city in cities)
            {
                double score = 0;

                if (city.MonthCost > 0 && request.MonthlyIncome > 0)
                {
                    var costRatio = (double)request.MonthlyIncome / city.MonthCost;
                    score += costRatio * request.ImportanceCost;
                }

                double normalizedSafetyCity = city.SecurityIndex / 100.0; 
                double normalizedSafetyRequest = request.ImportanceSafety / 100.0;
                score += (normalizedSafetyCity * normalizedSafetyRequest) * 20;

                double normalizedSocialCity = city.SocialScore / 10.0;
                double normalizedSocialRequest = request.ImportanceSocial / 10.0;
                score += (normalizedSocialCity * normalizedSocialRequest) * 15;

                if (city.NightLife != null && request.WantsNightLife) 
                {
                     score += 10;
                }

                if (request.WantsNatureLifestyle)
                {
                    double densityScore = 0;
                    if (!string.IsNullOrEmpty(city.Density))
                    {
                        var d = city.Density.ToLower();
                        if (d.Contains("sakin")) densityScore = 10;
                        else if (d.Contains("orta")) densityScore = 5;
                        else if (d.Contains("yoğun")) densityScore = 2;
                        else densityScore = 0;
                    }
                    score += densityScore * 2;
                }

                int cityTransportScore = 0;
                if (!string.IsNullOrEmpty(city.Transportation))
                {
                   var t = city.Transportation.ToLower();
                   if (t.Contains("çok gelişmiş")) cityTransportScore = 3;
                   else if (t.Contains("gelişmiş")) cityTransportScore = 2;
                   else if (t.Contains("orta")) cityTransportScore = 1;
                   else cityTransportScore = 0;
                }
                
                score += (cityTransportScore * request.ImportanceTransportLevel) * 5;


                results.Add(new Result
                {
                    CName = city.CName,
                    Score = score,
                    City = city
                });
            }
                    return results
                .OrderByDescending(r => r.Score).Take(topN).ToList();
        }
                    
            
       }

        
    
}
