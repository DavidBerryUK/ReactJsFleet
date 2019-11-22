import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import { IApiModel }                            from './../../models/interfaces/IApiModel';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import RepositoryBasePostService                from './RepositoryBasePostService';

export default class BaseItemRepository<T  extends IApiModel> {

    public post(model : T, modelFactory: IModelFactory<T>) : ApiResponse<T> {

        const repositoryBasePostService = new RepositoryBasePostService<T>();
        return repositoryBasePostService.post("", modelFactory , model);  
    }
}