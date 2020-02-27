using System.Collections.Generic;
using ServerFleet.Models.Entities.Permission;

namespace ServerFleet.Services.Permission
{
    public interface IPermissionFactory
    {
        List<PermissionEntity> GetAll();
    }
}