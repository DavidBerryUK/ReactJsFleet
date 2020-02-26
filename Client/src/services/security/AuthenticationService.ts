import { ApiResponse }                          from './../../repository/apiContracts/ApiResponseContract';
import AuthenticationModel                      from '../../models/authentication/AuthenticationModel';
import RepositoryAuthentication                 from '../../repository/authentication/RepositoryAuthentication';

export default class AuthenticationService {
    
    // Authenticate username and password
    //
    public authenticate(username: string, password: string ) : ApiResponse<AuthenticationModel>{
        let repositoryAuthentication = new RepositoryAuthentication();
        let contract = repositoryAuthentication.authenticate(username, password)        
        return contract;
    }

    public authenticatWithToken(token: string) : ApiResponse<AuthenticationModel>{
        let repositoryAuthentication = new RepositoryAuthentication();
        let contract = repositoryAuthentication.authenticateWithToken(token)        
        return contract;
    }
}