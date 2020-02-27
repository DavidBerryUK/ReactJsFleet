import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import ApiBaseItemResponseModel                 from "../../models/apiBase/ApiBaseItemResponseModel";
import BaseItemRepository                       from "../base/BaseItemRepository";
import UserModel                                from "../../models/user/UserModel";
import FactoryUserModel                         from "../../modelFactories/FactoryUserModel";

export default class RepositoryUserItem extends BaseItemRepository<UserModel> {

    public getVehicleById(id : number) : ApiResponse<ApiBaseItemResponseModel<UserModel>>{

        var endpoint = `/api/user/${id}`;                

        return this.get(endpoint, new FactoryUserModel());        
    }
}