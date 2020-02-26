using System.Collections.Generic;
using ServerFleet.Models.Entities.User;

namespace ServerFleet.Services.User
{
    public interface IUserFactory
    {
        List<UserModel> GetAll();
    }
}