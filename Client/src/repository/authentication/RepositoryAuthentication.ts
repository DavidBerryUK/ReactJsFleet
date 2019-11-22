import { ApiResponseContract }          from './../apiContracts/ApiResponseContract';
import BaseItemRepository               from "../base/BaseItemRepository";
import UserModel                        from "../../models/user/UserModel";

export default class RepositoryAuthentication extends BaseItemRepository<UserModel> {


    public authenticate(username: String, password: String ) : ApiResponseContract<UserModel>{
        var model = new UserModel(username, password);
        var response = this.post(model);
        return response;
    }

}