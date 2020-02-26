using Microsoft.Extensions.DependencyInjection;
using ServerFleet.Services.Authentication;
using ServerFleet.Services.Authentication.Interfaces;
using ServerFleet.Services.Specification;
using ServerFleet.Services.Specification.Interfaces;
using ServerFleet.Services.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;
using System;
using ServerFleet.Services.User;
using ServerFleet.Services.User.Interfaces;

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
            services.AddTransient<ISpecificationService, SpecificationService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserFactory, UserFactory>();

        }
    }
}
