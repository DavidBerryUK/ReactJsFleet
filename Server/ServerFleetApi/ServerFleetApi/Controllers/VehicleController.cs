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
        private readonly IVehicleService _vehicleService;

        public VehicleController(IVehicleService vehicleService)
        {
            _vehicleService = vehicleService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<VehicleModel>> GetAll([FromQuery] VehicleListRequest request)
        {
            return Ok(_vehicleService.GetWithFilter(request));
        }

        [HttpGet("{registration}")]
        public ActionResult<VehicleModel> GetByRegistration(string registration)
        {
            return Ok(_vehicleService.GetByRegistration(registration));
        }
    }
}