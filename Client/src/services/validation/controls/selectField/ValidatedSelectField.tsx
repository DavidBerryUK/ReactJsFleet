import { FormControl }                          from '@material-ui/core';
import { InputLabel }                           from '@material-ui/core';
import { IValidateSelectFieldProperties }       from './IValidateSelectFieldProperties';
import { MenuItem }                             from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import BaseValidationControl                    from '../baseValidationControl/BaseValidationControl';
import React                                    from 'react';
import SelectItemModel from './SelectItemModel';


// A Wrapped TextField that handles validation and form 
// model synchronization
//
// * Maintains own value state
//
export default class ValidatedSelectField extends BaseValidationControl<IValidateSelectFieldProperties  ,any>  {

    // UI 
    // Render the TextField component which is part of https://material-ui.com/
    // wire up error and helperText which is used for displaying 
    // validation messages
    //
    render() {

        const labelId = `${this.props.name}-label`;

        // remove properties not to be passed down to child      
        const childProps = {...this.props};
        delete childProps.onFieldUpdated;
        
        return (

            <FormControl variant="outlined"  margin="normal" fullWidth>
            <InputLabel id={labelId}>{this.props.label}</InputLabel>
            <Select
              labelId={labelId}
              labelWidth={50}>
              <MenuItem value=""><em>None</em></MenuItem>
              {
                this.props.items.map((item : SelectItemModel) => (
                  <MenuItem value={item.id}>{item.text}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        );
    }
}
