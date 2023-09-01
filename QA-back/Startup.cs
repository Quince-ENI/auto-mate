﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Pomelo.EntityFrameworkCore.MySql;
using Microsoft.OpenApi.Models;
using System;
using Microsoft.Extensions.Options;


namespace QA_back
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }        

        // Cette méthode est appelée au runtime. Utilisez cette méthode pour ajouter des services au conteneur.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<Context>();

            services.AddControllers();

            services.AddDbContext<Context>(options =>
                options.UseMySql(Configuration.GetConnectionString("DefaultConnection"),
                                        new MySqlServerVersion(new System.Version(10, 10, 2))));
            //options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));

            // Ajoutez d'autres services ici
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mon API", Version = "v1" });
            });
        }

        //Cette méthode est appelée au runtime. Utilisez cette méthode pour configurer le pipeline de requête HTTP.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mon API v1");
                });
            }
        
            app.UseHttpsRedirection();
        
            app.UseRouting();
        
            app.UseAuthorization();
        
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}