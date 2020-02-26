using System;
using System.Collections.Generic;
using ServerFleet.Models.Entities.User;

namespace ServerFleet.Models.Rest.Authentication
{
    public class AuthenticationRequest
    {
        public string Token { get; set; }
        public UserModel User { get; set; }
        public List<string> Permissions { get; set; }
    }
}
