using ServerFleet.Models.Rest.Base;
using ServerFleet.Models.Rest.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleService
    {
        BaseResponseCollection<VehicleResponse> GetWithFilter(VehicleListRequest request);
        BaseItemResponse<VehicleResponse> GetByRegistration(string registration);
        BaseItemResponse<VehicleResponse> GetByVehicleId(int vehicleId);
    }
}