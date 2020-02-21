import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import ApiBaseItemResponseModel                 from "../../models/apiBase/ApiBaseItemResponseModel";
import BaseItemRepository                       from "../base/BaseItemRepository";
import FactoryVehicleModel                      from "../../modelFactories/FactoryVehicleModel";
import VehicleModel                             from "../../models/vehicle/VehicleModel";

export default class RepositoryVehicleItem extends BaseItemRepository<VehicleModel> {

    public getVehicleById(id : number) : ApiResponse<ApiBaseItemResponseModel<VehicleModel>>{

        var endpoint = `/api/vehicle/${id}`;                

        return this.get(endpoint, new FactoryVehicleModel());        
    }
}