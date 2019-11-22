import { IModelFactory }                        from './interfaces/IModelFactory';
import ModelFactoryBase                         from "./ModelFactoryBase";
import UserModel                                from "../models/user/UserModel";


export default class ModelFactoryPersonSummary  extends ModelFactoryBase<UserModel>
    implements IModelFactory<UserModel> {

    public create(): UserModel {
        return new UserModel();
    }
}
