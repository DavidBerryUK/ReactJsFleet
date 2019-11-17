using ServerFleet.Models.Entities.User;

namespace ServerFleet.Services.Authentication.Interfaces
{
    public interface IAuthenticationService
    {
        UserModel Authenticate(string username, string password);
    }
}