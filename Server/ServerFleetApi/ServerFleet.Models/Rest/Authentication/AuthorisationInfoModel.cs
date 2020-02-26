using System;
using System.Collections.Generic;
using ServerFleet.Models.Entities.User;

namespace ServerFleet.Models.Rest.Authentication
{
    public class AuthorisationInfoModel
    {
        public Guid Token { get; set; }
        public UserModel User { get; set; }
        public List<string > Permissions { get; set; }
    }
}
