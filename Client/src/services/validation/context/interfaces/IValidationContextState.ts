import ControlInfoCollectionModel               from "../../models/ControlInfoCollectionModel";
import ValidatedTextField                       from "../../controls/textField/ValidatedTextField";

// State held by the Form Context, 
//  All values are updated in realtime
//
export interface IValidationContextState {    
    // list of child controls withing the form, each child registers itself
    // 'automatically'. these are kept in the state, but are never updated due
    // to their size, a summary of information is kept in the controlInfoCollection object
    fields : Array<ValidatedTextField>;

    // summary of the fields on the form
    //
    controlInfoCollection : ControlInfoCollectionModel,

    // flags if the form has been fully validated yet, on form load this will
    // be false, unless a full validation has been requested on load
    //
    // 'validateOnLoad' attribute to the ValidationState elements e.g.
    //    <ValidationState validateOnLoad> 
    //
    hasBeenFullyValidated: boolean;

    // flags if the form is valid
    //
    isFormValid: Boolean;

    // count of the number of valid fields on the form
    //
    fieldsValidCount : number;

    // count of the number of invalid fields on the form
    //
    fieldsInvalidCount : number;
}