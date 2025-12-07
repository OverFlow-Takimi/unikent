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

        public CitiesController(ICityRecommendationsService recommendationService)
        {
            _recommendationService = recommendationService;
        }

        // Şehirleri listele
        [HttpGet]
        public ActionResult<List<City>> GetAll()
        {
            // Şimdilik basit: Db yoksa boş liste dönebilir
            return Ok(new List<City>());
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
