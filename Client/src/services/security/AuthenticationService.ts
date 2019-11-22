import { ApiResponseContract }          from './../../repository/apiContracts/ApiResponseContract';
import UserModel                        from '../../models/user/UserModel';
import RepositoryAuthentication         from '../../repository/authentication/RepositoryAuthentication';

export default class AuthenticationService {
    
    public authenticate(username: String, password: String ) : ApiResponseContract<UserModel>{

        let repositoryAuthentication = new RepositoryAuthentication();
        let contract = repositoryAuthentication.authenticate(username, password)        
        return contract;
    }
}