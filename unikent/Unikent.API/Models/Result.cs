using DefaultNamespace;

namespace Unikent.API.Models
{
    public class Result
    {
        public Guid ResultId { get; set; }
        public string CName { get; set; }
        public double Score { get; set; }
        public City City { get; set; }
    }
}
