using System;
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

            if ( !string.IsNullOrEmpty(request.Token))
            {
                if (Guid.TryParse(request.Token, out var nativeToken))
                {
                    var authentication = _authenticationService.Authenticate(nativeToken);
                    if (authentication != null)
                    {
                        return Ok(new AuthenticationResponse {Entity = authentication});
                    }
                }
            }

            if (request.User != null)
            {
                var authentication = _authenticationService.Authenticate(request.User.UserName, request.User.Password);
                if (authentication != null)
                {
                    return Ok(new AuthenticationResponse {Entity = authentication});
                }
            }

            return Unauthorized();
        }
    }
}