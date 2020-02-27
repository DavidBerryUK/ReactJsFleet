using System.Collections.Generic;
using ServerFleet.Models.Entities.User;

namespace ServerFleet.Services.User.Interfaces
{
    public interface IUserFactory
    {
        List<UserModel> GetAll();
    }
}