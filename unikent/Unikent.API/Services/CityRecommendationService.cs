using Microsoft.Identity.Client;
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
                    var costRatio = request.MonthlyIncome / city.MonthCost;
                    score += costRatio * request.ImportanceCost;
                }
                score += city.SecurityIndexs * request.ImportanceSafety;
                score += city.SocialScore * request.ImportanceSocial;

                if (request.WantsNightLife && city.NightLife == "var")
                    score += 5;

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
