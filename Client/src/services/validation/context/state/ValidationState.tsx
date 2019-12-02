import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { ValidationContext }                    from '../context/ValidationContext';
import ActionAddValidationField                 from '../actions/ActionAddValidationField';
import ActionEvaluateFormState                  from '../actions/ActionEvaluateFormState';
import React                                    from 'react';
import ValidatedTextField                       from '../../controls/ValidatedTextField';

class ValidationState extends Component<any, IValidationContextState> implements IValidationContextActions {

  addField(field: ValidatedTextField): void {
    let action = new ActionAddValidationField(this, field);
    action.execute();
  }

  evaluateFormState(): void {
    let action = new ActionEvaluateFormState(this);
    action.execute();
  }
  
  state = {
    fields : new Array<ValidatedTextField>()
  };

  render() {
    return (
      <ValidationContext.Provider
        value={{
          fields : this.state.fields,
          addField : this.addField,
          evaluateFormState: this.evaluateFormState,
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

export default ValidationState;