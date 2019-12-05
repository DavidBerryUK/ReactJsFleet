//
// Define the state held by a validation control
//
export interface IValidatedUIControlState {
    
    // The text value of the control
    //
    text?: string

    // the validation state of the control, it is assumed that
    // the validation state is false when initialised,
    // the form can be validated on load by providing the 
    // 'validateOnLoad' attribute to the ValidationState elements e.g.
    //    <ValidationState validateOnLoad> 
    isValid?: boolean

    // the current error text
    //
    validationError?: string
}