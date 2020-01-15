namespace ServerFleet.Models.Rest.Vehicle
{
    public class VehicleListRequest
    {
        public int PageNumber { get; set; }
        public int RowsPerPage { get; set; }
        public string SortField { get; set; }
        public string SortDirection { get; set; }
        public int? FilterDoors { get; set; }
        public string FilterRegistration { get; set; }
        public string FilterMake { get; set; }
        public string FilterModel { get; set; }
        public string FilterColour { get; set; }
        public int? FilterMileage { get; set; }
        public string FilterFuel { get; set; }
        public string FilterBodyType { get; set; }
        public double? FilterMpg { get; set; }
        public string FilterTransmission { get; set; }
    }
}
