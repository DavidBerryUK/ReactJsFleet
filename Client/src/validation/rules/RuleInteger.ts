import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleInteger implements IValidationRule{
    
    isValid(value: string): Boolean {
        return true;
    }

}