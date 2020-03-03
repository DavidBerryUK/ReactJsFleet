import { IApiModel } from "../interfaces/IApiModel";

export default class ListItemModel  implements IApiModel {
    public static className = "ListItemModel"

    public id : string;
    public text : string;    

    constructor(id: string = "", text : string = "") {
        this.id = id;
        this.text = text;
    }

    public get entityName(): string {
        return ListItemModel.className;
    }

    public get entityKey(): string {
        return `${this.id}`;
    }

    public get entityValue(): string {
        return `${this.text}`;
    }

    public get entitySortValue(): any {
        return `${this.text}`;
    }
}