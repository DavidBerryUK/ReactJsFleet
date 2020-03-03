import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleInteger implements IValidationRule{
    
    errorMessage: string = "";
    hasMandatoryIndicator = false;

    isValid(value: string): boolean {
        this.errorMessage = "";
        var number = Number(value);        
        if (  isNaN(number) || !Number.isInteger(number) ) {
            this.errorMessage = "must be a whole number";
            return false;
        }
        return true;
    }

}