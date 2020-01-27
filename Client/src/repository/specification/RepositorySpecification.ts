import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import ApiBaseCollectionResponseModel           from "../../models/apiBase/ApiBaseCollectionResponseModel";
import BaseCollectionRepository                 from "../base/BaseCollectionRepository";
import FactoryListItemModel                     from "../../modelFactories/FactoryListItemModel";
import ListItemModel                            from "../../models/list/ListItemModel";

export default class RepositorySpecification extends BaseCollectionRepository<ListItemModel> {

    public getUniqueModels(): ApiResponse<ApiBaseCollectionResponseModel<ListItemModel>> {
        var endpoint = `/api/specification/list/models`
        return this.getList(endpoint, new FactoryListItemModel());
    }

    public getUniqueBodyTypes(): ApiResponse<ApiBaseCollectionResponseModel<ListItemModel>> {
        var endpoint = `/api/specification/list/bodyTypes`
        return this.getList(endpoint, new FactoryListItemModel());
    }

    public getUniqueMakes(): ApiResponse<ApiBaseCollectionResponseModel<ListItemModel>> {
        var endpoint = `/api/specification/list/makes`
        return this.getList(endpoint, new FactoryListItemModel());
    }

    public getUniqueColours(): ApiResponse<ApiBaseCollectionResponseModel<ListItemModel>> {
        var endpoint = `/api/specification/list/colours`
        return this.getList(endpoint, new FactoryListItemModel());
    }

    public getUniqueDoors(): ApiResponse<ApiBaseCollectionResponseModel<ListItemModel>> {
        var endpoint = `/api/specification/list/doors`
        return this.getList(endpoint, new FactoryListItemModel());
    }

    public getUniqueTransmission(): ApiResponse<ApiBaseCollectionResponseModel<ListItemModel>> {
        var endpoint = `/api/specification/list/transmission`
        return this.getList(endpoint, new FactoryListItemModel());
    }
}