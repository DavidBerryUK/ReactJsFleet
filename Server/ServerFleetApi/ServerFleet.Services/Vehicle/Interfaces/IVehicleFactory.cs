using System.Collections.Generic;
using ServerFleet.Models.Entities.Vehicle;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleFactory
    {
        IEnumerable<VehicleModel> GetAll();
    }
}