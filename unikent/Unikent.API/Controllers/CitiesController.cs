using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Unikent.API.Models;
using Unikent.API.Services;


namespace Unikent.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CitiesController : ControllerBase
    {
        private readonly ICityRecommendationsService _recommendationService;
        private readonly Unikent.API.DbContext.AppDbContext _context;

        public CitiesController(ICityRecommendationsService recommendationService, Unikent.API.DbContext.AppDbContext context)
        {
            _recommendationService = recommendationService;
            _context = context;
        }

        // Şehirleri listele
        [HttpGet]
        public ActionResult<List<Unikent.API.DTOs.CityResponseDto>> GetAll()
        {
            var cities = _context.Cities.Select(c => new Unikent.API.DTOs.CityResponseDto
            {
                Id = c.Id,
                Name = c.CName,
                Population = c.GPopulation,
                Image = c.ImageUrl,
                StudentPopulation = $"{c.SPopulationMin:#,0} - {c.SPopulationMax:#,0}", // Formatting as string range
                MonthlyCost = new Unikent.API.DTOs.CostRange { Min = c.MonthCostMin, Max = c.MonthCostMax },
                DormCost = new Unikent.API.DTOs.CostRange { Min = c.DormCostMin, Max = c.DormCostMax },
                RentCost = new Unikent.API.DTOs.CostRange { Min = c.RentCostMin, Max = c.RentCostMax },
                SafetyIndex = c.SecurityIndex,
                CrimeIndex = c.CrimeIndex,
                NearCities = c.NearCities,
                SocialScore = c.SocialScore,
                Nightlife = c.NightLife,
                Weather = $"{c.WeatherMin}°C / {c.WeatherMax}°C",
                CrowdLevel = c.Density,
                Transportation = c.Transportation
            }).ToList();

            return Ok(cities);
        }

        // Öneri endpoint'i
        [HttpPost("recommend")]
        public ActionResult<List<Result>> Recommend([FromBody] Request request)
        {
            var results = _recommendationService.GetTopCities(request, 3);
            return Ok(results);
        }
    }
}
