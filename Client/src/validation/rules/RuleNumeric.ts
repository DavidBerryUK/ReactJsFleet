import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleNumeric implements IValidationRule{

    isValid(value: string): Boolean {
        return true;
    }
}