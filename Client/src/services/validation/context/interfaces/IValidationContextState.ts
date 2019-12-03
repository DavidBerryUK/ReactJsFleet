import ValidatedTextField                       from "../../controls/ValidatedTextField";

export interface IValidationContextState {    
    fields : Array<ValidatedTextField>;
    hasBeenFullyValidated: boolean;
    isFormValid: Boolean;
    fieldsValidCount : number;
    fieldsInvalidCount : number;
}