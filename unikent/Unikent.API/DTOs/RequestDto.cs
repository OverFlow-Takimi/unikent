namespace Unikent.API.DTOs
{
    public class RequestDto
    {
        public int MonthlyIncome { get; set; }

        public int ImportanceSafety { get; set; }
        public int ImportanceSocial { get; set; }

        public bool WantsNightLife { get; set; }
        public float Temperature { get; set; }
        public bool WantsNatureLifestyle { get; set; }
    }
}
