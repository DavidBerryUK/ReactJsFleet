using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Entities.User;
using ServerFleet.Models.Rest.Base;
using ServerFleet.Services.User.Interfaces;

namespace ServerFleet.Api.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("")]
        public ActionResult<BaseResponseCollection<UserModel>> GetAll()
        {
            var users = _userService.GetAll();
            var response = new BaseResponseCollection<UserModel>
            {
                Entities = users,
                TotalPages = 1,
                TotalRows = users.Count
            };
            return Ok(response);
        }

        [HttpGet("{id}")]
        public ActionResult<BaseItemResponse<UserModel>> GetById(int id)
        {
            var response = new BaseItemResponse<UserModel>
            {
                Entity = _userService.Get(id)

            };
            return Ok(response);
        }
    }
}
