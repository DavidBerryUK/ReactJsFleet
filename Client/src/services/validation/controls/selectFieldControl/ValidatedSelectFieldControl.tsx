import { FormControl, FormHelperText }                          from '@material-ui/core';
import { InputLabel }                           from '@material-ui/core';
import { MenuItem }                             from '@material-ui/core';
import { Select }                               from '@material-ui/core';
import BaseValidationControl                    from '../baseValidationControl/BaseValidationControl';
import ListItemModel                            from '../../../../models/list/ListItemModel';
import React                                    from 'react';

export interface IProperties {
  label: string
  name: string,
  items: Array<ListItemModel>
}

// A Wrapped TextField that handles validation and form 
// model synchronization
//
// * Maintains own value state
//
export default class ValidatedSelectFieldControl extends BaseValidationControl<IProperties, any>  {

  private initalValueSet: Boolean = false;

  public componentDidUpdate() {

    if (this.initalValueSet) {
      return;
    }

    if (this.props.value) {
      if (this.state.text === '' && this.props.items.length > 0) {
        this.initalValueSet = true;
        super.setTextValue(`${this.props.value}`)
      }
    }
  }

  render() {
    const labelId = `${this.props.name}-label`;

    // remove properties not to be passed down to child      
    const childProps = { ...this.props };
    delete childProps.onFieldUpdated;

    return (

      <FormControl variant="outlined" margin="normal" fullWidth   error = {!this.state.isValid}>
        <InputLabel id={labelId}>{this.props.label}</InputLabel>
        <Select
          // value={this.selectedValue()}
          value={this.state.text}
          labelId={labelId}
          labelWidth={50}
          onChange={(event: any) => { this.valueChangedEventHandler(event) }}          
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
            this.props.items.map((item: ListItemModel) => (
              <MenuItem key={item.id} value={item.id}>{item.text}</MenuItem>
            ))
          }
        </Select>
        <FormHelperText>{this.state.validationError}</FormHelperText>
      </FormControl>
    );
  }
}
