import { classStyleDefinition }                 from './classStyleDefinition'
import { MouseEvent }                           from 'react';
import { Paper }                                from '@material-ui/core';
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
import Table                                    from '@material-ui/core/Table';
import TableBody                                from '@material-ui/core/TableBody';
import TableCell                                from '@material-ui/core/TableCell';
import TableHead                                from '@material-ui/core/TableHead';
import TableRow                                 from '@material-ui/core/TableRow';
import Typography                               from '@material-ui/core/Typography';
import UserModel                                from '../../models/user/UserModel';
import ValidatedTextField                       from '../../services/validation/controls/ValidatedTextField';
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
          <ValidationState validateOnLoad>

            <ValidationContext.Consumer>
              {(validationContext) => (
                <div>
                  <ValidatedTextField
                    name="username"
                    label="User Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    autoComplete="off"
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                    onFieldUpdated={(field: ValidatedTextField) => {
                      //    console.log(`${field.name} updated to ${field.state.text}`)
                    }} />

                  <ValidatedTextField
                    name="password"
                    label="Password"
                    fullWidth
                    type="password"
                    autoComplete="off"
                    margin="normal"
                    variant="outlined"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                    onFieldUpdated={(field: ValidatedTextField) => {
                      //   console.log(`${field.name} updated to ${field.state.text}`)
                    }} />

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classStyles.submit}
                    onClick={loginButtonClicked}>Login</Button>                    

                {/* TEMP TABLE TO HELP WITH DEBUG */}
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Field</TableCell>
                        <TableCell>Value</TableCell>            
                      </TableRow>
                    </TableHead>
                    <TableBody>          
                      <TableRow>
                        <TableCell>field count</TableCell>
                        <TableCell>{validationContext.fields.length}</TableCell>
                      </TableRow>          
                      <TableRow>
                        <TableCell>IsFormValid</TableCell>
                        <TableCell>{validationContext.isFormValid ? "yes" : "no"}</TableCell>
                      </TableRow>          
                      <TableRow>
                        <TableCell>hasBeenFullyValidated</TableCell>
                        <TableCell>{validationContext.hasBeenFullyValidated ? "yes" : "no" }</TableCell>
                      </TableRow>          
                    </TableBody>
                  </Table>
                </Paper>
                {/* TEMP TABLE TO HELP WITH DEBUG */}

                </div>
              )}

            </ValidationContext.Consumer>
          </ValidationState>

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