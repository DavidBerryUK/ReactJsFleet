﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ServerFleet.Models.Rest.Authentication
{
    public class AuthenticationRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
