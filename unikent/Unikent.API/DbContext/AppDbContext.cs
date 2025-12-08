using Unikent.API.Models;

namespace Unikent.API.DbContext
{
    public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public AppDbContext(Microsoft.EntityFrameworkCore.DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public Microsoft.EntityFrameworkCore.DbSet<City> Cities { get; set; } = null!;
        public Microsoft.EntityFrameworkCore.DbSet<Member> Members { get; set; } = null!;
        public Microsoft.EntityFrameworkCore.DbSet<Request> Requests { get; set; } = null!;
        public Microsoft.EntityFrameworkCore.DbSet<Result> Results { get; set; } = null!;

        protected override void OnModelCreating(Microsoft.EntityFrameworkCore.ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>()
                .Property(e => e.NearCities)
                .HasConversion(
                    v => string.Join(',', v),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries));
        }
    }

}


