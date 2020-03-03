import IValidationRule                          from "../interfaces/IValidationRule";

export default class RuleDecimalBetween implements IValidationRule{
    
    private minValue : number;
    private maxValue : number;

    errorMessage: string = "";
    hasMandatoryIndicator = false;

    constructor(minValue : number, maxValue: number) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    isValid(value: string): boolean {
        this.errorMessage = "";
        var number = Number(value);           
        if (  isNaN(number) || !Number.isInteger(number) ) {
            this.errorMessage = "must be a whole number";
            return false;
        }
        if ( number < this.minValue || number > this.maxValue ) {
            this.errorMessage = `must be between ${this.minValue} and ${this.maxValue}`;
            return false;
        }
        return true;
    }

}