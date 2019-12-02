import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { ValidationContext }                    from '../context/ValidationContext';
import ActionAddValidationField                 from '../actions/ActionAddValidationField';
import React                                    from 'react';
import ValidationField                          from '../../ValidationField';
import ValidationFieldModel                     from '../models/ValidationFieldModel';

class ValidationState extends Component<any,IValidationContextState> implements IValidationContextActions {


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
          fields : this.state.fields,
          addField : this.addField
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

export default ValidationState;