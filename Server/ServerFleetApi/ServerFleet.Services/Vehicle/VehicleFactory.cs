using ServerFleet.Models.Entities.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;
using System.Collections.Generic;

namespace ServerFleet.Services.Vehicle
{
    public class VehicleFactory : IVehicleFactory
    {
        public IEnumerable<VehicleModel> GetAll()
        {
            var data = new List<VehicleModel>();

            data.AddRange(GetAudi());
            data.AddRange(GetBmw());
            data.AddRange(GetFord());
            data.AddRange(GetVolkswagen());
            return data;
        }

        private IEnumerable<VehicleModel> GetAudi()
        {
            var data = new List<VehicleModel>
            {
                new VehicleModel {VehicleId = 101, Registration  = "YN23 JXS", Make = "Audi",Model = "A1", Colour = "Red", Mileage = 68077, Fuel="Petrol", Transmission="Automatic", Doors = 3, BodyType="Hatchback", Mpg = 53.3},
                new VehicleModel {VehicleId = 102, Registration  = "YK45 JXO", Make = "Audi",Model = "A3", Colour = "Black", Mileage = 760033, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Hatchback", Mpg = 60.1},
                new VehicleModel {VehicleId = 103, Registration  = "DN77 ABX", Make = "Audi",Model = "A1", Colour = "Blue", Mileage = 68077, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Hatchback", Mpg = 74.2},
                new VehicleModel {VehicleId = 104, Registration  = "SN56 XFD", Make = "Audi",Model = "A3", Colour = "Grey", Mileage = 24022, Fuel="Diesel", Transmission="Automatic", Doors = 3, BodyType="Hatchback", Mpg = 64.3},
                new VehicleModel {VehicleId = 105, Registration  = "DN34 XF4", Make = "Audi",Model = "A4", Colour = "Red", Mileage = 24077, Fuel="Diesel", Transmission="Manual", Doors = 3, BodyType="Hatchback", Mpg = 53.3}
            };

            return data;
        }

        private IEnumerable<VehicleModel> GetBmw()
        {
            var data = new List<VehicleModel>
            {
                new VehicleModel {VehicleId = 201, Registration  = "YP51 XTB", Make = "BMW",Model = "Series 1", Colour = "White", Mileage = 61002, Fuel="Diesel", Transmission="Automatic", Doors = 2, BodyType="Coupe", Mpg = 62.9},
                new VehicleModel {VehicleId = 202, Registration  = "NY88 XTN", Make = "BMW",Model = "Series 1", Colour = "Black", Mileage = 760033, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Sports", Mpg = 60.1},
                new VehicleModel {VehicleId = 203, Registration  = "DN71 XOE", Make = "BMW",Model = "Series 1", Colour = "Blue", Mileage = 68077, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Hatchback", Mpg = 74.2},
                new VehicleModel {VehicleId = 204, Registration  = "YP68 BAN", Make = "BMW",Model = "Series 3", Colour = "Silver", Mileage = 24022, Fuel="Diesel", Transmission="Automatic", Doors = 3, BodyType="Estate", Mpg = 55.3},
                new VehicleModel {VehicleId = 205, Registration  = "YU78 WIG", Make = "BMW",Model = "Series 3", Colour = "Red", Mileage = 24077, Fuel="Diesel", Transmission="Manual", Doors = 3, BodyType="Estate", Mpg = 53.3}
            };

            return data;
        }

        private IEnumerable<VehicleModel> GetFord()
        {
            var data = new List<VehicleModel>
            {
                new VehicleModel {VehicleId = 301, Registration  = "EK13 CAS", Make = "Ford",Model = "C-Max", Colour = "Black", Mileage = 69004, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="MPV", Mpg = 62.8},
                new VehicleModel {VehicleId = 302, Registration  = "DJ94 JCS", Make = "Ford",Model = "C-Max", Colour = "Blue", Mileage = 23421, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="MPV", Mpg = 60.1},
                new VehicleModel {VehicleId = 303, Registration  = "DD21 XJJ", Make = "Ford",Model = "Focus", Colour = "Blue", Mileage = 68077, Fuel="Diesel", Transmission="Automatic", Doors = 3, BodyType="Hatchback", Mpg = 74.2},
                new VehicleModel {VehicleId = 304, Registration  = "XN12 XTD", Make = "Ford",Model = "Focus", Colour = "Silver", Mileage = 24022, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Estate", Mpg = 55.3},
                new VehicleModel {VehicleId = 305, Registration  = "YP43 XTB", Make = "Ford",Model = "Series 3", Colour = "Red", Mileage = 24077, Fuel="Diesel", Transmission="Manual", Doors = 3, BodyType="Estate", Mpg = 53.3}
            };

            return data;
        }

        private IEnumerable<VehicleModel> GetVolkswagen()
        {
            var data = new List<VehicleModel>
            {
                new VehicleModel {VehicleId = 401, Registration  = "YH14 JCA", Make = "Volkswagen",Model = "Up", Colour = "Red", Mileage = 68077, Fuel="Petrol", Transmission="Automatic", Doors = 3, BodyType="Hatchback", Mpg = 53.3},
                new VehicleModel {VehicleId = 402, Registration  = "DN23 CKD", Make = "Volkswagen",Model = "Polo", Colour = "Black", Mileage = 760033, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Hatchback", Mpg = 60.1},
                new VehicleModel {VehicleId = 403, Registration  = "YH19 JCB", Make = "Volkswagen",Model = "Polo", Colour = "Blue", Mileage = 68077, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Hatchback", Mpg = 74.2},
                new VehicleModel {VehicleId = 404, Registration  = "DN53 PQB", Make = "Volkswagen",Model = "Golf", Colour = "Grey", Mileage = 24022, Fuel="Diesel", Transmission="Automatic", Doors = 3, BodyType="Hatchback", Mpg = 64.3},
                new VehicleModel {VehicleId = 405, Registration  = "DN14 WF2", Make = "Volkswagen",Model = "Golf", Colour = "Red", Mileage = 24077, Fuel="Petrol", Transmission="Manual", Doors = 3, BodyType="Hatchback", Mpg = 53.3},
                new VehicleModel {VehicleId = 406, Registration  = "DN18 JE1", Make = "Volkswagen",Model = "Jetta", Colour = "Green", Mileage = 48073, Fuel="Petrol", Transmission="Manual", Doors = 3, BodyType="Saloon", Mpg = 53.3},
                new VehicleModel {VehicleId = 407, Registration  = "DM29 JE9", Make = "Volkswagen",Model = "Jetta", Colour = "Red", Mileage = 1900, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Saloon", Mpg = 53.3},
                new VehicleModel {VehicleId = 408, Registration  = "DN29 JE9", Make = "Volkswagen",Model = "Passat", Colour = "Silver", Mileage = 105022, Fuel="Petrol", Transmission="Automatic", Doors = 3, BodyType="Hatchback", Mpg = 53.3},
                new VehicleModel {VehicleId = 409, Registration  = "EF19 JE8", Make = "Volkswagen",Model = "Scirocco", Colour = "Red", Mileage = 38448, Fuel="Petrol", Transmission="Manual", Doors = 5, BodyType="Hatchback", Mpg = 53.3},
                new VehicleModel {VehicleId = 410, Registration  = "DN49 JE8", Make = "Volkswagen",Model = "Scirocco", Colour = "Grey", Mileage = 3933, Fuel="Diesel", Transmission="Automatic", Doors = 5, BodyType="Hatchback", Mpg = 53.3},
                new VehicleModel {VehicleId = 411, Registration  = "DB93 AI1", Make = "Volkswagen",Model = "Touran", Colour = "Blue", Mileage = 2344, Fuel="Diesel", Transmission="Manual", Doors = 3, BodyType="Hatchback", Mpg = 53.3}
            };

            return data;
        }
    }
}
