using ServerFleet.Models.Entities.User;

namespace ServerFleet.Models.Rest.Authentication
{
    public class AuthenticationRequest
    {
        public UserModel User { get; set; }
    }
}
