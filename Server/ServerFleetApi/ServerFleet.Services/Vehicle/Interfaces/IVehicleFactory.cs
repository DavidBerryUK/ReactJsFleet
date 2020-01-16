using ServerFleet.Models.Entities.Vehicle;
using System.Collections.Generic;

namespace ServerFleet.Services.Vehicle.Interfaces
{
    public interface IVehicleFactory
    {
        IEnumerable<VehicleModel> GetAll();
    }
}