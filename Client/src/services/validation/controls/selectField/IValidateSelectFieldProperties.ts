import SelectItemModel                          from "./SelectItemModel";

export interface IValidateSelectFieldProperties {
    label : string
    name : string,
    items : Array<SelectItemModel>
}