import IValidationRule from "./IValidationRule";
import ValidationGroup from "../ValidationGroup";

export interface IValidationRuleProperties {
    rules : Array<IValidationRule>;
    // setGroup(group: ValidationGroup) : void;
}