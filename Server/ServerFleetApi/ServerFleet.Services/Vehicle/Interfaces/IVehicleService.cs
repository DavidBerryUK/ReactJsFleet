using ServerFleet.Models.Rest.Base;
using ServerFleet.Models.Rest.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleService
    {
        BaseResponseCollection<VehicleJson> GetWithFilter(VehicleListRequest request);
        VehicleJson GetByRegistration(string registration);
        VehicleJson GetByVehicleId(int vehicleId);
    }
}