import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import { IApiModel }                            from './../../models/interfaces/IApiModel';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import BaseApiConfig                            from './ApiBaseConfig';
import RepositoryBasePostService                from './RepositoryBasePostService';

export default class BaseItemRepository<T  extends IApiModel> {

    public post(apiEndpoint: String, model : T, modelFactory: IModelFactory<T>) : ApiResponse<T> {

        const repositoryBasePostService = new RepositoryBasePostService<T>();
        const endpoint = `${BaseApiConfig.baseEndpoint}${apiEndpoint}`;
        return repositoryBasePostService.post(endpoint, modelFactory , model);  
    }
}