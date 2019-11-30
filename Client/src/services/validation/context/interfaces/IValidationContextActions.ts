import ValidationField                          from "../../ValidationField";
import ValidationGroup                          from "../../ValidationGroup";

export interface IValidationContextActions {
    setGroup(group: ValidationGroup) : void;
    addField(field: ValidationField) : void;
}