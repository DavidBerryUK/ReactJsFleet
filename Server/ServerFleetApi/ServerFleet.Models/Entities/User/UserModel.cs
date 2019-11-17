using System;
using System.Collections.Generic;
using System.Text;

namespace ServerFleet.Models.Entities.User
{
    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
    }
}
