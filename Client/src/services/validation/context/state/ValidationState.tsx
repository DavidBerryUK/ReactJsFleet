import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { ValidationContext }                    from '../context/ValidationContext';
import ActionAddValidationField                 from '../actions/ActionAddValidationField';
import ActionSetValidationGroup                 from '../actions/ActionSetValidationGroup';
import React                                    from 'react';
import ValidationField                          from '../../ValidationField';
import ValidationFieldModel                     from '../models/ValidationFieldModel';
import ValidationGroup                          from '../../ValidationGroup';

class ValidationState extends Component<any,IValidationContextState> implements IValidationContextActions {

  setGroup(group: ValidationGroup): void {
    let action = new ActionSetValidationGroup(group);
    action.execute();
  }

  addField(field: ValidationField): void {
    let action = new ActionAddValidationField(field);
    action.execute();
  }
  
  state = {
    group : null,
    fields : new Array<ValidationFieldModel>()
  };

  render() {
    return (
      <ValidationContext.Provider
        value={{
          group: this.state.group,
          fields : this.state.fields,
          setGroup : this.setGroup,
          addField : this.addField
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

export default ValidationState;