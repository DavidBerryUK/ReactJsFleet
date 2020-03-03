import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMaxValue implements IValidationRule {

    private maxValue: number;
    errorMessage: string = "";
    hasMandatoryIndicator = false;

    constructor(maxValue: number) {
        this.maxValue = maxValue;
    }

    isValid(value: string): boolean {
        this.errorMessage = "";
        return true;
    }
}