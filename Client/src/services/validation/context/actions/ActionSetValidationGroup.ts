import { IValidationAction }                    from "../interfaces/IValidationAction"
import ValidationGroup                          from "../../ValidationGroup"

export default class ActionSetValidationGroup implements IValidationAction {

    private group : ValidationGroup;

    constructor(group : ValidationGroup) {
        this.group = group;
    }

    execute(): void {
        console.log("ActionSetValidationGroup:execute")
    }
}