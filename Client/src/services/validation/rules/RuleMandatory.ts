import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMandatory implements IValidationRule {
    
    isValid(value: string): Boolean {
        return true;
    }

}