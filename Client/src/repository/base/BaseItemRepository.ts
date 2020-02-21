import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import { IApiModel }                            from './../../models/interfaces/IApiModel';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import ApiBaseItemResponseModel                 from '../../models/apiBase/ApiBaseItemResponseModel';
import ApiGetItemService                        from './lowLevel/ApiGetItemService';
import ApiPostItemService                       from './lowLevel/ApiPostItemService';
import BaseApiConfig                            from './ApiBaseConfig';

export default class BaseItemRepository<T  extends IApiModel> {

    public post(apiEndpoint: String, model : T, modelFactory: IModelFactory<T>) : ApiResponse<T> {
        const apiPostService = new ApiPostItemService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiPostService.post(endpoint, modelFactory , model);  
    }

    public get(apiEndpoint: String, modelFactory: IModelFactory<T>) :  ApiResponse<ApiBaseItemResponseModel<T>> {
        const apiGetItemService =   new ApiGetItemService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiGetItemService.getItem(endpoint, modelFactory);

    }
}