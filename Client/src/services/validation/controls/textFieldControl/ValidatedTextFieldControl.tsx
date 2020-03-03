import { Box }                                  from '@material-ui/core';
import { IValidatedUIControlProperties }        from '../interfaces/IValidatedUIControlProperties';
import { TextFieldProps }                       from '@material-ui/core/TextField';
import BaseValidationControl                    from '../baseValidationControl/BaseValidationControl';
import React                                    from 'react';
import TextField                                from '@material-ui/core/TextField';

// A Wrapped TextField that handles validation and form 
// model synchronization
//
// * Maintains own value state
//
export default class ValidatedTextFieldControl extends BaseValidationControl<TextFieldProps & IValidatedUIControlProperties, any>  {

    private initalValueSet: Boolean = false;

    public componentDidUpdate() {

        if (this.initalValueSet) {
            return;
        }
        if (this.props.value) {
            if (this.state.text === '') {
                this.initalValueSet = true;
                super.setTextValue(`${this.props.value}`)
            }
        }
    }


    render() {
        // remove properties not to be passed down to child      
        const childProps = { ...this.props };
        delete childProps.onFieldUpdated;

        return (
            <Box pr={1}>
                <TextField
                    {...childProps}
                    required
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!this.state.isValid}
                    helperText={this.state.validationError}
                    onChange={(event) => { this.valueChangedEventHandler(event) }}
                    value={this.state.text}
                />
            </Box>
        );
    }
}
