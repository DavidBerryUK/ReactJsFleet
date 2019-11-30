import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMinLength implements IValidationRule{

    private minLength: number;

    constructor(minLength: number) {
        this.minLength = minLength;
    }

    isValid(value: string): Boolean {
        return true;
    }
}