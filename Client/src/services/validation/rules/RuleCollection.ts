import IValidationRule                          from "./interfaces/IValidationRule";

// A wrapper for a collection of rules.
//
// This not only hides the Array<IValidationRule> from being passed around the application, 
// but provides a class to process and hold the resulting state of 
// a bundle of rules assigned to a control.
//
export default class RuleCollection {
    
    isValid : boolean = true;
    rules : Array<IValidationRule> = new Array<IValidationRule>();
    validationMessage : string = '';
    labelName: string = '';

    // Initialise with a list of rules
    //
    constructor(labelName: string, rules? : Array<IValidationRule>) {
        this.labelName = labelName;
        if ( rules ) {
            this.rules = rules;
        }
    }

    // Run all the rules
    //
    evaluateRules( text: string) : boolean {        

        // trim text before evaluating
        //
        this.validationMessage = '';
        text = text.trim();

        // assume is valid unless a rule fails
        //
        this.isValid = true;

        // loop though all rules
        //
        this.rules.forEach(rule => {
            if ( rule.isValid(text) === false ) {
                if ( this.validationMessage.length > 0 ) {
                    this.validationMessage = this.validationMessage + ", ";
                }

                // if rule fails, append error message, e.g. " is Mandatory", or 
                // " Maximum length is 20"
                //
                this.validationMessage = this.validationMessage + rule.errorMessage;
                this.isValid = false
            }
        });

        // if there are any errors, prefix error message with the 
        // controls label name, e.g. "User Name" 
        // to result in "User Name is Mandatory"
        //
        if ( !this.isValid ) {
            this.validationMessage = `${this.labelName} ${this.validationMessage}`;
        }

        return this.isValid;
    }

}