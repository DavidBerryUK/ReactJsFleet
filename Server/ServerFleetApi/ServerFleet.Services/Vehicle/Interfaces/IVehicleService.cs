using System.Collections.Generic;
using ServerFleet.Models.Entities.Vehicle;
using ServerFleet.Models.Rest.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleService
    {
        IEnumerable<VehicleJson> GetWithFilter(VehicleListRequest request);
        VehicleJson GetByRegistration(string registration);
    }
}