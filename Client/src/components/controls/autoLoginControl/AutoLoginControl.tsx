import { EnumAction }                           from '../../../services/applicationContext/ApplicationContext';
import { useContext }                           from 'react';
import { useMemo }                              from 'react';
import ApplicationContext                       from '../../../services/applicationContext/ApplicationContext';
import AuthenticationModel                      from '../../../models/authentication/AuthenticationModel';
import AuthenticationService                    from '../../../services/security/AuthenticationService';
import React                                    from 'react';
import TokenCookies                             from '../../../utilities/cookies/TokenCookies';

const AutoLoginControl : React.FC = () => {

    const dispatch = useContext(ApplicationContext).dispatch;
    
    useMemo(() =>{

      console.log("APPLICATION LOADS");
      var tokenCookies = new TokenCookies();
      var token = tokenCookies.token;
      if ( token === '') {
        console.log("not currently logged in")
      } else {
        console.log("Logged in with token " + token);
  
        var authenticationService = new AuthenticationService();
        authenticationService.authenticatWithToken(token)
        .onSuccess((authenticationModel: AuthenticationModel) => {
          //
          // update state
          //    
          dispatch({ type: EnumAction.Login, value: authenticationModel.user })
          dispatch({ type: EnumAction.SetToken, value: authenticationModel.token })
          
        });
      }

    },[dispatch])

    return(
        <></>
    )
}

export default AutoLoginControl;