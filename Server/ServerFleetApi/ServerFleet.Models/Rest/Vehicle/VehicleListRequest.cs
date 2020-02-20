﻿namespace ServerFleet.Models.Rest.Vehicle
{
    public class VehicleListRequest
    {
        public int PageNumber { get; set; }
        public int RowsPerPage { get; set; }
        public string SortBy { get; set; }
        public string SortDir { get; set; }
        public int? FilterDoors { get; set; }
        public string Reg { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Colour { get; set; }
        public int? Mileage { get; set; }
        public string Fuel { get; set; }
        public string BodyType { get; set; }
        public double? Mpg { get; set; }
        public string Transmission { get; set; }
    }
}
