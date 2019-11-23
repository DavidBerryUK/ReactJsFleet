import { IApiModel } from "../interfaces/IApiModel";

export default class VehicleModel  implements IApiModel {
    public static className = "VehicleModel"

    public doors? : Number;
    public registration? : String;
    public make? : String;
    public model? : String;
    public colour? : String;
    public mileage? : Number;
    public fuel? : String;
    public bodyType? : String;
    public mpg? : Number;
    public transmission? : String;

    constructor() {
        
    }

    public get entityName(): string {
        return VehicleModel.className;
    }

    public get entityKey(): string {
        return `${this.registration}`;
    }

    public get entityValue(): string {
        return `${this.registration}`;
    }

    public get entitySortValue(): any {
        return `${this.registration}`;
    }
}