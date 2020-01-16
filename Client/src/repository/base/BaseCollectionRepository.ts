import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import { IApiModel }                            from "../../models/interfaces/IApiModel";
import { IModelFactory }                        from "../../modelFactories/interfaces/IModelFactory";
import ApiBaseCollectionResponseModel           from "../../models/apiBase/ApiBaseCollectionResponseModel";
import ApiGetService                            from "./lowLevel/ApiGetService";
import BaseApiConfig                            from "./ApiBaseConfig";

export default class BaseCollectionRepository<T  extends IApiModel> {

    public getList(apiEndpoint: string, modelFactory: IModelFactory<T>) : ApiResponse<ApiBaseCollectionResponseModel<T>> {
        const apiGetService = new ApiGetService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiGetService.getList(endpoint,modelFactory);        
    }
}