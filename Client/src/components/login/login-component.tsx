import { classStyleDefinition }                 from './classStyleDefinition'
import { MouseEvent }                           from 'react';
import { useHistory }                           from 'react-router-dom';
import AuthenticationService                    from '../../services/security/AuthenticationService';
import Avatar                                   from '@material-ui/core/Avatar';
import Button                                   from '@material-ui/core/Button';
import Card                                     from '@material-ui/core/Card';
import Container                                from '@material-ui/core/Container';
import CopyrightComponent                       from '../copyrightComponent/CopyrightComponent';
import Grid                                     from '@material-ui/core/Grid';
import Link                                     from '@material-ui/core/Link';
import LockOutlinedIcon                         from '@material-ui/icons/LockOutlined';
import NavigateDashboard                        from '../../routing/NavigationHelpers.ts/NavigateDashboard';
import ProgressIndicatorLinear                  from '../progressIndicators/ProgressIndicatorLinear';
import React                                    from 'react';
import RuleMandatory                            from '../../services/validation/rules/RuleMandatory';
import RuleMaxLength                            from '../../services/validation/rules/RuleMaxLength';
import TextField                                from '@material-ui/core/TextField';
import Typography                               from '@material-ui/core/Typography';
import UserModel                                from '../../models/user/UserModel';
import ValidationField                          from '../../services/validation/ValidationField';
import ValidationGroup                          from '../../services/validation/ValidationGroup';
import ValidationMessage                        from '../../models/validation/ValidationMessage';
import ValidationState                          from '../../services/validation/context/state/ValidationState';

function LoginComponent() {

  const classStyles = classStyleDefinition();
  const router = useHistory();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  //
  // Template
  //
  return (
    <Container component="main" maxWidth="sm">

      <Card className={classStyles.card}>

        <div className={classStyles.paper}>
          <Avatar className={classStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        </div>

        <form className={classStyles.form}>
          <ValidationState>
            <ValidationGroup>

              <ValidationField rules={[new RuleMandatory(), new RuleMaxLength(40)]}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  name="username"
                  label="User Name"
                  value={username}
                  autoFocus
                  onChange={(event) => { setUsername(event.target.value); }}
                />
              </ValidationField>

              <ValidationField rules={[new RuleMandatory(), new RuleMaxLength(40)]}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  margin="normal"
                  variant="outlined"
                  label="Password"
                  value={password}
                  onChange={(event) => { setPassword(event.target.value); }}
                />
              </ValidationField>

            </ValidationGroup>
          </ValidationState>

          <Button variant="contained"
            color="primary"
            fullWidth
            className={classStyles.submit}
            onClick={loginButtonClicked}>Login</Button>

          {loading && <ProgressIndicatorLinear />}

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>

        </form>

      </Card>
      <CopyrightComponent></CopyrightComponent>

    </Container>
  );

  //
  // Event Handler for Login Button Pressed
  //
  function loginButtonClicked(event: MouseEvent) {

    var authenticationService = new AuthenticationService();
    setLoading(true);

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
      })
      .then(() => {
        setLoading(false);
      })
  }
}


export default LoginComponent;