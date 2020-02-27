using System.Collections.Generic;
using ServerFleet.Models.Entities.Permission;
using ServerFleet.Models.Entities.User;
using ServerFleet.Services.User.Interfaces;

namespace ServerFleet.Services.User
{
    public class UserFactory : IUserFactory
    {
        public List<UserModel> GetAll()
        {
            var users = new List<UserModel>
            {
                new UserModel
                {
                    Id = 1 ,
                    UserName = "david",
                    Forename = "David",
                    Surname = "Blogs",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 2 ,
                    UserName = "harry",
                    Forename = "Harry",
                    Surname = "Smith",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 3 ,
                    UserName = "jim",
                    Forename = "Jim",
                    Surname = "Jones",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 4 ,
                    UserName = "ben",
                    Forename = "Ben",
                    Surname = "Brown",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetView,
                    }

                },
                new UserModel
                {
                    Id = 5 ,
                    UserName = "john",
                    Forename = "John",
                    Surname = "Martin",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                    }
                },
                new UserModel
                {
                    Id = 6 ,
                    UserName = "claire",
                    Forename = "Claire",
                    Surname = "Roberts",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.FleetView,
                    }
                },
                new UserModel
                {
                    Id = 7 ,
                    UserName = "maverick",
                    Forename = "Maverick",
                    Surname = "Potter",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                    }
                },
                new UserModel
                {
                    Id = 8 ,
                    UserName = "janet",
                    Forename = "Janet",
                    Surname = "Greenwood",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 9 ,
                    UserName = "ann",
                    Forename = "Ann",
                    Surname = "Little",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 10,
                    UserName = "peter",
                    Forename = "Peter",
                    Surname = "Colins",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 11,
                    UserName = "frank",
                    Forename = "Frank",
                    Surname = "Cloud",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 12,
                    UserName = "kim",
                    Forename = "Kim",
                    Surname = "Bailey",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 13,
                    UserName = "rodger",
                    Forename = "Rodger",
                    Surname = "Knight",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 14,
                    UserName = "lois",
                    Forename = "Lois",
                    Surname = "Swift",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 15,
                    UserName = "matt",
                    Forename = "Mathew",
                    Surname = "Peterson",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 16,
                    UserName = "ash",
                    Forename = "Ashley",
                    Surname = "Turner",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }

                },
                new UserModel
                {
                    Id = 17,
                    UserName = "jay",
                    Forename = "Jay",
                    Surname = "Shepherd",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetView,
                    }


                },
                new UserModel
                {
                    Id = 18,
                    UserName = "lara",
                    Forename = "Lara",
                    Surname = "Brook"
                    ,
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 19,
                    UserName = "debra",
                    Forename = "Debra",
                    Surname = "Ellison",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 20,
                    UserName = "pat",
                    Forename = "Patrick",
                    Surname = "Wolf",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 21,
                    UserName = "rob",
                    Forename = "Robert",
                    Surname = "Webb",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel
                {
                    Id = 22,
                    UserName = "bob",
                    Forename = "Bobby",
                    Surname = "Whitehead",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel{
                    Id = 23,
                    UserName = "parker",
                    Forename = "Parker",
                    Surname = "Watson",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
                new UserModel{
                    Id = 24,
                    UserName = "mark",
                    Forename = "Mark",
                    Surname = "Collins",
                    Permissions = new List<EnumPermission>
                    {
                        EnumPermission.UserView,
                        EnumPermission.FleetEdit,
                        EnumPermission.FleetView,
                        EnumPermission.UserEdit
                    }
                },
            };

            return users;
        }
    }
}
