﻿using AutoMapper;
using ServerFleet.Models.Rest.Vehicle;
using ServerFleet.Services.Vehicle.Interfaces;
using ServerFleet.Services.Vehicle.PipesAndFilters;
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

        public IEnumerable<VehicleJson> GetWithFilter(VehicleListRequest request)
        {
            var data = _vehicleFactory.GetAll();

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
                    .SortByField(request.sortField, request.sortDirection);
            }

            var response = Mapper.Map<List<VehicleJson>>(data);
            return response;
        }
    }
}
