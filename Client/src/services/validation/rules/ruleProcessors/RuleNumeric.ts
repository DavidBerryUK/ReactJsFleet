import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleNumeric implements IValidationRule{
    
    errorMessage: string = "";
    hasMandatoryIndicator = false;

    isValid(value: string): boolean {
        this.errorMessage = "";
        return true;
    }
}