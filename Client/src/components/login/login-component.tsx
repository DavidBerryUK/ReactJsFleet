import { classStyleDefinition }                 from './classStyleDefinition'
import { IValidationContextActions }            from '../../services/validation/context/interfaces/IValidationContextActions';
import { IValidationContextState }              from '../../services/validation/context/interfaces/IValidationContextState';
import { MouseEvent }                           from 'react';
import { useHistory }                           from 'react-router-dom';
import { ValidationContext }                    from '../../services/validation/context/context/ValidationContext';
import AuthenticationService                    from '../../services/security/AuthenticationService';
import Avatar                                   from '@material-ui/core/Avatar';
import Button                                   from '@material-ui/core/Button';
import Card                                     from '@material-ui/core/Card';
import Container                                from '@material-ui/core/Container';
import Grid                                     from '@material-ui/core/Grid';
import Link                                     from '@material-ui/core/Link';
import LockOutlinedIcon                         from '@material-ui/icons/LockOutlined';
import NavigateDashboard                        from '../../routing/NavigationHelpers.ts/NavigateDashboard';
import ProgressIndicatorLinear                  from '../progressIndicators/ProgressIndicatorLinear';
import React                                    from 'react';
import RuleMandatory                            from '../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength                            from '../../services/validation/rules/ruleProcessors/RuleMaxLength';
import Typography                               from '@material-ui/core/Typography';
import UserModel                                from '../../models/user/UserModel';
import ValidatedTextField                       from '../../services/validation/controls/TextField/ValidatedTextField';
import ValidationDebugInfo                      from '../../services/validation/controls/DebugInfo/ValidationDebugInfo';
import ValidationMessage                        from '../../models/validation/ValidationMessage';
import ValidationState                          from '../../services/validation/context/state/ValidationState';

function LoginComponent() {

  const classStyles = classStyleDefinition();
  const router = useHistory();
  const [loading, setLoading] = React.useState(false);

  //
  // Template
  //
  return (
    <Container component="main" maxWidth="sm">

      <ValidationState >

        <ValidationContext.Consumer>
          {(context : IValidationContextState & IValidationContextActions ) => (
            <div>
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
                  {/* <ValidationState validateOnLoad> */}


                  <ValidatedTextField
                    name="username"
                    label="User Name"
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    autoComplete="off"
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                  />

                  <ValidatedTextField
                    name="password"
                    label="Password"
                    required
                    fullWidth
                    type="password"
                    autoComplete="off"
                    margin="normal"
                    variant="outlined"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    disabled = {!context.isFormValid}
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

              <ValidationDebugInfo></ValidationDebugInfo>
            </div>

          )}

        </ValidationContext.Consumer>
      </ValidationState>

    </Container>
  );

  //
  // Event Handler for Login Button Pressed
  //
  function loginButtonClicked(event: MouseEvent) {

    var authenticationService = new AuthenticationService();
    setLoading(true);

    authenticationService.authenticate("", "")
      // authenticationService.authenticate(username, password)
      .onSuccess((userModel: UserModel) => {
        NavigateDashboard.go(router);
      })
      .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
      })
      .onFailed((error: String) => {
      })
      .then(() => {
        setLoading(false);
      })
  }
}


export default LoginComponent;