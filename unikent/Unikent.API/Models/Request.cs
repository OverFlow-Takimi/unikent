using System.ComponentModel.DataAnnotations;

namespace Unikent.API.Models
{
    public class Request
    {
        [Key]
        public Guid RId { get; set; }
        public Guid MId { get; set; }
        public int MonthlyIncome { get; set; }
        public int ImportanceSafety { get; set; }
        public int ImportanceSocial { get; set; }
        public bool WantsNightLife { get; set; }
        public float Temperature { get; set; }
        public bool WantsNatureLifestyle { get; set; }
        public int ImportanceCost { get; set; }
        public int ImportanceTransportLevel { get; set; }
    }

}

