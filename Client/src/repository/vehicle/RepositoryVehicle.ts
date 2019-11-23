import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import BaseCollectionRepository                 from "../base/BaseCollectionRepository";
import FactoryVehicleModel                      from "../../modelFactories/FactoryVehicleModel";
import VehicleModel                             from "../../models/vehicle/VehicleModel";

export default class RepositoryVehicle extends BaseCollectionRepository<VehicleModel> {

    public getVehicleList() : ApiResponse<Array<VehicleModel>>{
        return this.getList('/api/vehicle', new FactoryVehicleModel());        
    }

}