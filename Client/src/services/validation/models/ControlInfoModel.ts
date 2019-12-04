export default class ControlInfoModel {

    name: string;
    value: string;
    isValid: boolean;
    errorMessage: string;

    constructor(name: string, value: string, isValid: boolean, errorMessage: string) {

        this.name = name;
        this.value = value;
        this.isValid = isValid;
        this.errorMessage = errorMessage;
    }

    update(value: string, isValid: boolean, errorMessage: string) {
        this.value = value;
        this.isValid = isValid;
        this.errorMessage = errorMessage;
    }
}