import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMinValue implements IValidationRule{

    private minValue: number;

    constructor(minValue: number) {
        this.minValue = minValue;
    }

    isValid(value: string): Boolean {
        return true;
    }
}