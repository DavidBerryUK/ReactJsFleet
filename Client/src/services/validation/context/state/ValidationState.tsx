import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { IValidationStateProperties }           from '../interfaces/IValidationStateProperties';
import { ValidationContext }                    from '../context/ValidationContext';
import React                                    from 'react';
import ValidatedTextField                       from '../../controls/ValidatedTextField';

class ValidationState extends Component<IValidationStateProperties, IValidationContextState> implements IValidationContextActions {

  private haveValidatedOnLoad: Boolean = false;
  //
  // provide default value for state
  //
  state = {
    fields : new Array<ValidatedTextField>(),
    fieldsInvalidCount: 0,
    fieldsValidCount : 0,
    hasBeenFullyValidated: false,
    isFormValid: false
  }

  addField(field: ValidatedTextField): void {
    this.setState((state) => {
      const list = state.fields;      
      list.push(field);
      return {fields : list}
    });    
  }  

  private updateIsFormValid(fieldsInvalidCount: number, fieldsValidCount : number) {
    this.setState((state) => {
      return {
        hasBeenFullyValidated: true,
        isFormValid : (fieldsInvalidCount === 0),
        fieldsInvalidCount : fieldsInvalidCount,
        fieldsValidCount: fieldsValidCount
      }
    });    
  }

  evaluateFormState(): void {
//    let action = new ActionEvaluateFormState(this);
    // action.execute();
  }    

  //
  // Called BEFORE the children render
  //
  UNSAFE_componentWillMount() {
    // console.log("STATE - BEFORE CHILDREN");
  }

  //
  // Called AFTER the children render
  //
  componentDidMount() {    
    // console.log("STATE - AFTER CHILDREN");

    // attempting to access the state here will not work as the state
    // will not have processed all the updates    
  }

  validateAllFields() {    
    console.log("validateAllFields:BEGIN");
    var validCount = 0;
    var invalidCount = 0;
    this.state.fields.forEach((field: ValidatedTextField) => {                               
      if (field.validate()) {
        validCount++;
      } else {
        invalidCount++;
      }
    });
    console.log("validateAllFields:END");
    this.updateIsFormValid(invalidCount, validCount);
  }

  // updates after form has been created and 
  // state has been set/
  componentDidUpdate() {    
    if (this.props.validateOnLoad) {     
      if ( this.haveValidatedOnLoad === false ) {  
        this.haveValidatedOnLoad = true;
        this.validateAllFields();
      }
    };
  }

  render() {    
    return (
      <ValidationContext.Provider
        value={{
          fields : this.state.fields,
          hasBeenFullyValidated: this.state.hasBeenFullyValidated,
          isFormValid: this.state.isFormValid,
          fieldsValidCount: this.state.fieldsValidCount,
          fieldsInvalidCount: this.state.fieldsInvalidCount,
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