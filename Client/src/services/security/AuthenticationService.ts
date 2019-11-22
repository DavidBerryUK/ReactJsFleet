import { ApiResponse }                          from './../../repository/apiContracts/ApiResponseContract';
import UserModel                                from '../../models/user/UserModel';
import RepositoryAuthentication                 from '../../repository/authentication/RepositoryAuthentication';

export default class AuthenticationService {
    
    // Authenticate username and password
    //
    public authenticate(username: String, password: String ) : ApiResponse<UserModel>{
        let repositoryAuthentication = new RepositoryAuthentication();
        let contract = repositoryAuthentication.authenticate(username, password)        
        return contract;
    }
}