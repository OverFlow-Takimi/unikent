<<<<<<< HEAD
﻿using System.ComponentModel.DataAnnotations;

namespace Unikent.API.Models
{
    public class Request
    {
        [Key]
       public Guid RId { get; set; }
        public Guid MId { get; set; }
        public float GPopulation { get; set; }
        public float SPopulation { get; set; }
        public float MonthlyIncome { get; set; }
=======
using System;
using System.ComponentModel.DataAnnotations;
namespace UniKent.API.Models;

public class Request
{
    [Key]
    public Guid RequestId { get; set; }
    public Guid MId { get; set; }
    public float GPopulation { get; set; }
    public float SPopulation { get; set; }
    public float MonthlyIncome { get; set; }
>>>>>>> da74f5c0184bfbd4dc4f40a01361c196f8c2ba30

    public int ImportanceCost { get; set; }
    public int ImportanceSafety { get; set; }
    public int ImportanceSocial { get; set; }

    public bool WantsNightLife { get; set; }
    public bool PrefersHotClimate { get; set; }
    public bool WantsNatureLifestyle { get; set; }
}