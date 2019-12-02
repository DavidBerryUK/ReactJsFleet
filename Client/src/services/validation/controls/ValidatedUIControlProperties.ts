import IValidationRule                          from "../interfaces/IValidationRule";
import ValidatedTextField                       from "./ValidatedTextField";

export interface ValidatedUIControlProperties {
    rules : Array<IValidationRule>;
    onFieldUpdated?:  (field: ValidatedTextField) => void ;
}