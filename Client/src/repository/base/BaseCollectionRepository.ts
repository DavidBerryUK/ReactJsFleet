import { ApiResponse }                          from "../apiContracts/ApiResponseContract";
import { IApiModel }                            from "../../models/interfaces/IApiModel";
import { IModelFactory }                        from "../../modelFactories/interfaces/IModelFactory";
import BaseApiConfig                            from "./ApiBaseConfig";
import ApiGetService                            from "./lowLevel/ApiGetService";

export default class BaseCollectionRepository<T  extends IApiModel> {

    public getList(apiEndpoint: string, modelFactory: IModelFactory<T>) : ApiResponse<Array<T>> {
        const apiGetService = new ApiGetService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiGetService.getList(endpoint,modelFactory);
        
    }
}