namespace ServerFleet.Models.Rest.Vehicle
{
    public class VehicleResponse
    {
        public int Doors { get; set; }
        public string Registration { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Colour { get; set; }
        public int Mileage { get; set; }
        public string Fuel { get; set; }
        public string BodyType { get; set; }
        public double Mpg { get; set; }
        public string Transmission { get; set; }
    }
}
