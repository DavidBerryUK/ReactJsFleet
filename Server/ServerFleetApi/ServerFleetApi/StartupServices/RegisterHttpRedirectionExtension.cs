﻿using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace ServerFleet.Api.StartupServices
{
    internal static class RegisterHttpRedirectionExtension
    {
        public static void RegisterHttpRedirection(this IApplicationBuilder app, IHostingEnvironment env)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            if (env == null)
            {
                throw new ArgumentNullException(nameof(env));
            }

            app.RegisterStrictTransportSecurity(env);
        }
    }
}