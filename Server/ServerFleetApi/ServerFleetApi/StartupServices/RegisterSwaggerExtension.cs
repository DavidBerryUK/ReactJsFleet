using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerUI;

namespace ServerFleet.Api.StartupServices
{
    internal static class RegisterSwaggerExtension
    {
        public static void RegisterSwagger(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ReactJS Prototype Data Server API", Version = "v1" });
            });
        }

        public static void RegisterSwagger(this IApplicationBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/ServerFleet.Api/swagger/v1/swagger.json", "ReactJS Prototype Data Server API");
                options.DocExpansion(docExpansion: DocExpansion.None);

            });
        }
    }
}