import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleDecimal implements IValidationRule{
    
    errorMessage: string = "";
    hasMandatoryIndicator = false;

    isValid(value: string): boolean {
        this.errorMessage = "";
        var number = Number(value);        
        if (  isNaN(number) ) {
            this.errorMessage = "must be a decimal";
            return false;
        }
        return true;
    }
}