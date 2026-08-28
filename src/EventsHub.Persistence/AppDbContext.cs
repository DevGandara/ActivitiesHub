using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Event> Events { get; set; } // el get; set; hace automaticamente el getter y el setter
    }
}