using ServerFleet.Models.Entities.List;
using ServerFleet.Services.Vehicle.Interfaces;
using System.Linq;
using ServerFleet.Models.Rest.Base;
using ServerFleet.Services.Specification.Interfaces;

namespace ServerFleet.Services.Specification
{
    public class SpecificationService : ISpecificationService
    {
        private readonly IVehicleFactory _vehicleFactory;

        public SpecificationService(IVehicleFactory vehicleFactory)
        {
            _vehicleFactory = vehicleFactory;
        }

        public BaseResponseCollection<ListItemModel> GetUniqueModels()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.Model)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o,
                    Text = o
                })
                .OrderBy(o=> o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }

        public BaseResponseCollection<ListItemModel> GetUniqueBodyType()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.BodyType)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o,
                    Text = o
                })
                .OrderBy(o => o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }

        public BaseResponseCollection<ListItemModel> GetUniqueMake()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.Make)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o,
                    Text = o
                })
                .OrderBy(o => o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }

        public BaseResponseCollection<ListItemModel> GetUniqueColour()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.Colour)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o,
                    Text = o
                })
                .OrderBy(o => o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }

        public BaseResponseCollection<ListItemModel> GetUniqueFuel()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.Fuel)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o,
                    Text = o
                })
                .OrderBy(o => o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }

        public BaseResponseCollection<ListItemModel> GetUniqueDoors()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.Doors)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o.ToString(),
                    Text = o.ToString()
                })
                .OrderBy(o => o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }

        public BaseResponseCollection<ListItemModel> GetUniqueTransmission()
        {
            var models = _vehicleFactory.GetAll()
                .Select(o => o.Transmission)
                .Distinct()
                .Select(o => new ListItemModel()
                {
                    Id = o.ToString(),
                    Text = o.ToString()
                })
                .OrderBy(o => o.Text)
                .ToList();

            return new BaseResponseCollection<ListItemModel>(models);
        }
    }
}
