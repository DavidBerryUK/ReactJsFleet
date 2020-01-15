import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import ApiBaseCollectionResponseModel           from "../../models/apiBase/ApiBaseCollectionResponseModel";
import BaseCollectionRepository                 from "../base/BaseCollectionRepository";
import FactoryVehicleModel                      from "../../modelFactories/FactoryVehicleModel";
import VehicleModel                             from "../../models/vehicle/VehicleModel";

export default class RepositoryVehicle extends BaseCollectionRepository<VehicleModel> {

    public getVehicleList(
        pageNumber: number,
        rowsPerPage: number,        
        sortField: string = '', 
    sortDirection: string = '') : ApiResponse<ApiBaseCollectionResponseModel<VehicleModel>>{

        var endpoint = `/api/vehicle?pageNumber=${pageNumber}&rowsPerPage=${rowsPerPage}`
        if ( sortField ) {
            endpoint =  `${endpoint}&sortField=${sortField}`
            if ( sortDirection.length > 0 ) {   
                endpoint =  `${endpoint}&sortDirection=${sortDirection}`
            }
        }

        console.log(`getVehicleList:${endpoint}`)
        return this.getList(endpoint, new FactoryVehicleModel());        
    }
}