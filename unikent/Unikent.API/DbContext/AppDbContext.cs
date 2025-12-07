<<<<<<< HEAD
﻿using DefaultNamespace;
=======
>>>>>>> da74f5c0184bfbd4dc4f40a01361c196f8c2ba30
using Microsoft.EntityFrameworkCore;
using Unikent.API.Models;

namespace Unikent.API.DbContext;

public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
<<<<<<< HEAD
=======

>>>>>>> da74f5c0184bfbd4dc4f40a01361c196f8c2ba30
    //Veritabanı tablolarımız
    public DbSet<City> Cities { get; set; }
    public DbSet<Member> Members { get; set; }
    public DbSet<Request> Requests { get; set; }
    public DbSet<Result> Results { get; set; }
<<<<<<< HEAD
}
=======


}
>>>>>>> da74f5c0184bfbd4dc4f40a01361c196f8c2ba30
