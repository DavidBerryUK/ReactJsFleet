import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import BaseItemRepository                       from "../base/BaseItemRepository";
import FactoryUserModel                         from '../../modelFactories/FactoryUserModel';
import UserModel                                from "../../models/user/UserModel";

export default class RepositoryAuthentication extends BaseItemRepository<UserModel> {

    public authenticate(username: String, password: String ) : ApiResponse<UserModel>{
        var model = new UserModel(username, password);
        return this.post('/api/authentication',model, new FactoryUserModel());        
    }
}