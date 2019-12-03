import ValidatedTextField                       from "../../controls/ValidatedTextField";

export interface IValidationContextState {    
    fields : Array<ValidatedTextField>;
    hasBeenFullyValidated: Boolean;
    isFormValid: Boolean;
}