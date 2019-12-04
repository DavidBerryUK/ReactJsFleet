import ControlInfoModel                         from "./ControlInfoModel";

export default class ControlInfoCollectionModel {

    items: Array<ControlInfoModel>;

    constructor() {
        this.items = new Array<ControlInfoModel>();
    }

    add(name: string, value: string, isValid: boolean, errorMessage: string) {
        const model = new ControlInfoModel(name, value, isValid, errorMessage);
        this.items.push(model);
    }

    update(name: string, value: string, isValid: boolean, errorMessage: string) {
        var models = this.items.filter((item : ControlInfoModel) => { return item.name === name });
        if (models.length === 1) {
            models[0].update(value, isValid, errorMessage);
        }
    }

}