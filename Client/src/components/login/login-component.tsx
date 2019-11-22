import AuthenticationService                    from '../../services/security/AuthenticationService';
import Button                                   from '@material-ui/core/Button';
import IconLock                                 from '@material-ui/icons/Lock'
import React, { MouseEvent }                    from 'react';
import TextField                                from '@material-ui/core/TextField';
import UserModel                                from '../../models/user/UserModel';
import ValidationMessage                        from '../../models/validation/ValidationMessage';

function LoginComponent() {

  function loginButtonClicked(event : MouseEvent) {
    var authenticationService = new AuthenticationService();
    
    authenticationService.authenticate("dave","berry")
      .onSuccess((userModel : UserModel )=> {
        console.log("Login Success");        
        console.log(userModel);
      })
      .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
        console.log("Validation Errors");
        console.log(validationMessages)
      })      
      .onFailed((error: String) => {
        console.log("Login failed (error)")
      });
          
    
  }

  return (
    <div >
      <form noValidate autoComplete="off">
      <div>
      <TextField required label="User Name"></TextField>
      </div>
      <div>
      <TextField required label="Password"></TextField>
      </div>
      <Button variant="contained" color="primary" onClick={loginButtonClicked}>Login</Button>
      <IconLock></IconLock>
      </form>
    </div>
  );
}

export default LoginComponent;