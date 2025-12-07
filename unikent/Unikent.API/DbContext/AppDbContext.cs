using DefaultNamespace;
using Microsoft.EntityFrameworkCore;
using Unikent.API.Models;

namespace Unikent.API.DbContext;

public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    //Veritabanı tablolarımız
    public DbSet<City> Cities { get; set; }
    public DbSet<Member> Members { get; set; }
    public DbSet<Request> Requests { get; set; }
    public DbSet<Result> Results { get; set; }
}
