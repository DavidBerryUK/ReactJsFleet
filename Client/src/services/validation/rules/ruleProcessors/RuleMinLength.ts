import IValidationRule                          from "../../interfaces/IValidationRule";

export default class RuleMinLength implements IValidationRule{

    private minLength: number;
    errorMessage: string = "";

    constructor(minLength: number) {
        this.minLength = minLength;
    }

    isValid(value: string): boolean {
        this.errorMessage = "";
        return true;
    }
}