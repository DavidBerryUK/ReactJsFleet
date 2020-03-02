import { FormControl }                          from '@material-ui/core';
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

//
// A Input password control,
// combines lots of low level controls to create a password input control
//
// * Maintains own value state
//

export default class ValidatedPasswordFieldControl extends BaseValidationControl<InputProps, IValidationPasswordState>  {
  
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
          error = {!this.state.isValid}
          htmlFor="standard-adornment-password">Password</InputLabel>
        <OutlinedInput          
          {...childProps}
          id="standard-adornment-password"          
          type =  {(this.state as IValidationPasswordState).isPasswordShown ? 'text' : 'password'}
          labelWidth={80}          
          autoComplete="off"          
          onChange={(event) => { this.valueChangedEventHandler(event) }}
          error = {!this.state.isValid}
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
        <FormHelperText hidden={this.state.isValid} error={true}>{this.state.validationError}</FormHelperText>
      </FormControl>
    );
  }
}

