using ServerFleet.Models.Entities.List;
using ServerFleet.Models.Rest.Base;

namespace ServerFleet.Services.Specification.Interfaces
{
    public interface ISpecificationService
    {
        BaseResponseCollection<ListItemModel> GetUniqueModels();
        BaseResponseCollection<ListItemModel> GetUniqueBodyType();
        BaseResponseCollection<ListItemModel> GetUniqueMake();
        BaseResponseCollection<ListItemModel> GetUniqueColour();
        BaseResponseCollection<ListItemModel> GetUniqueFuel();
        BaseResponseCollection<ListItemModel> GetUniqueDoors();
        BaseResponseCollection<ListItemModel> GetUniqueTransmission();
    }
}