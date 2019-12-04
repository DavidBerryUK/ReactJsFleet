//
// Define properties and methods for a validation rule.
// Any other values required to evaluate the rule must be passed as part of the constructor,
// This allows the rules to be defined in-line in the UI-Render template
//
export default interface IValidationRule {
    // UI Suitable error message should the rule not pass
    //
    errorMessage: string;

    // Method that runs the rule, where value is the text value being evaluated 
    //
    isValid(value: string) : boolean;
}