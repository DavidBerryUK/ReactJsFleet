import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMaxValue implements IValidationRule{

    private maxValue: number;

    constructor(maxValue: number) {
        this.maxValue = maxValue;
    }

    isValid(value: string): Boolean {
        return true;
    }
}