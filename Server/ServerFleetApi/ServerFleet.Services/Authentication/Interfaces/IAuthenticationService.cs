using System;
using ServerFleet.Models.Rest.Authentication;

namespace ServerFleet.Services.Authentication.Interfaces
{
    public interface IAuthenticationService
    {
        AuthorisationInfoModel Authenticate(string username, string password);
        AuthorisationInfoModel Authenticate(Guid token);
    }
}