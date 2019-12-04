import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMandatory implements IValidationRule {
    
    errorMessage: string = "";

    isValid(value: string): boolean {
        this.errorMessage = "";

        if ( value === undefined || value === null || value.length === 0) {
            this.errorMessage = "is Mandatory"
            return false;
        }
        return true;
    }

}