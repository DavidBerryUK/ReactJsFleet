import { ApiResponse }                          from './../apiContracts/ApiResponseContract';
import { ApiResponseContract }                  from './../apiContracts/ApiResponseContract';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import ApiBaseError                             from './ApiBaseError';
import axios                                    from 'axios';
import BaseApiConfig                            from './ApiBaseConfig';
import ValidationMessage                        from '../../models/validation/ValidationMessage';

export default class RepositoryBasePostService<T> {


    public post(
        baseUrl: string,
        modelFactory: IModelFactory<T>, 
        entityModel: T) : ApiResponse<T> {

        let contract = new ApiResponseContract<T>();

        axios
        .post(baseUrl, entityModel, BaseApiConfig.baseConfig)
        .then((response) => {
            if (response.data == null) {
                contract.publishFailure('No data returned');
            } else {

                if (response.data.hasValidationMessages) {
                    if (response.data.validationMessages) {
                        contract.publishValidationErrorsRaised(response.data.validationMessages);
                    } else {
                        contract.publishValidationErrorsRaised(new Array<ValidationMessage>());
                    }
                    return;
                }

                if (response.data.entity) {
                    const model = modelFactory.createFrom(response.data.entity);
                    contract.publishSuccess(model);
                } else {
                    contract.publishFailure('No data entity returned');
                }

            }
        })
        .catch((error) => {
            ApiBaseError.handleErrorResponse(error);
            contract.publishFailure(error);
        });

        return contract.responder;
    }
}
