using AutoMapper;

namespace ServerFleet.Models.Interfaces.AutoMapper
{
    public interface IAutoMapperConfig
    {
        void Map(IMapperConfigurationExpression cfg);
    }
}
