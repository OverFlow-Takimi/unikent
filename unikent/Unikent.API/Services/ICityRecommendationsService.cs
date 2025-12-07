using Unikent.API.Models;

namespace Unikent.API.Services;
    public interface ICityRecommendationsService
    {
<<<<<<< HEAD
        List<Result> GetTopCities(Request request, int topN = 3);
=======
        List<Result> CalculateRecommendations(Request request);
>>>>>>> da74f5c0184bfbd4dc4f40a01361c196f8c2ba30
    }
