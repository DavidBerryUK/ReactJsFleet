using ServerFleet.Models.Entities.User;
using ServerFleet.Services.Authentication.Interfaces;
using System;

namespace ServerFleet.Services.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        public UserModel Authenticate(string username, string password)
        {
            if (username.Equals("gford", StringComparison.InvariantCultureIgnoreCase) &
                password.Equals("river100", StringComparison.InvariantCultureIgnoreCase))
            {
                return new UserModel()
                {
                    Id = 1,
                    Forename = "Gavin",
                    Surname = "Ford",
                    UserName = "GFord"
                };
            }

            return null;
        }
    }
}
