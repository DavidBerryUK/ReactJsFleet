import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import ApiBaseCollectionResponseModel           from "../../models/apiBase/ApiBaseCollectionResponseModel";
import BaseCollectionRepository                 from "../base/BaseCollectionRepository";
import FactoryVehicleModel                      from "../../modelFactories/FactoryVehicleModel";
import VehicleModel                             from "../../models/vehicle/VehicleModel";
import FleetListFilterModel                     from "../../components/fleetList/fleetListFilterModel";

export default class RepositoryVehicleList extends BaseCollectionRepository<VehicleModel> {

    public getVehicleList(filter : FleetListFilterModel) : ApiResponse<ApiBaseCollectionResponseModel<VehicleModel>>{

        var endpoint = `/api/vehicle?pageNumber=${filter.pageNumber}&rowsPerPage=${filter.rowsPerPage}`
        
        if ( filter.sortedColumn ) {
            endpoint =  `${endpoint}&sortBy=${filter.sortedColumn}`
            if ( filter.sortDirection.length > 0 ) {   
                endpoint =  `${endpoint}&sortDir=${filter.sortDirection}`
            }
        }

        if ( filter.filterColour.entityValue !== '') {
            endpoint =  `${endpoint}&colour=${filter.filterColour.entityValue}`
        }

        if ( filter.filterDoors.entityValue !== '') {
            endpoint =  `${endpoint}&doors=${filter.filterDoors.entityValue}`
        }

        if ( filter.filterMake.entityValue !== '') {
            endpoint =  `${endpoint}&make=${filter.filterMake.entityValue}`
        }

        if ( filter.filterModel.entityValue !== '') {
            endpoint =  `${endpoint}&model=${filter.filterModel.entityValue}`
        }

        if ( filter.filterTransmission.entityValue !== '') {
            endpoint =  `${endpoint}&trans=${filter.filterTransmission.entityValue}`
        }

        if ( filter.filterRegistration !== '') {
            endpoint =  `${endpoint}&reg=${filter.filterRegistration}`
        }

        return this.getList(endpoint, new FactoryVehicleModel());        
    }
}