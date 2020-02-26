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

        public BaseItemResponse<VehicleResponse> GetByRegistration(string registration)
        {
            var data = _vehicleFactory.GetAll().FirstOrDefault(o => o.Registration == registration);
            var response = new BaseItemResponse<VehicleResponse>
            {
                Entity = Mapper.Map<VehicleResponse>(data)
            };
            return response;
        }

        public BaseItemResponse<VehicleResponse> GetByVehicleId(int vehicleId)
        {
            var data = _vehicleFactory.GetAll().FirstOrDefault(o => o.VehicleId== vehicleId);
            var response = new BaseItemResponse<VehicleResponse>
            {
                Entity = Mapper.Map<VehicleResponse>(data)
            };
            return response;
        }

        public BaseResponseCollection<VehicleResponse> GetWithFilter(VehicleListRequest request)
        {
            var data = _vehicleFactory.GetAll();
            
            if (request != null)
            {
                data = data
                    .FilterBodyType(request.BodyType)
                    .FilterColour(request.Colour)
                    .FilterFuel(request.Fuel)
                    .FilterMake(request.Make)
                    .FilterModel(request.Model)
                    .FilterRegistration(request.Reg)
                    .FilterTransmission(request.Trans)
                    .FilterDoors(request.Doors)
                    .FilterMpg(request.Mpg)
                    .FilterMileage(request.Mileage)
                    .SortByField(request.SortBy, request.SortDir)
                    .ToList();
            }

            var rowCount = data.Count();

            //
            // This is a bit 'bodgy' as is hard coded list, when connecting to a real database we need to
            //  1) construct a query tree
            //  2) get a total count using the query tree, but don't bring back any rows
            //  3) get only the rows required for the current page

            if (request.RowsPerPage != 0)
            {
                data = data.Skip((request.PageNumber -1 )* request.RowsPerPage).Take(request.RowsPerPage)
                    .ToList();
            }

            var entities = Mapper.Map<List<VehicleResponse>>(data);
            var response = new BaseResponseCollection<VehicleResponse>
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
