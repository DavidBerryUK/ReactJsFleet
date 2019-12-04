import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleInteger implements IValidationRule{
    
    errorMessage: string = "";

    isValid(value: string): boolean {
        this.errorMessage = "";
        return true;
    }

}