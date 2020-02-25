import { Box }                                  from '@material-ui/core';
import { classStyleDefinition }                 from './classStyleDefinition'
import { ILoginModel }                          from './ILoginModel';
import { IValidationContextActions }            from '../../services/validation/context/interfaces/IValidationContextActions';
import { IValidationContextState }              from '../../services/validation/context/interfaces/IValidationContextState';
import { useContext }                           from 'react';
//import { useHistory }                           from 'react-router-dom';
import { ValidationContext }                    from '../../services/validation/context/context/ValidationContext';
import AuthenticationService                    from '../../services/security/AuthenticationService';
import Avatar                                   from '@material-ui/core/Avatar';
import Button                                   from '@material-ui/core/Button';
import Card                                     from '@material-ui/core/Card';
import Container                                from '@material-ui/core/Container';
import ContextOne, { EnumAction }                               from '../../services/applicationContext/OneContext';
import Grid                                     from '@material-ui/core/Grid';
import Link                                     from '@material-ui/core/Link';
import LockOutlinedIcon                         from '@material-ui/icons/LockOutlined';
//import NavigateDashboard                        from '../../routing/NavigationHelpers.ts/NavigateDashboard';
import ProgressIndicatorLinear                  from '../progressIndicators/ProgressIndicatorLinear';
import React                                    from 'react';
import RuleMandatory                            from '../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength                            from '../../services/validation/rules/ruleProcessors/RuleMaxLength';
import Typography                               from '@material-ui/core/Typography';
import UserModel                                from '../../models/user/UserModel';
import ValidatedPasswordField                   from '../../services/validation/controls/passwordField/ValidatedPasswordField';
import ValidatedTextField                       from '../../services/validation/controls/textField/ValidatedTextField';
import ValidationDebugInfo                      from '../../services/validation/controls/debugInfo/ValidationDebugInfo';
import ValidationMessage                        from '../../models/validation/ValidationMessage';
import ValidationState                          from '../../services/validation/context/state/ValidationState';


  const LoginComponent: React.FC = () => {

  const classStyles = classStyleDefinition();
  // const router = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const  dispatch = useContext(ContextOne).dispatch;
  
//
  // Event Handler for Login Button Pressed
  //
  function loginButtonClicked(context : IValidationContextActions<ILoginModel> ) {

    

    setMessage("");

    if ( !context.validate() ) {
      console.log("this form is not valid - ABANDON ALL HOPE!!!")
      return;
    }

    // get form model
    //
    const form = context.getModel();
    console.log(form)    ;

    var authenticationService = new AuthenticationService();
    setLoading(true);
    
    authenticationService.authenticate(form.username, form.password)
      .onSuccess((userModel: UserModel) => {
        // update global context with login details
        dispatch({ type: EnumAction.Login,value: userModel })
      //  NavigateDashboard.go(router);
      })
        .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
        setMessage("User or Password invalid");
      })
        .onFailed((error) => {
          setMessage("Can not connect to server");
      })
      .then(() => {
        setLoading(false);
      })
  }

  //
  // Template
  //
  return (
    <Container component="main" maxWidth="sm">

      <ValidationState >

        <ValidationContext.Consumer>
          {(context: IValidationContextState & IValidationContextActions<ILoginModel>) => (
            <div>
              <Card className={classStyles.card}>

                <div className={classStyles.paper}>
                  <Avatar className={classStyles.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h5">Sign in</Typography>
                </div>

                <form className={classStyles.form}>
                  {/* <ValidationState validateOnLoad> */}

                  <ValidatedTextField
                    name="username"
                    label="User Name"
                    required
                    autoComplete="off"
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                  />

                  <ValidatedPasswordField
                    name="password"
                    label="Password"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!context.isFormValid}
                    fullWidth
                    className={classStyles.submit}
                    onClick={ () =>{ loginButtonClicked(context)} }>Login</Button>
                  
                  <Box hidden={message.length === 0} className={classStyles.loginMessage} color="error.main">
                    <Typography  component="h4">{message}</Typography>                    
                  </Box>
                  
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
}


export default LoginComponent;