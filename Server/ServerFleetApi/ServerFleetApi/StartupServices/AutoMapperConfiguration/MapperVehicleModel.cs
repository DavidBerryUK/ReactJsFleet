using AutoMapper;
using ServerFleet.Models.Entities.Vehicle;
using ServerFleet.Models.Interfaces.AutoMapper;
using ServerFleet.Models.Rest.Vehicle;

namespace ServerFleet.Api.StartupServices.AutoMapperConfiguration
{
    public class MapperVehicleModel : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<VehicleModel, VehicleJson>();
        }
    }
}
