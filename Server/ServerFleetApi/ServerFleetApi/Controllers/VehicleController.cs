using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Entities.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;
using System.Collections.Generic;

namespace ServerFleet.Api.Controllers
{
    [ApiController]
    [Route("api/vehicle")]
    public class VehicleController : Controller
    {

        private readonly IVehicleFactory _vehicleFactory;

        public VehicleController(IVehicleFactory vehicleFactory)
        {
            _vehicleFactory = vehicleFactory;
        }

        [HttpGet]
        public ActionResult<List<VehicleModel>> GetAll()
        {
            return _vehicleFactory.GetAll();
        }

        [HttpGet("{registration}")]
        public ActionResult<VehicleModel> GetByRegistration(string registration)
        {
            return _vehicleFactory.GetByRegistration(registration);
        }


    }
}