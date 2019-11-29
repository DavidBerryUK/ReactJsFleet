import { classStyleDefinition }                 from './classStyleDefinition'
import { MouseEvent }                           from 'react';
import { useHistory }                           from 'react-router-dom';
import AuthenticationService                    from '../../services/security/AuthenticationService';
import Avatar                                   from '@material-ui/core/Avatar';
import Button                                   from '@material-ui/core/Button';
import Container                                from '@material-ui/core/Container';
import CopyrightComponent                       from '../copyrightComponent/CopyrightComponent';
import IconLock                                 from '@material-ui/icons/Lock'
import LockOutlinedIcon                         from '@material-ui/icons/LockOutlined';
import NavigateDashboard                        from '../../routing/NavigationHelpers.ts/NavigateDashboard';
import React                                    from 'react';
import TextField                                from '@material-ui/core/TextField';
import Typography                               from '@material-ui/core/Typography';
import UserModel                                from '../../models/user/UserModel';
import ValidationMessage                        from '../../models/validation/ValidationMessage';

function LoginComponent() {

  const classStyles = classStyleDefinition();
  const router = useHistory();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //
  // Template
  //
  return (
    <Container component="main" maxWidth="xs">
      
      <div className={classStyles.paper}>
        <Avatar className={classStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        </div>
      
        <form className={classStyles.form} noValidate>
        <TextField 
         variant="outlined"
            required 
            fullWidth
            margin="normal"
            label="User Name" 
            value={username} 
            autoFocus
            onChange={(event) => { setUsername(event.target.value);} }
          />
        
          <TextField 
            required 
            fullWidth
            margin="normal"
            variant="outlined"
            label="Password" 
            value={password} 
            onChange={(event) => { setPassword(event.target.value);} }
          />
        

        <Button variant="contained" 
        color="primary" 
        fullWidth
        className={classStyles.submit}
        onClick={loginButtonClicked}>Login</Button>
        
        </form>
        <CopyrightComponent></CopyrightComponent>
      
    </Container>
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