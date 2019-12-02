// import ActionAddValidationField                 from '../actions/ActionAddValidationField';
import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { ValidationContext }                    from '../context/ValidationContext';
import ActionEvaluateFormState                  from '../actions/ActionEvaluateFormState';
import React                                    from 'react';
import ValidatedTextField                       from '../../controls/ValidatedTextField';

class ValidationState extends Component<any, IValidationContextState> implements IValidationContextActions {

  state = {
    fields : new Array<ValidatedTextField>()
  };

  addField(field: ValidatedTextField): void {
    //let action = new ActionAddValidationField(this, field);
    //action.execute();
    console.log('*** add field ***');
    console.log(this);
  }

  evaluateFormState(): void {
    let action = new ActionEvaluateFormState(this);
    action.execute();
  }    

  UNSAFE_componentWillMount() {
    console.log("[VALIDATION STATE]:componentWillMount");
  }

  render() {    
    return (
      <ValidationContext.Provider
        value={{
          fields : this.state.fields,
          addField : (field: ValidatedTextField) => { this.addField(field ) },
          evaluateFormState: this.evaluateFormState,
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

export default ValidationState;