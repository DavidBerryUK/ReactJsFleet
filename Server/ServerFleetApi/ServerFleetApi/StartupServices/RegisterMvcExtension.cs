using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace ServerFleet.Api.StartupServices
{
    internal static class RegisterMvcExtension
    {
        public static void RegisterMvc(this IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
        }

        public static void RegisterMvc(this IApplicationBuilder app)
        {
            app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}