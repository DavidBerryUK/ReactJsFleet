export default interface IValidationRule {

    errorMessage: string;
    isValid(value: string) : boolean;
}