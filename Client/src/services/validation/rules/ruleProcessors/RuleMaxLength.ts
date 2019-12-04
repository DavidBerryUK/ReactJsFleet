import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMaxLength implements IValidationRule {

    private maxLength: number;
    errorMessage: string = "";

    constructor(maxLength: number) {
        this.maxLength = maxLength;
    }

    isValid(value: string): boolean {
        this.errorMessage = "";        
        
        if ( value === undefined || value === null || value.length <= this.maxLength) {            
            return true;
        }
        
        this.errorMessage = `must be less or equal to ${this.maxLength} characters `;
        return false;
    }
}