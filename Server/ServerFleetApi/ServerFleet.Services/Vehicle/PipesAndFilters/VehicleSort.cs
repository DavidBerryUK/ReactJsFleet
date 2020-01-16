using ServerFleet.Models.Entities.Vehicle;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ServerFleet.Services.Vehicle.PipesAndFilters
{
    public static class VehicleSort
    {
        public static IEnumerable<VehicleModel> SortByField(this IEnumerable<VehicleModel> list, string sortField, string sortDirection)
        {
            if (string.IsNullOrEmpty(sortField))
            {
                return list;
            }

            var sortAsc = true;
            if (!string.IsNullOrEmpty(sortDirection))
            {
                if ( sortDirection.Equals("desc",StringComparison.InvariantCultureIgnoreCase))
                {
                    sortAsc = false;
                }
            }

            switch (sortField.ToLowerInvariant().Trim())
            {
                case "doors":
                    return sortAsc ? list.OrderBy(o => o.Doors) : list.OrderByDescending(o => o.Doors);

                case "registration":
                    return sortAsc ? list.OrderBy(o => o.Registration) : list.OrderByDescending(o => o.Registration);

                case "make":
                    return sortAsc ? list.OrderBy(o => o.Make) : list.OrderByDescending(o => o.Make);

                case "model":
                    return sortAsc ? list.OrderBy(o => o.Model) : list.OrderByDescending(o => o.Model);

                case "colour":
                    return sortAsc ? list.OrderBy(o => o.Colour) : list.OrderByDescending(o => o.Colour);

                case "mileage":
                    return sortAsc ? list.OrderBy(o => o.Mileage) : list.OrderByDescending(o => o.Mileage);

                case "fuel":
                    return sortAsc ? list.OrderBy(o => o.Fuel) : list.OrderByDescending(o => o.Fuel);

                case "bodytype":
                    return sortAsc ? list.OrderBy(o => o.BodyType) : list.OrderByDescending(o => o.BodyType);

                case "mpg":
                    return sortAsc ? list.OrderBy(o => o.Mpg) : list.OrderByDescending(o => o.Mpg);

                case "transmission":
                    return sortAsc ? list.OrderBy(o => o.Transmission) : list.OrderByDescending(o => o.Transmission);

                default:
                    return list;
            }
        }
    }
}
