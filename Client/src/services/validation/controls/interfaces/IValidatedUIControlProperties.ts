import IValidationRule                          from "../../rules/interfaces/IValidationRule";
import ValidatedTextField                       from "../textField/ValidatedTextField";

// The attributes that may be supplied to a validation 
// control
//
export interface IValidatedUIControlProperties {
    //
    // a list of rules that defined a valid value, see
    // actions available in \services\validation\rules
    //
    // e.g. 
    //   rules={[new RuleMandatory(), new RuleMaxLength(40)]}
    rules : Array<IValidationRule>;

    // an optional call back that may be used to capture
    // when the local value changes
    //
    // e.g.
    // onFieldUpdated={(field: ValidatedTextField) => {
    //    console.log(`${field.name} updated to ${field.state.text}`)
    // }} />
    onFieldUpdated?:  (field: ValidatedTextField) => void ;
}