import { IModelFactory }                        from './interfaces/IModelFactory';
import ListItemModel                            from '../models/list/ListItemModel';
import ModelFactoryBase                         from "./ModelFactoryBase";

export default class FactoryListItemModel  extends ModelFactoryBase<ListItemModel>
    implements IModelFactory<ListItemModel> {

    public create(): ListItemModel {
        return new ListItemModel();
    }
}
