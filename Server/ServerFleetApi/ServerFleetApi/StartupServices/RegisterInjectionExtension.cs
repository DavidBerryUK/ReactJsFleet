using Microsoft.Extensions.DependencyInjection;
using ServerFleet.Services.Authentication;
using ServerFleet.Services.Authentication.Interfaces;
using System;
using ServerFleet.Services.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;

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
            services.AddTransient<IVehicleFactory,VehicleFactory>();
            services.AddTransient<IVehicleService,VehicleService>();
            
        }
    }
}
