import { MouseEvent }                           from 'react';
import { useHistory }                           from 'react-router-dom';
import AuthenticationService                    from '../../services/security/AuthenticationService';
import Button                                   from '@material-ui/core/Button';
import IconLock                                 from '@material-ui/icons/Lock'
import NavigateDashboard                        from '../../routing/NavigationHelpers.ts/NavigateDashboard';
import React                                    from 'react';
import TextField                                from '@material-ui/core/TextField';
import UserModel                                from '../../models/user/UserModel';
import ValidationMessage                        from '../../models/validation/ValidationMessage';

function LoginComponent() {

  const router = useHistory();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //
  // Template
  //
  return (
    <div >
      <form noValidate autoComplete="off">
        <div>
        <TextField 
            required 
            label="User Name" 
            value={username} 
            onChange={(event) => { setUsername(event.target.value);} }
          />
        </div>
        <div>
          <TextField 
            required 
            label="Password" 
            value={password} 
            onChange={(event) => { setPassword(event.target.value);} }
          />
        </div>
        <Button variant="contained" color="primary" onClick={loginButtonClicked}>Login</Button>
        <IconLock></IconLock>
      </form>
    </div>
  );

  //
  // Event Handler for Login Button Pressed
  //
  function loginButtonClicked(event: MouseEvent) {

    var authenticationService = new AuthenticationService();

    authenticationService.authenticate(username, password)
      .onSuccess((userModel: UserModel) => {
        console.log("Login Success - Model Returned from Authentication Service");
        console.log(userModel);
        NavigateDashboard.go(router);
      })
      .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
        console.log("Validation Errors Returned from Authentication Service");
        console.log(validationMessages)
      })
      .onFailed((error: String) => {
        console.log("Login failed (error) - Application Error from Authentication Service")
        console.log(error);
      });
  }
}


export default LoginComponent;