import ValidationFieldModel                     from "../models/ValidationFieldModel"
import ValidationGroupModel                     from "../models/ValidationGroupModel"

export interface IValidationContextState {
    group : ValidationGroupModel | null;
    fields : Array<ValidationFieldModel>;
}