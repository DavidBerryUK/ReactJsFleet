using ServerFleet.Models.Entities.User;
using ServerFleet.Services.Authentication.Interfaces;
using System;

namespace ServerFleet.Services.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        public UserModel Authenticate(string username, string password)
        {
            if (username.Equals("david", StringComparison.InvariantCultureIgnoreCase) &
                password.Equals("zenith", StringComparison.InvariantCultureIgnoreCase))
            {
                return new UserModel()
                {
                    Id = 1,
                    Forename = "David",
                    Surname = "Ford"
                };
            }

            return null;
        }
    }
}
