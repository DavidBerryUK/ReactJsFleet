import IValidationRule                          from "../../interfaces/IValidationRule";
import ValidatedTextField                       from "../ValidatedTextField";

export interface IValidatedUIControlProperties {
    rules : Array<IValidationRule>;
    onFieldUpdated?:  (field: ValidatedTextField) => void ;
}