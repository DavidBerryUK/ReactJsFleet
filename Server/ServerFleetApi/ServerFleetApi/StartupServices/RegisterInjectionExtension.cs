using Microsoft.Extensions.DependencyInjection;
using ServerFleet.Services.Authentication;
using ServerFleet.Services.Authentication.Interfaces;
using System;

namespace ServerFleet.Api.StartupServices
{
    internal static class RegisterInjectionExtension
    {
        public static void RegisterInjection(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            //  Services
            services.AddTransient<IAuthenticationService, AuthenticationService>();
            
        }
    }
}
