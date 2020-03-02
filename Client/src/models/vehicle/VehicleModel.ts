import { IApiModel } from "../interfaces/IApiModel";

export default class VehicleModel  implements IApiModel {
    public static className = "VehicleModel"

    public vehicleId? : Number;
    public doors? : Number;
    public registration? : string;
    public make? : string;
    public model? : string;
    public colour? : string;
    public mileage? : Number;
    public fuel? : string;
    public bodyType? : string;
    public mpg? : Number;
    public transmission? : string;

    public get entityName(): string {
        return VehicleModel.className;
    }

    public get entityKey(): string {
        return `${this.vehicleId}`;
    }

    public get entityValue(): string {
        return `${this.registration}`;
    }

    public get entitySortValue(): any {
        return `${this.registration}`;
    }
}