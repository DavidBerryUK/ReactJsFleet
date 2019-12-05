import { FormControl, Theme }                          from '@material-ui/core';
import { FormHelperText }                       from '@material-ui/core';
import { IconButton}                            from '@material-ui/core';
import { InputAdornment }                       from '@material-ui/core';
import { InputLabel }                           from '@material-ui/core';
import { InputProps }                           from '@material-ui/core/Input';
import { IValidationPasswordState }             from './IValidationPasswordState';
import BaseValidationControl                    from '../baseValidationControl/BaseValidationControl';
import OutlinedInput                            from '@material-ui/core/OutlinedInput';
import React                                    from 'react';
import Visibility                               from '@material-ui/icons/Visibility';
import VisibilityOff                            from '@material-ui/icons/VisibilityOff';
import { withStyles, createStyles }             from '@material-ui/core/styles';
// import PropTypes from 'prop-types'


// NOTE - MUCH OF THIS CAN BE MOVED TO A BASE CLASS - THIS IS 
//        CURRENTLY A PROOF OF CONCEPT, BUT WILL ADD ADDITIONAL CONTROLS SUCH AS
//        DROP DOWNS AND SWITCHES WHICH WILL ALSO BE PART OF THE FORM
//
// A Input password control,
// combines lots of low level controls to create a password input control
//
// * Maintains own value state
//
const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
      backgroundColor:"pink"
  },
  disabled: {
    backgroundColor:"grey"
  }
});

class ValidatedPasswordField extends BaseValidationControl<InputProps, IValidationPasswordState>  {
  
  componentDidMount() {
    this.setShowPassword(false)
  }

  handleClickShowPassword() {
    var strongState = (this.state as IValidationPasswordState);
    this.setShowPassword(!strongState.isPasswordShown)
  }

  setShowPassword(show: boolean) {
    
    this.setState(() => {
      return {
        isPasswordShown: show
      }
    })
  }

  // UI 
  // Render the INPUT component which is part of https://material-ui.com/
  // wire up error and helperText control which is used for displaying 
  // validation messages
  //
  render() {
    
    // remove properties not to be passed down to child      
    const childProps = { ...this.props };
    delete childProps.onFieldUpdated;

    return (
      <FormControl margin="normal" fullWidth variant="outlined">
        <InputLabel
          htmlFor="standard-adornment-password">Password</InputLabel>
        <OutlinedInput
          
          {...childProps}
          className="disabled"
          id="standard-adornment-password"
          type =  {(this.state as IValidationPasswordState).isPasswordShown ? 'text' : 'password'}
          labelWidth={80}          
          autoComplete="off"          
          onChange={(event) => { this.handleOnChangeEvent(event) }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={ () => {this.handleClickShowPassword() } }
              >
                {(this.state as IValidationPasswordState).isPasswordShown ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText hidden={this.state.isValid}>{this.state.validationError}</FormHelperText>
      </FormControl>
    );
  }
}

export default withStyles(styles)(ValidatedPasswordField)