using System;
using ServerFleet.Models.Entities.User;

namespace ServerFleet.Models.Entities.Authentication
{
    public class TokenEntity
    {
        public Guid Token { get; set; }
        public UserModel User { get; set; }
    }
}
