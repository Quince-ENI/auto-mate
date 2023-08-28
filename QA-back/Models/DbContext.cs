using Microsoft.EntityFrameworkCore;
using QA_back.Models;

public class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<ApiContext> options) : base(options)
    { }

    public DbSet<Api> Apis { get; set; }

}