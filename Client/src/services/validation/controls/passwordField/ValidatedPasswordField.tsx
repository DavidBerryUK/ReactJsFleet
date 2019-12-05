import { FormControl, FormHelperText }                          from '@material-ui/core';
import { IconButton}                            from '@material-ui/core';
import { InputAdornment }                       from '@material-ui/core';
import { InputLabel }                           from '@material-ui/core';
import { InputProps }                           from '@material-ui/core/Input';
import BaseValidationControl                    from '../baseValidationControl/BaseValidationControl';
import React                                    from 'react';
import Visibility                               from '@material-ui/icons/Visibility';
import VisibilityOff                            from '@material-ui/icons/VisibilityOff';
import OutlinedInput                            from '@material-ui/core/OutlinedInput';

// NOTE - MUCH OF THIS CAN BE MOVED TO A BASE CLASS - THIS IS 
//        CURRENTLY A PROOF OF CONCEPT, BUT WILL ADD ADDITIONAL CONTROLS SUCH AS
//        DROP DOWNS AND SWITCHES WHICH WILL ALSO BE PART OF THE FORM
//
// A Wrapped TextField that handles validation and form 
// model synchronization
//
// * Maintains own value state
//

export default class ValidatedPasswordField extends BaseValidationControl<InputProps, any>  {

  componentDidMount() {
    this.setShowPassword(false)
  }

  handleClickShowPassword() {

  }

  private setShowPassword(show: boolean) {
    this.setState(() => {
      return {
        showPassword: show
      }
    })
  }

  // UI 
  // Render the TextField component which is part of https://material-ui.com/
  // wire up error and helperText which is used for displaying 
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
          id="standard-adornment-password"
          type='text'
          labelWidth={80}
          autoComplete="off"
          onChange={(event) => { this.handleOnChangeEvent(event) }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.isValid ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    );
  }
}
