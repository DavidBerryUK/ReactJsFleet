import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import { IApiModel }                            from './../../models/interfaces/IApiModel';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import BaseApiConfig                            from './ApiBaseConfig';
import ApiPostService from './lowLevel/ApiPostService';

export default class BaseItemRepository<T  extends IApiModel> {

    public post(apiEndpoint: String, model : T, modelFactory: IModelFactory<T>) : ApiResponse<T> {

        const apiPostService = new ApiPostService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiPostService.post(endpoint, modelFactory , model);  
    }
}