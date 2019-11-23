import { IModelFactory }                        from './interfaces/IModelFactory';
import ModelFactoryBase                         from "./ModelFactoryBase";
import VehicleModel                             from '../models/vehicle/VehicleModel';

export default class FactoryVehicleModel  extends ModelFactoryBase<VehicleModel>
    implements IModelFactory<VehicleModel> {

    public create(): VehicleModel {
        return new VehicleModel();
    }
}
