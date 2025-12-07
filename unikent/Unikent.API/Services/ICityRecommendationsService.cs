using Unikent.API.Models;

namespace Unikent.API.Services;
    public interface ICityRecommendationsService
    {
        List<Result> CalculateRecommendations(Request request);
    }
