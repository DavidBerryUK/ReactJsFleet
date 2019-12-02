import { IValidationAction }                    from "../interfaces/IValidationAction"
import ValidatedTextField                       from "../../controls/ValidatedTextField";
import ValidationState                          from '../state/ValidationState';

export default class ActionAddValidationField implements IValidationAction {

    private validationState : ValidationState;
    private field : ValidatedTextField;

    constructor(validationState : ValidationState, field : ValidatedTextField) {
        this.field = field;
        this.validationState = validationState;
    }

    execute(): void {
        console.log("ActionAddValidationField:execute")
        const fields = {...this.validationState.state.fields};
        fields.push(this.field)

        this.validationState.setState ({
            fields: fields
        });
    }
}