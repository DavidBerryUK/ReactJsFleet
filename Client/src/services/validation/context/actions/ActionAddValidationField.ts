import { IValidationAction }                    from "../interfaces/IValidationAction"
import ValidatedTextField                       from "../../controls/ValidatedTextField";
import ValidationState                          from '../state/ValidationState';

export default class ActionAddValidationField implements IValidationAction {

    private state : ValidationState;
    private field : ValidatedTextField;

    constructor(state : ValidationState, field : ValidatedTextField) {
        this.field = field;
        this.state = state;
    }

    execute(): void {
        console.log("ActionAddValidationField:execute")
        console.log(this.state.state);
        //const fields = {...this.validationState.state.fields};
        //fields.push(this.field)

        //this.validationState.setState ({
            //fields: fields
        //});
    }
}