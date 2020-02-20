using ServerFleet.Models.Entities.Vehicle;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ServerFleet.Services.Vehicle.PipesAndFilters
{
    public static class VehicleFilters
    {
        public static IEnumerable<VehicleModel> FilterBodyType(this IEnumerable<VehicleModel> list, string bodyType)
        {
            if (string.IsNullOrEmpty(bodyType))
            {
                return list;
            }
            return list.Where(o => o.BodyType.Contains(bodyType, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterColour(this IEnumerable<VehicleModel> list, string colour)
        {
            if (string.IsNullOrEmpty(colour))
            {
                return list;
            }
            return list.Where(o => o.Colour.Contains(colour, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterFuel(this IEnumerable<VehicleModel> list, string fuel)
        {
            if (string.IsNullOrEmpty(fuel))
            {
                return list;
            }
            return list.Where(o => o.Fuel.Contains(fuel, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterMake(this IEnumerable<VehicleModel> list, string make)
        {
            if (string.IsNullOrEmpty(make))
            {
                return list;
            }
            return list.Where(o => o.Make.Contains(make, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterModel(this IEnumerable<VehicleModel> list, string model)
        {
            if (string.IsNullOrEmpty(model))
            {
                return list;
            }
            return list.Where(o => o.Model.Contains(model, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterRegistration(this IEnumerable<VehicleModel> list, string registration)
        {
            if (string.IsNullOrEmpty(registration))
            {
                return list;
            }
            return list.Where(o => o.Registration.Contains(registration, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterTransmission(this IEnumerable<VehicleModel> list, string transmission)
        {
            if (string.IsNullOrEmpty(transmission))
            {
                return list;
            }
            return list.Where(o => o.Transmission.Contains(transmission, StringComparison.InvariantCultureIgnoreCase));
        }

        public static IEnumerable<VehicleModel> FilterDoors(this IEnumerable<VehicleModel> list, int? doors)
        {
            if (!doors.HasValue)
            {
                return list;
            }
            return list.Where(o => o.Doors == doors);
        }

        public static IEnumerable<VehicleModel> FilterMpg(this IEnumerable<VehicleModel> list, double? mpg)
        {
            if (!mpg.HasValue)
            {
                return list;
            }
            return list.Where(o => o.Mpg == mpg);
        }

        public static IEnumerable<VehicleModel> FilterMileage(this IEnumerable<VehicleModel> list, int? mileage)
        {
            if (!mileage.HasValue)
            {
                return list;
            }
            return list.Where(o => o.Mileage == mileage);
        }
    }
}
