import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import { IApiModel }                            from './../../models/interfaces/IApiModel';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import ApiBaseItemResponseModel                 from '../../models/apiBase/ApiBaseItemResponseModel';
import ApiGetItemService                        from './lowLevel/ApiGetItemService';
import ApiPostItemService                       from './lowLevel/ApiPostItemService';
import ApiPutItemService                        from './lowLevel/ApiPutItemService';
import BaseApiConfig                            from './ApiBaseConfig';

export default class BaseItemRepository<T  extends IApiModel> {

    public baseSave(apiEndpoint: String, model : T, modelFactory: IModelFactory<T>) : ApiResponse<ApiBaseItemResponseModel<T>> {
        if ( model.entityKey === null ||  model.entityKey === undefined || model.entityKey === '') {
            return this.basePost(apiEndpoint, model, modelFactory);    
        }
        apiEndpoint = `${apiEndpoint}/${model.entityKey}`;
        return this.basePut(apiEndpoint, model, modelFactory);        
    }

    public basePost(apiEndpoint: String, model : T, modelFactory: IModelFactory<T>) : ApiResponse<ApiBaseItemResponseModel<T>> {
        const apiPostService = new ApiPostItemService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiPostService.post(endpoint, modelFactory , model);  
    }

    public basePut(apiEndpoint: String, model : T, modelFactory: IModelFactory<T>) : ApiResponse<ApiBaseItemResponseModel<T>> {
        const apiPutItemService = new ApiPutItemService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiPutItemService.put(endpoint, modelFactory , model);  
    }

    public baseGet(apiEndpoint: String, modelFactory: IModelFactory<T>) :  ApiResponse<ApiBaseItemResponseModel<T>> {
        const apiGetItemService =   new ApiGetItemService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return apiGetItemService.getItem(endpoint, modelFactory);
    }    
}