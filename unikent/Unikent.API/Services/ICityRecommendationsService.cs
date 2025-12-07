using Unikent.API.Models;

namespace Unikent.API.Services
{
    public interface ICityRecommendationsService
    {
        List<Result> GetTopCities(RequestDecompressionBuilderExtensions request, int topN = 3);
    }
}
