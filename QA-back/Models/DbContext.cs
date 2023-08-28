using Microsoft.EntityFrameworkCore;
using QA_back.Models;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options)
    { }

    public DbSet<Api> Apis { get; set; }

}