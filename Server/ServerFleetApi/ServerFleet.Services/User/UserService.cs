using System;
using System.Collections.Generic;
using System.Linq;
using ServerFleet.Models.Entities.User;
using ServerFleet.Services.User.Interfaces;

namespace ServerFleet.Services.User
{
    public class UserService : IUserService
    {
        public static List<UserModel> Users = new List<UserModel>();

        public UserService(IUserFactory userFactory)
        {
            Users = userFactory.GetAll();
        }

        public UserModel Get(string username, string password)
        {
            if (!password.Equals("password", StringComparison.InvariantCultureIgnoreCase))
            {
                return null;
            }

            return Users.FirstOrDefault(o => o.UserName.Equals(username, StringComparison.CurrentCultureIgnoreCase));
        }

        public UserModel Get(int id)
        {
            return Users.FirstOrDefault(o => o.Id == id);
        }
    }
}
