using System.Collections.Generic;
using ServerFleet.Models.Entities.Permission;

namespace ServerFleet.Services.Permission
{
    public class PermissionFactory : IPermissionFactory
    {
        public List<PermissionEntity> GetAll()
        {
            return new List<PermissionEntity>
            {
                new PermissionEntity(EnumPermission.UserView,"View Users"),
                new PermissionEntity(EnumPermission.UserEdit,"Edit Users"),
                new PermissionEntity(EnumPermission.FleetView,"View Fleet"),
                new PermissionEntity(EnumPermission.FleetEdit,"Edit Fleet"),
            };
        }
    }
}
