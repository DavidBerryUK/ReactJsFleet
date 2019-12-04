import { Component }                            from 'react';
import { IValidationContextActions }            from '../interfaces/IValidationContextActions';
import { IValidationContextState }              from '../interfaces/IValidationContextState';
import { IValidationStateProperties }           from '../interfaces/IValidationStateProperties';
import { ValidationContext }                    from '../context/ValidationContext';
import ControlInfoCollectionModel               from '../../models/ControlInfoCollectionModel';
import React                                    from 'react';
import ValidatedTextField                       from '../../controls/TextField/ValidatedTextField';

// The current state of the validation context.
//
// The <ValidateState>....</ValidateState> element is used in the wrap form controls
// 
//
class ValidationState extends Component<IValidationStateProperties, IValidationContextState> implements IValidationContextActions {

  private haveValidatedOnLoad: Boolean = false;
  
  //
  // provide starting values for state, the state is defined by the 
  // IValidationContextState interface
  //
  state = {
    fields : new Array<ValidatedTextField>(),
    controlInfoCollection : new ControlInfoCollectionModel(),
    fieldsInvalidCount: 0,
    fieldsValidCount : 0,
    hasBeenFullyValidated: false,
    isFormValid: false
  }


  // updates after form has been created and 
  // state has been set/
  public componentDidUpdate() {    
    if (this.props.validateOnLoad) {     
      if ( this.haveValidatedOnLoad === false ) {  
        this.haveValidatedOnLoad = true;
        this.validateAllFields();
      }
    };
  }

  // implement interface IValidationContextActions
  // Child controls must call this to register with the form
  //
  public addField(field: ValidatedTextField): void {
  
    console.log("Add Field - show validation state");
    console.log(this);


    this.setState((state) => {

      const controlCollection = state.controlInfoCollection;      
      controlCollection.add(field.name, field.state.text, field.state.isValid, field.state.validationError);

      const list = state.fields;      
      list.push(field);

      return {  
        fields : list, 
        controlInfoCollection : controlCollection 
      }
    });    

  }  

  // implement interface
  // A child control has reported that it has been updated
  //
  public onFieldUpdated(field: ValidatedTextField): void {


      this.setState((state) => {
        state.controlInfoCollection.update(field.name, field.state.text, field.state.isValid, field.state.validationError);            
      return {         
        controlInfoCollection : state.controlInfoCollection
      }},() => {

      // quickly tally up totals
      var validCount = 0;
      var invalidCount = 0;
      this.state.fields.forEach((field: ValidatedTextField) => {                               
        if (field.state.isValid) {
          validCount++;
        } else {
          invalidCount++;
        }
      });    
      this.updateIsFormValid(invalidCount, validCount);
      });
    
  }      

  // anything is allowed to request a full form validation
  //
  public validateAllFields() {        
    var validCount = 0;
    var invalidCount = 0;
    //
    // Loop though all children, validate them (runs all validation rules)
    // and tally results.
    //
    // NOTE: calling validate() will update the UI and display error
    //       messages if the values on the control do not match rules
    //
    this.state.fields.forEach((field: ValidatedTextField) => {                               
      if (field.validate()) {
        validCount++;
      } else {
        invalidCount++;
      }
    });    
    this.updateIsFormValid(invalidCount, validCount);
  }

  
  // update the form state
  //
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

  
  // UI
  //
  render() {    
    return (
      <ValidationContext.Provider
        value={{
          fields : this.state.fields,
          controlInfoCollection: this.state.controlInfoCollection,
          hasBeenFullyValidated: this.state.hasBeenFullyValidated,
          isFormValid: this.state.isFormValid,
          fieldsValidCount: this.state.fieldsValidCount,
          fieldsInvalidCount: this.state.fieldsInvalidCount,
          addField : (field: ValidatedTextField) => { this.addField(field ) },
          onFieldUpdated: (field: ValidatedTextField) => { this.onFieldUpdated(field) },
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

export default ValidationState;