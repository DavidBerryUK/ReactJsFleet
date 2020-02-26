import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import AuthenticationModel                      from '../../models/authentication/AuthenticationModel';
import BaseItemRepository                       from "../base/BaseItemRepository";
import FactoryAuthenticationModel               from '../../modelFactories/FactoryAuthenticationModel';
import UserModel                                from "../../models/user/UserModel";

export default class RepositoryAuthentication extends BaseItemRepository<AuthenticationModel> {

    public authenticate(username: string, password: string ) : ApiResponse<AuthenticationModel>{
        var model = new AuthenticationModel();
        model.user = new UserModel();
        model.user.userName = username;
        model.user.password = password;
        return this.post('/api/authentication',model, new FactoryAuthenticationModel());        
    }

    public authenticateWithToken(token: string ) : ApiResponse<AuthenticationModel>{
        var model = new AuthenticationModel();
        model.token = token;        
        return this.post('/api/authentication',model, new FactoryAuthenticationModel());        
    }
}