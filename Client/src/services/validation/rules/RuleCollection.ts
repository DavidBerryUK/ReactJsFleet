import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleCollection {
    
    isValid : boolean = true;
    rules : Array<IValidationRule> = new Array<IValidationRule>();
    validationMessage : string = '';

    constructor(rules? : Array<IValidationRule>) {
        if ( rules ) {
            this.rules = rules;
        }
    }

    evaluateRules(fieldName: string, text: string) : boolean {        

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
            this.validationMessage = `${fieldName} ${this.validationMessage}`;
        }

        return this.isValid;
    }

}