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

        this.validationMessage = '';
        text = text.trim();
        this.isValid = true;
        this.rules.forEach(rule => {
            if ( rule.isValid(text) === false ) {
                if ( this.validationMessage.length > 0 ) {
                    this.validationMessage = this.validationMessage + ", ";
                }
                this.validationMessage = this.validationMessage + rule.errorMessage;
                this.isValid = false
            }
        });

        if ( !this.isValid ) {
            this.validationMessage = `${this.labelName} ${this.validationMessage}`;
        }

        return this.isValid;
    }

}