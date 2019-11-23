using System;
using System.Reflection;
using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.AspNetCore.Builder;
using ServerFleet.Models.Interfaces.AutoMapper;
using ServerFleet.Utilities.Reflection;

namespace ServerFleet.Api.StartupServices
{
    public static class RegisterAutomapperExtension
    {
        public static void RegisterAutoMapper(this IApplicationBuilder app, Assembly assembly )        {            if (app == null)            {                throw new ArgumentNullException(nameof(app));            }            var cfg = new MapperConfigurationExpression();

            var mappers = new ClassListFactory().CreateListOfClassesWithInterface<IAutoMapperConfig>(assembly);            mappers.ForEach(o => o.Map(cfg));

            Mapper.Initialize(cfg);        }
    }
}
