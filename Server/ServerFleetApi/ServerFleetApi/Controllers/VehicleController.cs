using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Rest.Base;
using ServerFleet.Models.Rest.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;

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
        public ActionResult<BaseResponseCollection<VehicleJson>> GetAll([FromQuery] VehicleListRequest request)
        {
            return Ok(_vehicleService.GetWithFilter(request));
        }

        [HttpGet("{registration}")]
        public ActionResult<VehicleJson> GetByRegistration(string registration)
        {
            return Ok(_vehicleService.GetByRegistration(registration));
        }
    }
}