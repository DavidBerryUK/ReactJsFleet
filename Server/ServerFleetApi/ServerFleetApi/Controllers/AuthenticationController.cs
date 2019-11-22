using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Rest.Authentication;
using ServerFleet.Services.Authentication.Interfaces;

namespace ServerFleet.Api.Controllers
{
    [ApiController]
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost]
        public ActionResult<AuthenticationResponse> Logon([FromBody] AuthenticationRequest request)
        {
            if (request == null)
            {
                return BadRequest();
            }

            var response = new AuthenticationResponse
            {
                Entity = _authenticationService.Authenticate(request.UserName, request.Password)
            };

            if (response.Entity == null)
            {
                return Unauthorized();
            }

            return Ok(response);
        }
    }
}