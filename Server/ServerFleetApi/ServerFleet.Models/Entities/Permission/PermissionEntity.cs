namespace ServerFleet.Models.Entities.Permission
{
    public enum EnumPermission
    {
        UserEdit = 100,
        UserView = 110,
        FleetView = 200,
        FleetEdit = 210,
    }

    public class PermissionEntity
    {
        public EnumPermission PermissionId { get; set; }
        public string Name { get; set; }

        public PermissionEntity()
        {

        }

        public PermissionEntity(EnumPermission permissionId, string name)
        {
            this.PermissionId = permissionId;
            this.Name = name;
        }
    }
}
