import { TextFieldProps }                       from '@material-ui/core/TextField';
import BaseValidationControl                    from '../baseValidationControl/BaseValidationControl';
import React                                    from 'react';
import TextField                                from '@material-ui/core/TextField';

// NOTE - MUCH OF THIS CAN BE MOVED TO A BASE CLASS - THIS IS 
//        CURRENTLY A PROOF OF CONCEPT, BUT WILL ADD ADDITIONAL CONTROLS SUCH AS
//        DROP DOWNS AND SWITCHES WHICH WILL ALSO BE PART OF THE FORM
//
// A Wrapped TextField that handles validation and form 
// model synchronization
//
// * Maintains own value state
//
export default class ValidatedTextField extends BaseValidationControl<TextFieldProps  ,any>  {

    // UI 
    // Render the TextField component which is part of https://material-ui.com/
    // wire up error and helperText which is used for displaying 
    // validation messages
    //
    render() {
        // remove properties not to be passed down to child      
        const childProps = {...this.props};
        delete childProps.onFieldUpdated;
        
        return (
            <TextField
                {...childProps}
                error = {!this.state.isValid}
                helperText = {this.state.validationError}
                onChange={(event) => { this.handleOnChangeEvent(event) }}
                value={this.state.text}
            />
        );
    }
}
