using System;
using System.Collections.Generic;
using System.Text;
using ServerFleet.Models.Entities.User;

namespace ServerFleet.Services.User
{
    public class UserFactory : IUserFactory
    {
        public List<UserModel> GetAll()
        {
            return new List<UserModel>
            {
                new UserModel{ Id = 1 , UserName = "david", Forename = "David", Surname = "Blogs"},
                new UserModel{ Id = 2 , UserName = "harry", Forename = "Harry", Surname = "Smith"},
                new UserModel{ Id = 3 , UserName = "jim", Forename = "Jim", Surname = "Jones"},
                new UserModel{ Id = 4 , UserName = "ben", Forename = "Ben", Surname = "Brown"}
            };
        }
    }
}
