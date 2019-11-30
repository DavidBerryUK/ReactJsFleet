import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMaxLength implements IValidationRule{

    private maxLength: number;

    constructor(maxLength: number) {
        this.maxLength = maxLength;
    }

    isValid(value: string): Boolean {
        return true;
    }
}