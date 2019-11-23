using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Entities.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;
using System.Collections.Generic;
using ServerFleet.Models.Rest.Vehicle;

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
        public ActionResult<IEnumerable<VehicleModel>> GetAll([FromQuery] VehicleListRequest request)
        {
            return Ok(_vehicleFactory.GetWithFilter(request));
        }

        [HttpGet("{registration}")]
        public ActionResult<VehicleModel> GetByRegistration(string registration)
        {
            return Ok(_vehicleFactory.GetByRegistration(registration));
        }


    }
}