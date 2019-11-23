using System.Collections.Generic;
using ServerFleet.Models.Entities.Vehicle;
using ServerFleet.Models.Rest.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleService
    {
        IEnumerable<VehicleModel> GetWithFilter(VehicleListRequest request);
        VehicleModel GetByRegistration(string registration);
    }
}