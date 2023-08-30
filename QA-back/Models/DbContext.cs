using Microsoft.EntityFrameworkCore;
using QA_back.Models;

public class Context : DbContext
{
    public Context() { }
    public Context(DbContextOptions<Context> options) : base(options){ }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseMySql("Server=localhost;Database=automatrebdd;User=root;Password=;", new MySqlServerVersion(new Version(10, 4, 6))); // Remplacez 10.4.6 par la version de votre MariaDB
        }
    }

    public DbSet<Car> Cars { get; set; }
    public DbSet<Key> Keys { get; set; }
    public DbSet<Site> Sites { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Travel> Travels { get; set; }

}