import { IModelFactory }                        from './interfaces/IModelFactory';
import ModelFactoryBase                         from "./ModelFactoryBase";
import AuthenticationModel                      from '../models/authentication/AuthenticationModel';

export default class FactoryAuthenticationModel  extends ModelFactoryBase<AuthenticationModel>
    implements IModelFactory<AuthenticationModel> {

    public create(): AuthenticationModel {
        return new AuthenticationModel();
    }
}
