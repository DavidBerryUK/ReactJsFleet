using System.Collections.Generic;
using ServerFleet.Models.Entities.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleFactory
    {
        List<VehicleModel> GetAll();
        VehicleModel GetByRegistration(string registration);
    }
}