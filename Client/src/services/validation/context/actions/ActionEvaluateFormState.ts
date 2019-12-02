import { IValidationAction }                    from './../interfaces/IValidationAction';
// import ValidatedTextField                       from '../../controls/ValidatedTextField';
import ValidationState                          from '../state/ValidationState';

export default class ActionEvaluateFormState implements IValidationAction {    

    private validationState : ValidationState;

    constructor(validationState : ValidationState) {
        this.validationState = validationState;
    }

    execute(): void {
        console.log("ActionEvaluateFormState:execute")
        // sconsole.log(this.validationState);
        // this.validationState.state.fields.forEach((field :ValidatedTextField ) => {
        //     console.log(field);
        // });
    }
}