using System;
using System.Collections.Generic;
namespace Unikent.API.Models;

public class City
{
    public Guid Id { get; set; }
    public string CName { get; set; }
    public float GPopulation { get; set; }
    public float SPopulation { get; set; }
    public float MonthCost { get; set; }
    public float DormitoryPrices { get; set; }
    public float RentPrices { get; set; }
    public float SecurityIndexs { get; set; }
    public float OffenceInddex { get; set; }
    public string  NearCity { get; set; }
    public float SocialScore { get; set; }
    public String NightLife { get; set; }
    public TimeSpan NigtLifeStart { get; set; }
    public TimeSpan NightLifeEnd { get; set; }
    public string Weaather { get; set; }
    public string Density { get; set; }
    public string Transpor { get; set; }

}