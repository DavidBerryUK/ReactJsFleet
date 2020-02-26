using ServerFleet.Models.Entities.User;

namespace ServerFleet.Services.User.Interfaces
{
    public interface IUserService
    {
        UserModel Get(string username, string password);
    }
}