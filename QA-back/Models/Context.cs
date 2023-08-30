using Microsoft.EntityFrameworkCore;
using QA_back.Models;

namespace QA_back
{
    public class Context : DbContext
    {
        public Context() { }
        public Context(DbContextOptions<Context> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Database=automatebdd;User=root;Password=;",
                                    new MySqlServerVersion(new System.Version(10, 10, 2)));
            }
        }

        public DbSet<Car> Car { get; set; }
        public DbSet<Key> Key { get; set; }    
        public DbSet<Site> Site { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Travel> Travel { get; set; }

    }
}