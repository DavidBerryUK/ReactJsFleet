import { IValidationAction }                    from "../interfaces/IValidationAction"
import ValidationField                          from "../../ValidationField";

export default class ActionAddValidationField implements IValidationAction {

    private field : ValidationField;

    constructor(field : ValidationField) {
        this.field = field;
    }

    execute(): void {
        console.log("ActionAddValidationField:execute")
    }
}