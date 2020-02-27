using System.Collections.Generic;
using ServerFleet.Models.Entities.Permission;

namespace ServerFleet.Models.Entities.User
{
    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string Password { get; set; }
        public List<EnumPermission> Permissions { get; set; }
    }
}
