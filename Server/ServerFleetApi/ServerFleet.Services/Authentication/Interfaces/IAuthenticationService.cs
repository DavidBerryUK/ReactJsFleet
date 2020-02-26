using ServerFleet.Models.Rest.Authentication;

namespace ServerFleet.Services.Authentication.Interfaces
{
    public interface IAuthenticationService
    {
        AuthorisationInfoModel Authenticate(string username, string password);
    }
}