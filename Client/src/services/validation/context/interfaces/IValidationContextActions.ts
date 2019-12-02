import ValidatedTextField                       from "../../controls/ValidatedTextField";

export interface IValidationContextActions {
    addField(field: ValidatedTextField) : void;
    evaluateFormState(): void,
}