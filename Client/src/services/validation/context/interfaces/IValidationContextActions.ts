import ValidatedTextField                       from "../../controls/textField/ValidatedTextField";

// methods available on the context that can be called by child UI Components
//
export interface IValidationContextActions<T> {
    //
    // called by the child to register itself with the parent form context
    //
    addField(field: ValidatedTextField) : void;

    //
    // called by the childs to tell the parent form context that its state
    // has been updated
    //
    onFieldUpdated(field: ValidatedTextField): void,

    //
    // fully validate the form
    //
    validate(): boolean;


    getModel(): T;
}