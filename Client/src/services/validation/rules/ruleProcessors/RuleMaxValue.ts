import IValidationRule                          from "../../interfaces/IValidationRule";

export default class RuleMaxValue implements IValidationRule {

    private maxValue: number;
    errorMessage: string = "";

    constructor(maxValue: number) {
        this.maxValue = maxValue;
    }

    isValid(value: string): boolean {
        this.errorMessage = "";
        return true;
    }
}