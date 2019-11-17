using Microsoft.AspNetCore.Mvc;
using ServerFleet.Models.Rest.Authentication;
using ServerFleet.Services.Authentication.Interfaces;

namespace ServerFleet.Api.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        public ActionResult<AuthenticationResponse> Logon(AuthenticationRequest request)
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