import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleMinValue implements IValidationRule{

    private minValue: number;
    errorMessage: string = "";
    hasMandatoryIndicator = false;

    constructor(minValue: number) {
        this.minValue = minValue;
    }

    isValid(value: string): boolean {
        this.errorMessage = "";
        return true;
    }
}