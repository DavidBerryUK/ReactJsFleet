using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Entities.List;
using ServerFleet.Models.Rest.Base;
using ServerFleet.Services.Specification.Interfaces;

namespace ServerFleet.Api.Controllers
{
    [ApiController]
    [Route("api/specification")]
    public class SpecificationController : Controller
    {
        private readonly ISpecificationService _specificationService;

        public SpecificationController(ISpecificationService specificationService)
        {
            _specificationService = specificationService;
        }

        [HttpGet("list/models")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueModels()
        {
            return Ok(_specificationService.GetUniqueModels());
        }

        [HttpGet("list/bodyTypes")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueBodyTypes()
        {
            return Ok(_specificationService.GetUniqueBodyType());
        }

        [HttpGet("list/makes")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueMakes()
        {
            return Ok(_specificationService.GetUniqueMake());
        }

        [HttpGet("list/colours")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueColours()
        {
            return Ok(_specificationService.GetUniqueColour());
        }

        [HttpGet("list/doors")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueDoors()
        {
            return Ok(_specificationService.GetUniqueDoors());
        }

        [HttpGet("list/fuel")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueFuel()
        {
            return Ok(_specificationService.GetUniqueFuel());
        }

        [HttpGet("list/transmission")]
        public ActionResult<BaseResponseCollection<ListItemModel>> GetUniqueTransmission()
        {
            return Ok(_specificationService.GetUniqueTransmission());
        }

    }
}