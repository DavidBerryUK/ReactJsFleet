using AutoMapper;
using ServerFleet.Models.Rest.Base;
using ServerFleet.Models.Rest.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;
using ServerFleet.Services.Vehicle.PipesAndFilters;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ServerFleet.Services.Vehicle
{
    public class VehicleService : IVehicleService
    {
        private readonly IVehicleFactory _vehicleFactory;

        public VehicleService(IVehicleFactory vehicleFactory)
        {
            _vehicleFactory = vehicleFactory;
        }

        public VehicleJson GetByRegistration(string registration)
        {
            var data = _vehicleFactory.GetAll().FirstOrDefault(o => o.Registration == registration);
            var response = Mapper.Map<VehicleJson>(data);
            return response;
        }

        public BaseResponseCollection<VehicleJson> GetWithFilter(VehicleListRequest request)
        {
            var data = _vehicleFactory.GetAll();
            var rowCount = data.Count();

            if (request != null)
            {
                data = data
                    .FilterBodyType(request.FilterBodyType)
                    .FilterColour(request.FilterColour)
                    .FilterFuel(request.FilterFuel)
                    .FilterMake(request.FilterMake)
                    .FilterModel(request.FilterModel)
                    .FilterRegistration(request.FilterRegistration)
                    .FilterTransmission(request.FilterTransmission)
                    .FilterDoors(request.FilterDoors)
                    .FilterMpg(request.FilterMpg)
                    .FilterMileage(request.FilterMileage)
                    .SortByField(request.SortField, request.SortDirection)
                    .ToList();
            }

            //
            // This is a bit 'bodgy' as is hard coded list, when connecting to a real database we need to
            //  1) construct a query tree
            //  2) get a total count using the query tree, but don't bring back any rows
            //  3) get only the rows required for the current page

            if (request.RowsPerPage != 0)
            {
                data = data.Skip(request.PageNumber * request.RowsPerPage).Take(request.RowsPerPage)
                    .ToList();
            }

            var entities = Mapper.Map<List<VehicleJson>>(data);
            var response = new BaseResponseCollection<VehicleJson>
            {
                RowsPerPage = request.RowsPerPage,
                PageNumber = request.PageNumber,
                TotalRows = rowCount
            };
            if (request.RowsPerPage != 0)
            {
                response.TotalPages = (int) Math.Ceiling((decimal) rowCount / (decimal)request.RowsPerPage);
            }
            else
            {
                response.RowsPerPage = 1;
            }

            response.Entities = entities;
            
            return response;
        }
    }
}
