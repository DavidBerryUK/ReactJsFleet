import { ApiResponse }                          from './../../repository/apiContracts/ApiResponseContract';
import AuthenticationModel                      from '../../models/authentication/AuthenticationModel';
import RepositoryAuthentication                 from '../../repository/authentication/RepositoryAuthentication';

export default class AuthenticationService {
    
    // Authenticate username and password
    //
    public authenticate(username: String, password: String ) : ApiResponse<AuthenticationModel>{
        let repositoryAuthentication = new RepositoryAuthentication();
        let contract = repositoryAuthentication.authenticate(username, password)        
        return contract;
    }
}