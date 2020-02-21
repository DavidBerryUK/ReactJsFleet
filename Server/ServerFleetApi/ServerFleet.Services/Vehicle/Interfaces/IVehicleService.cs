using ServerFleet.Models.Rest.Base;
using ServerFleet.Models.Rest.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleService
    {
        BaseResponseCollection<VehicleJson> GetWithFilter(VehicleListRequest request);
        BaseItemResponse<VehicleJson> GetByRegistration(string registration);
        BaseItemResponse<VehicleJson> GetByVehicleId(int vehicleId);
    }
}