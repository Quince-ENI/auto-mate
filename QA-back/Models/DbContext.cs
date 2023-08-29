using Microsoft.EntityFrameworkCore;
using QA_back.Models;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options){ }

    public DbSet<Car> Cars { get; set; }
    public DbSet<Responsable> Responsables { get; set; }
    public DbSet<Key> Keys { get; set; }
    public DbSet<Site> Sites { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Travel> Travels { get; set; }

}