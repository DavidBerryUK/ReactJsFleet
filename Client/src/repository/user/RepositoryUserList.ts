import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import ApiBaseCollectionResponseModel           from "../../models/apiBase/ApiBaseCollectionResponseModel";
import BaseCollectionRepository                 from "../base/BaseCollectionRepository";
import FactoryUserModel                         from "../../modelFactories/FactoryUserModel";
import UserModel                                from "../../models/user/UserModel";

export default class RepositoryUserList extends BaseCollectionRepository<UserModel> {

    public getUserList() : ApiResponse<ApiBaseCollectionResponseModel<UserModel>>{

        var endpoint = `/api/Users?`        

        return this.getList(endpoint, new FactoryUserModel());        
    }
}