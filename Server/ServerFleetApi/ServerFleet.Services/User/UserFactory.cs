using System.Collections.Generic;
using ServerFleet.Models.Entities.User;
using ServerFleet.Services.User.Interfaces;

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
                new UserModel{ Id = 4 , UserName = "ben", Forename = "Ben", Surname = "Brown"},
                new UserModel{ Id = 5 , UserName = "john", Forename = "John", Surname = "Martin"},
                new UserModel{ Id = 6 , UserName = "claire", Forename = "Claire", Surname = "Roberts"},
                new UserModel{ Id = 7 , UserName = "maverick", Forename = "Maverick", Surname = "Potter"},
                new UserModel{ Id = 8 , UserName = "janet", Forename = "Janet", Surname = "Greenwood"},
                new UserModel{ Id = 9 , UserName = "ann", Forename = "Ann", Surname = "Little"},
                new UserModel{ Id = 10, UserName = "peter", Forename = "Peter", Surname = "Colins"},
                new UserModel{ Id = 11, UserName = "frank", Forename = "Frank", Surname = "Coulds"},
                new UserModel{ Id = 12, UserName = "kim", Forename = "Kim", Surname = "Bailey"},
                new UserModel{ Id = 13, UserName = "rodger", Forename = "Rodger", Surname = "Knight"},
                new UserModel{ Id = 14, UserName = "lois", Forename = "Lois", Surname = "Swift"},
                new UserModel{ Id = 15, UserName = "matt", Forename = "Mathew", Surname = "Peterson"},
                new UserModel{ Id = 16, UserName = "ash", Forename = "Ashley", Surname = "Turner"},
                new UserModel{ Id = 17, UserName = "jay", Forename = "Jay", Surname = "Shepherd"},
                new UserModel{ Id = 18, UserName = "lara", Forename = "Lara", Surname = "Brook"},
                new UserModel{ Id = 19, UserName = "debra", Forename = "Debra", Surname = "Ellison"},
                new UserModel{ Id = 20, UserName = "pat", Forename = "Patrick", Surname = "Wolf"},
                new UserModel{ Id = 21, UserName = "rob", Forename = "Robert", Surname = "Webb"},
                new UserModel{ Id = 22, UserName = "bob", Forename = "Bobby", Surname = "Whitehead"},
                new UserModel{ Id = 23, UserName = "parker", Forename = "Parker", Surname = "Watson"},
                new UserModel{ Id = 24, UserName = "mark", Forename = "Mark", Surname = "Collins"},
            };
        }
    }
}
